/**
 * Discovers internal HTML links (root-relative) missing from public/mirror and crawls them.
 * Repeats up to --rounds=N times (default 8) until no new URLs or --max-per-round reached.
 */
import * as cheerio from "cheerio";
import { readFile, readdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MIRROR = join(ROOT, "public", "mirror");
const ORIGIN = "https://www.greenbuilt.org";
const OUT = join(ROOT, "discovered-internal-links.txt");

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v === undefined ? true : v];
  })
);
const maxRounds = args.rounds ? parseInt(String(args.rounds), 10) : 8;
const maxPerRound = args["max-per-round"] ? parseInt(String(args["max-per-round"]), 10) : 400;

function isHtmlPageHref(href) {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return false;
  const pathOnly = href.split("?")[0].split("#")[0];
  if (
    pathOnly.startsWith("/wp-content/") ||
    pathOnly.startsWith("/wp-includes/") ||
    pathOnly.startsWith("/wp-json/")
  )
    return false;
  if (/\.(pdf|zip|docx?|xlsx?|pptx?|mp3|mp4|webm|mov|jpe?g|png|gif|webp|svg|ico|woff2?|ttf|eot)(\?|$)/i.test(pathOnly))
    return false;
  if (/\/Users\//i.test(pathOnly) || /Content\.Outlook|Temporary%20Internet%20Files/i.test(pathOnly))
    return false;
  return true;
}

function mirrorFileForPathname(pathname) {
  let p = pathname;
  if (!p.endsWith("/")) p += "/";
  const segs = p.replace(/\/$/, "").split("/").filter(Boolean);
  if (segs.length === 0) return join(MIRROR, "index.html");
  return join(MIRROR, ...segs, "index.html");
}

async function walkHtmlFiles(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walkHtmlFiles(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

async function discoverMissing() {
  const files = await walkHtmlFiles(MIRROR);
  const missing = new Set();
  for (const f of files) {
    const html = await readFile(f, "utf8");
    const $ = cheerio.load(html);
    $("a[href]").each((_, el) => {
      let h = $(el).attr("href");
      if (!h || !isHtmlPageHref(h)) return;
      h = h.split("?")[0].split("#")[0];
      if (!h.startsWith("/")) return;
      if (!h.endsWith("/")) h += "/";
      const filePath = mirrorFileForPathname(h);
      if (!existsSync(filePath)) {
        missing.add(ORIGIN.replace(/\/$/, "") + h);
      }
    });
  }
  return [...missing].sort();
}

async function main() {
  let totalCrawled = 0;
  for (let round = 1; round <= maxRounds; round++) {
    const missing = await discoverMissing();
    const batch = missing.slice(0, maxPerRound);
    console.log(`Round ${round}: discovered ${missing.length} missing, crawling ${batch.length}`);
    if (!batch.length) break;
    await writeFile(OUT, batch.join("\n") + "\n", "utf8");
    execSync(`node "${join(ROOT, "scripts", "crawl.mjs")}" --url-list=discovered-internal-links.txt --skip-existing --delay=200`, {
      cwd: ROOT,
      stdio: "inherit",
      env: process.env,
    });
    totalCrawled += batch.length;
  }
  const finalMissing = await discoverMissing();
  console.log("Done. Still missing after rounds:", finalMissing.length);
  if (finalMissing.length) console.log(finalMissing.slice(0, 40).join("\n"));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
