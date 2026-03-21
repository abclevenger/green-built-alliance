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
      primaryCta: { href: "/energysaversnetwork/#lead", label: "Get Program Updates" },
      secondaryCta: { href: "/save-energy/", label: "Browse Energy Saving Ideas" },
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
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Want to Go Faster? Talk to a Human.",
      subheadline:
        "Pros can stack CE with membership; homeowners can pair tips with the member directory.",
      primaryCta: {
        href: "/events/continuing-education-courses/",
        label: "See Upcoming Classes",
      },
      secondaryCta: { href: "/membership/", label: "Membership" },
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
