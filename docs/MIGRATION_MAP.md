# WordPress → native migration map

**Goal:** Run the public site without WordPress online. This doc tracks what still ties to WP.

## Phase status

| Area | Current dependency | Replacement target | Priority | Status |
|------|-------------------|-------------------|----------|--------|
| Homepage | ~~REST page 2114~~ | `src/content/site/home.ts` + React sections | P0 | **Native** |
| Global nav / footer / defaults | Hardcoded in components | `src/content/site/settings.ts` + `site-config.ts` | P0 | **Native** |
| Root layout metadata | Static in `layout.tsx` | `settings.defaultSeo` + `buildDefaultMetadata()` | P0 | **Native** |
| Global WP CSS | Was in `layout` | `WpLegacyStyles` inside `WordPressArticle` only | P1 | **Done** |
| Dynamic `[...slug]` | REST pages/posts (content tail) | Local registry first → `resolveWordPressRoute` fallback | P1 | **Local-first** — [`WORDPRESS_FALLBACK_AUDIT.md`](./WORDPRESS_FALLBACK_AUDIT.md), [`WORDPRESS_ENDGAME.md`](./WORDPRESS_ENDGAME.md) (plugin vs content), `wordpress-fallback-registry.ts` |
| Native marketing pages | — | `src/content/pages/marketing.ts` (+ per-page modules) | P1 | **About (sections)** + **GBH / Energy Savers (composable `blocks[]`)** |
| Blog posts | REST `posts` | `src/content/posts/*.ts` registry + `NativePost` model | P2 | **Partial** — registry paths resolve before WP; **`/news/`** + **`/green-building-news/`** hubs native |
| Magazine / annual directory | WP page | `src/content/site/magazine-hub.ts` + `app/magazine/page.tsx` | P2 | **Native hub** — PDFs/covers centralized in `magazineEditionSources` + `resolveNativeMediaUrl` (legacy host until files land in `public/media/`) |
| Events | Tribe REST | `tribe-events.ts` + `/events/`, `/event/...` | P2 | **Native hub + singles** (registration still legacy TEC URLs) |
| Sitemap | `mirror/manifest.json` | Manifest ∪ native marketing + native posts + `/` | P3 | **Merged** |
| Yoast / JSON-LD | WP HTML | `generateMetadata` + `jsonLd` per route | P3 | Partial |
| Forms / WooCommerce | POST to WP | Rebuild or embed (TBD) | P4 | Blocker for full shutdown |
| Media | `wp-content` URLs | `src/lib/native-media.ts` + `native-media-catalog.ts`; `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA` | P4 | **Staged** — hubs/posts OG + magazine use resolver; copy files to `public/media/` to cut runtime WP dependency |

## Code touchpoints (WordPress at runtime)

| File | Role |
|------|------|
| `src/lib/wordpress.ts` | `resolveWordPressRoute` — **fallback only** |
| `src/lib/content-source.ts` | Chooses native vs WP |
| `src/content/wordpress-fallback-registry.ts` | Typed fallback categories + next-batch hints |
| `src/content/site/plugin-hosted-paths.ts` | **Authoritative** Woo / MemberPress / Give / ticket path buckets — backend deps, not “fallback articles” |
| `src/components/WordPressArticle.tsx` | Renders WP HTML + legacy CSS |
| `src/lib/env.ts` | `WORDPRESS_ORIGIN` (fallback); `WORDPRESS_HOME_PAGE_ID` **unused** by app |
| `src/lib/native-media.ts` | `LEGACY_MEDIA_ORIGIN`, `resolveNativeMediaUrl` — swap to `public/media/` via env |
| `src/content/assets/native-media-catalog.ts` | Typed keys + `mediaUrl()` for OG/marketing/post images |
| `src/content/assets/native-media-inventory.ts` | Shutdown checklist: catalog rows + magazine edition count |

## TODO: remove fallback

Search codebase for `TODO:WP_FALLBACK` — remove `resolveWordPressRoute` calls when all routes have native sources.

**Fallback deep-dive:** [`WORDPRESS_FALLBACK_AUDIT.md`](./WORDPRESS_FALLBACK_AUDIT.md). **Shutdown / plugin boundary:** [`WORDPRESS_ENDGAME.md`](./WORDPRESS_ENDGAME.md).

## Phase 8 snapshot (latest wiring)

### No longer requires WordPress at runtime

- `/` — `src/app/page.tsx` → `getNativeHome()` + `HomePageView`; metadata via `pageMetadata(home.seo, { path: "/" })`.
- Global chrome — `SiteHeader` / `SiteFooter` read `getSiteSettings()` from `src/content/site/settings.ts`.
- Root `metadata` — `src/app/layout.tsx` merges `settings.defaultSeo` with `buildDefaultMetadata(settings.organizationShort)`.
- `/about-green-built-alliance/` — `kind: "sections"` in `marketing.ts`.
- `/green-built-homes/` — `conversion-funnel` with ordered `blocks[]` in `green-built-homes.ts` → `MarketingFunnelView` / `FunnelBlockRenderer`.
- `/energysaversnetwork/` — same pattern in `energy-savers-network.ts` (includes `leadCapture` block + placeholder server action).
- `/support-our-work/` — `support-our-work.ts` funnel; donations link out to GiveWP (`legacy-checkout-urls.ts`).
- `/membership/` — `membership.ts` funnel; checkout remains MemberPress on `/account/` etc.
- `/directory/` — `directory-landing.ts` native intro.
- **Whitelisted `/directory/{slug}/` hubs** — `content/directory/categories.ts` + `DirectoryCategoryView`.
- **Native member profiles** — `/directory/member-profile/?member-id={id}` when `id` is in `content/directory/members/registry.ts` → `DirectoryMemberProfileView` (query read in `[...slug]/page.tsx` → `resolveCatchAllRoute`). Unknown IDs and bare `member-profile` without query still hit WordPress.
- `/events/continuing-education-courses/` — `continuing-education-courses.ts` native funnel.
- `/events/` — `app/events/page.tsx` + `EventsIndexView` + `tribe-events.ts` (headless TEC read).
- `/event/...` — `app/event/[...slug]/page.tsx` + `EventDetailView` (Tribe by-slug + sanitized body); registration still legacy TEC URL.
- `/news/` — `app/news/page.tsx` + `NewsHubView` + `buildNewsHubModel()` (`news-hub.ts` → `native-post-hub-model.ts`).
- `/green-building-news/` — `app/green-building-news/page.tsx` + `GreenBuildingNewsHubView` + `buildGreenBuildingNewsHubModel()` (`green-building-news-hub.ts`). **Editorial vs product:** GBN + `/news/` use `NativePost`; **`/magazine/`** is the annual *Green Home & Living Guide* hub (`magazine-hub.ts` + `MagazineHubView`), not the blog registry.
- `/magazine/` — `app/magazine/page.tsx` + `MagazineHubView`; hybrid PDF links to legacy media. **`/magazine/*` child paths** (if any) still WP until migrated.

### Still requires WordPress (fallback)

- Every `[...slug]` path **not** in the native marketing map — `resolveWordPressRoute` in `src/lib/wordpress.ts`.
- Legacy HTML + block CSS — `WordPressArticle` + `WpLegacyStyles` for those routes only.

### Content abstraction entry points

- `getHomePage()` / `getNativeHome()`, `getPageBySlug()`, `getPostBySlug()` (path + leaf slug), `getEventBySlug()` (stub), `resolveCatchAllRoute()` — `src/lib/content-source.ts`.

### Recommended next batch

1. **Directory API** — native full grids, search, and `/directory/member-profile/` (MemberPress parity).
2. **Magazine assets** — copy edition PDFs/covers into `public/media/magazine/...` per `magazine-hub.ts` `*LocalPublicPath`; set `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA=true`. **`/magazine/*`** subpages if required.
3. Expand `src/content/posts/registry.ts` for additional post permalinks still on WP fallback.
4. Whitelist more `/directory/*` category slugs from `manifest.json` as needed.
5. Add catalog entries for any remaining native-route `wp-content` hotlinks (HTML bodies, extra marketing heroes).

### Biggest blockers to full shutdown

- Forms, donations, WooCommerce, and plugin embeds still posting to WordPress or third parties.
- Media still served from `WORDPRESS_ORIGIN` inside sanitized HTML and mirror assets.
- Large surface area of one-off WP pages not yet in the native registry.
