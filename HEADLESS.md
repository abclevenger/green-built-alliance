# Headless WordPress rendering

## What ships today

1. **Shell**: `SiteHeader`, `SiteFooter`, skip link, Tailwind in `globals.css`.
2. **Content**: `content.rendered` (pages/posts) or `description` (events), passed through link rewriting + `isomorphic-dompurify`.
3. **Styles**: Core block library + Astra `frontend.min.css` loaded from `WORDPRESS_ORIGIN`.

## Resolution rules

| URL pattern | API |
|-------------|-----|
| `/` | `GET /wp-json/wp/v2/pages/{WORDPRESS_HOME_PAGE_ID}` |
| `/event/{slug}/…` | `GET /wp-json/tribe/events/v1/events/by-slug/{slug}` (path must match event `url` prefix) |
| Everything else | `GET /wp-json/wp/v2/pages?slug={lastSegment}` then filter by full `link` path; else same for `posts` |

## Gaps vs full WordPress HTML

- No automatic **per-page plugin CSS** (Ultimate Addons, WooCommerce page assets, etc.).
- **WooCommerce**, **Give**, and heavy JS may not initialize the same way without their enqueued scripts—add `next/script` or keep those flows on WordPress until reimplemented.
- **SEO**: replicate or improve `generateMetadata`, Open Graph, and JSON-LD per route.
- **iCal / feeds** unchanged if still served from WordPress.

## Improving parity

1. Add stylesheet URLs to `WpLegacyStyles` (or a route-based variant) after auditing Network tab on production.
2. Extend `resolveWordPressRoute` for additional REST namespaces (e.g. custom types).
3. Replace HTML blobs with **block-to-React** mapping over time for key templates.

## Reverting to static mirror

Restore `rewrites()` in `next.config.ts` pointing `/` and `/:path*/` to `/mirror/.../index.html`, and remove or bypass `page.tsx` / `[...slug]/page.tsx` (e.g. rename the route folder).
