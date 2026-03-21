import { siteSettings } from "@/content/site/settings";
import type { SiteSettings } from "@/lib/content-types";

/** Single import for app shell — always local, never WordPress. */
export function getSiteSettings(): SiteSettings {
  return siteSettings;
}
