import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativeMarketingPage } from "@/lib/content-types";

/**
 * Site-wide frequently asked questions — complements program-specific pages (e.g. `/green-built-homes/faq/`).
 */
export const siteFaqPage: NativeMarketingPage = {
  kind: "sections",
  path: "/faq/",
  seo: {
    title: "Frequently Asked Questions | Green Built Alliance",
    description:
      "Answers about Green Built Alliance programs, the member directory, guided match, events, membership, and how to get started in Western North Carolina.",
    ogImage: mediaUrl("ogGbaLogoVertical"),
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Help",
      title: "Frequently asked questions",
      subtitle:
        "Quick answers about how we work with homeowners, building professionals, and partners across Western North Carolina.",
    },
    {
      type: "faq",
      heading: "Getting started",
      intro: "New to the Alliance or deciding where to click first? Start here.",
      items: [
        {
          question: "What does Green Built Alliance do?",
          answer:
            "We are a nonprofit regional hub for green building: certification programs like Green Built Homes, continuing education, the member directory, Energy Savers Network programs, publications, and community events. We connect people to verified information and trusted professionals—not generic greenwashing.",
        },
        {
          question: "I’m a homeowner. Where should I start?",
          answer:
            "Use guided match if you want suggestions based on your project, browse the member directory by trade, or read the Green Built Homes overview if you are buying or building a certified home. Energy Savers Network is the right lane if you are focused on lowering bills and improving efficiency.",
        },
        {
          question: "I’m a builder or rater. Where should I start?",
          answer:
            "Review Green Built Homes and continuing education listings, join or renew membership for directory visibility and class pricing, and watch the events calendar for trainings. Many teams also use the directory to show program experience to prospective clients.",
        },
        {
          question: "What is “guided match”?",
          answer:
            "It is a short set of questions on /find-a-pro/ that helps route you toward relevant directory categories and programs. You can still browse the directory directly if you already know what you need.",
        },
      ],
    },
    {
      type: "faq",
      heading: "Directory & membership",
      items: [
        {
          question: "How do directory listings work?",
          answer:
            "The directory highlights member businesses and professionals. Listings can include categories, program badges, and featured or recommended placement. Profiles are a bridge to contact details and related programs—not a substitute for your own vetting and contracts.",
        },
        {
          question: "How do I get listed in the directory?",
          answer:
            "Membership is the typical path. See /membership/ for current options, benefits, and how listing visibility ties to your participation.",
        },
        {
          question: "Is the magazine the same as the online directory?",
          answer:
            "The annual Green Home & Living Guide / directory is a print and PDF product with editorial content plus listings. The website directory is available year-round and is updated on a different cadence—use both depending on whether you want deep reading or live browsing.",
        },
      ],
    },
    {
      type: "faq",
      heading: "Programs & education",
      items: [
        {
          question: "Where are continuing education classes?",
          answer:
            "Schedules and registration links are published under Events and the continuing education hub. Offerings change by season; always confirm date and credit details on the listing.",
        },
        {
          question: "How is Green Built Homes different from Energy Star or other labels?",
          answer:
            "Green Built Homes is a regional certification program with documented requirements and third-party verification. Other labels answer different questions. See /green-built-homes/faq/ for more on how certification compares to marketing claims.",
        },
        {
          question: "Do you serve areas outside Western North Carolina?",
          answer:
            "Our roots and programming are strongest in WNC, but some initiatives (for example, certification pathways) touch a broader geography. Check each program page for scope.",
        },
      ],
    },
    {
      type: "cta",
      title: "Still have questions?",
      body: "Reach out through About & Contact, explore program hubs, or start guided match for tailored next steps.",
      primary: { href: "/find-a-pro/", label: "Start guided match" },
      secondary: { href: "/about-green-built-alliance/", label: "About us" },
    },
  ],
};
