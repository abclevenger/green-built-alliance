import type { NativePost } from "@/lib/content-types";
import { postAreEnergyBillsTooHigh } from "./are-the-energy-bills-in-my-new-house-too-high";
import { postGreenBuiltHomesEvolvingRegenerative } from "./green-built-homes-evolving-regenerative-design";
import { postGreenBuiltNcBeyondEnergyStar } from "./green-built-nc-beyond-energy-star";
import { postComfortAndAshevilleGreenBuilding } from "./comfort-and-asheville-green-building";
import { postDesignMatters } from "./design-matters";
import { postIndoorAirPlusCertification } from "./indoor-air-plus-certification";
import { postIntroducingGreenbuiltNcNetZero } from "./introducing-greenbuilt-nc-net-zero-homes";
import { postLowerCarbonFootprintHome } from "./lower-carbon-footprint-home";
import { postMoistureDrainageManagement } from "./moisture-drainage-management";
import { postNaturalBuilding } from "./natural-building";
import { postAirSealingTheDevilishDetails } from "./air-sealing-the-devilish-details";
import { postKnowYourStormwater } from "./know-your-stormwater";
import { postSitePlanning } from "./site-planning";
import { postRainscreensProtectingInvestment } from "./rainscreens-protecting-your-investment";
import { postWhatIsNetZeroEnergyHome } from "./what-is-a-net-zero-energy-home";
import { postWhatIsNetZeroReadyHome } from "./what-is-a-net-zero-ready-home";
import { longTailEditorialPosts } from "./long-tail-editorial-batch";
import { longTailEditorialPostsTwo } from "./long-tail-editorial-batch-two";
import { longTailEditorialPostsThree } from "./long-tail-editorial-batch-three";
import { longTailEditorialPostsFour } from "./long-tail-editorial-batch-four";
import { longTailEditorialPostsFive } from "./long-tail-editorial-batch-five";
import { longTailEditorialPostsSix } from "./long-tail-editorial-batch-six";
import { highValueEditorialTailPosts } from "./high-value-editorial-tail-posts";

/** All native posts — add imports here when migrating more URLs off WordPress. */
const nativePosts: NativePost[] = [
  ...longTailEditorialPosts,
  ...longTailEditorialPostsTwo,
  ...longTailEditorialPostsThree,
  ...highValueEditorialTailPosts,
  ...longTailEditorialPostsFour,
  ...longTailEditorialPostsFive,
  ...longTailEditorialPostsSix,
  postWhatIsNetZeroEnergyHome,
  postWhatIsNetZeroReadyHome,
  postGreenBuiltNcBeyondEnergyStar,
  postAreEnergyBillsTooHigh,
  postLowerCarbonFootprintHome,
  postRainscreensProtectingInvestment,
  postIndoorAirPlusCertification,
  postDesignMatters,
  postNaturalBuilding,
  postComfortAndAshevilleGreenBuilding,
  postIntroducingGreenbuiltNcNetZero,
  postGreenBuiltHomesEvolvingRegenerative,
  postMoistureDrainageManagement,
  postKnowYourStormwater,
  postAirSealingTheDevilishDetails,
  postSitePlanning,
];

function normalizePathKey(path: string): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

/** Resolve by full URL path (same normalization as marketing pages). */
export function getNativePostByPath(path: string): NativePost | undefined {
  const key = normalizePathKey(path);
  return nativePosts.find((p) => normalizePathKey(p.path) === key);
}

/** Resolve by WordPress-style post slug (last path segment, no leading slash). */
export function getNativePostBySlug(slug: string): NativePost | undefined {
  const leaf = decodeURIComponent(slug.trim()).replace(/^\/+|\/+$/g, "");
  if (!leaf) return undefined;
  return nativePosts.find((p) => p.slug === leaf);
}

export function listNativePostPaths(): string[] {
  return nativePosts.map((p) => normalizePathKey(p.path));
}

/** All registered native posts (unsorted). Hub pages sort by `publishedAt`. */
export function getAllNativePosts(): NativePost[] {
  return [...nativePosts];
}
