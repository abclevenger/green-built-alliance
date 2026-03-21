# WordPress fallback audit (`[...slug]`)

**Goal:** Make the remaining WordPress dependency visible for shutdown planning and trim obvious legacy surface without breaking hybrid routes.

**Endgame framing (plugin vs content):** [`WORDPRESS_ENDGAME.md`](./WORDPRESS_ENDGAME.md) — read this before mixing “migrate HTML” with “replace checkout.”

## Typed inventory

Machine-readable categories, examples, and migration hints live in:

- [`src/content/wordpress-fallback-registry.ts`](../src/content/wordpress-fallback-registry.ts) — includes re-exports from `plugin-hosted-paths.ts` for audits.

**Plugin / backend URL space** (Woo, MemberPress, Give, tickets — **not** editorial fallback):

- [`src/content/site/plugin-hosted-paths.ts`](../src/content/site/plugin-hosted-paths.ts) (`PLUGIN_HOSTED_ROUTE_BUCKETS`, `isLikelyPluginHostedPath`)

## How fallback works today

1. **`app/[...slug]/page.tsx`** calls **`resolveCatchAllRoute`** (`src/lib/content-source.ts`).
2. **Native first:** marketing pages → posts registry → whitelisted directory categories → native member profile (known `member-id`).
3. **Then WordPress:** **`resolveWordPressRoute`** (`src/lib/wordpress.ts`) fetches **`/wp/v2/pages`** and **`/wp/v2/posts`** by leaf slug and matches the full permalink.
4. **Render:** **`WordPressArticle`** loads **`WpLegacyStyles`** (Astra CSS from `WORDPRESS_ORIGIN`) + DOMPurify-sanitized HTML.

Dedicated native routes (**not** this catch-all) include `/`, `/magazine/`, `/news/`, `/green-building-news/`, `/events/`, `/event/...`, etc.

## Classification summary

| Area | Business value | Difficulty | Shutdown approach |
|------|----------------|------------|-------------------|
| **Content-tail:** unmigrated WP pages | Medium | Medium | Native marketing sections / `NativePost` |
| **Content-tail:** unmigrated blog posts | Medium | Easy–medium | Extend `content/posts/registry.ts` |
| Directory grids + unknown `member-profile` | Critical | Hard (plugins/API) | Headless directory + auth |
| **Plugin backend:** shop / cart / checkout / account / Give / login / tickets | Critical | Hard | **Not** HTML migration — keep PHP host or rebuild (`WORDPRESS_ENDGAME.md`) |
| Events (TEC) read + ticket edge | Critical | Hard | Native `/event/…` read; tickets on legacy |
| Search / odd utilities | Low | Medium | Redirect or native search |

## Pragmatic reductions applied

- **`/news/newsletters/` → `/news/`** (Next `redirects` in `next.config.ts`) — newsletters consolidated under the native news hub.
- **Plugin path buckets** — structured inventory separating backend dependencies from content-tail fallback (`PLUGIN_HOSTED_ROUTE_BUCKETS` in `plugin-hosted-paths.ts`).
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
