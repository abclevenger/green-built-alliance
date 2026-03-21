import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativeMarketingPage } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");

/**
 * About / mission routes outside the main `/about-green-built-alliance/` hub (already native in marketing.ts).
 * TODO:HR — sync employment copy and “open positions” when roles are live.
 */
export const aboutImportanceOfGreenBuildingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/about/importance-of-green-building/",
  seo: {
    title: "Importance of Green Building | Green Built Alliance",
    description:
      "Why green building matters for health, climate resilience, and economic vitality in Western North Carolina—and how we advance it together.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "About",
      title: "Why green building matters",
      subtitle:
        "Homes and buildings are where climate, health, and community intersect—for decades after the ribbon is cut.",
    },
    {
      type: "prose",
      heading: "Climate and resilience",
      paragraphs: [
        "Buildings account for a large share of energy use and emissions. In Western North Carolina, stronger envelopes, efficient systems, and thoughtful siting reduce utility burdens while helping families ride out heat, storms, and grid stress.",
        "Green building is not only about new construction. Renovations that fix moisture, improve ventilation, and right-size equipment can transform existing housing stock at a fraction of the embodied carbon of starting over.",
      ],
    },
    {
      type: "prose",
      heading: "Health and wealth",
      paragraphs: [
        "Indoor air quality, daylight, and durable materials affect asthma rates, productivity, and maintenance costs. When programs verify performance—not just marketing—buyers and renters can trust what they are paying for.",
        "Local jobs follow: raters, trades, designers, and suppliers all participate in a credible green market. Green Built Alliance exists to grow that capacity through education, certification, and community visibility.",
      ],
    },
    {
      type: "bulletList",
      title: "What you can do",
      items: [
        "Homeowners: explore Green Built Homes and the member directory",
        "Professionals: train through our events and list your expertise",
        "Supporters: fund outreach and programs that meet people where they are",
      ],
    },
    {
      type: "cta",
      title: "Take the next step",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/support-our-work/", label: "Support our work" },
    },
  ],
};

export const aboutEmploymentOpportunitiesPage: NativeMarketingPage = {
  kind: "sections",
  path: "/about-green-built-alliance/employment-opportunities/",
  seo: {
    title: "Employment Opportunities | Green Built Alliance",
    description:
      "Careers at Green Built Alliance—help advance green building, education, and climate solutions in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Work with us",
      title: "Employment opportunities",
      subtitle:
        "Join a small, mission-driven team serving builders, homeowners, and partners across WNC.",
    },
    {
      type: "prose",
      heading: "How hiring works",
      paragraphs: [
        "Open roles are posted here when available. We welcome applicants who combine relevant skills with curiosity about building science, equity, and community engagement.",
        "If no positions are listed, you may still send a brief note and resume for future consideration—reference programs you admire and how you would like to contribute.",
      ],
    },
    {
      type: "bulletList",
      title: "Typical focus areas",
      items: [
        "Program delivery for Green Built Homes and education",
        "Communications, events, and member support",
        "Operations, development, and partnerships",
      ],
    },
    {
      type: "prose",
      heading: "Open positions",
      paragraphs: [
        "There are no open positions listed at this moment. Check back periodically or follow Green Built Alliance announcements through the news hub and events calendar.",
      ],
    },
    {
      type: "cta",
      title: "Stay connected",
      primary: { href: "/about-green-built-alliance/", label: "About the organization" },
      secondary: { href: "/news/", label: "News" },
    },
  ],
};

export const aboutMissionPages: NativeMarketingPage[] = [
  aboutImportanceOfGreenBuildingPage,
  aboutEmploymentOpportunitiesPage,
];
