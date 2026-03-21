import type { NativePost } from "@/lib/content-types";

export const postNaturalBuilding: NativePost = {
  path: "/natural-building/",
  slug: "natural-building",
  title: "Natural Building",
  excerpt:
    "Natural building emphasizes low-impact materials, craft, and climate-appropriate assemblies—often alongside modern code and performance goals. It’s a mindset as much as a material palette.",
  publishedAt: "2015-05-05T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Green Building", "Materials"],
  tags: ["natural building", "materials", "durability", "regional"],
  seo: {
    title: "Natural Building | Green Built Alliance",
    description:
      "Overview of natural building ideas in context: materials, moisture management, codes, and how regional education and directory pros can help.",
  },
  introLeadCapture: {
    headline: "Green building & class news",
    subheadline: "Workshops, articles, and program updates from Green Built Alliance.",
    fieldLabel: "Email",
    submitLabel: "Keep me posted",
    trustText: "Optional—unsubscribe anytime.",
    sourceSlug: "native-post-natural-building",
    page: "/natural-building/",
    formName: "native-post-alliance-news",
    intent: "post-natural-building-news",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Straw, clay, timber, and other “natural” materials can offer beautiful, low-carbon stories—but they still have to manage moisture, fire, structure, and occupant health like any other assembly. The best projects pair craft with building science and clear documentation.",
        "Western North Carolina’s humidity and mixed seasons reward details: capillary breaks, drying paths, and realistic maintenance expectations—not just inspirational photos.",
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Codes & insurance",
      body: "Always confirm how unconventional assemblies meet local code and insurer expectations before you fall in love with a single technique.",
    },
    {
      type: "cta",
      title: "Connect with practitioners",
      body: "Use classes and the member directory to find teams who’ve built similar projects here.",
      primary: { href: "/find-a-pro/?intent=design", label: "Get matched with a designer" },
      secondary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
    },
  ],
};
