/**
 * Hosted checkout flows that still live on WordPress (GiveWP, MemberPress, Woo).
 * TODO:WP_FALLBACK — replace with native payments / embedded forms when ready.
 *
 * Broader plugin-owned paths (account, cart, login, etc.): `plugin-hosted-paths.ts`.
 * Fallback inventory: `wordpress-fallback-registry.ts` + `docs/WORDPRESS_FALLBACK_AUDIT.md`.
 *
 * Primary Give form id 7969 — confirmed from legacy support page iframe src on greenbuilt.org.
 */
export const LEGACY_GIVEWP_DONATE_URL = "https://www.greenbuilt.org/give/7969/";
