# WordPress endgame — roles, boundaries, and shutdown reality

This document is the **decision-oriented** companion to [`WORDPRESS_FALLBACK_AUDIT.md`](./WORDPRESS_FALLBACK_AUDIT.md) (how `[...slug]` fallback works) and [`MIGRATION_MAP.md`](./MIGRATION_MAP.md) (file-level migration status).

## 1. Three different things called “WordPress”

| Layer | What it is | Shut down by |
|-------|------------|--------------|
| **A. Native Next surface** | Marketing pages, `NativePost`, directory whitelist, events hub/singles (read model), hubs | Already largely done — extend registries |
| **B. Plugin / backend dependency** | WooCommerce, MemberPress, GiveWP, ticket/order flows, login, `/membership/…-registration/` style URLs | **Not** “migrate HTML” — replace host, embed, or rebuild payments/auth |
| **C. Content-tail fallback** | Unmigrated WP **pages** and **posts** served via REST → `WordPressArticle` | Batch `NativePost` / native marketing until `resolveWordPressRoute` unused |

Confusing **B** with **C** is the main planning failure mode: checkout HTML in REST is still **backend**, not editorial debt.

## 2. Authoritative plugin URL inventory

**Source of truth:** [`src/content/site/plugin-hosted-paths.ts`](../src/content/site/plugin-hosted-paths.ts)

- `PLUGIN_HOSTED_ROUTE_BUCKETS` — structured groups (Woo, MemberPress, Give, tickets, etc.)
- `isLikelyPluginHostedPath()` / `classifyPluginHostedPath()` — audits and tooling

**Absolute donate URL:** [`src/content/site/legacy-checkout-urls.ts`](../src/content/site/legacy-checkout-urls.ts)

**Typed fallback categories (includes B + C):** [`src/content/wordpress-fallback-registry.ts`](../src/content/wordpress-fallback-registry.ts)

## 3. Runtime today (cutover reality)

1. **Dedicated App Router routes** (`/`, `/news/`, `/events/`, `/event/…`, etc.) never use generic WP HTML fallback for their primary template.
2. **`[...slug]`** uses `resolveCatchAllRoute` (`content-source.ts`): native marketing → posts → directory → known member profile → **`resolveWordPressRoute`** (REST pages/posts).
3. **Plugin paths** may still return documents from REST if WordPress exposes them as normal pages — that is an **accidental HTML proxy**, fragile for payments. Production should ideally **route these URLs to PHP before Next** (reverse proxy / edge rules) once the front door is fully Next.

## 4. What “fully off WordPress” still requires

Even after **C** is empty (no REST HTML fallback):

1. **Replace or permanently host B** — cart, checkout, memberships, donations, ticketing, account/login, MemberPress registration permalinks under `/membership/…`.
2. **Directory parity** — unknown `/directory/member-profile/?member-id=` and non-whitelisted category grids; needs CRM/MemberPress API or new member product.
3. **Forms and webhooks** — any POST targets, Give/MemberPress callbacks, ticket emails.
4. **Media** — `wp-content` hotlinks until everything is in `public/media/` or a CDN with stable URLs (see `native-media.ts` / catalog).
5. **TEC read path** — today Tribe REST is a **read** dependency; full shutdown means events data source + ticket story above.

## 5. Redirect / retire candidates

- Consolidate duplicate editorial entry points to native hubs (see `pragmaticRedirectHints` in `wordpress-fallback-registry.ts` and `redirects` in `next.config.ts`).
- `/search/` and date-archive style URLs: retire or replace with native search when analytics allows.

## 6. Recommended near-term strategy

**Keep WordPress as an intentional backend for (B)** while **finishing (C)** on Next. That yields:

- Smallest risk to revenue (donations, memberships, tickets).
- Clear engineering split: **content** migrates to typed registries; **commerce/auth** stays on PHP until a deliberate replacement project.

**Full WordPress shutdown** is a **second program of work**: payments, identity, directory API, and event ticketing — not an extension of the HTML migration.

## 7. Code map

| Concern | Location |
|---------|----------|
| Native vs WP order | `src/lib/content-source.ts` |
| REST fetch | `src/lib/wordpress.ts` |
| Plugin path buckets | `src/content/site/plugin-hosted-paths.ts` |
| Fallback taxonomy | `src/content/wordpress-fallback-registry.ts` |
| WP HTML shell | `src/components/WordPressArticle.tsx`, `WpLegacyStyles.tsx` |
| Events read | `src/lib/tribe-events.ts`, `app/event/[...slug]/page.tsx` |
