/**
 * Builds author-urls.txt from WordPress REST API (author-sitemap.xml returns 500 on live).
 */
import { writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "author-urls.txt");
const BASE = "https://www.greenbuilt.org/wp-json/wp/v2/users";

async function main() {
  const lines = [];
  let page = 1;
  for (;;) {
    const res = await fetch(`${BASE}?per_page=100&page=${page}`, {
      headers: { "user-agent": "GreenBuiltMigrationBot/1.0" },
    });
    if (!res.ok) throw new Error(`${res.status} page ${page}`);
    const users = await res.json();
    if (!users.length) break;
    for (const u of users) {
      const slug = u.slug;
      if (slug) lines.push(`https://www.greenbuilt.org/author/${slug}/`);
    }
    page++;
    if (page > 20) break;
  }
  await writeFile(OUT, lines.sort().join("\n") + "\n", "utf8");
  console.log("Wrote", lines.length, "URLs to", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
