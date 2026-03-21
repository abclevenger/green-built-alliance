import type { NativePost } from "@/lib/content-types";

/** Migrated summary from legacy WordPress article; verify with program staff. */
export const postSitePlanning: NativePost = {
  path: "/site-planning/",
  slug: "site-planning",
  title: "Site Planning",
  excerpt:
    "How you place a home on the lot shapes sun, wind, drainage, and vegetation. Strong site planning supports efficiency, comfort, and long-term landscape health.",
  publishedAt: "2015-02-09T10:00:00.000Z",
  updatedAt: "2023-05-16T17:57:17.000Z",
  author: { name: "Integritive" },
  categories: ["Green Built Alliance News"],
  tags: ["site planning", "orientation", "sustainability"],
  seo: {
    title: "Site Planning | Green Built Alliance",
    description:
      "Orientation, drainage, and preserving site character—foundations of green site planning for homes in Western North Carolina.",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Before foundations and floor plans dominate the conversation, site planning asks where the building should sit relative to sun paths, prevailing breezes, slopes, and existing trees. Those decisions are hard to undo later.",
        "In mountain and foothill lots, drainage and access often drive feasibility as much as views. Layering goals—solar gain in winter, shading in summer, minimal grading—usually requires tradeoffs your team can model early.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Questions worth asking",
    },
    {
      type: "bulletList",
      items: [
        "Where does water flow during heavy rain, and how will drives and walks change that?",
        "Which trees are worth keeping for shade, windbreak, or soil stability?",
        "How does glazing orientation align with passive solar opportunities and overheating risk?",
        "How will construction traffic and staging limit disturbance to soils you want to protect?",
      ],
    },
    {
      type: "cta",
      title: "Start with the right design partners",
      body: "Early site decisions pair with architects, landscape partners, and programs that document performance.",
      primary: { href: "/find-a-pro/?intent=design", label: "Find a designer or architect" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
  footerLeadCapture: {
    headline: "Site planning & green home help",
    subheadline: "We’ll share classes, articles, and ways to connect with members who plan for sun, water, and slope.",
    fieldLabel: "Email",
    submitLabel: "Send me updates",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-site-planning",
    page: "/site-planning/",
    formName: "native-post-site-planning-updates",
    intent: "post-site-planning-updates",
  },
};
