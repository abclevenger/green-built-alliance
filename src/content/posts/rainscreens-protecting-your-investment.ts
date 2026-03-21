import type { NativePost } from "@/lib/content-types";

/**
 * Canonical WP slug: rainscreens-simple-strategies-for-protecting-ones-biggest-investment
 * Short module filename for maintainability.
 */
export const postRainscreensProtectingInvestment: NativePost = {
  path: "/rainscreens-simple-strategies-for-protecting-ones-biggest-investment/",
  slug: "rainscreens-simple-strategies-for-protecting-ones-biggest-investment",
  title: "Rainscreens: Simple Strategies for Protecting One’s Biggest Investment",
  excerpt:
    "A rainscreen isn’t cosmetic—it’s a drainage and drying strategy that helps siding, sheathing, and insulation survive real weather. Small detailing choices prevent expensive hidden damage.",
  publishedAt: "2015-05-12T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Building Science", "Durability"],
  tags: ["rainscreen", "moisture", "siding", "durability"],
  seo: {
    title: "Rainscreens: Protecting Your Investment | Green Built Alliance",
    description:
      "Learn how rainscreen walls manage moisture behind cladding, reduce paint failure, and protect sheathing—especially in wet WNC climates.",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Water will get past cladding eventually—wind-driven rain, capillary wicking, and construction moisture all see to that. A rainscreen creates a ventilated gap so liquid water can drain and assemblies can dry toward the outside, instead of trapping moisture against the structure.",
        "You don’t need exotic materials to get the idea: consistent furring, drained flashings at openings, and continuity at corners and penetrations matter more than the brand of siding you pick.",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "For homeowners",
      body: "If you’re residing or building new, ask how the wall handles drainage at windows, decks, and roof-wall intersections—those are where failures often start.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why programs care",
    },
    {
      type: "prose",
      paragraphs: [
        "Holistic green programs look beyond energy charts to durability and health. Moisture-managed walls mean fewer mold callbacks, longer paint life, and less hidden rot when you sell.",
      ],
    },
    {
      type: "cta",
      title: "Work with pros who detail for climate",
      body: "Find members who pair building science with local experience.",
      primary: { href: "/find-a-pro/?intent=remodel", label: "Get matched with a pro" },
      secondary: { href: "/directory/builders/", label: "Browse builders" },
    },
  ],
  footerLeadCapture: {
    headline: "Stay current on building science",
    subheadline: "Classes, news, and member resources from Green Built Alliance.",
    fieldLabel: "Email",
    submitLabel: "Subscribe",
    trustText: "Optional—unsubscribe anytime.",
    sourceSlug: "native-post-rainscreens",
    page: "/rainscreens-simple-strategies-for-protecting-ones-biggest-investment/",
    formName: "native-post-building-science",
    intent: "post-rainscreens-building-science",
  },
};
