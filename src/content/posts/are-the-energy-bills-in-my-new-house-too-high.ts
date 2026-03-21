import type { NativePost } from "@/lib/content-types";

/**
 * High-intent homeowner topic — aligns with Energy Savers Network and bill-focused search.
 * Summarized native version; canonical path matches former WordPress permalink.
 */
export const postAreEnergyBillsTooHigh: NativePost = {
  path: "/are-the-energy-bills-in-my-new-house-too-high/",
  slug: "are-the-energy-bills-in-my-new-house-too-high",
  title: "Are the Energy Bills in My New House Too High?",
  excerpt:
    "New homes can still surprise you with utility costs. Here is how to tell whether bills are in a normal range, what often drives spikes, and where to get practical help in Western North Carolina.",
  publishedAt: "2016-08-31T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Energy", "Homeowners"],
  tags: ["energy bills", "utilities", "new home", "Western North Carolina"],
  seo: {
    title: "Are the Energy Bills in My New House Too High? | Green Built Alliance",
    description:
      "Understand what drives high energy bills in a new home, questions to ask your builder or rater, and free local resources through the Energy Savers Network.",
  },
  introLeadCapture: {
    headline: "Free help lowering bills in WNC",
    subheadline:
      "Join the Energy Savers Network for practical tips, events, and trusted guidance—no sales pitch.",
    fieldLabel: "Email",
    submitLabel: "Send me Energy Savers updates",
    trustText: "Unsubscribe anytime. We respect your inbox.",
    sourceSlug: "native-post-energy-bills",
    page: "/are-the-energy-bills-in-my-new-house-too-high/",
    formName: "native-post-energy-bills-intro",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "A new home should be comfortable—but “new” does not automatically mean low bills. Occupancy patterns, thermostat habits, leaky ductwork, misconfigured equipment, and even billing cycles can make the first few statements feel shocking compared to what you expected from marketing materials.",
        "Before assuming something is broken, compare your usage to weather-normalized expectations, check whether fees or rate tiers changed, and confirm major loads (heat pump auxiliary heat, hot water, dehumidification) are behaving as designed.",
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
        "Were blower door, duct leakage, or other performance tests completed—and can you see the results?",
        "Is the HVAC system commissioned (airflow, charge, controls) for our climate and floor plan?",
        "Are windows, shading, and ventilation set up for summer humidity and winter heating loads?",
        "Does the home have a Green Built Homes or similar certificate that documents key efficiency measures?",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Start with data",
      body: "A short history of meter reads, thermostat schedules, and one walkthrough with a knowledgeable rater or auditor usually clarifies whether you have a tuning issue, a defect, or simply higher expectations than the home was designed for.",
    },
    {
      type: "cta",
      title: "Get local support",
      body: "The Energy Savers Network connects residents with workshops, advice, and community resources across our region.",
      primary: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
  footerLeadCapture: {
    headline: "Stay in the loop",
    subheadline: "Program news, classes, and seasonal efficiency tips from Green Built Alliance.",
    fieldLabel: "Email",
    submitLabel: "Subscribe",
    trustText: "Optional—you can unsubscribe any time.",
    sourceSlug: "native-post-energy-bills-footer",
    page: "/are-the-energy-bills-in-my-new-house-too-high/",
    formName: "native-post-alliance-updates",
  },
};
