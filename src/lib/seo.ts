import type { Metadata } from "next";
import type { SeoFields } from "@/lib/content-types";
import { SITE_URL } from "@/lib/env";

/**
 * Build Next.js Metadata from local SEO fields (no Yoast at runtime).
 */
export function pageMetadata(
  seo: SeoFields,
  options?: { path?: string; noIndex?: boolean }
): Metadata {
  const base = SITE_URL.replace(/\/$/, "");
  const canonical =
    options?.path !== undefined
      ? `${base}${options.path.startsWith("/") ? options.path : `/${options.path}`}`
      : base;

  const images = seo.ogImage
    ? [{ url: seo.ogImage.startsWith("http") ? seo.ogImage : `${base}${seo.ogImage}` }]
    : undefined;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      type: "website",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: options?.noIndex ? { index: false, follow: false } : undefined,
  };
}

/** metadataBase + OG defaults; title/description come from `getSiteSettings()`. */
export function buildDefaultMetadata(siteName: string): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: "website",
      siteName,
    },
  };
}
