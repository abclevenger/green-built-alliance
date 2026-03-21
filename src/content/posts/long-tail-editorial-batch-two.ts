import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/** Second long-tail migration batch — TODO:CONTENT staff verification. */
export const longTailEditorialPostsTwo: NativePost[] = [
  {
    path: "/site-specific-considerations-when-building-on-undeveloped-forested-land/",
    slug: "site-specific-considerations-when-building-on-undeveloped-forested-land",
    title: "Site-Specific Considerations When Building on Undeveloped Forested Land",
    excerpt:
      "Forested lots bring slopes, roots, and stormwater puzzles—plan access, clearing, and foundations with ecology in mind.",
    publishedAt: "2018-03-20T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Sustainable Site", "Green Building"],
    tags: ["forest", "site planning", "WNC"],
    seo: {
      title: "Building on Forested Land | Green Built Alliance",
      description:
        "Key considerations for building on undeveloped forested parcels in Western North Carolina—access, stormwater, and trees.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Undisturbed forest moderates moisture and temperature. Removing canopy changes hydrology overnight—plan roads, foundations, and drainage before you clear more than necessary.",
          "Engage survey, soils, and forest health early. Steep slopes, seasonal streams, and root zones can all constrain where homes, drives, and septics belong.",
        ],
      },
      {
        type: "cta",
        title: "Continue reading",
        primary: { href: "/site-planning/", label: "Site planning" },
        secondary: { href: "/know-your-stormwater/", label: "Stormwater" },
      },
    ],
  },
  {
    path: "/green-building-and-the-land-we-build-on/",
    slug: "green-building-and-the-land-we-build-on",
    title: "Green Building and the Land We Build On",
    excerpt:
      "Land is not a blank canvas—soils, water, and habitat set the rules for durable, responsible construction.",
    publishedAt: "2018-04-02T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Sustainable Site", "Green Building"],
    tags: ["land use", "ecology", "WNC"],
    seo: {
      title: "Green Building and the Land | Green Built Alliance",
      description:
        "How land stewardship connects to green building outcomes—water, carbon, and community in Western North Carolina.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "The best buildings respond to topography and microclimate instead of fighting them. That means smaller cuts and fills, protecting mature trees where feasible, and designing stormwater paths that mimic natural flow.",
        ],
      },
    ],
  },
  {
    path: "/preconstruction-land-planning/",
    slug: "preconstruction-land-planning",
    title: "Preconstruction Land Planning",
    excerpt:
      "Before permits and pads, align goals for access, utilities, trees, and views—then test ideas against soils and stormwater reality.",
    publishedAt: "2018-05-10T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Sustainable Site", "Green Building"],
    tags: ["planning", "development", "WNC"],
    seo: {
      title: "Preconstruction Land Planning | Green Built Alliance",
      description:
        "A practical preconstruction checklist for land planning—utilities, erosion control, and design integration.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Early questions",
        items: [
          "Where does water want to go during a 25-year storm?",
          "How will equipment access the build without rutting slopes?",
          "Which trees are worth keeping for shade, wind, and habitat?",
        ],
      },
    ],
  },
  {
    path: "/event-recap-sustainable-home-design-workshops-with-chris-magwood/",
    slug: "event-recap-sustainable-home-design-workshops-with-chris-magwood",
    title: "Event Recap: Sustainable Home Design Workshops with Chris Magwood",
    excerpt:
      "Highlights from hands-on workshops on low-carbon assemblies and integrated design—what stuck with WNC attendees.",
    publishedAt: "2019-09-16T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Events", "Education"],
    tags: ["workshop", "design", "embodied carbon"],
    seo: {
      title: "Chris Magwood Workshops Recap | Green Built Alliance",
      description:
        "Recap of sustainable home design workshops with Chris Magwood hosted by Green Built Alliance in Asheville.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Participants walked away with sharper language for embodied carbon, assembly choices, and the tradeoffs between prescriptive rules and performance paths. The best follow-up is pairing those ideas with local code, supply chains, and skilled labor.",
        ],
      },
      {
        type: "cta",
        title: "Keep learning",
        primary: { href: "/events/", label: "Upcoming events" },
        secondary: { href: "/natural-building/", label: "Natural building" },
      },
    ],
  },
  {
    path: "/green-built-alliance-hosts-asheville-workshop-series-exploring-regenerative-design/",
    slug: "green-built-alliance-hosts-asheville-workshop-series-exploring-regenerative-design",
    title: "Green Built Alliance Hosts Asheville Workshop Series Exploring Regenerative Design",
    excerpt:
      "A multi-part series asked how homes can give back—water, carbon, and habitat—without losing buildability.",
    publishedAt: "2020-02-04T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Events", "Green Built Homes"],
    tags: ["regenerative", "workshop", "Asheville"],
    seo: {
      title: "Regenerative Design Workshop Series | Green Built Alliance",
      description:
        "Overview of Green Built Alliance’s Asheville workshop series on regenerative residential design.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Regenerative themes push beyond efficiency checklists toward measurable ecological benefit. Sessions balanced inspiration with detail: moisture, procurement, and verification still have to work on real budgets.",
        ],
      },
      {
        type: "cta",
        title: "Program context",
        primary: {
          href: "/green-built-homes-evolving-to-encourage-regenerative-design-in-new-home-construction/",
          label: "Regenerative design article",
        },
        secondary: { href: "/green-built-homes/regenerative-certification/", label: "Regenerative certification" },
      },
    ],
  },
  {
    path: "/palimpsest-using-old-to-inform-future-asheville/",
    slug: "palimpsest-using-old-to-inform-future-asheville",
    title: "Palimpsest: Using Old to Inform Future Asheville",
    excerpt:
      "Renovation and adaptive reuse carry embodied carbon savings—and stories—that new slabs cannot replicate.",
    publishedAt: "2019-01-22T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Building", "Community"],
    tags: ["reuse", "Asheville", "history"],
    seo: {
      title: "Palimpsest — Old Informing Future Asheville | Green Built Alliance",
      description:
        "Reflections on adaptive reuse and learning from existing buildings in Asheville’s green building movement.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Layers of older construction tell you where moisture traveled, how additions settled, and which materials lasted. Document those lessons before you strip them away.",
        ],
      },
    ],
  },
  {
    path: "/green-built-alliance-on-asheville-real-estate-news-podcast/",
    slug: "green-built-alliance-on-asheville-real-estate-news-podcast",
    title: "Green Built Alliance on Asheville Real Estate News Podcast",
    excerpt:
      "Program staff and partners discuss what verified green homes mean for buyers and sellers in a hot market.",
    publishedAt: "2020-07-14T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Member News", "Green Built Homes"],
    tags: ["podcast", "real estate", "Asheville"],
    seo: {
      title: "Green Built Alliance on AREN Podcast | Green Built Alliance",
      description:
        "Episode highlights: Green Built Alliance on the Asheville Real Estate News podcast discussing certified homes.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Takeaways for listeners: ask for documentation, understand the difference between marketing labels and third-party verification, and use the member directory to find professionals who already work inside regional programs.",
        ],
      },
      {
        type: "cta",
        title: "Explore",
        primary: { href: "/directory/realtors/", label: "Realtors directory" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
  },
  {
    path: "/share-your-projects-and-expertise-in-2023-green-building-directory/",
    slug: "share-your-projects-and-expertise-in-2023-green-building-directory",
    title: "Share Your Projects and Expertise in the 2023 Green Building Directory",
    excerpt:
      "Members: submit projects and updates for the annual directory—deadlines, assets, and editorial tips.",
    publishedAt: "2022-11-01T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Member News", "Publications"],
    tags: ["directory", "magazine", "members"],
    seo: {
      title: "2023 Green Building Directory — Call for Projects | Green Built Alliance",
      description:
        "How Green Built Alliance members can share projects and expertise for the annual Green Building Directory.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "The directory is both a marketing piece and a community yearbook. High-quality photos, concise metrics, and honest lessons resonate more than generic superlatives.",
        ],
      },
      {
        type: "cta",
        title: "Resources",
        primary: { href: "/magazine/", label: "Magazine hub" },
        secondary: { href: "/membership/", label: "Membership" },
      },
    ],
  },
  {
    path: "/giving-tuesday-2017-appalachian-offsets-isaac-dickson-matching-grant-asheville/",
    slug: "giving-tuesday-2017-appalachian-offsets-isaac-dickson-matching-grant-asheville",
    title: "Giving Tuesday 2017: Appalachian Offsets & Isaac Dickson Matching Grant",
    excerpt:
      "Community donors matched gifts for solar and education—an example of collective climate action in Asheville schools.",
    publishedAt: "2017-11-28T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Community", "Renewable Energy"],
    tags: ["Giving Tuesday", "Appalachian Offsets", "schools"],
    seo: {
      title: "Giving Tuesday 2017 — Appalachian Offsets | Green Built Alliance",
      description:
        "How Giving Tuesday matching supported Appalachian Offsets and Isaac Dickson Elementary solar education in Asheville.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Small gifts stack when matching partners show up. The project combined visible solar on a school roof with curriculum ties—helping students see clean energy as part of daily life.",
        ],
      },
      {
        type: "cta",
        title: "Support",
        primary: { href: "/support-our-work/", label: "Support our work" },
        secondary: { href: "/local-school-gets-solar-makeover-thanks-to-appalachian-offsets/", label: "School solar story" },
      },
    ],
  },
  {
    path: "/green-built-homes-highlights-february-2018-affordable-housing/",
    slug: "green-built-homes-highlights-february-2018-affordable-housing",
    title: "Green Built Homes Highlights — February 2018: Affordable Housing",
    excerpt:
      "Certification and performance language can include affordable housing—case notes from early 2018.",
    publishedAt: "2018-02-28T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Built Homes", "Housing"],
    tags: ["affordable housing", "certification", "highlights"],
    seo: {
      title: "GBH Highlights Feb 2018 — Affordable Housing | Green Built Alliance",
      description:
        "Green Built Homes program highlights focused on affordable housing and verified performance in WNC.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Affordable does not mean disposable. Integrated design, bulk purchasing of efficient kits, and strong partnerships with housing nonprofits can deliver durable, efficient homes without pricing out the people who need them most.",
        ],
      },
    ],
  },
  {
    path: "/green-built-homes-highlights-january-2018-certifications/",
    slug: "green-built-homes-highlights-january-2018-certifications",
    title: "Green Built Homes Highlights — January 2018: Certifications",
    excerpt:
      "A snapshot month of certifications—patterns teams repeated to pass verification smoothly.",
    publishedAt: "2018-01-30T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Built Homes", "Member News"],
    tags: ["certification", "highlights", "2018"],
    seo: {
      title: "GBH Highlights Jan 2018 — Certifications | Green Built Alliance",
      description:
        "January 2018 Green Built Homes certification highlights from Western North Carolina projects.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Patterns that helped",
        items: [
          "Early rater involvement before insulation closed critical details",
          "Photo documentation of air barrier continuity",
          "Checklists shared across trades on site",
        ],
      },
    ],
  },
  {
    path: "/april-fools-humor-our-member-adds-twist-to-passive-solar-design/",
    slug: "april-fools-humor-our-member-adds-twist-to-passive-solar-design",
    title: "April Fools’ Humor: Our Member Adds Twist to Passive Solar Design",
    excerpt:
      "A light April Fools’ nod to passive solar—with real reminders about shading, glazing, and thermal mass.",
    publishedAt: "2018-04-01T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Member News", "Humor"],
    tags: ["April Fools", "passive solar", "design"],
    seo: {
      title: "April Fools — Passive Solar Humor | Green Built Alliance",
      description:
        "Playful April Fools’ piece on passive solar—with real design reminders for WNC builders and homeowners.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Passive solar still needs summer shading, controlled glazing area, and realistic expectations for thermal mass in wood-framed homes. Laugh at the gimmick—then model the seasons.",
        ],
      },
    ],
  },
];
