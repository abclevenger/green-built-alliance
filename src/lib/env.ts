export const WORDPRESS_ORIGIN =
  process.env.WORDPRESS_ORIGIN?.replace(/\/$/, "") ?? "https://www.greenbuilt.org";

/** Optional: for one-off sync scripts only; the app does not fetch WP for /. */
export const WORDPRESS_HOME_PAGE_ID =
  process.env.WORDPRESS_HOME_PAGE_ID ?? "2114";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

/**
 * Server-only: GoHighLevel / LeadConnector inbound webhook URL (workflow trigger).
 * Set in `.env.local` / hosting secrets — never commit the live URL.
 */
export const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL?.trim() ?? "";
