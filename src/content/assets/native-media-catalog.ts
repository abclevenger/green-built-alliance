import type { NativeMediaRef } from "@/lib/native-media";
import { resolveNativeMediaUrl } from "@/lib/native-media";

export type NativeMediaCatalogEntry = NativeMediaRef & { usedBy: string[] };

/**
 * Central registry for native-route media. Add entries here instead of scattering `wp-content` URLs.
 *
 * **Inventory elsewhere:** Magazine edition PDFs + covers (many files) live in
 * `magazine-edition-media.ts` — same resolver, grouped by product.
 *
 * **Remaining WordPress coupling (by design):**
 * - Event card/detail `imageUrl` from Tribe REST (dynamic).
 * - WordPress HTML fallbacks in `[...slug]` (not catalogued here).
 * - `WpLegacyStyles` theme CSS URL (stylesheet, not an image).
 *
 * To detach from WordPress: copy the file to `public` + `localPublicPath`, then set
 * `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA=true` at build/runtime.
 */
export const nativeMediaCatalog = {
  /** Official vertical logo (300×216) — file lives at `public/media/og/gba-logo-vertical.png` (bundled; not WP-dependent) */
  ogGbaLogoVertical: {
    id: "og-gba-logo-vertical",
    legacyPath: "/wp-content/uploads/2022/11/gba-logo-vertical.png",
    localPublicPath: "/media/og/gba-logo-vertical.png",
    usedBy: ["/ (homepage OG)", "SiteJsonLd logo", "header mark"],
  },
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
    usedBy: ["/magazine/ OG image", "same file as magazine-edition-media 2024–25 cover"],
  },
  /** Horizontal wordmark — `public/media/brand/gba-logo-horizontal.webp` */
  gbaLogoHorizontalWebp: {
    id: "gba-logo-horizontal-webp",
    legacyPath: "/wp-content/uploads/2023/05/GreenBuiltAlliance-logo-horizontal.gif",
    localPublicPath: "/media/brand/gba-logo-horizontal.webp",
    usedBy: ["Site header brand mark"],
  },
  /** Homepage hero photo — `public/media/marketing/home-hero-asheville.jpg` */
  homeHeroAsheville: {
    id: "home-hero-asheville",
    legacyPath: "/wp-content/uploads/2023/06/green-built-home-asheville-nc.jpg",
    localPublicPath: "/media/marketing/home-hero-asheville.jpg",
    usedBy: ["Homepage hero supporting image"],
  },
  /** Directory landing funnel hero — `public/media/photo-forest-path.png` */
  directoryHeroForest: {
    id: "directory-hero-forest",
    legacyPath: "/wp-content/uploads/2023/06/road-in-green-forest.jpg",
    localPublicPath: "/media/photo-forest-path.png",
    usedBy: ["/directory/ funnel hero visual"],
  },
  /** Energy Savers / volunteer outreach — `public/media/marketing/esn-volunteer-appreciation.jpg` */
  esnVolunteerOutreach: {
    id: "esn-volunteer-outreach",
    legacyPath: "/wp-content/uploads/2023/06/ESN-Volunteer-Appreciation-Staff.jpg",
    localPublicPath: "/media/marketing/esn-volunteer-appreciation.jpg",
    usedBy: ["/energysaversnetwork/ funnel hero visual"],
  },
  /** Solar installation on a WNC home — `public/media/photo-installing-solar.png` */
  photoInstallingSolar: {
    id: "photo-installing-solar",
    legacyPath: "/wp-content/uploads/2023/06/installing-solar.jpg",
    localPublicPath: "/media/photo-installing-solar.png",
    usedBy: ["Homepage community imagery", "renewable / solar context"],
  },
  /** Natural building / team visit — `public/media/photo-team-tour.png` */
  photoTeamTour: {
    id: "photo-team-tour",
    legacyPath: "/wp-content/uploads/2023/06/gba-team-tour.jpg",
    localPublicPath: "/media/photo-team-tour.png",
    usedBy: ["Homepage community imagery"],
  },
  /** Family outdoors in the mountains — `public/media/photo-green-home.png` */
  photoGreenHome: {
    id: "photo-green-home",
    legacyPath: "/wp-content/uploads/2023/06/green-built-home-asheville-nc.jpg",
    localPublicPath: "/media/photo-green-home.png",
    usedBy: ["Homepage community imagery"],
  },
  /** Member portrait assets — use with staff-approved copy only — `public/media/testimonial-*.png` */
  testimonialPortraitBowman: {
    id: "testimonial-portrait-bowman",
    legacyPath: "/wp-content/uploads/2023/05/Bowman-testimonial-150x150.jpg",
    localPublicPath: "/media/testimonial-bowman.png",
    usedBy: ["Optional member spotlight UI"],
  },
  testimonialPortraitChelseyHett: {
    id: "testimonial-portrait-chelsey-hett",
    legacyPath: "/wp-content/uploads/2023/05/Chelsey-Hett-testimonial-150x150.jpg",
    localPublicPath: "/media/testimonial-chelsey-hett.png",
    usedBy: ["Optional member spotlight UI"],
  },
  testimonialPortraitDougAger: {
    id: "testimonial-portrait-doug-ager",
    legacyPath: "/wp-content/uploads/2023/05/doug-ager-150x150.jpg",
    localPublicPath: "/media/testimonial-doug-ager.png",
    usedBy: ["Optional member spotlight UI"],
  },
  testimonialPortraitScottMcgehee: {
    id: "testimonial-portrait-scott-mcgehee",
    legacyPath: "/wp-content/uploads/2023/05/scott-mcgehee-150x150.webp",
    localPublicPath: "/media/testimonial-scott-mcgehee.png",
    usedBy: ["Optional member spotlight UI"],
  },
} as const satisfies Record<string, NativeMediaCatalogEntry>;

export type NativeMediaCatalogKey = keyof typeof nativeMediaCatalog;

/** Prefer bundled files under `public/media/` regardless of `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA`. */
const ALWAYS_LOCAL_PUBLIC_PATH: Partial<Record<NativeMediaCatalogKey, true>> = {
  ogGbaLogoVertical: true,
  gbaLogoHorizontalWebp: true,
  homeHeroAsheville: true,
  directoryHeroForest: true,
  esnVolunteerOutreach: true,
  photoInstallingSolar: true,
  photoTeamTour: true,
  photoGreenHome: true,
  testimonialPortraitBowman: true,
  testimonialPortraitChelseyHett: true,
  testimonialPortraitDougAger: true,
  testimonialPortraitScottMcgehee: true,
};

export function mediaUrl(key: NativeMediaCatalogKey): string {
  const { legacyPath, localPublicPath } = nativeMediaCatalog[key];
  if (ALWAYS_LOCAL_PUBLIC_PATH[key] && localPublicPath) {
    return localPublicPath.startsWith("/") ? localPublicPath : `/${localPublicPath}`;
  }
  return resolveNativeMediaUrl({ legacyPath, localPublicPath });
}
