import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { HomeContent } from "@/lib/content-types";

/**
 * Homepage structured content — migrated from former WP front page messaging.
 * No runtime call to WordPress.
 *
 * PLACEHOLDER flags: stats/testimonial/partnerStrip include items pending staff verification
 * or partner agreements — search isPlaceholder in this file.
 */
export const homeContent: HomeContent = {
  seo: {
    title:
      "Green Built Alliance — Build, Buy, or Upgrade a Truly Green Home in Western North Carolina",
    description:
      "Trusted builders, proven programs, and real energy-saving solutions across Western North Carolina. Green Built Alliance connects homeowners and professionals without the guesswork.",
    ogImage: mediaUrl("ogGbaLogoVertical"),
  },
  hero: {
    eyebrow: "Western North Carolina · Since 2001",
    title: "The region’s hub for green homes, lower bills, and trusted pros",
    valueLine:
      "Programs, education, and a vetted professional network — so you move from research to action with confidence.",
    description:
      "We connect homeowners and industry with certification, continuing education, energy programs, and a member directory built for real projects — not generic lists.",
    primaryCta: { href: "/find-a-pro/", label: "Get matched with a pro" },
    secondaryCta: { href: "/green-built-homes/", label: "Green Built Homes program" },
    tertiaryCta: { href: "/directory/", label: "Browse the directory" },
    trustBullets: [
      "Nonprofit regional authority since 2001",
      "Builders, raters, and energy pros in one network",
      "Continuing education & certification under one roof",
    ],
  },
  pillarsSectionTitle: "Choose your path",
  pillarsSectionIntro:
    "Whether you are planning a home, cutting energy costs, or growing your practice — start here. Each path routes you into programs, people, and next steps.",
  pillars: [
    {
      audienceLabel: "Homeowners & buyers",
      href: "/find-a-pro/?intent=new-home",
      title: "Build or buy a verified green home",
      description:
        "Guided match to categories and pros, plus direct paths to Green Built Homes certification and member profiles you can trust.",
      ctaLabel: "Start your project →",
    },
    {
      audienceLabel: "Households & small business",
      href: "/energysaversnetwork/",
      title: "Save energy and lower bills",
      description:
        "Energy Savers Network programs, practical guidance, and partners focused on measurable savings — not vague “green tips.”",
      ctaLabel: "Explore Energy Savers →",
    },
    {
      audienceLabel: "Professionals & supporters",
      href: "/support-our-work/",
      title: "Train, certify, or support the mission",
      description:
        "Continuing education, certification pathways, magazine and directory visibility, and ways to fund resilient, efficient housing.",
      ctaLabel: "Train, join, or give →",
    },
  ],
  programsSection: {
    title: "Programs that intersect — one organization behind them",
    description:
      "Education, certification, publishing, and community funding work together. Not sure where to start? Use guided match or open the directory — we route you by intent, not guesswork.",
    cards: [
      {
        href: "/events/continuing-education-courses/",
        title: "We educate",
        description:
          "Sustainability-focused CE so contractors stay current on building science, codes, and high-performance practice.",
      },
      {
        href: "/green-built-homes/",
        title: "We certify",
        description:
          "Green Built Homes helps teams deliver healthier, efficient homes — and communicate that value to buyers.",
      },
      {
        href: "/directory/",
        title: "We connect",
        description:
          "A member directory structured for discovery: categories, profiles, and pathways into programs and events.",
      },
      {
        href: "/magazine/",
        title: "We publish",
        description:
          "The annual Green Building Directory magazine — editorial, listings, and regional leadership in print and digital.",
      },
      {
        href: "https://www.cutmycarbon.org/",
        title: "We fund",
        description: "Clean energy projects for nonprofits and schools through Cut My Carbon.",
        external: true,
      },
    ],
  },
  stats: [
    {
      value: "2001",
      label: "Serving the region",
      detail: "Nonprofit continuity and evolving programs",
    },
    {
      value: "WNC +",
      label: "Regional anchor",
      detail: "Western NC focus with statewide certification reach",
    },
    {
      value: "1 network",
      label: "Pros & programs",
      detail: "Directory, GBH, Energy Savers, and CE in one place",
    },
    {
      value: "2,500+",
      label: "Households & projects touched",
      detail: "Estimate across outreach, programs, and events — verify internally",
      isPlaceholder: true,
    },
  ],
  testimonial: {
    quote:
      "Green Built Alliance gave us a clear path from training to certification to clients who actually value performance.",
    attribution: "Placeholder — GBH builder member, WNC",
    isPlaceholder: true,
  },
  partnerStrip: {
    headline: "Featured collaborators & program partners (logos coming soon)",
    partners: [
      { label: "Utility partner", isPlaceholder: true },
      { label: "Municipal ally", isPlaceholder: true },
      { label: "Education host", isPlaceholder: true },
      { label: "Industry sponsor", isPlaceholder: true },
    ],
  },
  midCta: {
    title: "Ready for a concrete next step?",
    description:
      "Use guided match for suggested categories and pros, browse verified members, or jump straight into Green Built Homes, Energy Savers, or upcoming workshops.",
    primary: { href: "/find-a-pro/", label: "Start guided match" },
    secondary: { href: "/directory/", label: "Open the directory" },
  },
  faqSection: {
    title: "Common questions",
    intro:
      "Short answers for visitors deciding where to go next. For a full list, see the FAQ page.",
    items: [
      {
        question: "Is Green Built Alliance only for builders?",
        answer:
          "No. We serve homeowners, renters looking to improve efficiency, design and construction professionals, and community partners. Programs range from certification and classes to Energy Savers and the member directory.",
      },
      {
        question: "How do I find a trustworthy green professional?",
        answer:
          "Start with guided match or browse the member directory by category. Always interview teams, check references, and confirm insurance and scope in writing—our listings are a starting point, not a guarantee.",
      },
      {
        question: "What is the difference between the website and the annual magazine?",
        answer:
          "The site has live directory browsing, events, and articles year-round. The Green Home & Living Guide is an annual print and PDF edition with editorial features and listings—both support the same regional network.",
      },
      {
        question: "Where can I learn about certification for my home?",
        answer:
          "Read the Green Built Homes overview and FAQ, then talk with a participating builder or rater. Certification is project-specific; early conversations save time later.",
      },
    ],
  },
  ecosystemSection: {
    title: "Explore the full ecosystem",
    description:
      "The site is built as a loop: content and programs point to people; people point back to education and certification. Follow what matches your intent.",
    links: [
      {
        href: "/green-built-homes/",
        label: "Green Built Homes",
        description: "Certification, benefits, and how to participate.",
      },
      {
        href: "/energysaversnetwork/",
        label: "Energy Savers Network",
        description: "Programs and partners for lower bills and better buildings.",
      },
      {
        href: "/directory/",
        label: "Member directory",
        description: "Find pros by category — with featured and recommended placements.",
      },
      {
        href: "/events/",
        label: "Events & workshops",
        description: "Trainings, community sessions, and CE schedules.",
      },
      {
        href: "/green-building-news/",
        label: "Green building news",
        description: "Editorial hub for regional leadership and how-to.",
      },
      {
        href: "/support-our-work/",
        label: "Support & membership",
        description: "Donate, partner, or amplify the mission.",
      },
      {
        href: "/faq/",
        label: "FAQs",
        description: "Answers about programs, directory, classes, and getting started.",
      },
    ],
  },
};
