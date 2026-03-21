/**
 * Normalized event summaries for native UI (source: Tribe REST v1 → adapter).
 * TODO:WP_EVENTS — Replace or extend when events move off WordPress / TEC.
 */
export type EventSummary = {
  id: string;
  title: string;
  excerpt: string;
  /** ISO 8601-ish datetime from TEC `utc_start_date` */
  startAt: string;
  endAt?: string;
  allDay: boolean;
  featured: boolean;
  /** Display cost string when present */
  cost?: string;
  venueLabel?: string;
  imageUrl?: string;
  /** Legacy single-event URL (registration, RSVP, tickets) */
  permalink: string;
};

export type EventVenueDetail = {
  name?: string;
  address?: string;
  city?: string;
  province?: string;
  zip?: string;
};

/**
 * Full single-event document for `/event/...` native template.
 * Body is sanitized HTML from TEC; registration stays on `legacyRegistrationUrl`.
 */
export type EventDetail = {
  id: string;
  slug: string;
  title: string;
  excerptPlain: string;
  /** DOMPurify-sanitized fragment for native render (no WordPressArticle shell). */
  descriptionHtml: string;
  startAt: string;
  endAt?: string;
  allDay: boolean;
  timezone: string;
  featured: boolean;
  cost?: string;
  venueLabel?: string;
  venue?: EventVenueDetail;
  imageUrl?: string;
  categories: string[];
  isVirtual: boolean;
  ticketed: string[];
  /** TEC canonical URL — RSVP, tickets, Woo, MemberPress flows remain here. */
  legacyRegistrationUrl: string;
};
