import type { NativePost } from "@/lib/content-types";

/** Search-friendly explainer — native summary; canonical path preserved from WordPress. */
export const postLowerCarbonFootprintHome: NativePost = {
  path: "/lower-carbon-footprint-home/",
  slug: "lower-carbon-footprint-home",
  title: "Lower Carbon Footprint Home",
  excerpt:
    "Cutting a home’s carbon footprint is less about one silver bullet and more about how efficiency, fuel choice, and durability stack together over decades—especially in a mountain climate.",
  publishedAt: "2015-05-19T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Green Building", "Energy"],
  tags: ["carbon footprint", "efficiency", "electrification", "WNC"],
  seo: {
    title: "Lower Carbon Footprint Home | Green Built Alliance",
    description:
      "Practical ways to reduce a home’s carbon footprint: envelope quality, efficient systems, responsible materials, and program-verified performance in Western North Carolina.",
  },
  introLeadCapture: {
    headline: "Program & class updates",
    subheadline: "Occasional emails on green building, energy programs, and events in our region.",
    fieldLabel: "Email",
    submitLabel: "Keep me posted",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-carbon-footprint",
    page: "/lower-carbon-footprint-home/",
    formName: "native-post-alliance-updates",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Carbon isn’t an abstract score on a brochure—it’s the sum of operating energy, embodied materials, maintenance, and how long assemblies last before they’re torn out. A lower-carbon home tightens that stack: less waste in construction, fewer emergency replacements, and mechanical systems that don’t fight the envelope.",
        "In Western North Carolina, humidity, solar gain, and mixed fuel choices all matter. Electrification paired with a strong envelope can be a powerful combo, but the right sequence still depends on your existing home, budget, and grid realities.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Where to focus first",
    },
    {
      type: "bulletList",
      items: [
        "Air sealing and insulation that match your climate zone—not generic R-value memes.",
        "Right-sized HVAC, ventilation, and moisture control so equipment isn’t compensating for sloppy shells.",
        "Durable details that avoid hidden rot (flashing, drainage, and material choices that tolerate wetting).",
        "When you’re ready, layered electrification and renewables sized to real loads.",
      ],
    },
    {
      type: "cta",
      title: "Go deeper with trusted programs",
      body: "Certification and local pros help you document performance—not just intent.",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
    },
  ],
};
