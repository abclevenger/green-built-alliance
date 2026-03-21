import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativeMarketingPage } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/**
 * Legacy program/marketing landers (root paths) migrated to native sections.
 */
export const greenBuiltHomesRatersLandingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes-raters/",
  seo: {
    title: "Green Built Homes Raters & Verification | Green Built Alliance",
    description:
      "Connect with home energy raters and verification pros supporting Green Built Homes and high-performance projects in Western North Carolina.",
    ogImage: ogReady,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Programs",
      title: "Green Built Homes raters",
      subtitle:
        "Third-party verification is how marketing claims become documented performance—raters are core to the Green Built Homes process.",
    },
    {
      type: "prose",
      heading: "What raters do",
      paragraphs: [
        "Raters and analysts model energy use, inspect critical details, and run tests such as blower doors and duct leakage. They help teams catch gaps before drywall and align field work with program paperwork.",
        "If you are a homeowner, your builder or architect can recommend raters already active on similar projects. If you are a professional, continuing education keeps you aligned with code and program updates.",
      ],
    },
    {
      type: "cta",
      title: "Next steps",
      primary: { href: "/directory/home-energy-raters/", label: "Home energy raters directory" },
      secondary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
    },
    {
      type: "cta",
      title: "Program home",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/green-built-homes/steps-to-certify-a-home/", label: "Certification steps" },
    },
  ],
};

export const buildGreenLandingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/build-green/",
  seo: {
    title: "Build Green in Western North Carolina | Green Built Alliance",
    description:
      "Start building green with verified programs, trusted professionals, and education from Green Built Alliance—homes, renovations, and community impact.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Get started",
      title: "Build green",
      subtitle:
        "Green building here is practical: tight envelopes, smart mechanicals, healthy materials, and people who know mountain climate realities.",
    },
    {
      type: "bulletList",
      title: "Three entry points",
      items: [
        "Certified homes & pathways — explore Green Built Homes and related programs",
        "Find a pro — search the member directory by trade and specialty",
        "Learn — workshops, CE, and resource hubs on energy, water, and materials",
      ],
    },
    {
      type: "cta",
      title: "Dive in",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/directory/", label: "Member directory" },
    },
    {
      type: "cta",
      title: "Stay current",
      primary: { href: "/events/", label: "Events" },
      secondary: { href: "/green-building-resources/", label: "Resources" },
    },
  ],
};

export const saveEnergyLandingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/save-energy/",
  seo: {
    title: "Save Energy at Home | Green Built Alliance",
    description:
      "Practical ways to cut energy waste in WNC homes—envelope, equipment, behavior, and programs like the Energy Savers Network.",
    ogImage: ogReady,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Homeowners & renters",
      title: "Save energy",
      subtitle:
        "Big savings usually start with building science basics—not gadget shopping.",
    },
    {
      type: "bulletList",
      title: "High-impact moves",
      items: [
        "Fix air leaks and prioritize attic and rim joist details",
        "Maintain or upgrade HVAC with right-sized, efficient equipment",
        "Shift major loads with heat pumps, heat pump water heaters, and LED lighting",
        "Use utility and tax-credit programs—verify eligibility yearly",
      ],
    },
    {
      type: "prose",
      heading: "Community support",
      paragraphs: [
        "The Energy Savers Network is designed to help households navigate upgrades with clearer guidance and local partners.",
      ],
    },
    {
      type: "cta",
      title: "Programs & guides",
      primary: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
      secondary: { href: "/green-building-resources/energy-tax-credits/", label: "Tax credits overview" },
    },
    {
      type: "cta",
      title: "Go deeper",
      primary: { href: "/air-sealing-the-devilish-details/", label: "Air sealing" },
      secondary: { href: "/are-the-energy-bills-in-my-new-house-too-high/", label: "High energy bills?" },
    },
  ],
};

export const supportCleanEnergyLandingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/support-clean-energy/",
  seo: {
    title: "Support Clean Energy | Green Built Alliance",
    description:
      "Fund education, certification, and community programs that expand clean energy and resilient housing across Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Impact",
      title: "Support clean energy",
      subtitle:
        "Policy and technology matter—but so do trusted local institutions that help people act.",
    },
    {
      type: "prose",
      paragraphs: [
        "Donations and memberships power classes, outreach, and the staff time it takes to answer real homeowner questions. They also keep independent green building standards strong as markets shift.",
      ],
    },
    {
      type: "bulletList",
      title: "What your support fuels",
      items: [
        "Green Built Homes education and verifier networks",
        "Energy Savers Network and community efficiency outreach",
        "Publications, events, and policy-aware programming",
      ],
    },
    {
      type: "cta",
      title: "Take action",
      primary: { href: "/support-our-work/", label: "Donate" },
      secondary: { href: "/membership/", label: "Membership" },
    },
    {
      type: "cta",
      title: "See the work",
      primary: { href: "/directory/renewable-energy/", label: "Renewable pros" },
      secondary: { href: "/news/", label: "News" },
    },
  ],
};

export const programMarketingLanderPages: NativeMarketingPage[] = [
  greenBuiltHomesRatersLandingPage,
  buildGreenLandingPage,
  saveEnergyLandingPage,
  supportCleanEnergyLandingPage,
];
