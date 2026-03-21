import type { SiteSettings } from "@/lib/content-types";
import { headerMegaNav } from "@/content/site/header-mega-nav";

/**
 * Global site copy and chrome — no WordPress.
 * Mega menu structure: `header-mega-nav.ts`. Footer links below.
 */
export const siteSettings: SiteSettings = {
  siteName: "Green Built Alliance",
  tagline:
    "Western North Carolina’s nonprofit for efficient homes, credible certification, and vetted building professionals.",
  organizationShort: "Green Built Alliance",
  megaNav: headerMegaNav,
  footer: {
    blurb:
      "Western North Carolina’s nonprofit for efficient homes, credible certification, and vetted building professionals.",
    columns: [
      {
        title: "Programs & tools",
        links: [
          { href: "/find-a-pro/", label: "Get matched with a pro" },
          { href: "/directory/", label: "Member directory" },
          { href: "/green-built-homes/", label: "Green Built Homes" },
          { href: "/energysaversnetwork/", label: "Energy Savers Network" },
          { href: "/events/", label: "Events & classes" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "/green-building-news/", label: "Green building news" },
          { href: "/magazine/", label: "Magazine & guide" },
          { href: "/faq/", label: "FAQ" },
          { href: "/search/", label: "Search" },
        ],
      },
      {
        title: "Organization",
        links: [
          { href: "/about-green-built-alliance/", label: "About & contact" },
          { href: "/membership/", label: "Membership" },
          { href: "/support-our-work/", label: "Donate & support" },
        ],
      },
    ],
    checkoutTrustNote:
      "Registration, donations, and some program tools may open trusted partner checkout pages. When in doubt, confirm URLs in your browser before entering payment or personal information.",
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
      "WNC nonprofit: Green Built Homes certification, Energy Savers programs, continuing education for builders, and a vetted directory—practical help for efficient, durable homes.",
  },
};
