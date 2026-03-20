/**
 * Second-pass audit: sitemap URL parity vs mirror/manifest.json,
 * broken root-relative internal links in mirrored HTML, and live vs mirror spot-checks.
 *
 * Usage: node scripts/audit-second-pass.mjs [--spot-check=N] [--scan-links=maxFiles]
 */

import { readFile, writeFile, readdir } from "fs/promises";
import { join, dirname } from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ORIGIN = "https://www.greenbuilt.org";
const MANIFEST_PATH = join(ROOT, "mirror", "manifest.json");
const MIRROR_DIR = join(ROOT, "public", "mirror");
const REPORT_PATH = join(ROOT, "SECOND_PASS_AUDIT_REPORT.md");
const SITEMAP_INDEX = `${ORIGIN}/sitemap_index.xml`;

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v === undefined ? true : v];
  })
);
const spotCheckN = args["spot-check"] ? parseInt(String(args["spot-check"]), 10) : 12;
const scanLinksMax = args["scan-links"] ? parseInt(String(args["scan-links"]), 10) : 150;

function normalizeUrl(u) {
  try {
    const x = new URL(u);
    if (x.origin !== new URL(ORIGIN).origin) return null;
    let p = x.pathname;
    if (!p.endsWith("/")) p += "/";
    return `${ORIGIN}${p}`;
  } catch {
    return null;
  }
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "GreenBuiltAuditBot/2.0 (+audit)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function collectSitemapUrls() {
  const indexXml = await fetchText(SITEMAP_INDEX);
  const locs = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const all = new Set();
  const failures = [];
  for (const loc of locs) {
    if (!loc.endsWith(".xml")) continue;
    try {
      const xml = await fetchText(loc);
      for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
        const u = normalizeUrl(m[1].trim());
        if (u) all.add(u);
      }
    } catch (e) {
      failures.push({ sitemap: loc, error: String(e.message || e) });
    }
  }
  return { urls: all, failures };
}

function pathFromRootHref(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const path = href.split("?")[0].split("#")[0];
  if (path === "/" || path === "") return [];
  const clean = path.endsWith("/") ? path.slice(0, -1) : path;
  return clean.split("/").filter(Boolean);
}

function mirrorExistsForPath(segments) {
  if (segments.length === 0) return existsSync(join(MIRROR_DIR, "index.html"));
  return existsSync(join(MIRROR_DIR, ...segments, "index.html"));
}

async function walkMirrorHtmlFiles(max) {
  const out = [];
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (out.length >= max) return;
      const p = join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name === "index.html") {
        out.push(p);
        if (out.length >= max) return;
      }
    }
  }
  await walk(MIRROR_DIR);
  return out;
}

function isHtmlPageHref(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return false;
  const pathOnly = href.split("?")[0].split("#")[0];
  if (
    pathOnly.startsWith("/wp-content/") ||
    pathOnly.startsWith("/wp-includes/") ||
    pathOnly.startsWith("/wp-json/")
  )
    return false;
  if (/\.(pdf|zip|docx?|xlsx?|pptx?|mp3|mp4|webm|mov|jpe?g|png|gif|webp|svg|ico|woff2?|ttf|eot)(\?|$)/i.test(pathOnly))
    return false;
  return true;
}

async function scanBrokenLinks(sampleFiles) {
  const broken = [];
  const seen = new Set();
  for (const file of sampleFiles) {
    const html = await readFile(file, "utf8");
    const $ = cheerio.load(html);
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href");
      if (!href || !isHtmlPageHref(href)) return;
      const segs = pathFromRootHref(href.split("?")[0].split("#")[0]);
      if (segs === null) return;
      const key = href.split("?")[0];
      if (seen.has(key)) return;
      seen.add(key);
      if (!mirrorExistsForPath(segs)) {
        broken.push({
          href,
          file: file.slice(MIRROR_DIR.length + 1).replace(/\\/g, "/"),
        });
      }
    });
  }
  return broken;
}

function extractMeta(html, name) {
  const m = html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, "i"));
  if (m) return m[1];
  const m2 = html.match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`, "i"));
  return m2 ? m2[1] : null;
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m ? m[1].trim() : null;
}

function stripTags(s) {
  return s.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

async function spotCheck(manifestEntries, n) {
  const results = [];
  const step = Math.max(1, Math.floor(manifestEntries.length / n));
  for (let i = 0; i < manifestEntries.length && results.length < n; i += step) {
    const entry = manifestEntries[i];
    const fixed = join(MIRROR_DIR, ...entry.mirrorFile.split("/"));
    let localHtml;
    try {
      localHtml = await readFile(fixed, "utf8");
    } catch {
      results.push({ url: entry.sourceUrl, error: "read mirror failed" });
      continue;
    }
    let liveHtml;
    try {
      liveHtml = await fetchText(entry.sourceUrl);
    } catch (e) {
      results.push({
        url: entry.sourceUrl,
        error: `live fetch: ${e.message}`,
        mirrorTitle: extractTitle(localHtml),
      });
      continue;
    }
    const tLive = extractTitle(liveHtml);
    const tMir = extractTitle(localHtml);
    const dLive = stripTags(liveHtml).length;
    const dMir = stripTags(localHtml).length;
    const ratio = dLive ? dMir / dLive : 1;
    results.push({
      url: entry.sourceUrl,
      titleMatch: tLive === tMir,
      titleLive: tLive,
      titleMir: tMir,
      bodyLenRatio: ratio.toFixed(3),
      flag: !tLive || tLive !== tMir || ratio < 0.95 || ratio > 1.05,
    });
  }
  return results;
}

async function main() {
  const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  const manifestUrls = new Set(manifest.map((m) => normalizeUrl(m.sourceUrl)).filter(Boolean));

  let report = `# Second-pass audit report\n\n`;
  report += `Generated: ${new Date().toISOString()}\n\n`;

  report += `## 1. Sitemap vs manifest\n\n`;
  const { urls: sitemapUrls, failures: sitemapFailures } = await collectSitemapUrls();
  const missing = [...sitemapUrls].filter((u) => !manifestUrls.has(u));
  const extra = [...manifestUrls].filter((u) => !sitemapUrls.has(u));

  report += `| Metric | Count |\n|--------|-------|\n`;
  report += `| URLs in Yoast sitemap index (all child sitemaps) | ${sitemapUrls.size} |\n`;
  report += `| URLs in mirror manifest | ${manifestUrls.size} |\n`;
  report += `| **In sitemap, not in manifest** | **${missing.length}** |\n`;
  report += `| In manifest, not in sitemap | ${extra.length} |\n\n`;

  if (sitemapFailures.length) {
    report += `### Sitemap fetch failures (server errors)\n\n`;
    for (const f of sitemapFailures) {
      report += `- \`${f.sitemap}\`: ${f.error}\n`;
    }
    report += `\n`;
  }

  if (missing.length) {
    report += `### Missing URLs (first 80)\n\n`;
    missing.slice(0, 80).forEach((u) => {
      report += `- ${u}\n`;
    });
    if (missing.length > 80) report += `\n… and ${missing.length - 80} more\n`;
    report += `\n`;
  }

  if (extra.length && extra.length <= 50) {
    report += `### Manifest-only URLs (sample)\n\n`;
    extra.slice(0, 30).forEach((u) => report += `- ${u}\n`);
    report += `\n`;
  }

  report += `## 2. Broken internal links (root-relative a[href^="/"] → missing mirror file)\n\n`;
  report += `Scanned first **${scanLinksMax}** mirrored HTML files (alphabetically by walk order).\n\n`;
  const files = await walkMirrorHtmlFiles(scanLinksMax);
  const broken = await scanBrokenLinks(files);
  report += `| Broken href | Found in mirror file |\n|-------------|----------------------|\n`;
  for (const b of broken.slice(0, 200)) {
    report += `| \`${b.href}\` | ${b.file} |\n`;
  }
  if (broken.length > 200) report += `\n… and ${broken.length - 200} more\n`;
  report += `\n**Total broken:** ${broken.length}\n\n`;

  report += `## 3. Live vs mirror spot-check (${spotCheckN} samples)\n\n`;
  const spots = await spotCheck(manifest, spotCheckN);
  report += `| URL | Title match | Body len ratio | Flag |\n|-----|-------------|----------------|------|\n`;
  for (const s of spots) {
    if (s.error) {
      report += `| ${s.url} | — | — | **${s.error}** |\n`;
    } else {
      report += `| ${s.url} | ${s.titleMatch} | ${s.bodyLenRatio} | ${s.flag ? "**REVIEW**" : "ok"} |\n`;
    }
  }
  report += `\n`;

  report += `## 4. Summary\n\n`;
  report += `- **Sitemap URLs:** ${sitemapUrls.size}\n`;
  report += `- **Manifest URLs:** ${manifestUrls.size}\n`;
  report += `- **Missing from mirror:** ${missing.length}\n`;
  report += `- **Broken internal links (sample scan):** ${broken.length}\n`;
  report += `- **Spot-check flags:** ${spots.filter((s) => s.flag || s.error).length}\n`;

  await writeFile(REPORT_PATH, report, "utf8");
  console.log("Wrote", REPORT_PATH);
  console.log({ missing: missing.length, extra: extra.length, brokenLinks: broken.length, sitemapFailures: sitemapFailures.length });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
