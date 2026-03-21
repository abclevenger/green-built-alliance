import { WORDPRESS_ORIGIN } from "@/lib/env";

/** Map TEC `url` to a path on this app when hosts match (native `/event/...` singles). */
export function nativeEventPathFromPermalink(permalink: string): string {
  try {
    const u = new URL(permalink);
    const wp = new URL(WORDPRESS_ORIGIN);
    if (u.hostname === wp.hostname) {
      return u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`;
    }
  } catch {
    /* ignore */
  }
  return permalink;
}

export function isNativeRoutableEventUrl(permalink: string): boolean {
  try {
    const u = new URL(permalink);
    const wp = new URL(WORDPRESS_ORIGIN);
    return u.hostname === wp.hostname && u.pathname.startsWith("/event/");
  } catch {
    return false;
  }
}
