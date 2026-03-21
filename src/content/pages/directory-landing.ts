import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { FunnelBlock, NativeMarketingPage } from "@/lib/content-types";

/**
 * /directory/ — native landing. Category hubs (`content/directory/categories.ts`) and registry-backed
 * member profiles (`/directory/member-profile/?member-id=`, see `content/directory/members/registry.ts`)
 * are native. Other member IDs, search, and non-whitelisted categories still use WordPress fallback.
 * TODO:DIR_API — Full grid, search, and sync all profiles from MemberPress/API.
 */
const directoryLandingBlocks: FunnelBlock[] = [
  {
    id: "hero",
    type: "hero",
    data: {
      headline: "Find Green Building Pros Who Show Their Work",
      subheadline:
        "The Green Built Alliance directory connects homeowners, developers, and partners with members who invest in education, visibility, and credible practice—not just a splashy landing page.",
      primaryCta: { href: "/find-a-pro/", label: "Get matched with a pro" },
      secondaryCta: { href: "/directory/builders/", label: "Browse builders" },
      visualImageUrl: mediaUrl("directoryHeroForest"),
      visualImageAlt: "Road through green forest in the mountains—regional context for WNC building.",
      visualTagline: "Jump to a category—or join the network.",
    },
  },
  {
    id: "problem",
    type: "problem",
    data: {
      headline: "Sorting Through Listings Shouldn’t Feel Like a Gamble",
      points: [
        "Anyone can say “green”—fewer can document it",
        "National directories ignore regional climate and codes",
        "You need the right specialty, not a random top result",
        "Trust comes from community ties, not ads",
      ],
      closing:
        "We curate this directory around members who align with our mission—so you start closer to a real conversation.",
    },
  },
  {
    id: "solution",
    type: "solution",
    data: {
      headline: "Why Start on This Page",
      subheadline:
        "Start from featured categories and member profiles built for Western North Carolina. Use guided match if you are not sure which trade to open first—we narrow the list by your goal.",
      cards: [
        {
          title: "Mission-aligned listings",
          body: "Members choose to show up here—often alongside Green Built Homes work, classes, and continuing education.",
        },
        {
          title: "Browse by trade",
          body: "Architects, raters, HVAC, inspectors, and more—pick the lane that matches your project stage.",
        },
        {
          title: "Human support",
          body: "If you’re stuck, Energy Savers, program staff, or membership can point you to the right next step.",
        },
      ],
    },
  },
  {
    id: "steps",
    type: "steps",
    data: {
      title: "How to Use the Directory",
      steps: [
        {
          title: "Choose your category",
          description:
            "Open the specialty that fits—new construction, retrofit, design, or performance testing.",
        },
        {
          title: "Scan for fit",
          description:
            "Read profiles for geography, certifications, and services; shortlist a few pros to contact.",
        },
        {
          title: "Ask good questions",
          description:
            "Request references, recent projects, and how they approach energy, moisture, and indoor air in WNC.",
        },
        {
          title: "Loop in programs",
          description:
            "If you’re pursuing Green Built Homes or efficiency programs, mention it early so teams align.",
        },
      ],
    },
  },
  {
    id: "proof",
    type: "proof",
    data: {
      headline: "A Regional Hub, Not a National Pay-to-Play List",
      stats: [
        { value: "By trade", label: "Architects, builders, raters, HVAC, inspectors & more", isPlaceholder: false },
        { value: "WNC", label: "Focused on Western North Carolina", isPlaceholder: false },
        { value: "Member-backed", label: "Profiles tied to Alliance membership", isPlaceholder: false },
        { value: "Guided match", label: "A short wizard when you are unsure where to start", isPlaceholder: false },
      ],
    },
  },
  {
    id: "cats1",
    type: "audienceCards",
    data: {
      cards: [
        {
          title: "Design & build",
          bullets: ["New homes and major renovations", "Design-led teams", "Developers and community projects"],
          cta: { href: "/directory/architects/", label: "Architects" },
        },
        {
          title: "Performance & verification",
          bullets: ["Energy models and ratings", "Testing and commissioning support", "Code and program documentation"],
          cta: { href: "/directory/home-energy-raters/", label: "Home energy raters" },
        },
      ],
    },
  },
  {
    id: "cats2",
    type: "audienceCards",
    data: {
      cards: [
        {
          title: "Trades that shape efficiency",
          bullets: ["Envelope and HVAC performance", "Electrification-ready installs", "Ongoing maintenance partners"],
          cta: { href: "/directory/hvac-installers/", label: "HVAC installers" },
        },
        {
          title: "Buyers & existing homes",
          bullets: ["Due diligence on resale homes", "Safety and durability checks", "Upgrade roadmaps"],
          cta: { href: "/directory/home-inspectors/", label: "Home inspectors" },
        },
      ],
    },
  },
  {
    id: "cats3",
    type: "audienceCards",
    data: {
      cards: [
        {
          title: "Need builders first?",
          bullets: ["Single-family and small multifamily", "Green Built Homes participants", "Local references"],
          cta: { href: "/directory/builders/", label: "Builders" },
        },
        {
          title: "More specialties",
          bullets: [
            "Consultants, engineers, attorneys, and other allied roles",
            "Consultants hub first—then related categories as your project grows",
          ],
          cta: { href: "/directory/consultants/", label: "Browse consultants" },
        },
      ],
    },
  },
  {
    id: "directory-lead",
    type: "leadCapture",
    data: {
      headline: "Get matched with a green professional",
      subheadline:
        "Share your email—we’ll follow up with program options or member introductions that fit your project.",
      fieldLabel: "Email",
      submitLabel: "Request a match",
      trustText: "No spam. Unsubscribe anytime.",
      sourceSlug: "directory-landing",
      page: "/directory/",
      formName: "directory-match-request",
      intent: "directory-landing-match",
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Not Sure Where to Start?",
      subheadline:
        "Try guided match first. Homeowners: Energy Savers. Builders & pros: CE, Green Built Homes, or membership.",
      primaryCta: { href: "/find-a-pro/", label: "Start guided match" },
      secondaryCta: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
    },
  },
];

export const directoryLandingPage: NativeMarketingPage = {
  kind: "conversion-funnel",
  path: "/directory/",
  seo: {
    title: "Directory | Find Green Building Professionals | Green Built Alliance",
    description:
      "Search the Green Built Alliance member directory for architects, builders, raters, HVAC pros, and more—trusted green building experts across Western North Carolina.",
  },
  blocks: directoryLandingBlocks,
};
