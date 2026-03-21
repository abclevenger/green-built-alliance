import { listNativeDirectoryCategoryPaths } from "@/content/directory/categories";
import { listNativeDirectoryMemberProfilePaths } from "@/content/directory/members/registry";
import { listNativePostPaths } from "@/content/posts";
import { listNativeMarketingPaths } from "@/content/pages/marketing";
import { fetchEventPathsForSitemap } from "@/lib/tribe-events";
import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";
import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.greenbuilt.org";

type ManifestEntry = { sourceUrl: string; mirrorFile: string };

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.replace(/\/$/, "");
  const now = new Date();
  const nativePaths = new Set<string>([
    "/",
    "/events/",
    "/news/",
    "/green-building-news/",
    "/magazine/",
    ...listNativeMarketingPaths(),
    ...listNativePostPaths(),
    ...listNativeDirectoryCategoryPaths(),
    ...listNativeDirectoryMemberProfilePaths(),
  ]);

  const eventPaths = await fetchEventPathsForSitemap(200);
  for (const p of eventPaths) {
    nativePaths.add(p);
  }

  const manifestPath = join(process.cwd(), "mirror", "manifest.json");
  if (!existsSync(manifestPath)) {
    return Array.from(nativePaths).map((path) => ({
      url: base + path,
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.75,
    }));
  }
  const raw = await readFile(manifestPath, "utf8");
  const entries = JSON.parse(raw) as ManifestEntry[];
  for (const e of entries) {
    const u = new URL(e.sourceUrl);
    const path = normalizePath(u.pathname);
    nativePaths.add(path);
  }

  return Array.from(nativePaths).map((path) => ({
    url: base + path,
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));
}
