/**
 * Absolute URLs for GiveWP (and similar) where the app **links out** instead of proxying HTML.
 *
 * **Plugin boundary:** All commerce/account/login/ticket prefixes are catalogued in
 * `plugin-hosted-paths.ts` (`PLUGIN_HOSTED_ROUTE_BUCKETS`). Those routes are **backend dependencies**,
 * not unmigrated “content” — see `docs/WORDPRESS_ENDGAME.md`.
 *
 * TODO:WP_FALLBACK — replace with native payments / embedded forms when ready.
 *
 * Fallback inventory: `wordpress-fallback-registry.ts` + `docs/WORDPRESS_FALLBACK_AUDIT.md`.
 *
 * Primary Give form id 7969 — confirmed from legacy support page iframe src on greenbuilt.org.
 */
export const LEGACY_GIVEWP_DONATE_URL = "https://www.greenbuilt.org/give/7969/";
