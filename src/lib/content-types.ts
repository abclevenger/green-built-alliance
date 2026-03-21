/**
 * Typed content models for the local-first layer.
 * WordPress HTML maps to ResolvedDocument in wordpress.ts (fallback only).
 */

export type SeoFields = {
  title: string;
  description: string;
  /** Absolute or site-relative image URL for OG */
  ogImage?: string;
};

/** Primary navigation item */
export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  platform: string;
  href: string;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  /** Used in metadata template and OG site_name */
  organizationShort: string;
  nav: NavItem[];
  footer: {
    blurb: string;
    links: NavItem[];
  };
  contact: {
    email?: string;
    phone?: string;
    addressLines?: string[];
  };
  social: SocialLink[];
  defaultSeo: SeoFields;
};

/** Homepage — structured sections only (no WordPress HTML). */
export type HomePillar = {
  href: string;
  title: string;
  description: string;
};

export type HomeProgramCard = {
  href: string;
  title: string;
  description: string;
  external?: boolean;
};

export type HomeStat = { label: string; value: string };

export type HomeContent = {
  seo: SeoFields;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  pillars: HomePillar[];
  programsSection: {
    title: string;
    description: string;
    cards: HomeProgramCard[];
  };
  /** Optional proof strip */
  stats?: HomeStat[];
  midCta?: {
    title: string;
    description?: string;
    primary: { href: string; label: string };
    secondary?: { href: string; label: string };
  };
};

/** Native marketing page built from sections (no raw WP blob). */
export type MarketingSection =
  | { type: "hero"; eyebrow?: string; title: string; subtitle?: string }
  | { type: "prose"; heading?: string; paragraphs: string[] }
  | {
      type: "cta";
      title: string;
      body?: string;
      primary: { href: string; label: string };
      secondary?: { href: string; label: string };
    }
  | { type: "bulletList"; title?: string; items: string[] };

/** Shared CTA control */
export type PageCta = { href: string; label: string };

/** High-conversion funnel layout (reusable for future program pages). */
export type FunnelHero = {
  headline: string;
  subheadline: string;
  primaryCta: PageCta;
  secondaryCta: PageCta;
  /** Short line beside the visual column (trust / program name) */
  visualTagline?: string;
};

export type FunnelProblemSection = {
  headline: string;
  points: string[];
  closing: string;
};

export type FunnelValueCard = { title: string; body: string };

export type FunnelSolutionSection = {
  headline: string;
  subheadline: string;
  cards: FunnelValueCard[];
};

export type FunnelStep = { title: string; description: string };

export type FunnelHowItWorks = {
  title: string;
  steps: FunnelStep[];
};

/** Single proof row — set isPlaceholder until metrics are verified */
export type FunnelProofStat = {
  value: string;
  label: string;
  isPlaceholder?: boolean;
};

export type FunnelProofSection = {
  headline: string;
  stats: FunnelProofStat[];
  /** Shown under stats when any stat is placeholder */
  placeholderNote?: string;
};

export type FunnelAudienceCard = {
  title: string;
  bullets: string[];
  cta: PageCta;
};

export type FunnelTestimonial = {
  quote: string;
  attribution: string;
  /** Replace with real quote + named attribution when available */
  isPlaceholder?: boolean;
};

export type FunnelFinalCta = {
  headline: string;
  subheadline: string;
  primaryCta: PageCta;
  secondaryCta: PageCta;
};

/** Lead / interest capture — POSTs to `LEAD_WEBHOOK_URL` via server action. */
export type LeadCaptureBlock = {
  headline: string;
  subheadline?: string;
  fieldLabel: string;
  fieldPlaceholder?: string;
  /** Form field name for the primary input (default "email") */
  fieldName?: "email";
  submitLabel: string;
  trustText?: string;
  /** Dev-facing note rendered in small type */
  integrationNote?: string;
  /** Campaign / segment id sent as `source` (hidden) */
  sourceSlug?: string;
  /** Public path for attribution, e.g. `/energysaversnetwork/` (hidden as `page`) */
  page?: string;
  /** Label for GHL mapping, e.g. `energy-savers-updates` (hidden as `formName`) */
  formName?: string;
};

/**
 * Ordered, composable funnel sections — pick only what a page needs.
 * Extend with new `type` variants as migrations need them.
 */
export type FunnelBlock =
  | { id?: string; type: "hero"; data: FunnelHero }
  | { id?: string; type: "problem"; data: FunnelProblemSection }
  | { id?: string; type: "solution"; data: FunnelSolutionSection }
  | { id?: string; type: "steps"; data: FunnelHowItWorks }
  | { id?: string; type: "proof"; data: FunnelProofSection }
  | {
      id?: string;
      type: "audienceCards";
      data: { cards: [FunnelAudienceCard, FunnelAudienceCard] };
    }
  | { id?: string; type: "testimonial"; data: FunnelTestimonial }
  | { id?: string; type: "leadCapture"; data: LeadCaptureBlock }
  | { id?: string; type: "finalCta"; data: FunnelFinalCta };

export type NativeMarketingPage =
  | {
      kind: "sections";
      path: string;
      seo: SeoFields;
      sections: MarketingSection[];
    }
  | {
      kind: "conversion-funnel";
      path: string;
      seo: SeoFields;
      blocks: FunnelBlock[];
    };

/** Future: full blog post model (local or MDX). */
export type NativePost = {
  slug: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  bodyHtml?: string;
  /** MDX component key, etc. */
};

/** Future: event model for calendar shutdown. */
export type NativeEvent = {
  slug: string;
  title: string;
  startsAt: string;
  endsAt?: string;
  descriptionHtml?: string;
  venue?: string;
};
