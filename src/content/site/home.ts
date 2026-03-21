import type { HomeContent } from "@/lib/content-types";

/**
 * Homepage structured content — migrated from former WP front page messaging.
 * No runtime call to WordPress.
 */
export const homeContent: HomeContent = {
  seo: {
    title: "Green Built Alliance — Resources, certification, and education for green building",
    description:
      "Green Built Alliance works to advance sustainability, grow green building, and provide climate justice through community education, inspired action, and collaborative partnerships in Western North Carolina and beyond.",
  },
  hero: {
    eyebrow: "Inspired Action for Sustainable Communities",
    title:
      "Advancing sustainable living, green building, and climate resiliency.",
    description:
      "Since 2001, we have worked to advance sustainability, grow green building efforts, and provide climate justice through community education, inspired action, and collaborative partnerships in Western North Carolina and beyond.",
  },
  pillars: [
    {
      href: "/build-green/",
      title: "Build Green",
      description:
        "Find green building resources and classes, search our member listings, learn about Green Built Home certifications, and more.",
    },
    {
      href: "/save-energy/",
      title: "Save Energy",
      description:
        "Discover energy-saving ideas and programs for residents, businesses, and organizations to save money and restore the climate.",
    },
    {
      href: "/support-clean-energy/",
      title: "Support Clean Energy",
      description:
        "Support our community with your voice, hands, or dollars through outreach, volunteering, or donations.",
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
      "Search the site, explore the directory, or get in touch—we’re here to help.",
    primary: { href: "/search/", label: "Search our website" },
    secondary: { href: "/directory/", label: "Find a professional" },
  },
};
