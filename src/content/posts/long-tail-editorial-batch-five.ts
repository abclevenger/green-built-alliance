import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/** Fifth editorial batch — mirror-aligned titles/dates; pair with Leigha certification series where noted. */
export const longTailEditorialPostsFive: NativePost[] = [
  {
    path: "/margaret-chandler-tree-preservation/",
    slug: "margaret-chandler-tree-preservation",
    title: "Tree Preservation",
    excerpt:
      "Mature trees shade loads, support wildlife, and define place—protect them through design, fencing, and careful construction sequencing.",
    publishedAt: "2015-08-06T18:07:00.000Z",
    updatedAt: "2023-05-30T18:31:32.000Z",
    author: { name: "Margaret Chandler" },
    categories: ["Magazine Articles", "Sustainable Site & Landscape"],
    tags: ["trees", "site planning", "WNC"],
    seo: {
      title: "Tree Preservation on Building Sites | Green Built Alliance",
      description:
        "Why preserving significant trees matters for comfort, ecology, and property value—and how to protect root zones during construction in WNC.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "A healthy canopy cuts summer cooling loads, frames views, and provides habitat. Loss is often irreversible on a human timescale, so decisions at platting and schematic design matter more than last-minute saves.",
          "Work with arborists or landscape architects when grading, drives, or utilities threaten critical root zones. Temporary fencing, limits on material storage, and staged excavation reduce compaction and bark damage.",
        ],
      },
      {
        type: "cta",
        title: "Related",
        primary: { href: "/site-planning/", label: "Site planning" },
        secondary: { href: "/more-on-site-planning/", label: "More on site planning" },
      },
    ],
  },
  {
    path: "/106-feature-americorps-recovery-project-energize-in-wnc/",
    slug: "106-feature-americorps-recovery-project-energize-in-wnc",
    title: "Feature: AmeriCorps Recovery Project Energize in WNC",
    excerpt:
      "AmeriCorps service has long supported community recovery and efficiency work—this archive feature highlights how national volunteer programs touched WNC.",
    publishedAt: "2010-03-23T03:46:00.000Z",
    updatedAt: "2023-05-16T18:08:26.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["General Green Building", "Magazine Articles"],
    tags: ["AmeriCorps", "community", "archive"],
    seo: {
      title: "AmeriCorps Recovery Project Energize in WNC | Green Built Alliance",
      description:
        "Archived magazine feature on AmeriCorps and community energy recovery efforts connected to Green Built Alliance’s regional work.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "AmeriCorps channels federal service into local priorities—from weatherization education to disaster recovery. In Western North Carolina, those threads connect to today’s Energy Savers Network and volunteer-led efficiency outreach.",
          "Programs and funding evolve; treat dates and program names as historical context and confirm current opportunities through official AmeriCorps and partner channels.",
        ],
      },
      {
        type: "cta",
        title: "Today’s programs",
        primary: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
        secondary: { href: "/support-our-work/", label: "Support our work" },
      },
    ],
  },
  {
    path: "/leigha-dickens-coulda-would-shoulda/",
    slug: "leigha-dickens-coulda-would-shoulda",
    title: "Coulda, Woulda, Shoulda: (Flawed) Reasons People Don’t Use Green Building Certification Programs",
    excerpt:
      "Common excuses for skipping third-party certification—and why many collapse under the weight of liability, resale, and performance reality.",
    publishedAt: "2017-11-17T20:49:00.000Z",
    updatedAt: "2023-07-04T15:58:47.000Z",
    author: { name: "Leigha Dickens" },
    categories: ["Green Built Homes", "Certification"],
    tags: ["certification", "builders", "editorial"],
    seo: {
      title: "Why People Skip Green Certification (Flawed Reasons) | Green Built Alliance",
      description:
        "Leigha Dickens on weak rationales for avoiding green building certification—and what third-party programs still buy you in NC.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Patterns worth questioning",
        items: [
          "“We build better than code already” — without testing, that claim rarely ages well",
          "“Certification is just paperwork” — paperwork is how accountability survives turnover",
          "“Buyers don’t care” — many care once utility and health costs show up in year two",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Certification is not a personality contest; it is a structured set of checks that align marketing with measurable outcomes. The follow-up pieces in this series explore what can go wrong without that structure—and how to navigate the process productively.",
        ],
      },
      {
        type: "cta",
        title: "Series",
        primary: { href: "/five-mistakes-that-green-building-certifications-can-catch/", label: "Five mistakes certifications catch" },
        secondary: { href: "/the-process-of-getting-a-green-building-certification/", label: "Certification process" },
      },
    ],
  },
  {
    path: "/five-simple-ways-to-support-green-building-this-giving-season/",
    slug: "five-simple-ways-to-support-green-building-this-giving-season",
    title: "Five Simple Ways to Support Green Building This Giving Season",
    excerpt:
      "From #GivingTuesday to year-end gifts—practical ways donors amplify education, certification, and community programs in WNC.",
    publishedAt: "2018-11-27T01:25:00.000Z",
    updatedAt: "2023-07-05T16:33:55.000Z",
    author: { name: "Cari Barcas" },
    categories: ["Community", "Green Built Alliance News"],
    tags: ["giving", "donate", "holidays"],
    seo: {
      title: "Support Green Building This Giving Season | Green Built Alliance",
      description:
        "Five approachable ways to back green building in Western North Carolina—membership, events, volunteering, and philanthropy.",
      ogImage: og,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Ideas",
        items: [
          "Make a directed gift to programs you have seen work in your neighborhood",
          "Renew or upgrade membership so pros stay visible in the directory",
          "Sponsor or attend an event that trains trades and homeowners",
          "Share native articles and resources instead of outdated PDFs",
          "Connect employers and schools to workshops on efficiency and resilience",
        ],
      },
      {
        type: "cta",
        title: "Give",
        primary: { href: "/support-our-work/", label: "Support our work" },
        secondary: { href: "/membership/", label: "Membership" },
      },
    ],
  },
  {
    path: "/residential-green-certification-program-guide/",
    slug: "residential-green-certification-program-guide",
    title: "Residential Green Certification Program Guide",
    excerpt:
      "Orientation to major residential labels—what they optimize, how verification differs, and how to pick a path that matches your project.",
    publishedAt: "2018-10-12T20:56:00.000Z",
    updatedAt: "2023-06-27T14:40:06.000Z",
    author: { name: "Leigha Dickens" },
    categories: ["Green Built Homes", "Certification"],
    tags: ["LEED", "Energy Star", "Green Built Homes", "guide"],
    seo: {
      title: "Residential Green Certification Program Guide | Green Built Alliance",
      description:
        "Compare residential green certification options in context—performance emphasis, verifier roles, and how programs overlap in North Carolina.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "No label replaces a good team, but labels make tradeoffs explicit. Some programs weight energy heavily; others add materials, water, or resilience credits. Ask which checklist version applies and who holds the rater or verifier contract.",
          "Green Built Homes remains the regional anchor for many WNC projects; national programs can complement when financing or marketing requires them. Align early so you are not paying for redundant documentation.",
        ],
      },
      {
        type: "cta",
        title: "Local program",
        primary: { href: "/green-built-homes/", label: "Green Built Homes" },
        secondary: { href: "/green-built-nc-beyond-energy-star/", label: "Beyond Energy Star" },
      },
    ],
  },
  {
    path: "/the-process-of-getting-a-green-building-certification/",
    slug: "the-process-of-getting-a-green-building-certification",
    title: "The Process of Getting a Green Building Certification",
    excerpt:
      "A practical walkthrough: team roles, design milestones, inspections, and close-out paperwork—so certification feels like a schedule, not a surprise.",
    publishedAt: "2018-09-10T19:38:00.000Z",
    updatedAt: "2023-07-18T19:06:02.000Z",
    author: { name: "Leigha Dickens" },
    categories: ["Green Built Homes", "Certification"],
    tags: ["process", "HERS", "builders"],
    seo: {
      title: "The Process of Green Building Certification | Green Built Alliance",
      description:
        "Step-oriented look at green home certification—who does what, when raters engage, and how projects finish with defensible documentation.",
      ogImage: og,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Typical rhythm",
        items: [
          "Pre-construction: select program level, assign rater, integrate details into drawings",
          "Rough-in: envelope and mechanical inspections before concealment",
          "Final: testing, commissioning checks, and paperwork sign-off",
        ],
      },
      {
        type: "cta",
        title: "Also read",
        primary: { href: "/leigha-dickens-coulda-would-shoulda/", label: "Coulda, woulda, shoulda" },
        secondary: { href: "/green-built-homes/steps-to-certify-a-home/", label: "Steps to certify" },
      },
    ],
  },
];
