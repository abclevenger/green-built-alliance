# Migration report — greenbuilt.org → Next.js

**Date:** 2026-03-20  
**Source:** https://www.greenbuilt.org/ (WordPress: Astra child theme, WooCommerce, Give, MemberPress, The Events Calendar Pro, Yoast SEO, etc.)  
**Target:** `greenbuilt-migration/` — Next.js 16 (App Router, TypeScript).

## Strategy (exact fidelity)

Rebuilding hundreds of pages by hand would introduce copy, spacing, and SEO drift. The approved approach is:

1. **Inventory** all public URLs from Yoast `sitemap_index.xml` (pages, posts, tribe events).
2. **Fetch** each URL’s full HTML over HTTPS.
3. **Light rewrite** of same-origin **anchor** `href` values from `https://www.greenbuilt.org/...` to root-relative paths so navigation stays on the Next deployment.
4. **Do not rewrite** `script`, `link`, `img`, or `srcset` URLs — they continue to point at the live host’s `/wp-content/` and `/wp-includes/` unless a separate asset-mirroring pass is run.
5. **Serve** each saved document via a **Route Handler** that returns the raw HTML. This preserves:
   - Inline and external JavaScript behavior (menus, WooCommerce, Give, calendars, etc. as long as APIs remain reachable).
   - Complete `<head>`: title, meta description, Open Graph, Twitter, canonical, `application/ld+json` (Yoast), etc.

## Crawl coverage

| Source list | Count (sitemap) | Mirrored |
|-------------|-----------------|----------|
| `page-sitemap.xml` | 124 | 124 |
| `post-sitemap.xml` | 566 | 566 |
| `tribe_events-sitemap.xml` | 239 | 239 |
| **Total unique URLs in manifest** | | **927** |

**Discrepancy vs 124+566+239 = 929:** Two URLs are duplicated across lists or deduped by the crawler’s `Set`; manifest count is the authoritative crawled set.

**Not crawled from sitemap index (optional SEO surfaces):**

- `category-sitemap.xml`, `author-sitemap.xml`, `tec_recurring_events-sitemap.xml` — add URL lists and run `npm run crawl` if those indexable URLs must be mirrored too.

## Storage

- **Mirrored HTML:** ~927 files under `public/mirror/**/index.html` (~319 MB total at last measure).
- **Manifest:** `mirror/manifest.json` (source URL, relative path, fetch time).

## Parity: what matches 1:1

- Visible copy, heading hierarchy, Astra/layout structure, responsive markup, and embedded media references as in the saved HTML.
- Per-page SEO in `<head>` (titles, descriptions, OG/Twitter, schema graph JSON-LD) as emitted by Yoast on the crawl date.
- Trailing-slash URLs (`next.config.ts`: `trailingSlash: true`).

## Known gaps / non-portable behavior

| Area | Behavior on mirror | Notes |
|------|---------------------|--------|
| **PHP / WordPress backend** | Not present | Checkout, cart, My Account, MemberPress login, admin AJAX, ticket flows still **target WordPress** via original `action` URLs where applicable; many forms still POST to `https://www.greenbuilt.org/...`. |
| **WooCommerce** | Client JS may call live REST/cookie endpoints | Test cart/checkout carefully; full e-commerce parity may require headless WooCommerce or keeping users on the live domain for shop flows. |
| **Donations (Give)** | Embeds load from live plugin assets | Payment success/failure pages are mirrored HTML; actual payment processing remains tied to Give configuration on the live site unless reimplemented. |
| **Assets** | Default setup loads CSS/JS/images from **live** `greenbuilt.org` | True offline parity requires mirroring `wp-content` / `wp-includes` into `public/` and rewriting URLs (large disk + legal/licensing review for third-party scripts). |
| **Canonical URLs** | Unchanged from crawl unless `CANONICAL_BASE` is set when crawling | For a new production domain, re-crawl with `CANONICAL_BASE` or post-process HTML. |
| **`next/link` / `next/image`** | Not used | Intentional: using saved `<a>` and `<img>` avoids React-specific layout/loading differences. |

## Commands reference

```bash
npm run crawl              # default: all three URL lists
npm run crawl:pages
npm run crawl:posts        # --skip-existing after first full run
npm run crawl:events
npm run route-map          # regenerate ROUTE_MAP.md
npm run asset-inventory    # regenerate ASSET_INVENTORY.md
```

## Crawl log

Errors and HTTP failures (if any) are appended to `mirror/crawl-log.txt`.

## Sign-off

This migration delivers **visual and SEO-faithful static HTML** for all primary page/post/event URLs in the Yoast + TEC sitemaps, with **documented** limitations for server-side WordPress and commerce flows.
