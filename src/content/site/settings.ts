import type { SiteSettings } from "@/lib/content-types";

/**
 * Global site copy and chrome — no WordPress.
 * Edit here to change nav, footer, and default SEO.
 */
export const siteSettings: SiteSettings = {
  siteName: "Green Built Alliance",
  tagline:
    "Resources, certification, and education for green building in Western North Carolina.",
  organizationShort: "Green Built Alliance",
  nav: [
    { href: "/green-built-homes/", label: "Green Built Homes" },
    { href: "/#programs", label: "Programs" },
    { href: "/directory/", label: "Directory" },
    { href: "/events/", label: "Events" },
    { href: "/events/continuing-education-courses/", label: "Classes" },
    { href: "/magazine/", label: "Magazine" },
    { href: "/membership/", label: "Membership" },
    { href: "/news/", label: "News" },
    { href: "/support-our-work/", label: "Support" },
    { href: "/about-green-built-alliance/", label: "About" },
  ],
  footer: {
    blurb:
      "Resources, certification, and education for green building in Western North Carolina.",
    links: [
      { href: "/directory/", label: "Find a professional" },
      { href: "/faq/", label: "FAQ" },
      { href: "/support-our-work/", label: "Donate" },
      { href: "/search/", label: "Search" },
      { href: "/about-green-built-alliance/", label: "Contact" },
    ],
  },
  contact: {
    email: undefined,
    phone: undefined,
    addressLines: ["Western North Carolina"],
  },
  social: [
    { platform: "Facebook", href: "https://www.facebook.com/GreenBuiltOrg/" },
    { platform: "X", href: "https://x.com/greenbuiltorg" },
    { platform: "Instagram", href: "https://www.instagram.com/greenbuiltorg/" },
    { platform: "YouTube", href: "https://www.youtube.com/user/officewncgbc" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/company/greenbuiltorg/" },
  ],
  defaultSeo: {
    title: "Green Built Alliance",
    description:
      "Green Built Alliance works to advance sustainability, grow green building, and provide climate resilience through community education and partnerships in Western North Carolina and beyond.",
  },
};
