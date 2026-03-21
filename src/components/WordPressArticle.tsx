import { LegacyWpPostConversion } from "@/components/LegacyWpPostConversion";
import { WpLegacyStyles } from "@/components/WpLegacyStyles";
import { WORDPRESS_ORIGIN } from "@/lib/env";
import { sanitizeWordPressHtml } from "@/lib/wp-html";

type WpKind = "page" | "post";

/** Renders legacy WordPress HTML; loads block + Astra CSS only for this subtree. */
export function WordPressArticle({
  html,
  legacyKind = "page",
  articlePath = "/",
}: {
  html: string;
  /** `post` and `page` get slim conversion strips. TODO:WP_FALLBACK */
  legacyKind?: WpKind;
  /** Current pathname (trailing slash) for route-aware strip copy */
  articlePath?: string;
}) {
  const safe = sanitizeWordPressHtml(html, WORDPRESS_ORIGIN);
  const showConversionStrips = legacyKind === "post" || legacyKind === "page";
  return (
    <>
      <WpLegacyStyles />
      {showConversionStrips ? (
        <LegacyWpPostConversion
          phase="pre"
          pathname={articlePath}
          kind={legacyKind === "post" ? "post" : "page"}
        />
      ) : null}
      <article
        className="wordpress-content mx-auto w-full max-w-[1240px] px-4 py-8 lg:px-6"
        dangerouslySetInnerHTML={{ __html: safe }}
      />
      {showConversionStrips ? (
        <LegacyWpPostConversion
          phase="post"
          pathname={articlePath}
          kind={legacyKind === "post" ? "post" : "page"}
        />
      ) : null}
    </>
  );
}
