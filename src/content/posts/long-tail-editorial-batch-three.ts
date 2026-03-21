import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/** Third long-tail batch — TODO:CONTENT staff verification. */
export const longTailEditorialPostsThree: NativePost[] = [
  {
    path: "/living-in-the-country/",
    slug: "living-in-the-country",
    title: "Living in the Country",
    excerpt:
      "Rural homes mean wells, longer drives, and different infrastructure tradeoffs—plan utilities and resilience up front.",
    publishedAt: "2015-11-03T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Sustainable Site", "Housing"],
    tags: ["rural", "WNC", "planning"],
    seo: {
      title: "Living in the Country | Green Built Alliance",
      description:
        "Considerations for building and living in rural Western North Carolina—utilities, access, and land stewardship.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Septic, water supply, fire access, and internet all shape what “home” costs year to year. Design for maintenance you can actually perform and keep emergency services in mind.",
        ],
      },
      {
        type: "cta",
        title: "Related",
        primary: { href: "/site-planning/", label: "Site planning" },
        secondary: { href: "/know-your-stormwater/", label: "Stormwater" },
      },
    ],
  },
  {
    path: "/on-grid-off-grid-and-tesla-batteries/",
    slug: "on-grid-off-grid-and-tesla-batteries",
    title: "On Grid, Off Grid, and Tesla Batteries",
    excerpt:
      "Backup power dreams meet rate design and safety reality—size expectations before you size inverters.",
    publishedAt: "2016-01-12T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Energy", "Technology"],
    tags: ["solar", "batteries", "grid"],
    seo: {
      title: "On Grid, Off Grid & Home Batteries | Green Built Alliance",
      description:
        "How grid-tied solar, backup batteries, and true off-grid systems differ for homeowners—practical framing for WNC.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Clarify goals",
        items: [
          "Which loads must stay on during an outage—and for how long?",
          "What does your utility allow for export, time-of-use, or standby?",
          "Who maintains the system locally after install?",
        ],
      },
    ],
  },
  {
    path: "/buildings-and-botany/",
    slug: "buildings-and-botany",
    title: "Buildings and Botany",
    excerpt:
      "Plants and buildings share moisture, light, and chemistry—design landscapes that help walls stay dry.",
    publishedAt: "2016-02-09T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Sustainable Site", "Green Building"],
    tags: ["landscape", "moisture", "design"],
    seo: {
      title: "Buildings and Botany | Green Built Alliance",
      description:
        "How vegetation, irrigation, and grading interact with building durability and efficiency in WNC.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Ivy against siding, sprinklers hitting trim, and dense foundation plantings can hide rot. Favor breathable details, generous roof overhangs, and plant choices that do not fight the envelope.",
        ],
      },
    ],
  },
  {
    path: "/climate-change-profits-and-the-encyclical/",
    slug: "climate-change-profits-and-the-encyclical",
    title: "Climate Change, Profits, and the Encyclical",
    excerpt:
      "Markets and morals both push green building—transparent standards help honest businesses win.",
    publishedAt: "2015-10-06T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Community", "Policy"],
    tags: ["climate", "business", "ethics"],
    seo: {
      title: "Climate, Profits & the Encyclical | Green Built Alliance",
      description:
        "Reflection on climate responsibility, profitability, and the role of verified green building programs.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Long-term value shows up in lower operating costs, healthier occupants, and reputations that survive scrutiny. Programs like Green Built Homes make those wins legible to buyers—not just claimed in ad copy.",
        ],
      },
    ],
  },
  {
    path: "/housing-complex/",
    slug: "housing-complex",
    title: "Housing Complex",
    excerpt:
      "Affordability, zoning, and performance goals collide—integrated policy and design can ease the tension.",
    publishedAt: "2016-06-21T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Housing", "Policy"],
    tags: ["affordable housing", "zoning", "WNC"],
    seo: {
      title: "Housing Complex | Green Built Alliance",
      description:
        "Why housing challenges in WNC need both better buildings and better systems—density, finance, and codes.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Efficient construction methods help, but so do land use that reduces sprawl, infrastructure costs, and car dependence. Green building advocates should show up in housing conversations—not only efficiency rebates.",
        ],
      },
    ],
  },
  {
    path: "/time-to-call-your-state-legislators/",
    slug: "time-to-call-your-state-legislators",
    title: "Time to Call Your State Legislators",
    excerpt:
      "North Carolina energy and building policy moves fast—constituent stories shift votes more than jargon.",
    publishedAt: "2017-02-07T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Policy", "Community"],
    tags: ["advocacy", "North Carolina", "energy"],
    seo: {
      title: "Call Your NC Legislators | Green Built Alliance",
      description:
        "How to advocate effectively for clean energy and green building policy with North Carolina legislators.",
      ogImage: og,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Tips",
        items: [
          "Lead with a local story—jobs, bills, or a project people can picture",
          "Ask for specific votes or committee attention, not vague support",
          "Follow up in writing with the same concise message",
        ],
      },
    ],
  },
  {
    path: "/refrigerators-have-become-confusing/",
    slug: "refrigerators-have-become-confusing",
    title: "Refrigerators Have Become Confusing",
    excerpt:
      "Labels, sizes, and ice-makers change energy math—compare carefully and mind kitchen ventilation.",
    publishedAt: "2015-12-01T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Energy Efficiency & Air Sealing", "Appliances"],
    tags: ["appliances", "kitchen", "efficiency"],
    seo: {
      title: "Choosing Efficient Refrigerators | Green Built Alliance",
      description:
        "Cut through refrigerator marketing—what efficiency labels mean and how kitchen design affects performance.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Use EnergyGuide comparisons for similar capacities. Oversized units cycle more; through-door ice and dispensers add load. Pair appliance choices with ventilation that actually captures cooking pollutants.",
        ],
      },
      {
        type: "cta",
        title: "More",
        primary: { href: "/green-building-resources/appliances-lighting/", label: "Appliances & lighting" },
        secondary: { href: "/green-building-resources/health-indoor-air-quality/", label: "Indoor air quality" },
      },
    ],
  },
  {
    path: "/corner-discipline/",
    slug: "corner-discipline",
    title: "Corner Discipline",
    excerpt:
      "Framing corners and intersecting walls are where air barriers fail—detail them like they matter (they do).",
    publishedAt: "2016-03-15T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Energy Efficiency & Air Sealing", "Construction"],
    tags: ["framing", "air barrier", "details"],
    seo: {
      title: "Corner Discipline — Air Barriers | Green Built Alliance",
      description:
        "Why disciplined corner and intersection details matter for air sealing and insulation continuity.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Advanced framing and careful sequencing reduce thermal bridges and leakage at stud packs. Inspect corners before cavity fill—photos beat arguments later.",
        ],
      },
      {
        type: "cta",
        title: "Deep dive",
        primary: { href: "/air-sealing-the-devilish-details/", label: "Air sealing details" },
        secondary: { href: "/green-building-resources/building-envelope/", label: "Building envelope" },
      },
    ],
  },
  {
    path: "/choosing-windows-part-3-materials-exposed-to-the-exterior/",
    slug: "choosing-windows-part-3-materials-exposed-to-the-exterior",
    title: "Choosing Windows, Part 3: Materials Exposed to the Exterior",
    excerpt:
      "Cladding, frame materials, and flashing compatibility decide whether a great U-factor survives the first decade.",
    publishedAt: "2015-09-01T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Building", "Materials"],
    tags: ["windows", "durability", "WNC"],
    seo: {
      title: "Choosing Windows Part 3 — Exterior Materials | Green Built Alliance",
      description:
        "Window durability in WNC: exterior materials, coatings, and flashing partners that survive weather.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Coastal plain humidity, mountain UV, and wind-driven rain all stress sash and frame materials. Match manufacturer instructions to actual exposure and keep continuity from rough opening to drainage plane.",
        ],
      },
    ],
  },
  {
    path: "/does-being-sustainable-mean-you-cant-make-money/",
    slug: "does-being-sustainable-mean-you-cant-make-money",
    title: "Does Being Sustainable Mean You Can’t Make Money?",
    excerpt:
      "Margins and mission can align when efficiency reduces callbacks and reputation drives referrals.",
    publishedAt: "2016-07-19T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Building", "Business"],
    tags: ["business", "sustainability", "profit"],
    seo: {
      title: "Sustainability and Profit | Green Built Alliance",
      description:
        "Why sustainable building practices can strengthen—not weaken—business outcomes for WNC contractors.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Documented performance reduces warranty fights. Crews trained once on air sealing move faster on the next job. Differentiation matters in crowded markets—especially when buyers compare real HERS scores and certifications.",
        ],
      },
    ],
  },
  {
    path: "/nc-power-politics/",
    slug: "nc-power-politics",
    title: "NC Power Politics",
    excerpt:
      "Utility structure and legislative sessions shape what clean options look like on your bill—stay engaged locally.",
    publishedAt: "2017-04-11T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Policy", "Energy"],
    tags: ["North Carolina", "utilities", "politics"],
    seo: {
      title: "NC Power Politics | Green Built Alliance",
      description:
        "Orientation on North Carolina energy politics and why local voices matter for clean power and efficiency.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Tariffs, rider decisions, and renewable access rules change with commissions and the General Assembly. Pair technical upgrades with civic literacy so customers understand what policy giveth and taketh away.",
        ],
      },
    ],
  },
  {
    path: "/more-on-site-planning/",
    slug: "more-on-site-planning",
    title: "More on Site Planning",
    excerpt:
      "Solar access, drainage, and future phases should appear on paper before machines show up.",
    publishedAt: "2015-08-25T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Sustainable Site", "Green Building"],
    tags: ["site planning", "development", "WNC"],
    seo: {
      title: "More on Site Planning | Green Built Alliance",
      description:
        "Additional site planning considerations for Western North Carolina homes—access, sun, and stormwater.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Stack functions: driveways as fire access, swales as play boundaries, tree retention as summer shading. Update the plan when survey or soils data arrives—early drawings are hypotheses, not contracts with the land.",
        ],
      },
      {
        type: "cta",
        title: "Series",
        primary: { href: "/site-planning/", label: "Site planning" },
        secondary: { href: "/preconstruction-land-planning/", label: "Preconstruction land planning" },
      },
    ],
  },
  {
    path: "/greenbuilt-north-carolina-what-you-need-to-know/",
    slug: "greenbuilt-north-carolina-what-you-need-to-know",
    title: "Greenbuilt North Carolina: What You Need to Know",
    excerpt:
      "How regional Green Built programs relate to national labels—and what buyers should verify in NC.",
    publishedAt: "2018-08-14T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Built Homes", "Certification"],
    tags: ["Green Built NC", "certification", "North Carolina"],
    seo: {
      title: "Greenbuilt North Carolina — What to Know | Green Built Alliance",
      description:
        "Overview of Green Built NC and regional certification context for homeowners and builders.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Regional programs speak to local climate, code, and supply chains. Ask professionals which checklist version applies, who the verifier is, and how documentation will be handed off at closing.",
        ],
      },
      {
        type: "cta",
        title: "Explore",
        primary: { href: "/green-built-nc-beyond-energy-star/", label: "Beyond Energy Star" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
  },
];
