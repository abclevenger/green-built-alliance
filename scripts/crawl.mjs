/**
 * Crawls greenbuilt.org URLs from sitemap-derived lists, saves full HTML mirrors,
 * rewrites same-origin navigation links for the Next.js host, and records a manifest.
 *
 * Usage:
 *   node scripts/crawl.mjs [--max=N] [--delay=ms] [--url-list=path] [--skip-existing]
 *
 * Respects robots.txt crawl-delay (10s) by default unless --delay overrides.
 */

import * as cheerio from "cheerio";
import { writeFile, mkdir, readFile, appendFile } from "fs/promises";
import { dirname, join } from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ORIGIN = "https://www.greenbuilt.org";
const MIRROR_DIR = join(ROOT, "public", "mirror");
const MANIFEST_PATH = join(ROOT, "mirror", "manifest.json");
const LOG_PATH = join(ROOT, "mirror", "crawl-log.txt");

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v === undefined ? true : v];
  })
);

const maxPages = args.max ? parseInt(String(args.max), 10) : Infinity;
const delayMs = args.delay ? parseInt(String(args.delay), 10) : 10000;
const skipExisting = Boolean(args["skip-existing"]);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function urlToMirrorPath(urlStr) {
  const u = new URL(urlStr);
  if (u.origin !== new URL(ORIGIN).origin) return null;
  let p = u.pathname;
  if (p.endsWith("/") && p.length > 1) p = p.slice(0, -1);
  if (p === "" || p === "/") return [];
  return p.split("/").filter(Boolean);
}

function rewriteHtml(html) {
  const $ = cheerio.load(html, { decodeEntities: false });

  $("link[rel='canonical']").each((_, el) => {
    const href = $(el).attr("href");
    if (href && href.startsWith(ORIGIN) && process.env.CANONICAL_BASE) {
      const u = new URL(href);
      $(el).attr(
        "href",
        `${process.env.CANONICAL_BASE.replace(/\/$/, "")}${u.pathname}${u.search}`
      );
    }
  });

  /* Forms: keep production action URLs so POST flows continue to WordPress. */

  $("a[href]").each((_, el) => {
    const val = $(el).attr("href");
    if (!val || val.startsWith("mailto:") || val.startsWith("tel:") || val.startsWith("#"))
      return;
    if (val.startsWith("//")) {
      const abs = "https:" + val;
      if (abs.startsWith(ORIGIN)) {
        const u = new URL(abs);
        $(el).attr("href", `${u.pathname}${u.search}${u.hash}` || "/");
      }
      return;
    }
    if (val.startsWith(ORIGIN)) {
      try {
        const u = new URL(val);
        const path = `${u.pathname}${u.search}${u.hash}` || "/";
        $(el).attr("href", path);
      } catch {
        /* keep */
      }
    }
  });

  /* Do not rewrite script/link/img/srcset to relative paths unless assets are mirrored under public/ */

  return $.html();
}

function mirrorRelativePath(urlStr) {
  const segments = urlToMirrorPath(urlStr);
  return segments.length === 0 ? "index.html" : `${segments.join("/")}/index.html`;
}

function mirrorFilePath(urlStr) {
  const segments = urlToMirrorPath(urlStr);
  const dir =
    segments.length === 0 ? MIRROR_DIR : join(MIRROR_DIR, ...segments);
  return join(dir, "index.html");
}

async function saveMirror(urlStr, html) {
  const segments = urlToMirrorPath(urlStr);
  const dir =
    segments.length === 0 ? MIRROR_DIR : join(MIRROR_DIR, ...segments);
  await mkdir(dir, { recursive: true });
  const out = join(dir, "index.html");
  await writeFile(out, html, "utf8");
  return mirrorRelativePath(urlStr);
}

async function main() {
  const listPath = args["url-list"]
    ? join(ROOT, String(args["url-list"]))
    : join(ROOT, "page-urls.txt");
  let lists = [listPath];
  if (!args["url-list"]) {
    lists = [
      join(ROOT, "page-urls.txt"),
      join(ROOT, "post-urls.txt"),
      join(ROOT, "event-urls.txt"),
    ];
  }

  const urls = new Set();
  for (const lp of lists) {
    if (!existsSync(lp)) {
      console.warn("Skip missing list:", lp);
      continue;
    }
    const text = await readFile(lp, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const t = line.trim();
      if (t && t.startsWith("http")) urls.add(t);
    }
  }

  const ordered = [...urls];
  await mkdir(join(ROOT, "mirror"), { recursive: true });
  await writeFile(LOG_PATH, `Started ${new Date().toISOString()}\n`, "utf8");

  let manifest = [];
  if (existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
    } catch {
      manifest = [];
    }
  }
  const seen = new Set(manifest.map((m) => m.sourceUrl));

  let fetchCount = 0;

  for (const url of ordered) {
    if (skipExisting && existsSync(mirrorFilePath(url))) {
      const rel = mirrorRelativePath(url);
      if (!seen.has(url)) {
        manifest.push({
          sourceUrl: url,
          mirrorFile: rel,
          fetchedAt: new Date().toISOString(),
          skipped: true,
        });
        seen.add(url);
      }
      continue;
    }
    if (fetchCount >= maxPages) break;
    try {
      const res = await fetch(url, {
        headers: {
          "user-agent": "GreenBuiltMigrationBot/1.0 (+https://www.greenbuilt.org)",
        },
      });
      if (!res.ok) {
        await appendFile(LOG_PATH, `FAIL ${res.status} ${url}\n`, "utf8");
        continue;
      }
      const raw = await res.text();
      const rewritten = rewriteHtml(raw);
      const rel = await saveMirror(url, rewritten);
      const entry = {
        sourceUrl: url,
        mirrorFile: rel,
        fetchedAt: new Date().toISOString(),
        status: res.status,
      };
      const idx = manifest.findIndex((m) => m.sourceUrl === url);
      if (idx >= 0) manifest[idx] = entry;
      else manifest.push(entry);
      seen.add(url);
      fetchCount++;
      console.log(`OK ${fetchCount} ${url} -> ${rel}`);
      await appendFile(LOG_PATH, `OK ${url}\n`, "utf8");
    } catch (e) {
      await appendFile(LOG_PATH, `ERR ${url} ${e}\n`, "utf8");
      console.error("ERR", url, e);
    }
    if (delayMs > 0) await sleep(delayMs);
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`Done. ${manifest.length} pages. Manifest: ${MANIFEST_PATH}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
