import { mediaUrl } from "@/content/assets/native-media-catalog";
import { siteSettings } from "@/content/site/settings";
import { SITE_URL } from "@/lib/env";
import { toAbsoluteSiteUrl } from "@/lib/seo";

/**
 * Global Organization + WebSite structured data for rich results and knowledge panels.
 */
export function SiteJsonLd() {
  const base = SITE_URL.replace(/\/$/, "");
  const logoUrl = toAbsoluteSiteUrl(mediaUrl("ogGbaLogoVertical"));
  const orgId = `${base}/#organization`;
  const webId = `${base}/#website`;

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": orgId,
      name: siteSettings.siteName,
      alternateName: siteSettings.organizationShort,
      url: base,
      description: siteSettings.tagline,
      logo: { "@type": "ImageObject", url: logoUrl },
      sameAs: siteSettings.social.map((s) => s.href),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": webId,
      name: siteSettings.siteName,
      url: `${base}/`,
      inLanguage: "en-US",
      publisher: { "@id": orgId },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${base}/search/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
