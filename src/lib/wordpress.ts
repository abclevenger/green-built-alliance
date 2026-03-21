/**
 * WordPress REST resolution for unmigrated **content-tail** catch-all routes (pages + posts).
 *
 * **Not plugin routing:** WooCommerce, MemberPress, Give, tickets, and related paths are **backend/plugin**
 * dependencies (`plugin-hosted-paths.ts`, `docs/WORDPRESS_ENDGAME.md`). They may still return documents here
 * if WP exposes them as normal REST entities — that is fragile for payments; production should route those
 * URLs to PHP on `WORDPRESS_ORIGIN` when possible.
 *
 * @see `src/content/wordpress-fallback-registry.ts` — inventory; `classifyPluginHostedPath()` for audits.
 */
import { cache } from "react";
import { WORDPRESS_ORIGIN } from "@/lib/env";

const REST = `${WORDPRESS_ORIGIN}/wp-json`;

const FETCH_OPTS = {
  headers: { "User-Agent": "GreenBuiltNext/1.0 (+https://www.greenbuilt.org)" },
  next: { revalidate: 300 } as const,
};

type WpContentEntity = {
  link: string;
  title: { rendered: string };
  content: { rendered: string };
};

export type ResolvedDocument = {
  kind: "page" | "post";
  title: string;
  html: string;
};

function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, "").trim();
}

function pathFromWpLink(link: string): string {
  const u = new URL(link);
  const p = u.pathname || "/";
  return p.endsWith("/") ? p : `${p}/`;
}

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

function pathsMatch(requestPath: string, wpLink: string): boolean {
  return normalizePath(requestPath) === normalizePath(pathFromWpLink(wpLink));
}

/** /a/b/c/ → /a/b/c/ */
export function segmentsToPath(segments: string[]): string {
  if (!segments.length) return "/";
  return normalizePath(segments.join("/"));
}

/** WordPress route resolution only — homepage is native (see content-source / home.ts). */
export const resolveWordPressRoute = cache(
  async (segments: string[]): Promise<ResolvedDocument | null> => {
    const path = segmentsToPath(segments);

    // Single events: native `app/event/[...slug]/page.tsx` (Tribe REST headless). Not resolved here.

    const leaf = segments[segments.length - 1];
    if (!leaf) return null;
    const slug = decodeURIComponent(leaf);

    const pagesRes = await fetch(
      `${REST}/wp/v2/pages?slug=${encodeURIComponent(slug)}&per_page=100`,
      FETCH_OPTS
    );
    if (pagesRes.ok) {
      const pages = (await pagesRes.json()) as WpContentEntity[];
      if (Array.isArray(pages)) {
        const hit = pages.find((p) => pathsMatch(path, p.link));
        if (hit) {
          return {
            kind: "page",
            title: stripTags(hit.title.rendered),
            html: hit.content.rendered,
          };
        }
      }
    }

    // TODO:WP_FALLBACK — Native posts resolve in content-source first; this only runs when no native post matches `path`.
    const postsRes = await fetch(
      `${REST}/wp/v2/posts?slug=${encodeURIComponent(slug)}&per_page=100`,
      FETCH_OPTS
    );
    if (postsRes.ok) {
      const posts = (await postsRes.json()) as WpContentEntity[];
      if (Array.isArray(posts)) {
        const hit = posts.find((p) => pathsMatch(path, p.link));
        if (hit) {
          return {
            kind: "post",
            title: stripTags(hit.title.rendered),
            html: hit.content.rendered,
          };
        }
      }
    }

    return null;
  }
);
