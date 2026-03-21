import { cache } from "react";
import type { EventDetail, EventSummary, EventVenueDetail } from "@/lib/event-types";
import { WORDPRESS_ORIGIN } from "@/lib/env";
import { sanitizeWordPressHtml } from "@/lib/wp-html";

const REST = `${WORDPRESS_ORIGIN}/wp-json`;

const FETCH_OPTS = {
  headers: { "User-Agent": "GreenBuiltNext/1.0 (+https://www.greenbuilt.org)" },
  next: { revalidate: 300 } as const,
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatTribeStartDate(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day} 00:00:00`;
}

function venueLabel(venue: unknown): string | undefined {
  if (!venue || Array.isArray(venue)) return undefined;
  const v = venue as { venue?: string; city?: string; province?: string };
  const parts = [v.venue, v.city, v.province].filter(Boolean);
  return parts.length ? parts.join(" · ") : undefined;
}

function normalizeEventPath(path: string): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

type TribeEventDetailRaw = TribeEventRaw & {
  description: string;
  slug: string;
  timezone?: string;
  website?: string;
  is_virtual?: boolean;
  virtual_url?: string | null;
  ticketed?: string[];
  categories?: { name: string }[];
};

function parseVenue(raw: unknown): { label?: string; detail?: EventVenueDetail } {
  if (!raw || Array.isArray(raw)) return {};
  const v = raw as {
    venue?: string;
    address?: string;
    city?: string;
    province?: string;
    stateprovince?: string;
    zip?: string;
  };
  const name = v.venue?.trim();
  const address = v.address?.trim();
  const city = v.city?.trim();
  const province = (v.province || v.stateprovince)?.trim();
  const zip = v.zip?.trim();
  const labelParts = [name, city, province].filter(Boolean);
  return {
    label: labelParts.length ? labelParts.join(" · ") : undefined,
    detail:
      name || address || city
        ? { name, address, city, province, zip }
        : undefined,
  };
}

function toEventDetail(raw: TribeEventDetailRaw): EventDetail {
  const excerptPlain = stripHtml(raw.excerpt || "");
  const dirty = (raw.description || "").trim();
  const descriptionHtml = dirty ? sanitizeWordPressHtml(dirty, WORDPRESS_ORIGIN) : "";
  const { label, detail } = parseVenue(raw.venue);
  return {
    id: String(raw.id),
    slug: raw.slug || "",
    title: raw.title?.trim() || "Event",
    excerptPlain,
    descriptionHtml,
    startAt: raw.utc_start_date || raw.start_date,
    endAt: raw.utc_end_date || raw.end_date,
    allDay: Boolean(raw.all_day),
    timezone: raw.timezone || "America/New_York",
    featured: Boolean(raw.featured),
    cost: raw.cost?.trim() || undefined,
    venueLabel: label,
    venue: detail,
    imageUrl: raw.image?.url,
    categories: Array.isArray(raw.categories) ? raw.categories.map((c) => c.name).filter(Boolean) : [],
    isVirtual: Boolean(raw.is_virtual),
    ticketed: Array.isArray(raw.ticketed) ? raw.ticketed : [],
    legacyRegistrationUrl: raw.url,
  };
}

/**
 * Single event for native `/event/...` template (Tribe by-slug).
 * TODO:WP_EVENTS — Native RSVP/tickets when Give / Tickets leave WordPress.
 */
export const fetchEventDetail = cache(async (slugParts: string[]): Promise<EventDetail | null> => {
  if (!slugParts?.length) return null;
  const decoded = slugParts.map((s) => decodeURIComponent(s));
  const expectedPath = normalizeEventPath(`event/${decoded.join("/")}`);
  const attempts = decoded.length > 1 ? [decoded.join("/"), decoded[0]!] : [decoded[0]!];

  for (const slugTry of attempts) {
    try {
      const res = await fetch(
        `${REST}/tribe/events/v1/events/by-slug/${encodeURIComponent(slugTry)}`,
        FETCH_OPTS
      );
      if (!res.ok) continue;
      const raw = (await res.json()) as TribeEventDetailRaw;
      if (!raw?.id || !raw.url) continue;
      const rawPath = normalizeEventPath(new URL(raw.url).pathname);
      if (rawPath === expectedPath) {
        return toEventDetail(raw);
      }
    } catch {
      /* try next */
    }
  }
  return null;
});

type TribeEventRaw = {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  start_date: string;
  end_date?: string;
  utc_start_date: string;
  utc_end_date?: string;
  all_day?: boolean;
  featured?: boolean;
  cost?: string;
  venue: unknown;
  image?: { url?: string };
};

type TribeEventsResponse = {
  events?: TribeEventRaw[];
};

function normalizeEvent(raw: TribeEventRaw): EventSummary {
  const excerpt = stripHtml(raw.excerpt || "");
  return {
    id: String(raw.id),
    title: raw.title?.trim() || "Event",
    excerpt: excerpt.length > 220 ? `${excerpt.slice(0, 217)}…` : excerpt,
    startAt: raw.utc_start_date || raw.start_date,
    endAt: raw.utc_end_date || raw.end_date,
    allDay: Boolean(raw.all_day),
    featured: Boolean(raw.featured),
    cost: raw.cost?.trim() || undefined,
    venueLabel: venueLabel(raw.venue),
    imageUrl: raw.image?.url,
    permalink: raw.url,
  };
}

/**
 * Upcoming events from The Events Calendar REST API (headless read).
 * Registration still happens on legacy `permalink` targets.
 * TODO:WP_EVENTS — Swap for internal DB, ICS ingest, or Events Calendar Hub when you cut WP.
 */
export const fetchUpcomingEventSummaries = cache(
  async (limit = 12): Promise<EventSummary[]> => {
    const from = new Date();
    from.setUTCDate(from.getUTCDate() - 1);
    const start = formatTribeStartDate(from);
    const params = new URLSearchParams({
      per_page: "40",
      status: "publish",
      order: "asc",
      start_date: start,
    });
    try {
      const res = await fetch(`${REST}/tribe/events/v1/events?${params}`, FETCH_OPTS);
      if (!res.ok) return [];
      const body = (await res.json()) as TribeEventsResponse;
      const list = Array.isArray(body.events) ? body.events : [];
      const now = Date.now();
      const upcoming = list
        .map(normalizeEvent)
        .filter((e) => {
          const t = Date.parse(e.startAt);
          return !Number.isNaN(t) && t >= now - 60 * 60 * 1000;
        })
        .sort((a, b) => {
          if (a.featured !== b.featured) return a.featured ? -1 : 1;
          return Date.parse(a.startAt) - Date.parse(b.startAt);
        });
      return upcoming.slice(0, limit);
    } catch {
      return [];
    }
  }
);

/** Paths like `/event/foo/` for sitemap (paginated TEC read). */
export async function fetchEventPathsForSitemap(maxPaths = 200): Promise<string[]> {
  const paths: string[] = [];
  let page = 1;
  try {
    while (paths.length < maxPaths && page <= 10) {
      const params = new URLSearchParams({
        per_page: "50",
        page: String(page),
        status: "publish",
        order: "desc",
      });
      const res = await fetch(`${REST}/tribe/events/v1/events?${params}`, {
        headers: FETCH_OPTS.headers,
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;
      const body = (await res.json()) as TribeEventsResponse;
      const list = body.events ?? [];
      if (!list.length) break;
      for (const e of list) {
        try {
          const p = normalizeEventPath(new URL(e.url).pathname);
          if (p.startsWith("/event/")) paths.push(p);
        } catch {
          /* skip */
        }
      }
      page += 1;
    }
  } catch {
    /* empty */
  }
  return [...new Set(paths)].slice(0, maxPaths);
}
