/**
 * Local-first content resolution.
 * TODO:WP_FALLBACK — Delete WordPress branch when every public route has a native source.
 */
import { homeContent } from "@/content/site/home";
import { getNativeMarketingPage } from "@/content/pages/marketing";
import type { HomeContent, NativeMarketingPage } from "@/lib/content-types";
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

export type RouteContent =
  | NativeMarketingResult
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

/** TODO: native blog index + by slug — returns null until implemented; use WP fallback in [...slug]. */
export function getPostBySlug(_slug: string): null {
  return null;
}

/** TODO: native events by slug — returns null until implemented. */
export function getEventBySlug(_slug: string): null {
  return null;
}

/**
 * Resolve a catch-all route: native marketing page registry first, then WordPress REST.
 */
export async function resolveCatchAllRoute(
  segments: string[]
): Promise<RouteContent | null> {
  const path = segmentsToPath(segments);
  const native = getNativeMarketingPage(path);
  if (native) {
    return { kind: "native-marketing", page: native };
  }

  // TODO:WP_FALLBACK — remove when posts/events/pages are native
  const doc = await resolveWordPressRoute(segments);
  if (doc) {
    return { kind: "wordpress-html", doc };
  }
  return null;
}
