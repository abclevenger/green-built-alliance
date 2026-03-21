# WordPress → native migration map

**Goal:** Run the public site without WordPress online. This doc tracks what still ties to WP.

## Phase status

| Area | Current dependency | Replacement target | Priority | Status |
|------|-------------------|-------------------|----------|--------|
| Homepage | ~~REST page 2114~~ | `src/content/site/home.ts` + React sections | P0 | **Native** |
| Global nav / footer / defaults | Hardcoded in components | `src/content/site/settings.ts` + `site-config.ts` | P0 | **Native** |
| Root layout metadata | Static in `layout.tsx` | `settings.defaultSeo` + `buildDefaultMetadata()` | P0 | **Native** |
| Global WP CSS | Was in `layout` | `WpLegacyStyles` inside `WordPressArticle` only | P1 | **Done** |
| Dynamic `[...slug]` | REST pages/posts + Tribe | Local registry first → `resolveWordPressRoute` fallback | P1 | **Local-first** |
| Native marketing pages | — | `src/content/pages/marketing.ts` (+ per-page modules) | P1 | **About (sections)** + **GBH / Energy Savers (composable `blocks[]`)** |
| Blog posts | REST `posts` | CMS/MDX/local index (TBD) | P2 | WP fallback |
| Events | Tribe REST | Local events store or ICS (TBD) | P2 | WP fallback |
| Sitemap | `mirror/manifest.json` | Manifest + native path list merge | P3 | Planned |
| Yoast / JSON-LD | WP HTML | `generateMetadata` + `jsonLd` per route | P3 | Partial |
| Forms / WooCommerce | POST to WP | Rebuild or embed (TBD) | P4 | Blocker for full shutdown |
| Media | `wp-content` URLs | Self-host `public/` or CDN | P4 | Blocker for offline |

## Code touchpoints (WordPress at runtime)

| File | Role |
|------|------|
| `src/lib/wordpress.ts` | `resolveWordPressRoute` — **fallback only** |
| `src/lib/content-source.ts` | Chooses native vs WP |
| `src/components/WordPressArticle.tsx` | Renders WP HTML + legacy CSS |
| `src/lib/env.ts` | `WORDPRESS_ORIGIN` (fallback); `WORDPRESS_HOME_PAGE_ID` **unused** by app |

## TODO: remove fallback

Search codebase for `TODO:WP_FALLBACK` — remove `resolveWordPressRoute` calls when all routes have native sources.

## Phase 8 snapshot (latest wiring)

### No longer requires WordPress at runtime

- `/` — `src/app/page.tsx` → `getNativeHome()` + `HomePageView`; metadata via `pageMetadata(home.seo, { path: "/" })`.
- Global chrome — `SiteHeader` / `SiteFooter` read `getSiteSettings()` from `src/content/site/settings.ts`.
- Root `metadata` — `src/app/layout.tsx` merges `settings.defaultSeo` with `buildDefaultMetadata(settings.organizationShort)`.
- `/about-green-built-alliance/` — `kind: "sections"` in `marketing.ts`.
- `/green-built-homes/` — `conversion-funnel` with ordered `blocks[]` in `green-built-homes.ts` → `MarketingFunnelView` / `FunnelBlockRenderer`.
- `/energysaversnetwork/` — same pattern in `energy-savers-network.ts` (includes `leadCapture` block + placeholder server action).

### Still requires WordPress (fallback)

- Every `[...slug]` path **not** in the native marketing map — `resolveWordPressRoute` in `src/lib/wordpress.ts`.
- Legacy HTML + block CSS — `WordPressArticle` + `WpLegacyStyles` for those routes only.

### Content abstraction entry points

- `getHomePage()` / `getNativeHome()`, `getPageBySlug()`, `getPostBySlug()` (stub), `getEventBySlug()` (stub), `resolveCatchAllRoute()` — `src/lib/content-source.ts`.

### Recommended next batch

1. Add more paths to `nativeMarketingPages` (high-traffic marketing URLs).
2. Native post model + index (or MDX) and branch in `resolveCatchAllRoute` before WP.
3. Events (Tribe parity) or static event pages for CE courses.
4. Merge native paths into `sitemap.xml` generation; plan redirects from old WP permalinks.
5. Replace `wp-content` hotlinks for migrated pages.

### Biggest blockers to full shutdown

- Forms, donations, WooCommerce, and plugin embeds still posting to WordPress or third parties.
- Media still served from `WORDPRESS_ORIGIN` inside sanitized HTML and mirror assets.
- Large surface area of one-off WP pages not yet in the native registry.
