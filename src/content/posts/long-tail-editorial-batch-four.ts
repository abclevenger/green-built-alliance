import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/** Fourth long-tail batch — TODO:CONTENT staff verification; titles/dates from Yoast mirror metadata. */
export const longTailEditorialPostsFour: NativePost[] = [
  {
    path: "/is-it-just-me/",
    slug: "is-it-just-me",
    title: "Is it just me?",
    excerpt:
      "Energy and infrastructure failures make headlines—cleaner generation and efficient buildings reduce harm where policy lags.",
    publishedAt: "2014-02-21T10:00:00.000Z",
    updatedAt: "2023-05-16T17:57:34.000Z",
    author: { name: "Integritive" },
    categories: ["Energy", "Policy"],
    tags: ["infrastructure", "fossil fuels", "editorial"],
    seo: {
      title: "Is It Just Me? Energy & Infrastructure | Green Built Alliance",
      description:
        "Reflection on energy-related spills and infrastructure risk—and why efficiency and clean power still matter locally.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "When trains derail, pipelines leak, or ash ponds fail, the news cycle moves on—but communities live with the consequences. Electrification and efficiency do not erase upstream harm by themselves, yet they shrink the throughput of risky fuel cycles and give households more resilience against price shocks.",
        ],
      },
      {
        type: "cta",
        title: "Act",
        primary: { href: "/support-clean-energy/", label: "Support clean energy" },
        secondary: { href: "/green-building-news/", label: "Green building news" },
      },
    ],
  },
  {
    path: "/five-mistakes-that-green-building-certifications-can-catch/",
    slug: "five-mistakes-that-green-building-certifications-can-catch",
    title: "Five Mistakes that Green Building Certifications Can Catch",
    excerpt:
      "Third-party programs exist to find the gaps marketing misses—duct leakage, moisture traps, and paperwork that never made it to the field.",
    publishedAt: "2018-07-20T00:47:00.000Z",
    updatedAt: "2023-07-05T16:43:33.000Z",
    author: { name: "Leigha Dickens" },
    categories: ["Green Built Homes", "Certification"],
    tags: ["certification", "quality", "builders"],
    seo: {
      title: "Five Mistakes Green Certification Can Catch | Green Built Alliance",
      description:
        "Why third-party green building certification still matters—common failure modes that checklists, inspections, and testing surface before occupancy.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "bulletList",
        title: "What programs pressure-test",
        items: [
          "Continuity of air barrier and insulation versus “looks insulated” assumptions",
          "Ventilation that meets occupancy and tight-envelope needs",
          "Moisture management at windows, decks, and foundation transitions",
          "Equipment and distribution matches the modeled loads",
          "Documentation that matches what was actually built",
        ],
      },
      {
        type: "cta",
        title: "Programs",
        primary: { href: "/green-built-homes/", label: "Green Built Homes" },
        secondary: { href: "/green-built-homes/faq/", label: "GBH FAQ" },
      },
    ],
  },
  {
    path: "/whats-in-a-green-built-home-a-guide-for-homeowners/",
    slug: "whats-in-a-green-built-home-a-guide-for-homeowners",
    title: "What’s In a Green Built Home? A Guide for Homeowners",
    excerpt:
      "A homeowner-friendly lens on what Green Built Homes covers—from envelope and energy to health and water—and how to read claims vs. verified performance.",
    publishedAt: "2022-09-30T21:06:00.000Z",
    updatedAt: "2023-07-17T13:47:18.000Z",
    author: { name: "Leigha Dickens" },
    categories: ["Green Built Homes", "Housing"],
    tags: ["homeowners", "guide", "certification"],
    seo: {
      title: "What’s in a Green Built Home? Homeowner Guide | Green Built Alliance",
      description:
        "Overview of Green Built Homes for buyers and owners in NC—what the program emphasizes and how to ask builders and raters good questions.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Green Built Homes has certified projects for decades. For buyers, the practical question is simple: what was verified, by whom, and with what paperwork? Ask for the specific program level, rater name, and final paperwork you will receive at closing.",
          "Expect attention to the building envelope, mechanical efficiency, ventilation, moisture details, and often materials choices that affect indoor air quality—always interpreted for our mixed-humidity mountain climate.",
        ],
      },
      {
        type: "cta",
        title: "Next",
        primary: { href: "/green-built-nc-beyond-energy-star/", label: "Beyond Energy Star" },
        secondary: { href: "/green-built-homes/steps-to-certify-a-home/", label: "Certification steps" },
      },
    ],
  },
  {
    path: "/rick-bayless-health-considerations-in-a-green-remodel/",
    slug: "rick-bayless-health-considerations-in-a-green-remodel",
    title: "Health Considerations in a Green Remodel: Knowing Your Home’s History is Key",
    excerpt:
      "Older homes hide lead, asbestos, and moisture surprises—testing and sequencing protect both crews and families during green remodels.",
    publishedAt: "2023-02-27T22:07:00.000Z",
    updatedAt: "2023-05-25T15:20:59.000Z",
    author: { name: "Rick Bayless" },
    categories: ["Health & Indoor Air Quality", "Remodeling"],
    tags: ["remodel", "lead", "IAQ"],
    seo: {
      title: "Health in a Green Remodel | Green Built Alliance",
      description:
        "Why knowing your home’s history matters in green remodels—safety, indoor air, and sequencing work before tightening the envelope.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Tightening a home without addressing legacy hazards can concentrate pollutants. Characterize age-of-materials, prior water damage, and known asbestos or lead pathways before aggressive air sealing.",
          "Use qualified professionals for testing and abatement where required; align HVAC and ventilation upgrades with the new leakage profile.",
        ],
      },
      {
        type: "cta",
        title: "Resources",
        primary: { href: "/green-building-resources/remodeling/", label: "Remodeling resources" },
        secondary: { href: "/green-building-resources/health-indoor-air-quality/", label: "Indoor air quality" },
      },
    ],
  },
  {
    path: "/cari-barcas-solar-for-schools/",
    slug: "cari-barcas-solar-for-schools",
    title: "Solar for Schools: Isaac Dickson System Installed After Community Fundraising Campaign",
    excerpt:
      "Community-funded solar at a local school shows how education, philanthropy, and clean power stack together in WNC.",
    publishedAt: "2022-01-30T23:42:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Cari Barcas" },
    categories: ["Alternative/Renewable Energy", "Community"],
    tags: ["solar", "schools", "Asheville"],
    seo: {
      title: "Solar for Schools — Isaac Dickson | Green Built Alliance",
      description:
        "How community fundraising helped bring solar to Isaac Dickson Elementary—an example of local clean-energy momentum in WNC schools.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "School rooftops and carports can anchor visible climate solutions while teaching students how energy works. Successful projects pair technical design with durable financing and maintenance plans so panels stay productive for decades.",
        ],
      },
      {
        type: "cta",
        title: "Programs",
        primary: { href: "/support-clean-energy/", label: "Support clean energy" },
        secondary: { href: "/directory/renewable-energy/", label: "Renewable energy directory" },
      },
    ],
  },
  {
    path: "/susanna-shetley-built-for-the-future/",
    slug: "susanna-shetley-built-for-the-future",
    title: "Built for the Future: Passive Solar Net-Zero Home Made to Last",
    excerpt:
      "Passive solar, durable detailing, and net-zero targets can coexist when orientation, shading, and mechanical design are integrated early.",
    publishedAt: "2021-10-17T23:35:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Susanna Shetley" },
    categories: ["Energy", "Green Building"],
    tags: ["net zero", "passive solar", "case study"],
    seo: {
      title: "Built for the Future — Passive Solar Net-Zero | Green Built Alliance",
      description:
        "Profile themes from a passive-solar, net-zero-capable home—integration of siting, envelope, and renewables for long life in WNC.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Net-zero labels mean little without integrated design: glazing area and shading drive summer comfort, while winter sun must be welcomed without overheating. Pair architectural massing with right-sized HVAC and measured airtightness.",
        ],
      },
      {
        type: "cta",
        title: "Net zero basics",
        primary: { href: "/what-is-a-net-zero-energy-home/", label: "What is net zero?" },
        secondary: { href: "/what-is-a-net-zero-ready-home/", label: "Net zero ready" },
      },
    ],
  },
];
