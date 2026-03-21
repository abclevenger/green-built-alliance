import type { NativeMediaRef } from "@/lib/native-media";
import { resolveNativeMediaUrl } from "@/lib/native-media";

export type NativeMediaCatalogEntry = NativeMediaRef & { usedBy: string[] };

/**
 * Central registry for native-route media. Add entries here instead of scattering `wp-content` URLs.
 *
 * To detach from WordPress: copy the file to `public` + `localPublicPath`, then set
 * `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA=true` at build/runtime.
 */
export const nativeMediaCatalog = {
  ogGbhNetZeroLogo: {
    id: "og-gbh-net-zero-logo",
    legacyPath: "/wp-content/uploads/2023/04/GBH-Net-Zero-logo.png",
    localPublicPath: "/media/og/gbh-net-zero-logo.png",
    usedBy: [
      "/news/",
      "/directory/architects/",
      "/green-built-homes/",
      "posts: net-zero-energy, introducing-net-zero",
    ],
  },
  ogGbhNetZeroReadyLogo: {
    id: "og-gbh-net-zero-ready-logo",
    legacyPath: "/wp-content/uploads/2023/04/GBH-Net-Zero-Ready-logo.png",
    localPublicPath: "/media/og/gbh-net-zero-ready-logo.png",
    usedBy: [
      "/green-building-news/",
      "/events/",
      "/directory/builders/",
      "/events/continuing-education-courses/",
      "posts: net-zero-ready",
    ],
  },
  supportDonateHero: {
    id: "support-donate-hero",
    legacyPath: "/wp-content/uploads/2023/06/green-built-alliance-donate.jpg",
    localPublicPath: "/media/marketing/support-donate.jpg",
    usedBy: ["/support-our-work/"],
  },
  ogGreenBuiltNcLogo: {
    id: "og-green-built-nc-logo",
    legacyPath: "/wp-content/uploads/2023/05/Green-Built-NC-Logo-150x150-1.jpg",
    localPublicPath: "/media/og/green-built-nc-logo.jpg",
    usedBy: ["posts: green-built-nc-beyond-energy-star"],
  },
  ogAirSealingTopPlates: {
    id: "og-air-sealing-top-plates",
    legacyPath: "/wp-content/uploads/2023/05/top-plates-1.png",
    localPublicPath: "/media/posts/top-plates-1.png",
    usedBy: ["posts: air-sealing-the-devilish-details"],
  },
  magazineCover2024_25: {
    id: "magazine-cover-2024-25",
    legacyPath: "/wp-content/uploads/2025/03/Green-Built-24-25.jpg",
    localPublicPath: "/media/magazine/2024-25/cover.jpg",
    usedBy: ["/magazine/ OG image"],
  },
} as const satisfies Record<string, NativeMediaCatalogEntry>;

export type NativeMediaCatalogKey = keyof typeof nativeMediaCatalog;

export function mediaUrl(key: NativeMediaCatalogKey): string {
  const { legacyPath, localPublicPath } = nativeMediaCatalog[key];
  return resolveNativeMediaUrl({ legacyPath, localPublicPath });
}
