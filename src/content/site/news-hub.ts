import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { LeadCaptureBlock, SeoFields } from "@/lib/content-types";
import {
  buildNativePostHubModel,
  type NativePostHubModel,
} from "@/content/site/native-post-hub-model";

/**
 * Native `/news/` hub — static copy + SEO (no WordPress HTML).
 *
 * Relationship to **`/green-building-news/`:** Same `NativePost` registry and shared
 * `buildNativePostHubModel` machinery; `/news/` is a concise nav entry, GBN matches the
 * legacy blog archive URL and menu label.
 *
 * Relationship to **`/magazine/`:** Native annual directory product hub (`magazine-hub.ts`), not the article registry.
 */
export const newsIndexSeo: SeoFields = {
  title: "News & Articles | Green Built Alliance",
  description:
    "Green building news, program explainers, and member perspectives from Green Built Alliance—net zero, air sealing, stormwater, certification, and more in Western North Carolina.",
  ogImage: mediaUrl("ogGbhNetZeroLogo"),
};

export const newsIndexLeadCapture: LeadCaptureBlock = {
  headline: "Green building news in your inbox",
  subheadline:
    "Occasional updates on programs, classes, and articles—unsubscribe anytime.",
  fieldLabel: "Email",
  fieldPlaceholder: "you@example.com",
  fieldName: "email",
  submitLabel: "Subscribe",
  trustText: "We never sell your address.",
  sourceSlug: "native-news-index",
  page: "/news/",
  formName: "news-hub-alerts",
  intent: "news-hub-digest",
};

/** Curated hero row; paths must match `NativePost.path` (trailing slash). */
export const NEWS_HUB_FEATURED_PATHS: readonly string[] = [
  "/what-is-a-net-zero-energy-home/",
  "/introducing-greenbuilt-nc-net-zero-and-net-zero-ready-homes/",
  "/green-built-nc-beyond-energy-star/",
  "/know-your-stormwater/",
] as const;

/** @deprecated Prefer `NativePostHubModel` from `native-post-hub-model.ts`. */
export type NewsHubModel = NativePostHubModel;

/** Structured data for the hub — derived from the native post registry only. */
export function buildNewsHubModel(): NativePostHubModel {
  return buildNativePostHubModel(NEWS_HUB_FEATURED_PATHS);
}
