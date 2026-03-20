/**
 * One-off: count root-relative a[href] targets with no mirror file.
 */
import * as cheerio from "cheerio";
import { readFile, readdir } from "fs/promises";
import { join, dirname } from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MIRROR = join(ROOT, "public", "mirror");

function mirrorFileForPathname(pathname) {
  let p = pathname;
  if (!p.endsWith("/")) p += "/";
  const segs = p.replace(/\/$/, "").split("/").filter(Boolean);
  if (segs.length === 0) return join(MIRROR, "index.html");
  return join(MIRROR, ...segs, "index.html");
}

async function walk(dir, acc = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

async function main() {
  const files = await walk(MIRROR);
  const missing = new Set();
  for (const f of files) {
    const html = await readFile(f, "utf8");
    const $ = cheerio.load(html);
    $("a[href]").each((_, el) => {
      let h = $(el).attr("href");
      if (!h || !h.startsWith("/") || h.startsWith("//")) return;
      if (h.startsWith("/wp-content/") || h.startsWith("/wp-includes/")) return;
      h = h.split("?")[0].split("#")[0];
      if (!h.endsWith("/")) h += "/";
      if (!existsSync(mirrorFileForPathname(h))) missing.add(h);
    });
  }
  const sorted = [...missing].sort();
  console.log("Missing internal targets:", sorted.length);
  console.log(sorted.slice(0, 50).join("\n"));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
