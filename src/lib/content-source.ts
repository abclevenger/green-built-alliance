/**
 * Local-first content resolution.
 * TODO:WP_FALLBACK — Delete the WordPress REST branch when every **content-tail** path has a native source.
 *
 * **Two WordPress roles (do not conflate):**
 * - **Plugin / backend** — checkout, account, login, Give, tickets, `/membership/…` registration children.
 *   Inventoried in `plugin-hosted-paths.ts`. Not “migrate HTML”; see `docs/WORDPRESS_ENDGAME.md`.
 * - **Content-tail fallback** — unmigrated WP pages/posts fetched below via `resolveWordPressRoute` → `WordPressArticle`.
 *
 * **Inventory:** `wordpress-fallback-registry.ts` + `WORDPRESS_FALLBACK_AUDIT.md` + `WORDPRESS_ENDGAME.md`.
 *
 * Next high-intent native targets:
 * - `/magazine/` — native hub; PDFs may still use legacy media URLs
 * - `/news/` + `/green-building-news/` — `NativePost` registry
 * - `/directory/member-profile/?member-id=` — native when id is in `members/registry.ts`; else WP
 * - `/event/…` — native read UI + Tribe REST; purchase/RSVP links stay on legacy plugin URLs
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

  // Content-tail only: unmigrated WP pages/posts. Plugin routes (checkout, login, etc.) are separate —
  // see `plugin-hosted-paths.ts`; they may still pass through here if REST returns HTML — prefer edge → PHP.
  const doc = await resolveWordPressRoute(segments);
  if (doc) {
    return { kind: "wordpress-html", doc };
  }
  return null;
}
