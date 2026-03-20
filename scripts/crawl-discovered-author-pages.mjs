/**
 * Discovers /author/.../page/N/ links in mirrored HTML, writes discovered-author-pages.txt,
 * then runs crawl.mjs for any URLs not yet mirrored.
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
const OUT = join(ROOT, "discovered-author-pages.txt");

async function walkHtmlFiles(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walkHtmlFiles(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

function mirrorPathForUrl(urlStr) {
  const u = new URL(urlStr);
  let path = u.pathname;
  if (!path.endsWith("/")) path += "/";
  const segs = path.replace(/\/$/, "").split("/").filter(Boolean);
  return join(MIRROR, ...segs, "index.html");
}

async function main() {
  const files = await walkHtmlFiles(MIRROR);
  const urls = new Set();
  for (const f of files) {
    const html = await readFile(f, "utf8");
    const $ = cheerio.load(html);
    $("a[href]").each((_, el) => {
      let h = $(el).attr("href");
      if (!h || !h.startsWith("/author/")) return;
      h = h.split("?")[0].split("#")[0];
      if (!/\/page\/\d+\/?$/.test(h)) return;
      if (!h.endsWith("/")) h += "/";
      urls.add(ORIGIN + h);
    });
  }
  const missing = [...urls].filter((u) => !existsSync(mirrorPathForUrl(u))).sort();
  await writeFile(OUT, missing.join("\n") + (missing.length ? "\n" : ""), "utf8");
  console.log("Total author pagination links found:", urls.size);
  console.log("Missing on disk:", missing.length, "→", OUT);
  if (!missing.length) return;

  execSync(
    `node "${join(ROOT, "scripts", "crawl.mjs")}" --url-list=discovered-author-pages.txt --skip-existing --delay=250`,
    { cwd: ROOT, stdio: "inherit", env: process.env }
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
