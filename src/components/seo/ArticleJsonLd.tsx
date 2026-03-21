import { mediaUrl } from "@/content/assets/native-media-catalog";
import { siteSettings } from "@/content/site/settings";
import type { NativePost } from "@/lib/content-types";
import { toAbsoluteSiteUrl } from "@/lib/seo";

/** Article JSON-LD for native posts (complements Open Graph article metadata). */
export function ArticleJsonLd({ post }: { post: NativePost }) {
  const pageUrl = toAbsoluteSiteUrl(post.path);
  const publisherLogo = toAbsoluteSiteUrl(mediaUrl("ogGbhNetZeroReadyLogo"));

  let image: string | undefined;
  if (post.seo.ogImage) {
    const raw = post.seo.ogImage.startsWith("http")
      ? post.seo.ogImage
      : post.seo.ogImage.startsWith("/")
        ? post.seo.ogImage
        : `/${post.seo.ogImage}`;
    image = toAbsoluteSiteUrl(raw);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    url: pageUrl,
    ...(image ? { image: [image] } : {}),
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name }
      : { "@type": "Organization", name: siteSettings.organizationShort },
    publisher: {
      "@type": "Organization",
      name: siteSettings.siteName,
      logo: { "@type": "ImageObject", url: publisherLogo },
    },
    ...(post.categories?.[0] ? { articleSection: post.categories[0] } : {}),
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
