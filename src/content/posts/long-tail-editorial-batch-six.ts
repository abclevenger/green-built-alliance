import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/** Sixth editorial batch — GBH program history, certification landscape, and incentives context. */
export const longTailEditorialPostsSix: NativePost[] = [
  {
    path: "/maggie-leslie-leaner-and-greener-green-built-homes-rolls-out-updated-checklist-new-certifications/",
    slug: "maggie-leslie-leaner-and-greener-green-built-homes-rolls-out-updated-checklist-new-certifications",
    title: "Leaner and Greener: Green Built Homes Rolls Out Updated Checklist, New Certifications",
    excerpt:
      "As codes and products advanced, Green Built Homes iterated its checklist—streamlining paperwork while raising the bar on outcomes builders can document.",
    publishedAt: "2019-10-14T18:33:00.000Z",
    updatedAt: "2023-05-23T16:26:48.000Z",
    author: { name: "Maggie Leslie" },
    categories: ["Green Built Homes", "Magazine Articles"],
    tags: ["certification", "checklist", "program updates"],
    seo: {
      title: "Leaner & Greener — Green Built Homes Checklist Update | Green Built Alliance",
      description:
        "How Green Built Homes updated its certification checklist and levels to match modern codes and technology in North Carolina.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Voluntary programs stay relevant when they track code, climate, and market reality. Checklist updates aim to reduce busywork while keeping third-party verification meaningful for buyers and lenders.",
          "Teams should confirm which program version applies to their permit date and coordinate early with raters so details in the field match the paperwork at close.",
        ],
      },
      {
        type: "cta",
        title: "Current program",
        primary: { href: "/green-built-homes/", label: "Green Built Homes" },
        secondary: { href: "/green-built-homes/green-built-certifications-current/", label: "Certifications today" },
      },
    ],
  },
  {
    path: "/130-biodiesel/",
    slug: "130-biodiesel",
    title: "Biodiesel",
    excerpt:
      "Archive overview of biodiesel beyond on-road diesel—stationary engines, heating, and regional fuel quality context (historical piece; verify current regulations and supply).",
    publishedAt: "2008-02-02T07:38:00.000Z",
    updatedAt: "2023-05-16T18:15:44.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Alternative/Renewable Energy", "Magazine Articles"],
    tags: ["biodiesel", "fuels", "archive"],
    seo: {
      title: "Biodiesel — Archive | Green Built Alliance",
      description:
        "Historical magazine content on biodiesel uses and benefits—use as background; confirm modern codes, warranties, and fuel availability before specifying.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "This article predates today’s electric heat pumps and stringent diesel emissions rules. It remains useful as a snapshot of how renewable liquid fuels were discussed in the green building community.",
          "Before adopting any on-site fuel strategy, align with equipment manufacturers, insurers, and current NC and federal requirements.",
        ],
      },
      {
        type: "cta",
        title: "Today’s options",
        primary: { href: "/green-building-resources/alternative-renewable-energy/", label: "Renewable energy resources" },
        secondary: { href: "/support-clean-energy/", label: "Support clean energy" },
      },
    ],
  },
  {
    path: "/regenerative-design-green-built-homes-certification-evolves-with-updated-checklist/",
    slug: "regenerative-design-green-built-homes-certification-evolves-with-updated-checklist",
    title: "Regenerative Design: Green Built Homes Certification Evolves with Updated Checklist",
    excerpt:
      "Program updates that reward regenerative thinking—site, water, materials, and long-horizon performance alongside measurable energy targets.",
    publishedAt: "2019-10-03T00:28:00.000Z",
    updatedAt: "2023-05-23T16:21:46.000Z",
    author: { name: "Maggie Leslie" },
    categories: ["Green Built Homes", "Sustainable Site & Landscape"],
    tags: ["regenerative design", "certification", "checklist"],
    seo: {
      title: "Regenerative Design & Green Built Homes | Green Built Alliance",
      description:
        "How Green Built Homes woven regenerative design concepts into an updated certification checklist for North Carolina homes.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Regenerative design asks what the land, water, and occupants need over decades—not only whether a house hits an energy target this year. Program updates have sought to credit that wider lens while keeping verification practical for builders.",
          "Pair program requirements with native articles on site planning, stormwater, and the evolving regenerative professional path where applicable.",
        ],
      },
      {
        type: "cta",
        title: "Also read",
        primary: {
          href: "/green-built-homes-evolving-to-encourage-regenerative-design-in-new-home-construction/",
          label: "GBH & regenerative design (2022)",
        },
        secondary: { href: "/green-built-homes/regenerative-certification/", label: "Regenerative certification" },
      },
    ],
  },
  {
    path: "/107-feature-certification-programs/",
    slug: "107-feature-certification-programs",
    title: "Feature: Certification programs",
    excerpt:
      "Archive field guide to green home labels—how to compare local and national programs when you are shopping for or building a certified home.",
    publishedAt: "2010-03-23T03:49:00.000Z",
    updatedAt: "2023-05-23T16:21:47.000Z",
    author: { name: "Maggie Leslie" },
    categories: ["General Green Building", "Magazine Articles"],
    tags: ["certification", "buyers", "archive"],
    seo: {
      title: "Green Home Certification Programs — Feature | Green Built Alliance",
      description:
        "Historical feature comparing green home certification labels—pair with current GBH pages and updated program guides for North Carolina.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Labels proliferated as the green market grew. The useful question for any badge is still: what was verified, by whom, and with what tests? Use this piece for historical framing, then confirm current offerings with builders and raters.",
        ],
      },
      {
        type: "cta",
        title: "Up to date",
        primary: { href: "/residential-green-certification-program-guide/", label: "Residential certification guide" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
  },
  {
    path: "/maggie-leslie-incentives-for-building-green/",
    slug: "maggie-leslie-incentives-for-building-green",
    title: "Incentives for Building Green",
    excerpt:
      "Orientation to utility programs, policy backdrop, and why incentive stacks change—always confirm current offers with utilities and tax professionals.",
    publishedAt: "2014-08-27T18:23:00.000Z",
    updatedAt: "2023-06-05T17:58:18.000Z",
    author: { name: "Maggie Leslie" },
    categories: ["Energy Tax Credits", "Magazine Articles"],
    tags: ["incentives", "utilities", "NC"],
    seo: {
      title: "Incentives for Building Green | Green Built Alliance",
      description:
        "Context on green building incentives in North Carolina—utilities, policy, and tax themes; verify eligibility and dates before claiming benefits.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Incentive menus shift with legislation, commission decisions, and utility business plans. The durable strategy is to design a great envelope and right-sized systems first, then layer incentives that fit—rather than chasing rebates that may sunset mid-project.",
        ],
      },
      {
        type: "cta",
        title: "Starting points",
        primary: { href: "/green-building-resources/financial-incentives/", label: "Financial incentives hub" },
        secondary: { href: "/green-building-resources/government-resources/", label: "Government resources" },
      },
    ],
  },
];
