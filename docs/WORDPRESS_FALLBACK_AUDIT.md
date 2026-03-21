# WordPress fallback audit (`[...slug]`)

**Goal:** Make the remaining WordPress dependency visible for shutdown planning and trim obvious legacy surface without breaking hybrid routes.

## Typed inventory

Machine-readable categories, examples, and migration hints live in:

- [`src/content/wordpress-fallback-registry.ts`](../src/content/wordpress-fallback-registry.ts)

Plugin / commerce / account URL space (planning helper, **not** wired into routing):

- [`src/content/site/plugin-hosted-paths.ts`](../src/content/site/plugin-hosted-paths.ts)

## How fallback works today

1. **`app/[...slug]/page.tsx`** calls **`resolveCatchAllRoute`** (`src/lib/content-source.ts`).
2. **Native first:** marketing pages → posts registry → whitelisted directory categories → native member profile (known `member-id`).
3. **Then WordPress:** **`resolveWordPressRoute`** (`src/lib/wordpress.ts`) fetches **`/wp/v2/pages`** and **`/wp/v2/posts`** by leaf slug and matches the full permalink.
4. **Render:** **`WordPressArticle`** loads **`WpLegacyStyles`** (Astra CSS from `WORDPRESS_ORIGIN`) + DOMPurify-sanitized HTML.

Dedicated native routes (**not** this catch-all) include `/`, `/magazine/`, `/news/`, `/green-building-news/`, `/events/`, `/event/...`, etc.

## Classification summary

| Area | Business value | Difficulty | Shutdown approach |
|------|----------------|------------|-------------------|
| Unmigrated WP pages (resources, GBH child pages, legal) | Medium–high | Medium | Native sections/funnel/MDX |
| Unmigrated blog posts | Medium | Easy–medium | Extend `content/posts/registry.ts` |
| Directory grids + unknown `member-profile` | Critical | Hard (plugins/API) | Headless directory + auth |
| Shop / cart / checkout / account / Give / login | Critical | Hard | Keep on plugin host or rebuild payments |
| Events (TEC) singles | Critical | Hard | Already headless; tickets still legacy |
| Search / odd utilities | Low | Medium | Redirect or native search |

## Pragmatic reductions applied

- **`/news/newsletters/` → `/news/`** (Next `redirects` in `next.config.ts`) — newsletters consolidated under the native news hub.
- **Plugin path list** — explicit exclusion from “HTML migration” scope (see `plugin-hosted-paths.ts`).
- **Native batch (ongoing):** legal/thank-you pages, GBH child pages, full `green-building-resources` mirror of topic pages (videos, glossary, case studies, etc.), about/mission paths, long-tail `NativePost` batches, and directory whitelists — see `src/content/pages/*.ts` and `src/content/posts/long-tail-editorial-batch*.ts`.

## Suggested next migration batch

See `suggestedNextFallbackMigrations` in `wordpress-fallback-registry.ts`. Always confirm traffic and canonical URLs before migrating.

## Crawl reference

`mirror/manifest.json` lists many URLs that were mirrored from production; use it to diff against native registries (`listNativeMarketingPaths`, `listNativePostPaths`, directory whitelist).

## True shutdown blockers (after content parity)

1. **Commerce, memberships, donations, tickets** — need hosted checkout or full rebuild.
2. **Directory** — search, grids, and member profiles tied to MemberPress/CRM.
3. **Forms** posting to WordPress or plugin endpoints.
4. **Removing `resolveWordPressRoute`** only when no public URL needs WP REST for HTML.
