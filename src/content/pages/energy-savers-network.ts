import type { FunnelBlock, NativeMarketingPage } from "@/lib/content-types";

/**
 * /energysaversnetwork/ — lead-focused program landing (native).
 *
 * PLACEHOLDER: proof.stats — replace with verified participation/impact numbers.
 * Lead form → `LEAD_WEBHOOK_URL` (see `submitLeadInquiryPlaceholder`).
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
      placeholderNote:
        "Replace placeholder stats below with verified program outcomes (participants, audits, kWh saved, etc.).",
      stats: [
        { value: "10k+", label: "Residents reached through education & outreach", isPlaceholder: true },
        { value: "500+", label: "Homes touched through programs & referrals", isPlaceholder: true },
        { value: "20+", label: "Years serving WNC on energy & green building", isPlaceholder: true },
        { value: "50+", label: "Partner pros & orgs in our network", isPlaceholder: true },
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
      integrationNote:
        "Payload: email, source, page, formName → map in GHL inbound webhook.",
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
