import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";
import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.greenbuilt.org";

type ManifestEntry = { sourceUrl: string; mirrorFile: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const manifestPath = join(process.cwd(), "mirror", "manifest.json");
  if (!existsSync(manifestPath)) {
    return [{ url: SITE + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
  }
  const raw = await readFile(manifestPath, "utf8");
  const entries = JSON.parse(raw) as ManifestEntry[];
  return entries.map((e) => {
    const u = new URL(e.sourceUrl);
    const path = u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`;
    return {
      url: SITE.replace(/\/$/, "") + path,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    };
  });
}
