import type { NativePost } from "@/lib/content-types";

export const postComfortAndAshevilleGreenBuilding: NativePost = {
  path: "/comfort-and-asheville-green-building/",
  slug: "comfort-and-asheville-green-building",
  title: "Comfort and Asheville Green Building",
  excerpt:
    "Comfort in the mountains isn’t only thermostat settings—it’s humidity, air movement, insulation, and how the envelope handles summer wetting and winter drafts. Green building practices target those root causes.",
  publishedAt: "2015-05-19T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Homeowners", "Comfort"],
  tags: ["comfort", "Asheville", "humidity", "energy savings"],
  seo: {
    title: "Comfort and Asheville Green Building | Green Built Alliance",
    description:
      "How green building supports comfort in Asheville and WNC: moisture, ventilation, efficiency, and free homeowner resources through the Energy Savers Network.",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "If a home feels muggy in July or drafty in January, the fix might be mechanical—or it might be hidden in the walls. Good green building looks at the whole system: air sealing, insulation quality, glazing and shading, and ventilation that actually moves moisture where you want it.",
        "Asheville’s mix of older housing stock and new infill means strategies differ project to project. What helps a tight new build may not be the first step for a leaky historic cottage.",
      ],
    },
    {
      type: "bulletList",
      title: "Practical starting points",
      items: [
        "Understand recent utility patterns and thermostat habits before big spend",
        "Ask about blower door results or retrofit plans when buying",
        "Prioritize roof and wall details that control moisture, not just R-value marketing",
        "Layer in efficient equipment after—or alongside—envelope fixes",
      ],
    },
    {
      type: "cta",
      title: "Free help for homeowners",
      body: "Energy Savers Network offers regional guidance without sales pressure.",
      primary: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
  footerLeadCapture: {
    headline: "Energy Savers updates",
    subheadline: "Tips and events for cutting waste and bills in WNC.",
    fieldLabel: "Email",
    submitLabel: "Notify me",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-comfort-asheville",
    page: "/comfort-and-asheville-green-building/",
    formName: "native-post-esn",
  },
};
