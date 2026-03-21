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

/** Column within a mega-menu panel */
export type MegaMenuColumn = {
  heading: string;
  items: NavItem[];
};

/** Optional featured CTA in a mega-menu panel (e.g. right rail) */
export type MegaMenuFeatured = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

/** Top-level mega-menu group */
export type MegaMenuGroup = {
  /** Stable id for `aria-controls` / state */
  id: string;
  label: string;
  columns: MegaMenuColumn[];
  featured?: MegaMenuFeatured;
};

export type MegaMenuSpec = {
  groups: MegaMenuGroup[];
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
  megaNav: MegaMenuSpec;
  footer: {
    /** Short positioning line under the site name */
    blurb: string;
    /** Grouped footer navigation (programs, about, support, etc.) */
    columns: { title: string; links: NavItem[] }[];
    /** Shown at bottom — e.g. checkout / external tools disclaimer */
    checkoutTrustNote: string;
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
  /** e.g. "For homeowners" — audience context above the title */
  audienceLabel?: string;
  /** Card footer CTA text (default: generic arrow in view) */
  ctaLabel?: string;
  /** Extra links shown in the interactive path panel (secondary CTAs) */
  relatedLinks?: { href: string; label: string }[];
};

/** Partner row: text pill, or `logo` image (and optional `href`) */
export type HomePartnerPlaceholder = {
  label: string;
  /** Use dashed styling for TBD names; omit or false for published labels */
  isPlaceholder?: boolean;
  /** When set, UI shows this image instead of the text pill */
  logo?: { src: string; alt: string };
  /** Optional destination (e.g. partner site); use with `external` for off-site links */
  href?: string;
  external?: boolean;
};

export type HomeTestimonial = {
  quote: string;
  attribution: string;
  /** Optional flag for staging content */
  isPlaceholder?: boolean;
};

export type HomeEcosystemLink = {
  href: string;
  label: string;
  description: string;
  /** Card footer action label (outcome-focused; falls back in UI if omitted) */
  ctaLabel?: string;
};

export type HomeProgramCard = {
  href: string;
  title: string;
  description: string;
  external?: boolean;
  /** Card footer action label (outcome-focused; falls back in UI if omitted) */
  ctaLabel?: string;
};

export type HomeStat = {
  label: string;
  value: string;
  detail?: string;
  /** Set true until the stat is verified for external marketing */
  isPlaceholder?: boolean;
};

/** Shared CTA control (homepage hero, funnels, etc.) */
export type PageCta = { href: string; label: string };

export type HomeContent = {
  seo: SeoFields;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    /** One-line value lock-up under the title (optional) */
    valueLine?: string;
    primaryCta: PageCta;
    secondaryCta: PageCta;
    tertiaryCta?: PageCta;
    /** Short credibility bullets shown under hero CTAs */
    trustBullets: string[];
    /** Optional text link under CTAs (e.g. anchor to path section) */
    belowCtaLink?: { href: string; label: string };
    /** Optional supporting photo (path from `mediaUrl`, e.g. local `/media/...`) */
    heroImage?: { src: string; alt: string };
  };
  /** Short mission / credibility copy (no testimonial required) */
  credibilityBlock?: {
    title: string;
    body: string;
  };
  /** Heading for the pathway section */
  pillarsSectionTitle: string;
  /** Short intro under the pillars heading */
  pillarsSectionIntro?: string;
  pillars: HomePillar[];
  programsSection: {
    title: string;
    description: string;
    cards: HomeProgramCard[];
  };
  /** Optional kicker displayed above the stats strip */
  statsEyebrow?: string;
  /** Credibility metrics — use verified figures only; omit unverified counts */
  stats?: HomeStat[];
  /** Optional social proof quote */
  testimonial?: HomeTestimonial;
  /** Field photos + optional portrait row (no quoted testimonials unless staff-approved copy is set elsewhere) */
  communityImagery?: {
    title: string;
    intro: string;
    photos: { src: string; alt: string }[];
    /** Small portraits — pair with real quotes in `testimonial` or staff-approved landing copy */
    memberPortraits?: { src: string; alt: string }[];
  };
  /** Optional partner / collaborator row */
  partnerStrip?: {
    headline: string;
    partners: HomePartnerPlaceholder[];
  };
  midCta?: {
    title: string;
    description?: string;
    primary: { href: string; label: string };
    secondary?: { href: string; label: string };
  };
  /** Cross-links so the homepage never feels like a dead end */
  ecosystemSection?: {
    title: string;
    description: string;
    links: HomeEcosystemLink[];
  };
  /** Short FAQ block — no FAQPage JSON-LD on home (use `/faq/` for rich results). */
  faqSection?: {
    title: string;
    intro?: string;
    items: { question: string; answer: string }[];
  };
  /** “Not sure where to start?” widget — title and intro only; logic lives in UI */
  startHelper?: {
    title: string;
    intro: string;
  };
};

/** Q&A pair for marketing `faq` sections and shared FAQ UI */
export type MarketingFaqItem = { question: string; answer: string };

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
  | { type: "bulletList"; title?: string; items: string[] }
  | { type: "faq"; heading?: string; intro?: string; items: MarketingFaqItem[] };

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
  /** Optional internal note — not rendered in `FunnelStatsBar` */
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
  /** Internal / CRM note — not shown on the public form */
  integrationNote?: string;
  /** Campaign / segment id sent as `source` (hidden) */
  sourceSlug?: string;
  /** Public path for attribution, e.g. `/energysaversnetwork/` (hidden as `page`) */
  page?: string;
  /** Label for GHL mapping, e.g. `energy-savers-updates` (hidden as `formName`) */
  formName?: string;
  /** Funnel intent for CRM / webhook mapping (hidden field `intent`) */
  intent?: string;
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
    }
  | { type: "leadCapture"; data: LeadCaptureBlock };

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
  /** Paid / priority placement hook — sort spotlights with `featured` first in UI */
  featured?: boolean;
  /**
   * Staff- or algorithm-picked recommendations — UI lane for “recommended pros”
   * (monetization-ready; can pair with featured or stand alone).
   */
  recommended?: boolean;
  /** Lower sorts earlier among peers when wired to API sort */
  listingPriority?: number;
  /** Small labels, e.g. “Certified”, “Featured” */
  badges?: readonly string[];
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
  /** Monetization / matchmaking: lower sorts earlier among peers */
  listingPriority?: number;
  /** Spotlight in matchmaking and category cards when space is limited */
  featured?: boolean;
  /** Display chips — “Featured”, “Green Built Homes”, etc. */
  badges?: readonly string[];
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
  /** Mobile sticky bar — defaults to matchmaking if omitted */
  stickyCta?: PageCta;
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
