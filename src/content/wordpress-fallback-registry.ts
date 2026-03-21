/**
 * WordPress dependency inventory — **two different roles**
 *
 * 1. **Plugin / backend surface** — Commerce, account, login, Give, tickets, `/membership/…` registration
 *    children, etc. **Not** “migrate as WordPressArticle HTML.” Authoritative list:
 *    `src/content/site/plugin-hosted-paths.ts` (`PLUGIN_HOSTED_ROUTE_BUCKETS`, `isLikelyPluginHostedPath`).
 *
 * 2. **Content-tail fallback** — Unmigrated editorial/pages that still render through `[…slug]` →
 *    `resolveWordPressRoute` → `WordPressArticle`. Shutdown = native registries + remove REST branch.
 *
 * **Runtime:** `[...slug]` → `resolveCatchAllRoute` (`content-source.ts`) tries native sources first,
 * then `resolveWordPressRoute` (`wordpress.ts`) → WP REST pages/posts by slug + link match.
 *
 * **Not this path:** `/`, `/magazine/`, `/news/`, `/green-building-news/`, `/events/`, `/event/...`, static files.
 *
 * Human-readable: `docs/WORDPRESS_FALLBACK_AUDIT.md` · Endgame / shutdown: `docs/WORDPRESS_ENDGAME.md`.
 */

export type FallbackBusinessValue = "critical" | "medium" | "low";

export type FallbackMigrationDifficulty = "easy" | "medium" | "hard-plugin";

export type FallbackShutdownStrategy =
  | "migrate-native"
  | "redirect-to-native-hub"
  | "keep-plugin-host"
  | "retire-or-redirect"
  | "hybrid-headless";

/** Re-export for audits — plugin paths are **not** content-tail migration candidates. */
export {
  PLUGIN_HOSTED_ROUTE_BUCKETS,
  classifyPluginHostedPath,
  isLikelyPluginHostedPath,
} from "@/content/site/plugin-hosted-paths";

/** One coarse bucket of URLs that still depend on WP (directly or via REST HTML). */
export type WordPressFallbackCategory = {
  id: string;
  label: string;
  description: string;
  /** How requests hit WordPress today */
  resolution: string;
  businessValue: FallbackBusinessValue;
  difficulty: FallbackMigrationDifficulty;
  shutdownStrategy: FallbackShutdownStrategy;
  /** Examples only — not exhaustive (see `mirror/manifest.json` crawl). Verify against native registries. */
  examplePaths: readonly string[];
  notes?: string;
};

export const wordpressFallbackCategories: readonly WordPressFallbackCategory[] = [
  {
    id: "catch-all-wp-pages",
    label: "Unmigrated WordPress pages (content tail)",
    description:
      "Multi-segment paths that match a WP **page** via REST (`/wp/v2/pages?slug=…` + permalink match) and are not covered by `getNativeMarketingPage`. Distinct from plugin-owned routes in `plugin-hosted-paths.ts`.",
    resolution: "app/[...slug]/page.tsx → resolveWordPressRoute → WordPressArticle",
    businessValue: "medium",
    difficulty: "medium",
    shutdownStrategy: "migrate-native",
    examplePaths: [
      "/congratulations/",
      "/preparation/",
      "/thank-you-green-built-home-registration/",
    ],
    notes:
      "Many former mirrors are now native (resources, legal, GBH children). Diff registries vs manifest before batching.",
  },
  {
    id: "catch-all-wp-posts",
    label: "Unmigrated WordPress posts (blog)",
    description:
      "Paths that resolve as WP **posts** when not in `content/posts/registry.ts` (REST `/wp/v2/posts`).",
    resolution: "Same catch-all branch; legacyKind post in WordPressArticle",
    businessValue: "medium",
    difficulty: "easy",
    shutdownStrategy: "migrate-native",
    examplePaths: [
      "/mary-love-spending-green-to-go-green/",
      "/sean-sullivan-a-breath-of-fresh-air/",
      "/love-your-mother-50-states-50-stories-and-50-women-united-for-climate-justice/",
    ],
    notes: "Batch by traffic/search console; use `NativePost` + canonical paths.",
  },
  {
    id: "directory-grids-unlisted",
    label: "Directory category grids (non-whitelisted)",
    description:
      "`/directory/{slug}/` hubs exist only for slugs in `content/directory/categories.ts`; all others fall through to WP.",
    resolution: "resolveCatchAllRoute → resolveWordPressRoute",
    businessValue: "critical",
    difficulty: "hard-plugin",
    shutdownStrategy: "hybrid-headless",
    examplePaths: [
      "/directory/lenders/",
      "/directory/insurance/",
      "/directory/member-profile/",
    ],
    notes:
      "member-profile without native `member-id` or unknown id still hits WP. True shutdown needs MemberPress/CRM/API or embedded grids.",
  },
  {
    id: "commerce-checkout-account",
    label: "Plugin backend — Woo / MemberPress / Give / tickets (not “fallback content”)",
    description:
      "Payment, account, login, donation, and ticket **plugin** surfaces. Primary implementation is PHP templates and sessions on `WORDPRESS_ORIGIN`, not sanitized REST HTML. If these URLs hit `[...slug]`, treat as routing/proxy accident — see `plugin-hosted-paths.ts` and `docs/WORDPRESS_ENDGAME.md`.",
    resolution:
      "WordPress origin (plugin templates). May coincidentally match REST pages — do not classify as editorial debt.",
    businessValue: "critical",
    difficulty: "hard-plugin",
    shutdownStrategy: "keep-plugin-host",
    examplePaths: [
      "/shop/",
      "/cart/",
      "/checkout/",
      "/my-account/",
      "/account/",
      "/login/",
      "/give/7969/",
      "/membership/affiliate-registration/",
      "/tickets-checkout/",
    ],
    notes: "See `plugin-hosted-paths.ts`, `legacy-checkout-urls.ts`. Out of scope for WordPressArticle-only migration.",
  },
  {
    id: "search-and-utility",
    label: "Search, feeds, date archives, attachment URLs",
    description: "Legacy WP URL patterns that may 404 on Next or resolve oddly if mirrored as pages.",
    resolution: "Catch-all or 404; not first-class in this app",
    businessValue: "low",
    difficulty: "medium",
    shutdownStrategy: "retire-or-redirect",
    examplePaths: ["/search/"],
    notes: "Prefer native search or redirect to hubs; verify analytics before retiring.",
  },
  {
    id: "events-edge",
    label: "Event plugin edge cases",
    description:
      "Single events use `app/event/[...slug]` + Tribe REST for read UI; registration/tickets stay on legacy TEC / Woo URLs.",
    resolution: "Tribe REST + sanitized body for `/event/…`; ticket purchase not resolveWordPressRoute singles",
    businessValue: "critical",
    difficulty: "hard-plugin",
    shutdownStrategy: "hybrid-headless",
    examplePaths: ["/events/regenerative-professional-accreditation/"],
    notes: "See `event-links.ts`, `tribe-events.ts`, `EventDetailView` (legacy registration links).",
  },
] as const;

/** Ordered resolution inside `resolveCatchAllRoute` before WordPress. */
export const nativeCatchAllResolutionOrder = [
  "Native marketing page (`getNativeMarketingPage`)",
  "Native post (`getNativePostByPath`)",
  "Native directory category (`getNativeDirectoryCategoryBySegments`)",
  "Native directory member (`/directory/member-profile/` + known `member-id`)",
  "WordPress REST page/post (`resolveWordPressRoute`) — content tail only by intent",
] as const;

/**
 * Representative high-ROI paths that still hit WP HTML today — next **content** migration batch candidates.
 * Excludes plugin/backend paths (see `isLikelyPluginHostedPath`). Verify traffic and canonical URLs.
 */
export const suggestedNextFallbackMigrations: readonly string[] = [
  "/directory/lenders/",
  "/directory/insurance/",
  "/directory/member-profile/",
  "/search/",
  "/mary-love-spending-green-to-go-green/",
  "/sean-sullivan-a-breath-of-fresh-air/",
  "/love-your-mother-50-states-50-stories-and-50-women-united-for-climate-justice/",
];

/** Paths that are good redirect targets when retiring duplicate/legacy entry points. */
export const pragmaticRedirectHints: readonly { from: string; to: string; reason: string }[] = [
  {
    from: "/news/newsletters/",
    to: "/news/",
    reason: "Newsletters subpage consolidated to native /news/ hub",
  },
] as const;
