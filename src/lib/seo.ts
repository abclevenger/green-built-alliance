import type { Metadata } from "next";
import type { SeoFields } from "@/lib/content-types";
import { SITE_URL } from "@/lib/env";

/** Resolve a path or absolute URL against `SITE_URL` (for JSON-LD, canonical checks). */
export function toAbsoluteSiteUrl(href: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  const path = href.startsWith("/") ? href : `/${href}`;
  return `${base}${path}`;
}

/**
 * Build Next.js Metadata from local SEO fields (no Yoast at runtime).
 */
export function pageMetadata(
  seo: SeoFields,
  options?: {
    path?: string;
    noIndex?: boolean;
    openGraphType?: "website" | "article";
    /** ISO 8601 — used when `openGraphType` is `article` */
    publishedTime?: string;
    modifiedTime?: string;
    /** Visible author names (articles) */
    authors?: readonly string[];
    /** Meta keywords — prefer real `NativePost.tags` when available */
    keywords?: readonly string[];
  }
): Metadata {
  const base = SITE_URL.replace(/\/$/, "");
  const canonical =
    options?.path !== undefined
      ? `${base}${options.path.startsWith("/") ? options.path : `/${options.path}`}`
      : base;

  const ogImageSrc = seo.ogImage
    ? seo.ogImage.startsWith("http")
      ? seo.ogImage
      : `${base}${seo.ogImage.startsWith("/") ? seo.ogImage : `/${seo.ogImage}`}`
    : undefined;

  const images = ogImageSrc ? [{ url: ogImageSrc, alt: seo.title }] : undefined;

  const ogType = options?.openGraphType ?? "website";

  const authorsMeta =
    options?.authors?.filter(Boolean).map((name) => ({ name: name.trim() })) ?? undefined;

  const keywordsJoined =
    options?.keywords?.length ? options.keywords.map((k) => k.trim()).filter(Boolean).join(", ") : undefined;

  return {
    title: seo.title,
    description: seo.description,
    ...(keywordsJoined ? { keywords: keywordsJoined } : {}),
    ...(authorsMeta?.length ? { authors: authorsMeta } : {}),
    alternates: { canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      type: ogType,
      locale: "en_US",
      ...(images ? { images } : {}),
      ...(options?.publishedTime ? { publishedTime: options.publishedTime } : {}),
      ...(options?.modifiedTime ? { modifiedTime: options.modifiedTime } : {}),
      ...(authorsMeta?.length ? { authors: authorsMeta.map((a) => a.name) } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      ...(images?.[0]?.url ? { images: [images[0].url] } : {}),
    },
    robots: options?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
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
