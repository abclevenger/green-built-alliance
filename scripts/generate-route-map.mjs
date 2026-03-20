/**
 * Writes ROUTE_MAP.md from page-urls.txt, post-urls.txt, event-urls.txt
 */
import { readFile, writeFile, mkdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "ROUTE_MAP.md");

const lists = [
  { name: "WordPress pages (Yoast page-sitemap)", file: "page-urls.txt" },
  { name: "Blog posts (Yoast post-sitemap)", file: "post-urls.txt" },
  { name: "Events (The Events Calendar tribe_events-sitemap)", file: "event-urls.txt" },
  { name: "Category archives (Yoast category-sitemap)", file: "category-urls.txt" },
  { name: "Author archives (WP REST /users — author-sitemap.xml 500 on live)", file: "author-urls.txt" },
  { name: "Extra live routes (calendar, typo URL)", file: "extra-routes.txt" },
];

let md = `# Route map — greenbuilt.org → Next.js\n\n`;
md += `Mirrored HTML lives under \`public/mirror/<path>/index.html\`. **Routing:** \`next.config.ts\` \`rewrites()\` maps \`/\` → \`/mirror/index.html\` and \`/:path*/\` → \`/mirror/:path*/index.html\` (static files; no catch-all Route Handler — avoids Vercel’s 250 MB serverless bundle limit).\n\n`;
md += `**Redirects:** \`/earthday5k\` and \`/earthday5k/\` → \`/event/earth-day-5k/\` (legacy slug).\n\n`;
md += `The tables below list **seed** URL lists used for the original crawl; many additional routes exist only in \`mirror/manifest.json\` (pagination, discovered links). **Authoritative route count:** count \`index.html\` under \`public/mirror/\` or manifest rows.\n\n`;
md += `| Source URL (trailing slash) | Next.js behavior |\n`;
md += `|-----------------------------|------------------|\n`;

for (const { name, file } of lists) {
  const p = join(ROOT, file);
  let lines = [];
  try {
    lines = (await readFile(p, "utf8")).split(/\r?\n/).filter((l) => l.trim().startsWith("http"));
  } catch {
    continue;
  }
  md += `\n## ${name} (${lines.length} URLs)\n\n`;
  for (const line of lines) {
    const u = new URL(line.trim());
    const path = u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`;
    md += `| \`${path}\` | \`GET\` → \`public/mirror${path}index.html\` |\n`;
  }
}

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, md, "utf8");
console.log("Wrote", OUT);
