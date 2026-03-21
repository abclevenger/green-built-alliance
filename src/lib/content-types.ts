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

/** Shared CTA control (homepage hero, funnels, etc.) */
export type PageCta = { href: string; label: string };

export type HomeContent = {
  seo: SeoFields;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: PageCta;
    secondaryCta: PageCta;
    /** Short credibility bullets shown under hero CTAs */
    trustBullets: string[];
  };
  /** Heading for the three pathway cards below the hero */
  pillarsSectionTitle: string;
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

/** High-conversion funnel layout (reusable for future program pages). */
export type FunnelHero = {
  headline: string;
  subheadline: string;
  primaryCta: PageCta;
  secondaryCta: PageCta;
  /** Short line beside the visual column (trust / program name) */
  visualTagline?: string;
  /** Optional hero photo — use `mediaUrl(...)` from the native media catalog */
  visualImageUrl?: string;
  /** Alt for `visualImageUrl` (empty string if decorative) */
  visualImageAlt?: string;
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

/** Optional byline */
export type NativePostAuthor = {
  name: string;
  url?: string;
};

/**
 * Structured article body — extend with new `type` variants as needed.
 * Prefer this over raw HTML for native posts.
 */
export type NativePostBlock =
  | { type: "prose"; heading?: string; paragraphs: string[] }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "bulletList"; title?: string; items: string[] }
  | { type: "callout"; variant?: "tip" | "note"; title?: string; body: string }
  | {
      type: "cta";
      title: string;
      body?: string;
      primary: PageCta;
      secondary?: PageCta;
    };

/**
 * Curated row on a native directory category hub.
 * TODO:DIR_API — Replace roster with headless directory query; keep href pattern or map to native profiles.
 */
export type DirectorySpotlightListing = {
  name: string;
  organization?: string;
  locationHint?: string;
  summary?: string;
  /** Often `/directory/member-profile/?member-id=` until profiles are native */
  href: string;
};

/**
 * Native directory category hub (e.g. `/directory/builders/`).
 * Full grids, search, and sorting stay TODO; this model carries hero copy + transitional spotlights.
 */
export type NativeDirectoryCategory = {
  slug: string;
  path: string;
  title: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  valueBullets: string[];
  seo: SeoFields;
  spotlightListings: DirectorySpotlightListing[];
  /** Optional cross-links into `NativePost` paths */
  relatedNativePostPaths?: string[];
};

/**
 * Native directory member profile (legacy URL: `/directory/member-profile/?member-id=`).
 * TODO:DIR_API — Replace static rows with MemberPress/CRM sync; add slug-based URLs when API supports it.
 */
export type NativeDirectoryMemberProfile = {
  /** Legacy public id (query param) */
  legacyMemberId: string;
  /** Canonical path + query for metadata and links */
  path: string;
  organizationName: string;
  /** Short line under the name, e.g. “Green home builder” */
  roleLabel: string;
  memberLevel?: string;
  summary: string;
  specialties: string[];
  location?: string;
  phone?: string;
  email?: string;
  website?: { href: string; label?: string };
  /** Keys matching `NativeDirectoryCategory.slug` for cross-links */
  directoryCategorySlugs: string[];
  relatedNativePostPaths?: string[];
  seo: SeoFields;
};

/** Native blog/article — resolved before WordPress in catch-all. */
export type NativePost = {
  /** Canonical path with trailing slash (matches `segmentsToPath`) */
  path: string;
  /** Leaf slug (identification / future sitemap) */
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author?: NativePostAuthor;
  categories?: string[];
  tags?: string[];
  seo: SeoFields;
  blocks: NativePostBlock[];
  /** Client lead form immediately after excerpt (before first body block) */
  introLeadCapture?: LeadCaptureBlock;
  /** Client lead form after all blocks */
  footerLeadCapture?: LeadCaptureBlock;
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
