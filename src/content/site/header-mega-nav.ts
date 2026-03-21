import type { MegaMenuSpec } from "@/lib/content-types";

/**
 * Primary header mega menu — edit structure here (columns, labels, hrefs).
 */
export const headerMegaNav: MegaMenuSpec = {
  groups: [
    {
      id: "programs",
      label: "Programs",
      columns: [
        {
          heading: "Certification & savings",
          items: [
            { href: "/green-built-homes/", label: "Green Built Homes" },
            { href: "/energysaversnetwork/", label: "Energy Savers Network" },
            { href: "/#programs", label: "All programs overview" },
          ],
        },
        {
          heading: "Publications & calendar",
          items: [
            { href: "/magazine/", label: "Magazine & annual guide" },
            { href: "/events/", label: "Events calendar" },
          ],
        },
      ],
      featured: {
        title: "Not sure where to start?",
        description: "Answer a few questions—we’ll suggest directory categories and members that fit your project.",
        href: "/find-a-pro/",
        ctaLabel: "Start guided match",
      },
    },
    {
      id: "find-pros",
      label: "Find pros",
      columns: [
        {
          heading: "Connect with members",
          items: [
            { href: "/find-a-pro/", label: "Guided match" },
            { href: "/directory/", label: "Member directory" },
          ],
        },
      ],
    },
    {
      id: "professionals",
      label: "Training & members",
      columns: [
        {
          heading: "Education & events",
          items: [
            { href: "/events/continuing-education-courses/", label: "Continuing education" },
            { href: "/events/", label: "All workshops & gatherings" },
          ],
        },
        {
          heading: "Join the network",
          items: [
            { href: "/membership/", label: "Membership" },
            { href: "/directory/", label: "Directory & visibility" },
          ],
        },
      ],
    },
    {
      id: "news",
      label: "News",
      columns: [
        {
          heading: "Articles & updates",
          items: [
            { href: "/news/", label: "News" },
            { href: "/green-building-news/", label: "Green Building News" },
          ],
        },
      ],
    },
    {
      id: "about",
      label: "About",
      columns: [
        {
          heading: "Organization",
          items: [
            { href: "/about-green-built-alliance/", label: "About us" },
            { href: "/support-our-work/", label: "Support our work" },
            { href: "/faq/", label: "FAQ" },
            { href: "/search/", label: "Search" },
          ],
        },
      ],
    },
  ],
};
