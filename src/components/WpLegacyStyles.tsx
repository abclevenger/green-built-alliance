import { WORDPRESS_ORIGIN } from "@/lib/env";

/**
 * Loads core WordPress block + Astra CSS from the live CMS so mirrored block markup
 * renders closer to production. Plugin-specific CSS may still be missing per page.
 */
export function WpLegacyStyles() {
  const o = WORDPRESS_ORIGIN;
  return (
    <>
      <link rel="preconnect" href={o} crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href={`${o}/wp-includes/css/dist/block-library/style.min.css`}
      />
      <link
        rel="stylesheet"
        href={`${o}/wp-content/themes/astra/assets/css/minified/frontend.min.css`}
      />
    </>
  );
}
