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
];

let md = `# Route map — greenbuilt.org → Next.js\n\n`;
md += `This project serves **full HTML mirrors** from \`public/mirror/<path>/index.html\` via \`app/[[...slug]]/route.ts\`.\n\n`;
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
