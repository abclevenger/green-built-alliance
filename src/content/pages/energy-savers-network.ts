import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { FunnelBlock, NativeMarketingPage } from "@/lib/content-types";

/**
 * /energysaversnetwork/ — lead-focused program landing (native).
 */
const energySaversBlocks: FunnelBlock[] = [
  {
    id: "hero",
    type: "hero",
    data: {
      headline: "Cut Energy Waste Without Guessing What Actually Works",
      subheadline:
        "The Energy Savers Network helps Western North Carolina homeowners and renters take the next step—clear guidance, trusted partners, and real savings on bills.",
      primaryCta: { href: "/find-a-pro/?intent=save-energy", label: "Get matched for energy upgrades" },
      secondaryCta: { href: "/energysaversnetwork/#lead", label: "Get program updates" },
      visualImageUrl: mediaUrl("esnVolunteerOutreach"),
      visualImageAlt:
        "Energy Savers Network representative in branded shirt beside a marked outreach vehicle.",
      visualTagline: "Lower bills. Smarter upgrades. Local support.",
    },
  },
  {
    id: "problem",
    type: "problem",
    data: {
      headline: "High Bills and Confusing Options Wear People Down",
      points: [
        "Rebates and contractors don’t always line up",
        "Hard to know which upgrades pay back first",
        "Generic advice that ignores your house and budget",
        "Too much noise, not enough trusted local help",
      ],
      closing:
        "You shouldn’t need a PhD in building science to make your home more efficient.",
    },
  },
  {
    id: "solution",
    type: "solution",
    data: {
      headline: "What the Energy Savers Network Does for You",
      subheadline:
        "We connect our community with practical paths to save energy—so you can act with confidence.",
      cards: [
        {
          title: "Clear Next Steps",
          body: "Cut through the clutter with guidance that fits real homes in our region—not one-size-fits-all tips.",
        },
        {
          title: "Trusted Regional Voice",
          body: "Green Built Alliance has spent decades helping people build, renovate, and save energy responsibly.",
        },
        {
          title: "Built for Action",
          body: "Whether you DIY, hire a pro, or just want to stay informed, we help you move from curiosity to a plan.",
        },
      ],
    },
  },
  {
    id: "esn-match-cta",
    type: "finalCta",
    data: {
      headline: "Want a trusted pro—not just tips?",
      subheadline:
        "Tell us what you’re trying to fix (bills, comfort, electrification). We’ll point you to directory categories and members who fit Western NC homes.",
      primaryCta: { href: "/find-a-pro/?intent=save-energy", label: "Start guided match" },
      secondaryCta: { href: "/directory/", label: "Browse the directory" },
    },
  },
  {
    id: "proof",
    type: "proof",
    data: {
      headline: "Why People Pay Attention When We Show Up",
      stats: [
        { value: "WNC-first", label: "Guidance for our climate, codes, and housing stock", isPlaceholder: false },
        { value: "Nonprofit", label: "Mission-led—not selling a single product line", isPlaceholder: false },
        { value: "Practical", label: "Priorities you can act on this season", isPlaceholder: false },
        { value: "Connected", label: "Paths into trusted pros when you want help", isPlaceholder: false },
      ],
    },
  },
  {
    id: "lead",
    type: "leadCapture",
    data: {
      headline: "Get Energy Savers Network Updates",
      subheadline:
        "Tell us where to reach you—we’ll share opportunities, events, and practical tips. No spam.",
      fieldLabel: "Email",
      fieldPlaceholder: "you@example.com",
      fieldName: "email",
      submitLabel: "Notify Me",
      trustText: "We respect your inbox. Unsubscribe anytime.",
      sourceSlug: "energysaversnetwork",
      page: "/energysaversnetwork/",
      formName: "energy-savers-network-updates",
      intent: "energy-savers-network-updates",
    },
  },
  {
    id: "esn-incentives",
    type: "leadCapture",
    data: {
      headline: "Get local incentives guide",
      subheadline:
        "We’ll email practical notes on rebates, weatherization paths, and when to bring in a pro—WNC focused.",
      fieldLabel: "Email",
      submitLabel: "Email me the guide",
      trustText: "Unsubscribe anytime.",
      sourceSlug: "energysaversnetwork",
      page: "/energysaversnetwork/",
      formName: "energy-savers-incentives-guide",
      intent: "energy-savers-incentives-guide",
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Want to Go Faster? Talk to a Human.",
      subheadline:
        "Homeowners: guided match or directory. Pros: CE plus membership visibility.",
      primaryCta: {
        href: "/find-a-pro/?intent=save-energy",
        label: "Get matched with a pro",
      },
      secondaryCta: {
        href: "/events/continuing-education-courses/",
        label: "See upcoming classes",
      },
    },
  },
];

export const energySaversNetworkPage: NativeMarketingPage = {
  kind: "conversion-funnel",
  path: "/energysaversnetwork/",
  seo: {
    title: "Energy Savers Network | Save Energy & Lower Bills in Western NC",
    description:
      "Join the Energy Savers Network for clear steps, trusted guidance, and practical ways to cut energy waste and utility costs in Western North Carolina.",
  },
  blocks: energySaversBlocks,
};
