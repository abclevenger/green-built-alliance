import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { LeadCaptureBlock, SeoFields } from "@/lib/content-types";
import { buildNativePostHubModel, type NativePostHubModel } from "@/content/site/native-post-hub-model";

/**
 * Native `/green-building-news/` — legacy WordPress blog archive path; now a native hub over the
 * same `NativePost` registry as `/news/`.
 *
 * **Why this route vs `/magazine/`:** Magazine (`/magazine/`) is the annual Green Home & Living Guide /
 * directory product hub. Green Building News is the ongoing
 * editorial / blog index—same content type as migrated articles, so it leverages the registry
 * without faking a product funnel.
 *
 * **Relationship:** `/news/` is a shorter alternate entry (nav); `/green-building-news/` matches
 * historic URLs and mega-menu “Green Building News.” Both list the same underlying posts today;
 * copy and featured curation differ.
 */
export const greenBuildingNewsIndexSeo: SeoFields = {
  title: "Green Building News | Green Built Alliance",
  description:
    "Articles, explainers, and perspectives on green building in Western North Carolina—energy, water, materials, certification, and healthy homes from Green Built Alliance.",
  ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
};

export const greenBuildingNewsLeadCapture: LeadCaptureBlock = {
  headline: "Green Building News by email",
  subheadline:
    "Occasional article digests, program updates, and event highlights—unsubscribe anytime.",
  fieldLabel: "Email",
  fieldPlaceholder: "you@example.com",
  fieldName: "email",
  submitLabel: "Subscribe",
  trustText: "We never sell your address.",
  sourceSlug: "native-green-building-news-index",
  page: "/green-building-news/",
  formName: "green-building-news-hub-alerts",
};

/** Featured row — editorial mix; paths must exist on `NativePost`. */
export const GREEN_BUILDING_NEWS_FEATURED_PATHS: readonly string[] = [
  "/design-matters/",
  "/natural-building/",
  "/what-is-a-net-zero-energy-home/",
  "/moisture-drainage-management/",
] as const;

export function buildGreenBuildingNewsHubModel(): NativePostHubModel {
  return buildNativePostHubModel(GREEN_BUILDING_NEWS_FEATURED_PATHS);
}
