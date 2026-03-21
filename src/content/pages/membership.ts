import type { FunnelBlock, NativeMarketingPage } from "@/lib/content-types";

/**
 * /membership/ — native funnel. Join / renew / billing still on MemberPress (`/account/`, `/login/`).
 * TODO:WP_FALLBACK — native MemberPress replacement when membership checkout moves off WordPress.
 */
const membershipBlocks: FunnelBlock[] = [
  {
    id: "hero",
    type: "hero",
    data: {
      headline: "Membership Puts You Inside WNC’s Green Building Community",
      subheadline:
        "Connect with builders, raters, designers, and advocates who care about verified performance, education, and a stronger regional network. Stay engaged year-round—not just when you have a project.",
      primaryCta: { href: "/account/", label: "Join or renew online" },
      secondaryCta: {
        href: "/events/continuing-education-courses/",
        label: "Continuing education",
      },
      visualTagline: "Listing · education · credibility · community",
    },
  },
  {
    id: "problem",
    type: "problem",
    data: {
      headline: "Working Alone Doesn’t Move the Market",
      points: [
        "Green building still fights confusion and greenwashing",
        "Clients want proof—not just portfolio photos",
        "Continuing education is hard to prioritize without a nudge",
        "Your expertise deserves visibility alongside peers you respect",
      ],
      closing:
        "Membership bundles the training, directory presence, and network effects that solo marketing can’t replicate.",
    },
  },
  {
    id: "solution",
    type: "solution",
    data: {
      headline: "What You Get as a Member",
      subheadline:
        "Tiers differ—review options when you open the secure checkout from your account center—but every level is designed for recurring value.",
      cards: [
        {
          title: "Credibility & visibility",
          body: "Show up where homeowners and partners look for trusted pros—including directory pathways tied to your work.",
        },
        {
          title: "Education that pays back",
          body: "Member pricing on classes and events keeps your credentials current without hunting random webinars.",
        },
        {
          title: "Network effects",
          body: "Meet collaborators, referral partners, and program staff who understand regional codes, climate, and supply chains.",
        },
      ],
    },
  },
  {
    id: "steps",
    type: "steps",
    data: {
      title: "How Membership Fits Your Rhythm",
      steps: [
        {
          title: "Pick your track",
          description:
            "Business, affiliate, or other tiers—choose the level that matches listings, ads, and Green Built Homes benefits you need.",
        },
        {
          title: "Join or renew securely",
          description:
            "Our MemberPress-powered account center handles payment and renewal online—paper-free and encrypted.",
        },
        {
          title: "Activate benefits",
          description:
            "Update your directory profile, register for classes, and use member logos and discounts where applicable.",
        },
        {
          title: "Stay in the conversation",
          description:
            "Newsletters, events, and program updates keep you current on policy, incentives, and market shifts.",
        },
      ],
    },
  },
  {
    id: "proof",
    type: "proof",
    data: {
      headline: "Built on a Trusted Regional Nonprofit",
      stats: [
        { value: "Since 2001", label: "Green building nonprofit in WNC", isPlaceholder: false },
        { value: "Directory + CE", label: "Visibility and training in one membership", isPlaceholder: false },
        { value: "WNC codes", label: "Programming tuned to local climate & rules", isPlaceholder: false },
        { value: "Mission-led", label: "We answer to members—not shareholders", isPlaceholder: false },
      ],
    },
  },
  {
    id: "audience",
    type: "audienceCards",
    data: {
      cards: [
        {
          title: "For building professionals",
          bullets: [
            "Stand out with directory placement and program ties",
            "Bundle CE with the work you already do",
            "Lean on staff when certification or marketing questions stack up",
          ],
          cta: { href: "/account/", label: "Start membership checkout" },
        },
        {
          title: "For allies & affiliates",
          bullets: [
            "Support the mission with a lighter tier",
            "Network and newsletter access without full business listing needs",
            "Upgrade when your role grows",
          ],
          cta: { href: "/membership/affiliate-registration/", label: "Affiliate signup" },
        },
      ],
    },
  },
  {
    id: "lead",
    type: "leadCapture",
    data: {
      headline: "Questions before you join?",
      subheadline:
        "Drop your email and we’ll send the basics—or a human can follow up if you note a specific tier or team.",
      fieldLabel: "Email",
      fieldPlaceholder: "you@example.com",
      fieldName: "email",
      submitLabel: "Send me membership info",
      trustText: "No spam. Unsubscribe anytime.",
      sourceSlug: "native-membership",
      page: "/membership/",
      formName: "membership-precheck",
      intent: "membership-precheck",
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Ready to Belong to Something Bigger?",
      subheadline:
        "Manage your account, browse classes, or log in if you’re already with us.",
      primaryCta: { href: "/account/", label: "Account / renew" },
      secondaryCta: { href: "/login/", label: "Member login" },
    },
  },
];

export const membershipPage: NativeMarketingPage = {
  kind: "conversion-funnel",
  path: "/membership/",
  seo: {
    title: "Membership | Green Built Alliance",
    description:
      "Join Green Built Alliance for directory visibility, member pricing on classes, networking, and credibility with homeowners and partners across Western North Carolina.",
  },
  blocks: membershipBlocks,
};
