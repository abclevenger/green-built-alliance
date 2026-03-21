/**
 * URL space owned by WordPress plugins (WooCommerce, MemberPress, GiveWP, TEC, etc.).
 *
 * **Purpose:** Planning + tooling — distinguish “migrate static HTML” from “replace a payment/account system.”
 * **Not used** in `resolveCatchAllRoute` today (would change behavior); safe to import for audits/scripts.
 */

function normalizePath(path: string): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

/** Top-level (and a few specific) prefixes that are commerce, account, or donation flows on the legacy site. */
export const PLUGIN_HOSTED_PATH_PREFIXES: readonly string[] = [
  "/account/",
  "/my-account/",
  "/cart/",
  "/checkout/",
  "/shop/",
  "/give/",
  "/login/",
  "/donor-dashboard/",
  "/my-subscriptions/",
  "/tickets-order/",
  "/tickets-checkout/",
];

/**
 * MemberPress (and similar) registration flows under `/membership/…`.
 * **Excluded:** `/membership/` root is native (`nativeMarketingPages`); do not prefix-match `/membership/` alone.
 */
const MEMBERSHIP_REGISTRATION = /^\/membership\/.+-registration\//i;

/**
 * Heuristic: path is unlikely to be a “convert WordPressArticle HTML” win — needs payments/accounts/plugins.
 */
export function isLikelyPluginHostedPath(path: string): boolean {
  const n = normalizePath(path);
  if (PLUGIN_HOSTED_PATH_PREFIXES.some((p) => n.startsWith(p))) return true;
  if (MEMBERSHIP_REGISTRATION.test(n)) return true;
  return false;
}
