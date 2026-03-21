import { getAllNativePosts } from "@/content/posts/registry";
import type { NativePost } from "@/lib/content-types";

/**
 * Shared listing model for native editorial hubs (`/news/`, `/green-building-news/`, etc.).
 * TODO:WP_ARCHIVE — When more posts are migrated, consider pagination or year filters.
 */
export type NativePostHubCategoryGroup = { category: string; posts: NativePost[] };

export type NativePostHubModel = {
  featured: NativePost[];
  allSorted: NativePost[];
  byCategory: NativePostHubCategoryGroup[];
  topicAnchors: { id: string; label: string }[];
};

function normalizePathKey(path: string): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

function slugifyTopic(label: string): string {
  return (
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "topic"
  );
}

/** Registry-only data for hub UIs — `featuredPaths` order is preserved. */
export function buildNativePostHubModel(featuredPaths: readonly string[]): NativePostHubModel {
  const allSorted = [...getAllNativePosts()].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const byPath = new Map(allSorted.map((p) => [normalizePathKey(p.path), p]));

  const featured: NativePost[] = [];
  for (const path of featuredPaths) {
    const p = byPath.get(normalizePathKey(path));
    if (p) featured.push(p);
  }

  const catMap = new Map<string, NativePost[]>();
  for (const p of allSorted) {
    const key = p.categories?.[0] ?? "Articles";
    const arr = catMap.get(key) ?? [];
    arr.push(p);
    catMap.set(key, arr);
  }

  const byCategory: NativePostHubCategoryGroup[] = [...catMap.entries()]
    .sort(([a], [b]) => {
      if (a === "Articles") return 1;
      if (b === "Articles") return -1;
      return a.localeCompare(b);
    })
    .map(([category, posts]) => ({ category, posts }));

  const topicAnchors = byCategory.map(({ category }) => ({
    id: `topic-${slugifyTopic(category)}`,
    label: category,
  }));

  return { featured, allSorted, byCategory, topicAnchors };
}
