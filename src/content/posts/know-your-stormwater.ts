import type { NativePost } from "@/lib/content-types";

/** Migrated summary from legacy WordPress article; verify with program staff. */
export const postKnowYourStormwater: NativePost = {
  path: "/know-your-stormwater/",
  slug: "know-your-stormwater",
  title: "Know Your Stormwater",
  excerpt:
    "Why stormwater matters on your site, how it connects to erosion and water quality, and practical steps to plan for runoff during design and construction.",
  publishedAt: "2015-11-02T10:00:00.000Z",
  updatedAt: "2023-05-16T17:56:56.000Z",
  categories: ["Green Built Alliance News"],
  tags: ["stormwater", "site design", "Western North Carolina"],
  seo: {
    title: "Know Your Stormwater | Green Built Alliance",
    description:
      "Understand stormwater basics for residential and small commercial sites—runoff, erosion, and planning considerations in Western North Carolina.",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Stormwater is simply rainwater and snowmelt that flows across roofs, driveways, and bare soil instead of soaking into the ground. On a building site, how you handle that flow affects erosion, neighboring properties, and local streams.",
        "Good site planning starts with knowing where water wants to go naturally, then slowing it down, spreading it out, and giving it a chance to infiltrate before it leaves your lot. That mindset pairs well with green building goals like protecting soils and reducing downstream flooding pressure.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What to think about early",
    },
    {
      type: "bulletList",
      items: [
        "Minimize impervious area where code and function allow—smaller footprints and thoughtful paving reduce peak runoff.",
        "Preserve existing vegetation and organic soil where possible; disturbed compacted soil sheds water faster.",
        "Coordinate roof downspouts, gutters, and foundation drainage with grading so water is directed to stable outlets or infiltration zones.",
        "Check local requirements for erosion control during construction; they exist to keep sediment out of waterways.",
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Professional help",
      body: "Stormwater rules vary by jurisdiction. Use this article as orientation, then confirm details with your designer, engineer, or local permitting office.",
    },
    {
      type: "cta",
      title: "Get site-savvy pros on your team",
      body: "Landscape architects, designers, and builders in our network understand grading and drainage in WNC.",
      primary: { href: "/find-a-pro/?intent=not-sure", label: "Get matched with a pro" },
      secondary: { href: "/directory/landscape-architects/", label: "Landscape architects" },
    },
  ],
  footerLeadCapture: {
    headline: "Stormwater, site design & program news",
    subheadline: "Occasional articles and local resources from Green Built Alliance.",
    fieldLabel: "Email",
    submitLabel: "Notify me",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-stormwater",
    page: "/know-your-stormwater/",
    formName: "native-post-stormwater-updates",
    intent: "post-stormwater-updates",
  },
};
