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

type TribeEventBySlug = {
  slug: string;
  title: string;
  description: string;
  url: string;
};

export type ResolvedDocument = {
  kind: "page" | "post" | "event";
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

function eventPathMatches(requestPath: string, eventUrl: string): boolean {
  const base = pathFromWpLink(eventUrl).replace(/\/$/, "");
  const req = normalizePath(requestPath).replace(/\/$/, "");
  if (req === base) return true;
  return req.startsWith(`${base}/`);
}

/** WordPress route resolution only — homepage is native (see content-source / home.ts). */
export const resolveWordPressRoute = cache(
  async (segments: string[]): Promise<ResolvedDocument | null> => {
    const path = segmentsToPath(segments);

    if (segments[0] === "event") {
      if (!segments[1]) return null;
      const eventSlug = decodeURIComponent(segments[1]);
      const res = await fetch(
        `${REST}/tribe/events/v1/events/by-slug/${encodeURIComponent(eventSlug)}`,
        FETCH_OPTS
      );
      if (res.ok) {
        const data = (await res.json()) as TribeEventBySlug;
        if (data?.slug && typeof data.description === "string") {
          if (eventPathMatches(path, data.url)) {
            return {
              kind: "event",
              title: data.title,
              html: data.description,
            };
          }
        }
      }
      return null;
    }

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
