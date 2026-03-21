/**
 * WordPress fallback surface — shutdown planning inventory.
 *
 * **Runtime:** `[...slug]` → `resolveCatchAllRoute` (`content-source.ts`) tries native sources first,
 * then `resolveWordPressRoute` (`wordpress.ts`) → WP REST pages/posts by slug + link match → `WordPressArticle`
 * → `WpLegacyStyles` (Astra CSS) + sanitized HTML.
 *
 * **Not this path:** `/`, `/magazine/`, `/news/`, `/green-building-news/`, `/events/`, `/event/...`, static files.
 * **Related:** `plugin-hosted-paths.ts` — commerce/account/login; do not treat as “simple HTML migrations.”
 *
 * Human-readable narrative: `docs/WORDPRESS_FALLBACK_AUDIT.md`.
 */

export type FallbackBusinessValue = "critical" | "medium" | "low";

export type FallbackMigrationDifficulty = "easy" | "medium" | "hard-plugin";

export type FallbackShutdownStrategy =
  | "migrate-native"
  | "redirect-to-native-hub"
  | "keep-plugin-host"
  | "retire-or-redirect"
  | "hybrid-headless";

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
  /** Examples only — not exhaustive (see `mirror/manifest.json` crawl). */
  examplePaths: readonly string[];
  notes?: string;
};

export const wordpressFallbackCategories: readonly WordPressFallbackCategory[] = [
  {
    id: "catch-all-wp-pages",
    label: "Unmigrated WordPress pages",
    description:
      "Any multi-segment path that matches a WP page via REST (`/wp/v2/pages?slug=…` + permalink match) and is not a native marketing route.",
    resolution: "app/[...slug]/page.tsx → resolveWordPressRoute → WordPressArticle",
    businessValue: "medium",
    difficulty: "medium",
    shutdownStrategy: "migrate-native",
    examplePaths: [
      "/green-building-resources/",
      "/green-building-resources/energy-efficiency-air-sealing/",
      "/about/importance-of-green-building/",
      "/about-green-built-alliance/employment-opportunities/",
    ],
    notes:
      "High-traffic program and resource trees are the best ROI; legal/footer pages are easy wins.",
  },
  {
    id: "catch-all-wp-posts",
    label: "Unmigrated WordPress posts (blog)",
    description:
      "Paths that resolve as WP posts when not in `content/posts/registry.ts` (REST `/wp/v2/posts`).",
    resolution: "Same catch-all branch; legacyKind post in WordPressArticle",
    businessValue: "medium",
    difficulty: "easy",
    shutdownStrategy: "migrate-native",
    examplePaths: [
      "/mary-love-spending-green-to-go-green/",
      "/sean-sullivan-a-breath-of-fresh-air/",
      "/love-your-mother-50-states-50-stories-and-50-women-united-for-climate-justice/",
    ],
    notes: "Many are one-off editorials; batch by traffic/search console. Some overlap migrated hubs.",
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
    label: "WooCommerce / MemberPress / tickets / Give",
    description:
      "Shop, cart, checkout, account, login, Give forms, ticket flows — plugin-rendered; may still be reached via catch-all if WP serves HTML for some slugs.",
    resolution: "Often same REST HTML fallback; primary checkout is plugin templates on WP origin",
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
    ],
    notes: "See `plugin-hosted-paths.ts` and `legacy-checkout-urls.ts`. Out of scope for WordPressArticle-only migration.",
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
      "Single events use `app/event/[...slug]` + Tribe REST; registration/tickets may still point at legacy TEC URLs.",
    resolution: "Tribe REST + sanitized body; not resolveWordPressRoute for singles",
    businessValue: "critical",
    difficulty: "hard-plugin",
    shutdownStrategy: "hybrid-headless",
    examplePaths: ["/events/regenerative-professional-accreditation/"],
    notes: "See `event-links.ts`, `tribe-events.ts`.",
  },
] as const;

/** Ordered resolution inside `resolveCatchAllRoute` before WordPress. */
export const nativeCatchAllResolutionOrder = [
  "Native marketing page (`getNativeMarketingPage`)",
  "Native post (`getNativePostByPath`)",
  "Native directory category (`getNativeDirectoryCategoryBySegments`)",
  "Native directory member (`/directory/member-profile/` + known `member-id`)",
  "WordPress REST page/post (`resolveWordPressRoute`)",
] as const;

/**
 * Representative high-ROI paths that still hit WP HTML today — next migration batch candidates
 * (verify traffic; some may already be superseded by native hubs).
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
