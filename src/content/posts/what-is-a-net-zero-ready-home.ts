import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

/** Migrated from former WordPress article — canonical URL preserved. */
export const postWhatIsNetZeroReadyHome: NativePost = {
  path: "/what-is-a-net-zero-ready-home/",
  slug: "what-is-a-net-zero-ready-home",
  title: "What Is a Net Zero Ready Home?",
  excerpt:
    "Net Zero Ready is a Green Built Homes designation for homes wired, oriented, and efficient enough to reach net zero energy once renewable energy is added—without major retrofit.",
  publishedAt: "2022-10-31T20:38:00.000Z",
  updatedAt: "2023-07-04T15:58:46.000Z",
  author: { name: "Leigha Dickens" },
  categories: ["Green Built Homes", "Net Zero Energy Homes"],
  tags: ["net zero ready", "solar ready", "green built homes"],
  seo: {
    title: "What Is a Net Zero Ready Home? | Green Built Alliance",
    description:
      "Understand Net Zero Ready certification: efficient shell, solar-ready infrastructure, and a clear path to net zero energy when you are ready to add renewables.",
    ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
  },
  introLeadCapture: {
    headline: "Planning a build or major renovation?",
    subheadline: "Get updates when we publish guides, classes, and program changes that affect WNC homeowners and builders.",
    fieldLabel: "Email",
    submitLabel: "Keep me posted",
    sourceSlug: "native-post-net-zero-ready",
    page: "/what-is-a-net-zero-ready-home/",
    formName: "native-post-net-zero-ready",
    intent: "post-net-zero-ready-updates",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "“Net Zero Ready” describes a home that is not yet netting out annual energy use with onsite renewables, but is intentionally designed so adding a reasonably sized solar array (or similar) can get you there without tearing into walls or replacing major equipment.",
        "Think of it as front-loading the hard work: excellent insulation and air sealing, efficient space conditioning, smart window and shading choices, and electrical prep such as conduit or panel capacity for future solar. Those decisions are cheapest and least disruptive during initial construction.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How Net Zero Ready differs from Net Zero Energy",
    },
    {
      type: "bulletList",
      title: "At a glance",
      items: [
        "Net Zero Energy: verified balance of consumption and onsite renewable production over a year.",
        "Net Zero Ready: verified efficiency and infrastructure so renewables can close the gap later.",
        "Both rely on rigorous program rules—not just builder claims.",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "If you might add solar in stages—after you move in or when incentives align—Net Zero Ready helps protect you from accidentally building yourself into a corner (undersized electric service, shaded roof planes, or mechanical systems that balloon renewable requirements).",
      ],
    },
    {
      type: "leadCapture",
      data: {
        headline: "Get matched with a green professional",
        subheadline:
          "Share your email—we’ll follow up with builder and rater introductions that fit Net Zero Ready and Green Built Homes pathways.",
        fieldLabel: "Email",
        submitLabel: "Request a match",
        trustText: "Unsubscribe anytime.",
        sourceSlug: "native-post-net-zero-ready",
        page: "/what-is-a-net-zero-ready-home/",
        formName: "native-post-net-zero-match",
        intent: "post-net-zero-ready-match",
      },
    },
    {
      type: "cta",
      title: "What’s your next step?",
      body: "Homeowners can shortlist certified teams; builders and design leads can open the program hub and CE calendar.",
      primary: { href: "/find-a-pro/?intent=new-home", label: "Find a certified builder" },
      secondary: { href: "/green-built-homes/", label: "Explore certification" },
    },
    {
      type: "callout",
      variant: "note",
      title: "For buyers",
      body: "Ask whether the home’s rating or certificate includes a clear plan for adding renewables, and confirm which features are already installed versus “ready” for a future install.",
    },
  ],
  footerLeadCapture: {
    headline: "Get local incentives & efficiency guidance",
    subheadline: "Energy Savers Network: practical ways to cut waste and lower bills in WNC—stack with a high-performance build.",
    fieldLabel: "Email",
    submitLabel: "Send me Energy Savers updates",
    trustText: "Optional—unsubscribe anytime.",
    sourceSlug: "native-post-net-zero-ready-esn",
    page: "/what-is-a-net-zero-ready-home/",
    formName: "native-post-energy-savers",
    intent: "post-net-zero-ready-energy-savers",
  },
};
