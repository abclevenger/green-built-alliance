import { magazineEditionMediaDefinitions } from "@/content/assets/magazine-edition-media";
import { nativeMediaCatalog, type NativeMediaCatalogKey } from "@/content/assets/native-media-catalog";

/**
 * Typed inventory of native-route media for shutdown planning.
 * - **Catalog entries** — see `nativeMediaCatalog` (OG, support hero, select post images).
 * - **Magazine archive** — edition rows in `magazine-edition-media.ts` (resolved in `magazine-hub.ts`).
 * - **Tribe events** — `og:image` may still be remote URLs from the calendar feed (`event/[...slug]`).
 */
export type CatalogMediaInventoryRow = {
  catalogKey: NativeMediaCatalogKey;
  legacyPath: string;
  localPublicPath?: string;
  usedBy: readonly string[];
};

export function listCatalogMediaInventory(): CatalogMediaInventoryRow[] {
  return (Object.keys(nativeMediaCatalog) as NativeMediaCatalogKey[]).map((catalogKey) => {
    const e = nativeMediaCatalog[catalogKey];
    return {
      catalogKey,
      legacyPath: e.legacyPath,
      localPublicPath: e.localPublicPath,
      usedBy: e.usedBy,
    };
  });
}

export const MAGAZINE_ARCHIVE_MEDIA = {
  note:
    "Each `magazineEditionMediaDefinitions` row defines legacy paths + local targets under `public/media/magazine/{year}/`; resolved in magazine-hub via resolveNativeMediaUrl.",
  editionCount: magazineEditionMediaDefinitions.length,
} as const;
