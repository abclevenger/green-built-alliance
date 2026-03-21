import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

/** Certification / program explainer — ties CE readers to Green Built NC net zero paths. */
export const postIntroducingGreenbuiltNcNetZero: NativePost = {
  path: "/introducing-greenbuilt-nc-net-zero-and-net-zero-ready-homes/",
  slug: "introducing-greenbuilt-nc-net-zero-and-net-zero-ready-homes",
  title: "Introducing Green Built NC Net Zero and Net Zero Ready Homes",
  excerpt:
    "Net Zero and Net Zero Ready are structured pathways for homes that perform at the top of the market—documented efficiency today and a clear plan for renewables when you add them.",
  publishedAt: "2022-11-02T08:00:00.000Z",
  updatedAt: "2023-07-04T15:58:00.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Green Built Homes", "Certification"],
  tags: ["net zero", "net zero ready", "Green Built NC", "certification"],
  stickyCta: { href: "/find-a-pro/?intent=new-home", label: "Get matched with a builder" },
  seo: {
    title: "Introducing Green Built NC Net Zero & Net Zero Ready | Green Built Alliance",
    description:
      "Learn how Green Built NC Net Zero and Net Zero Ready homes combine efficiency, verification, and renewable readiness—and how training helps teams deliver them.",
    ogImage: mediaUrl("ogGbhNetZeroLogo"),
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Buyers and jurisdictions increasingly ask for clarity on energy performance—not slogans. Net Zero and Net Zero Ready give teams a shared language: rigorous envelope and systems work now, plus either onsite production (Net Zero) or infrastructure staged for it (Net Zero Ready).",
        "For professionals, the shift is as much about process as specs: integrated design, testing, and documentation so marketing claims match what third-party verification shows.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why training matters",
    },
    {
      type: "bulletList",
      items: [
        "Align sales, design, and field crews on what each label requires",
        "Avoid expensive rework when solar or ventilation assumptions change late",
        "Earn CE while learning assemblies that work in WNC humidity and heating mixes",
      ],
    },
    {
      type: "cta",
      title: "Next steps for teams",
      body: "Stack classes with program enrollment and directory visibility.",
      primary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
  footerLeadCapture: {
    headline: "Program & class alerts",
    subheadline: "Net zero, CE dates, and Green Built Homes updates for pros.",
    fieldLabel: "Email",
    submitLabel: "Subscribe",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-intro-net-zero",
    page: "/introducing-greenbuilt-nc-net-zero-and-net-zero-ready-homes/",
    formName: "native-post-pro-program",
    intent: "post-intro-net-zero-pro-program",
  },
};
