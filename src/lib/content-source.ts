/**
 * Local-first content resolution.
 * TODO:WP_FALLBACK — Delete WordPress branch when every public route has a native source.
 *
 * **Inventory:** `src/content/wordpress-fallback-registry.ts` + `docs/WORDPRESS_FALLBACK_AUDIT.md`.
 * **Plugin URL space (planning):** `src/content/site/plugin-hosted-paths.ts` — not applied in routing.
 *
 * Next high-intent native page targets:
 * - `/magazine/` — native product hub (`app/magazine/page.tsx`); PDFs may still load from legacy media URLs
 * - `/news/` + `/green-building-news/` — native editorial hubs (`NativePost` registry)
 * - `/directory/member-profile/?member-id=` — native when id is in `content/directory/members/registry.ts`; else WP
 * - Native event singles: `app/event/[...slug]` + Tribe REST; RSVP/tickets still on legacy URLs
 */
import { homeContent } from "@/content/site/home";
import { getNativeDirectoryCategoryBySegments } from "@/content/directory/categories";
import { getNativeDirectoryMemberByLegacyId } from "@/content/directory/members/registry";
import { getNativeMarketingPage } from "@/content/pages/marketing";
import { getNativePostByPath, getNativePostBySlug } from "@/content/posts";
import type {
  HomeContent,
  NativeDirectoryCategory,
  NativeDirectoryMemberProfile,
  NativeMarketingPage,
  NativePost,
} from "@/lib/content-types";
import {
  resolveWordPressRoute,
  segmentsToPath,
  type ResolvedDocument,
} from "@/lib/wordpress";

export type NativeHomeResult = { kind: "native-home"; data: HomeContent };

export type NativeMarketingResult = {
  kind: "native-marketing";
  page: NativeMarketingPage;
};

export type WordPressHtmlResult = {
  kind: "wordpress-html";
  doc: ResolvedDocument;
};

export type NativePostResult = {
  kind: "native-post";
  post: NativePost;
};

export type NativeDirectoryCategoryResult = {
  kind: "native-directory-category";
  category: NativeDirectoryCategory;
};

export type NativeDirectoryMemberResult = {
  kind: "native-directory-member";
  profile: NativeDirectoryMemberProfile;
};

export type RouteContent =
  | NativeMarketingResult
  | NativePostResult
  | NativeDirectoryCategoryResult
  | NativeDirectoryMemberResult
  | WordPressHtmlResult;

/** Homepage — always native (WordPress not consulted). */
export function getNativeHome(): HomeContent {
  return homeContent;
}

/** @alias getNativeHome — preferred name for the content abstraction layer. */
export function getHomePage(): HomeContent {
  return getNativeHome();
}

/**
 * Native marketing page by URL path (e.g. `/about-green-built-alliance/`).
 * TODO: extend to MDX/CMS when you outgrow the registry.
 */
export function getPageBySlug(pathOrSlug: string) {
  return getNativeMarketingPage(pathOrSlug) ?? null;
}

/**
 * Native post by canonical path (e.g. `/what-is-a-net-zero-energy-home/`) or by leaf slug only.
 * Returns null when the URL is still served from WordPress fallback.
 */
export function getPostBySlug(pathOrSlug: string): NativePost | null {
  const trimmed = pathOrSlug.trim();
  if (!trimmed) return null;
  const byPath = getNativePostByPath(trimmed);
  if (byPath) return byPath;
  const leaf =
    trimmed.split("/").filter(Boolean).pop() ?? trimmed.replace(/^\/+|\/+$/g, "");
  if (!leaf) return null;
  return getNativePostBySlug(leaf) ?? null;
}

/** TODO: native events by slug — returns null until implemented. */
export function getEventBySlug(_slug: string): null {
  return null;
}

function isDirectoryMemberProfileSegments(segments: string[]): boolean {
  return (
    segments.length === 2 &&
    segments[0]?.toLowerCase() === "directory" &&
    segments[1]?.toLowerCase() === "member-profile"
  );
}

/**
 * Resolve a catch-all route: native marketing page, native post registry, then WordPress REST.
 * For `/directory/member-profile/?member-id=…`, pass `legacyMemberId` from the request query string.
 */
export async function resolveCatchAllRoute(
  segments: string[],
  options?: { legacyMemberId?: string | null }
): Promise<RouteContent | null> {
  const path = segmentsToPath(segments);
  const native = getNativeMarketingPage(path);
  if (native) {
    return { kind: "native-marketing", page: native };
  }

  const nativePost = getNativePostByPath(path);
  if (nativePost) {
    return { kind: "native-post", post: nativePost };
  }

  const directoryCategory = getNativeDirectoryCategoryBySegments(segments);
  if (directoryCategory) {
    return { kind: "native-directory-category", category: directoryCategory };
  }

  if (isDirectoryMemberProfileSegments(segments) && options?.legacyMemberId) {
    const profile = getNativeDirectoryMemberByLegacyId(options.legacyMemberId);
    if (profile) {
      return { kind: "native-directory-member", profile };
    }
  }

  // TODO:WP_FALLBACK — remove when posts/events/pages are native
  const doc = await resolveWordPressRoute(segments);
  if (doc) {
    return { kind: "wordpress-html", doc };
  }
  return null;
}
