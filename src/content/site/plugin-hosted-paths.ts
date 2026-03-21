/**
 * ## Plugin / backend URL boundary (authoritative)
 *
 * These paths are **not** “unmigrated editorial” or “content-tail fallback.” They are owned by WordPress
 * **plugins** (WooCommerce, MemberPress, GiveWP, Events Calendar / tickets, etc.) and typically require
 * PHP sessions, payment processors, and plugin templates on the WordPress origin.
 *
 * **Runtime today:** `resolveCatchAllRoute` → `resolveWordPressRoute` may still return HTML for some of these
 * URLs if WordPress exposes them as normal pages in REST. That is an **accidental proxy**, not a product
 * decision to treat checkout as static content. Endgame routing should send these paths to PHP **before**
 * Next (reverse proxy / edge), or replace the plugin entirely — see `docs/WORDPRESS_ENDGAME.md`.
 *
 * **Related:** `legacy-checkout-urls.ts` (absolute Give URLs), `wordpress-fallback-registry.ts` (inventory).
 */

function normalizePath(path: string): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

/** One logical plugin surface (for docs, audits, and `isLikelyPluginHostedPath`). */
export type PluginHostedRouteBucket = {
  id: string;
  label: string;
  description: string;
  /** Typical systems on the legacy stack */
  systems: readonly string[];
  /** Normalized prefix match (`/foo/`) */
  pathPrefixes: readonly string[];
};

/**
 * Structured inventory of backend-owned routes. Keep in sync with marketing copy that links to `/account/`,
 * `/give/…`, registration URLs, etc.
 */
export const PLUGIN_HOSTED_ROUTE_BUCKETS: readonly PluginHostedRouteBucket[] = [
  {
    id: "woocommerce",
    label: "WooCommerce (store, cart, checkout, account aliases)",
    description:
      "Product catalog, cart, checkout, order pay / thank-you style flows, and Woo customer account screens.",
    systems: ["WooCommerce"],
    pathPrefixes: ["/shop/", "/cart/", "/checkout/", "/my-account/", "/account/", "/wishlist/"],
  },
  {
    id: "memberpress-auth",
    label: "MemberPress — login, subscriptions, member account",
    description:
      "Authentication and self-service membership billing. Distinct from native marketing `/membership/` funnel pages.",
    systems: ["MemberPress", "WordPress auth"],
    pathPrefixes: ["/login/", "/my-subscriptions/", "/donor-dashboard/"],
  },
  {
    id: "memberpress-registration",
    label: "MemberPress — tier / affiliate registration under `/membership/…`",
    description:
      "Checkout-style registration permalinks (gold, silver, affiliate, etc.). Excludes `/membership/` root, which is native.",
    systems: ["MemberPress"],
    pathPrefixes: [],
  },
  {
    id: "givewp",
    label: "GiveWP — donate forms and outcomes",
    description:
      "Donation forms, campaigns, and post-donation confirmation/failure routes tied to Give.",
    systems: ["GiveWP"],
    pathPrefixes: ["/give/", "/donation-success/", "/donation-failed/"],
  },
  {
    id: "event-tickets",
    label: "Events Calendar — ticketing / order flows",
    description:
      "Ticket purchase and order paths that stay on the legacy event commerce stack (not native `/event/…` read UI).",
    systems: ["The Events Calendar", "Event Tickets", "WooCommerce (often paired)"],
    pathPrefixes: ["/tickets-order/", "/tickets-checkout/"],
  },
] as const;

/** Flattened prefixes from `PLUGIN_HOSTED_ROUTE_BUCKETS` (plus legacy aliases). */
export const PLUGIN_HOSTED_PATH_PREFIXES: readonly string[] = Array.from(
  new Set([
    ...PLUGIN_HOSTED_ROUTE_BUCKETS.flatMap((b) => [...b.pathPrefixes]),
  ])
);

/**
 * MemberPress (and similar) registration flows under `/membership/…-registration/` (and related checkout slugs).
 * **Excluded:** `/membership/` alone — native marketing funnel in `membership.ts`.
 */
const MEMBERSHIP_PLUGIN_SUBPATH = /^\/membership\/[^/]+/i;

/**
 * True when `path` is under a `/membership/` child segment (registration, renewals, etc.).
 * Native team treats `/membership/` root as editorial; everything one level deeper is assumed plugin-owned
 * unless explicitly migrated to a dedicated App Router route.
 */
export function isMembershipPluginSubpath(path: string): boolean {
  const n = normalizePath(path);
  if (n === "/membership/") return false;
  return MEMBERSHIP_PLUGIN_SUBPATH.test(n);
}

/**
 * Heuristic: URL is **backend/plugin surface** — do not schedule as a “migrate HTML article” task.
 *
 * Used for planning and (optionally) future routing; does **not** by itself change `resolveWordPressRoute`
 * behavior unless you add an explicit branch elsewhere.
 */
export function isLikelyPluginHostedPath(path: string): boolean {
  const n = normalizePath(path);
  if (PLUGIN_HOSTED_PATH_PREFIXES.some((p) => n.startsWith(p))) return true;
  if (isMembershipPluginSubpath(n)) return true;
  return false;
}

/** Human-readable bucket id for logging / audits, or null if not matched. */
export function classifyPluginHostedPath(path: string): string | null {
  const n = normalizePath(path);
  for (const bucket of PLUGIN_HOSTED_ROUTE_BUCKETS) {
    if (bucket.pathPrefixes.length && bucket.pathPrefixes.some((p) => n.startsWith(p))) return bucket.id;
  }
  if (isMembershipPluginSubpath(n)) return "memberpress-registration";
  return null;
}
