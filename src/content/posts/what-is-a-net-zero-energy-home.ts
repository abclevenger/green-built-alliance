import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

/**
 * Migrated from former WordPress article (canonical path preserved).
 * Content summarized for native structured blocks; verify facts with program staff as needed.
 */
export const postWhatIsNetZeroEnergyHome: NativePost = {
  path: "/what-is-a-net-zero-energy-home/",
  slug: "what-is-a-net-zero-energy-home",
  title: "What Is a Net Zero Energy Home?",
  excerpt:
    "A net zero energy home produces as much renewable energy as it uses over a year—paired with a tight, efficient envelope and verified performance through the Green Built Homes program.",
  publishedAt: "2022-10-12T18:06:00.000Z",
  updatedAt: "2023-07-04T15:58:47.000Z",
  author: { name: "Leigha Dickens" },
  categories: ["Green Built Homes", "Net Zero Energy Homes"],
  tags: ["net zero", "green built homes", "energy", "Western North Carolina"],
  seo: {
    title: "What Is a Net Zero Energy Home? | Green Built Alliance",
    description:
      "Learn what net zero energy means for a home, how certification verifies performance, and how to connect with trusted builders and programs in Western North Carolina.",
    ogImage: mediaUrl("ogGbhNetZeroLogo"),
  },
  introLeadCapture: {
    headline: "Want program updates for homeowners?",
    subheadline:
      "Get occasional emails on Green Built Homes, energy programs, and events in Western North Carolina.",
    fieldLabel: "Email",
    submitLabel: "Notify me",
    trustText: "We never sell your address. Unsubscribe anytime.",
    sourceSlug: "native-post-net-zero-energy",
    page: "/what-is-a-net-zero-energy-home/",
    formName: "native-post-net-zero-energy",
    intent: "post-net-zero-energy-intro",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "A net zero energy home is designed and built so that, over a typical year, its onsite renewable energy production offsets the energy the household consumes. That does not mean you never draw from the grid—it means the math balances out when you account for how much clean power you generate and how little energy you waste.",
        "Getting there usually combines three things: a very efficient building shell (insulation, air sealing, windows, and controlled ventilation), efficient systems and appliances, and a rightsized renewable source—most often rooftop solar. The result is lower utility bills, more predictable comfort, and fewer carbon emissions from day-to-day living.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why certification matters",
    },
    {
      type: "prose",
      paragraphs: [
        "Labels on a flyer are not the same as verified performance. Through Green Built Homes, participating builders work through a transparent checklist and third-party verification so buyers and occupants can trust that key health, efficiency, and durability measures were actually implemented—not just promised in marketing copy.",
        "If you are comparing homes, ask how energy use and renewable production were modeled, what testing was performed (for example blower door and duct leakage tests), and which program requirements were met. Strong programs document those answers instead of leaving you to guess.",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Shopping for a home?",
      body: "Start with the Green Built Homes directory and program overview—so you can shortlist builders and listings aligned with documented green performance.",
    },
    {
      type: "cta",
      title: "Green Built Homes",
      body: "See how certification works and connect with homes and professionals in our region.",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/directory/", label: "Find a professional" },
    },
    {
      type: "heading",
      level: 2,
      text: "How this fits Western North Carolina",
    },
    {
      type: "prose",
      paragraphs: [
        "Mountain climates, humidity swings, and mixed heating sources all affect how a home performs. Regional experience matters: local raters, builders, and program staff see which assemblies and mechanical strategies actually hold up here—not just what works in a generic national guide.",
        "Whether you are building new or buying resale, prioritize clarity on operating costs, maintenance, and indoor air quality. Net zero is a powerful target, but the path should still be practical for your budget and timeline.",
      ],
    },
  ],
  footerLeadCapture: {
    headline: "Energy programs & homeowner guidance",
    subheadline: "The Energy Savers Network helps WNC residents cut waste and lower bills with trusted local resources.",
    fieldLabel: "Email",
    submitLabel: "Send me Energy Savers updates",
    trustText: "Optional—unsubscribe anytime.",
    sourceSlug: "native-post-net-zero-energy-esn",
    page: "/what-is-a-net-zero-energy-home/",
    formName: "native-post-energy-savers",
    intent: "post-net-zero-energy-esn",
  },
};
