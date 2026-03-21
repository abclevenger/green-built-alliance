import type { NativePost } from "@/lib/content-types";

/** Building science + homeowner relevance — moisture and drainage fundamentals. */
export const postMoistureDrainageManagement: NativePost = {
  path: "/moisture-drainage-management/",
  slug: "moisture-drainage-management",
  title: "Moisture & Drainage Management",
  excerpt:
    "Moisture ruins more buildings than almost anything else. Managing bulk water, drying, and capillary flow is how you protect structure, indoor air, and energy investments over the long haul.",
  publishedAt: "2015-05-12T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Building Science", "Durability"],
  tags: ["moisture", "drainage", "durability", "WNC"],
  seo: {
    title: "Moisture & Drainage Management | Green Built Alliance",
    description:
      "Moisture and drainage strategies for durable green homes in Western NC—why flashing, rainscreens, and ventilation matter, and where to find trained pros and classes.",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Water always finds the path of least resistance. Roofs, walls, foundations, and mechanical systems all interact—especially when humidity swings or wind-driven rain stacks up against cladding.",
        "Good drainage isn’t a single product; it’s a sequence: keep water out, give it a way out when it gets in, and let assemblies dry before mold or rot take hold.",
      ],
    },
    {
      type: "bulletList",
      title: "Checklist mindset",
      items: [
        "Grade, gutters, and foundation drainage that move water away from the shell",
        "Layered water-resistive barriers and taped penetrations",
        "Ventilation and dehumidification matched to enclosure tightness",
        "Regular maintenance on the parts homeowners actually touch",
      ],
    },
    {
      type: "cta",
      title: "Dig deeper with pros",
      body: "Continuing education and the directory connect you with teams that detail for local weather.",
      primary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
      secondary: { href: "/directory/consultants/", label: "Find consultants" },
    },
  ],
  footerLeadCapture: {
    headline: "Homeowner energy & durability tips",
    subheadline: "Energy Savers Network—practical guidance for WNC residents.",
    fieldLabel: "Email",
    submitLabel: "Energy Savers updates",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-moisture-esn",
    page: "/moisture-drainage-management/",
    formName: "native-post-energy-savers",
  },
};
