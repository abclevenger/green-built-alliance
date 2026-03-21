import type { HomeContent } from "@/lib/content-types";

/**
 * Homepage structured content — migrated from former WP front page messaging.
 * No runtime call to WordPress.
 */
export const homeContent: HomeContent = {
  seo: {
    title:
      "Green Built Alliance — Build, Buy, or Upgrade a Truly Green Home in Western North Carolina",
    description:
      "Trusted builders, proven programs, and real energy-saving solutions across Western North Carolina. Green Built Alliance connects homeowners and professionals without the guesswork.",
  },
  hero: {
    eyebrow: "Western North Carolina",
    title: "Build, Buy, or Upgrade a Truly Green Home — Without the Guesswork",
    description:
      "We connect you with trusted builders, proven programs, and real energy-saving solutions across Western North Carolina.",
    primaryCta: { href: "/green-built-homes/", label: "Find a Green Built Home" },
    secondaryCta: { href: "#programs", label: "Explore Programs" },
    trustBullets: [
      "Trusted since 2001",
      "Serving Western North Carolina",
      "Thousands of homes and families supported",
    ],
  },
  pillarsSectionTitle: "How can we help you?",
  pillars: [
    {
      href: "/green-built-homes/",
      title: "Build or Buy a Green Home",
      description:
        "Explore the Green Built Homes program, connect with certified builders, and find a healthier, high-performance home you can trust.",
    },
    {
      href: "/energysaversnetwork/",
      title: "Save Energy & Lower Bills",
      description:
        "Practical guidance, trusted partners, and programs that help you cut waste and save money—without sorting through noise alone.",
    },
    {
      href: "/support-our-work/",
      title: "Get Involved or Support",
      description:
        "Volunteer, donate, or amplify our work—join neighbors and partners building a cleaner, more resilient region.",
    },
  ],
  programsSection: {
    title: "Empowering our community’s transition to clean energy.",
    description:
      "We have several programs that help our community move forward with sustainable solutions to their energy problems. Many of these programs intersect for various audiences (builders, businesses, residents, and organizations) so if you don’t know which program is right for you, please feel free to reach out through our About & Contact page.",
    cards: [
      {
        href: "/events/continuing-education-courses/",
        title: "We Educate",
        description:
          "Our sustainability-focused continuing education classes help keep contractors up-to-date on the latest sustainable building practices.",
      },
      {
        href: "/green-built-homes/",
        title: "We Certify",
        description:
          "Our green building certification program helps contractors across North Carolina build healthier homes and get paid for it.",
      },
      {
        href: "/magazine/",
        title: "We Publish",
        description:
          "Our annual Green Building Directory magazine offers articles and listings from our members and staff.",
      },
      {
        href: "https://www.cutmycarbon.org/",
        title: "We Fund",
        description:
          "Funding clean energy projects for nonprofits and schools.",
        external: true,
      },
    ],
  },
  stats: [
    { value: "2001", label: "Serving the region since" },
    { value: "WNC", label: "Western NC & beyond" },
    { value: "Programs", label: "Education · Certification · Magazine" },
  ],
  midCta: {
    title: "How can we support your green building or sustainability goals?",
    description:
      "Search the site, explore the directory, or browse continuing education for pros—we’re here to help.",
    primary: { href: "/search/", label: "Search our website" },
    secondary: { href: "/directory/", label: "Find a professional" },
  },
};
