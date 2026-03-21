import { SITE_URL } from "@/lib/env";

/**
 * WordPress origin for media that has not been copied to `public/media/` yet.
 * Override when staging CDN mirrors legacy uploads: `NEXT_PUBLIC_LEGACY_MEDIA_ORIGIN`.
 */
export const LEGACY_MEDIA_ORIGIN =
  process.env.NEXT_PUBLIC_LEGACY_MEDIA_ORIGIN?.replace(/\/$/, "") ?? "https://www.greenbuilt.org";

/**
 * When `true`, `resolveNativeMediaUrl` prefers `localPublicPath` (under `public/`) so the app
 * serves files from your deployment instead of WordPress.
 *
 * Copy files into `public/` to match the optional `localPublicPath` on each catalog entry
 * (see `src/content/assets/native-media-catalog.ts`).
 *
 * **Local testing:** set `NEXT_PUBLIC_SITE_URL` to your dev origin (e.g. `http://localhost:3000`)
 * so metadata and `<Image>` absolute URLs resolve to files under `public/media/`.
 */
export const USE_LOCAL_SITE_MEDIA = process.env.NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA === "true";

export type NativeMediaRef = {
  /** Stable id for inventory and scripts */
  id: string;
  /** Path on the legacy host after origin, always starting with `/` */
  legacyPath: string;
  /** Target under site root when self-hosting, e.g. `/media/og/foo.png` → `public/media/og/foo.png` */
  localPublicPath?: string;
};

/**
 * Absolute URL for images, PDFs, or other static files referenced by native routes.
 */
export function resolveNativeMediaUrl(ref: Pick<NativeMediaRef, "legacyPath" | "localPublicPath">): string {
  if (USE_LOCAL_SITE_MEDIA && ref.localPublicPath) {
    const base = SITE_URL.replace(/\/$/, "");
    const p = ref.localPublicPath.startsWith("/") ? ref.localPublicPath : `/${ref.localPublicPath}`;
    return `${base}${p}`;
  }
  const lp = ref.legacyPath.startsWith("/") ? ref.legacyPath : `/${ref.legacyPath}`;
  return `${LEGACY_MEDIA_ORIGIN}${lp}`;
}
