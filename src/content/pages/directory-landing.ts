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
      primaryCta: { href: "/directory/builders/", label: "Browse builders" },
      secondaryCta: { href: "/membership/", label: "Get listed as a member" },
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
        "You’re on the native entry point for the directory experience. Featured category pages and spotlight member profiles are native; full legacy grids, unregistered member IDs, and search still use WordPress until the directory API is connected.",
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
      placeholderNote: "Update with verified directory size / member counts when ready.",
      stats: [
        { value: "30+", label: "Directory categories & specialties", isPlaceholder: true },
        { value: "WNC", label: "Focused on Western North Carolina", isPlaceholder: false },
        { value: "Member", label: "Backed by Alliance membership & ethics", isPlaceholder: false },
        { value: "Native+", label: "Key category hubs + legacy profiles", isPlaceholder: false },
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
          title: "Explore everything else",
          bullets: [
            "Consultants, finishes, engineers, attorneys, and more",
            "Native consultants hub plus legacy browse for long-tail categories",
          ],
          cta: { href: "/directory/consultants/", label: "Consultants" },
        },
      ],
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Not Sure Where to Start?",
      subheadline:
        "Homeowners: Energy Savers. Builders & pros: CE classes, Green Built Homes, or membership to get listed.",
      primaryCta: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
      secondaryCta: {
        href: "/events/continuing-education-courses/",
        label: "Continuing education",
      },
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
