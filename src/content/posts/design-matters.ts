import type { NativePost } from "@/lib/content-types";

/** Professional value / process — native summary; canonical path from WordPress. */
export const postDesignMatters: NativePost = {
  path: "/design-matters/",
  slug: "design-matters",
  title: "Design Matters",
  excerpt:
    "Good design isn’t only aesthetics—it’s how a building meets sun, wind, rain, and the people inside. Early design choices lock in performance, cost, and comfort for decades.",
  publishedAt: "2015-05-05T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Design", "Green Building"],
  tags: ["design", "performance", "early decisions", "WNC"],
  seo: {
    title: "Design Matters | Green Built Alliance",
    description:
      "Why integrated design matters for green homes: orientation, envelope, and systems planned together—plus where to learn more through Green Built Alliance programs and CE.",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "The cheapest time to get daylight, shading, and ventilation right is when lines are still on paper—or before foundations define what you can fix later. Design is where energy, durability, and indoor air quality stop being add-ons and become the plan.",
        "In practice, that means architects, builders, raters, and key trades in the same conversation early—not a cascade of change orders after the roof is on.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What “good” looks like",
    },
    {
      type: "bulletList",
      items: [
        "Clear performance targets the team can measure (and verify)",
        "Details for water, air, and vapor that match our climate",
        "Room for efficient equipment and future upgrades like solar",
        "Materials and ventilation choices that support health at move-in",
      ],
    },
    {
      type: "cta",
      title: "Go deeper with training & programs",
      body: "CE classes and Green Built Homes help teams align on the same playbook.",
      primary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
  footerLeadCapture: {
    headline: "Professional updates",
    subheadline: "Classes, certification news, and member opportunities in WNC.",
    fieldLabel: "Email",
    submitLabel: "Subscribe",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-design-matters",
    page: "/design-matters/",
    formName: "native-post-pro-updates",
  },
};
