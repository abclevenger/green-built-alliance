import { WpLegacyStyles } from "@/components/WpLegacyStyles";
import { WORDPRESS_ORIGIN } from "@/lib/env";
import { sanitizeWordPressHtml } from "@/lib/wp-html";

/** Renders legacy WordPress HTML; loads block + Astra CSS only for this subtree. */
export function WordPressArticle({ html }: { html: string }) {
  const safe = sanitizeWordPressHtml(html, WORDPRESS_ORIGIN);
  return (
    <>
      <WpLegacyStyles />
      <article
        className="wordpress-content mx-auto w-full max-w-[1240px] px-4 py-8 lg:px-6"
        dangerouslySetInnerHTML={{ __html: safe }}
      />
    </>
  );
}
