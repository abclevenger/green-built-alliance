import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { FunnelBlock, NativeMarketingPage } from "@/lib/content-types";
import { LEGACY_GIVEWP_DONATE_URL } from "@/content/site/legacy-checkout-urls";

/**
 * /support-our-work/ — native conversion funnel (no WordPress HTML).
 * Monetary gifts: GiveWP at LEGACY_GIVEWP_DONATE_URL until native donate exists.
 */
const supportOurWorkBlocks: FunnelBlock[] = [
  {
    id: "hero",
    type: "hero",
    data: {
      headline: "Fuel Green Building, Education, and Climate Solutions in WNC",
      subheadline:
        "Green Built Alliance is a nonprofit backbone for certified homes, professional training, and community programs. Your support keeps this work independent, practical, and rooted in our region.",
      primaryCta: { href: LEGACY_GIVEWP_DONATE_URL, label: "Donate now" },
      secondaryCta: { href: "/support-our-work/#lead", label: "Get impact updates" },
      visualTagline: "Every gift strengthens local programs—not generic national campaigns.",
      visualImageUrl: mediaUrl("supportDonateHero"),
      visualImageAlt: "Community hands joined in support of green building programs",
    },
  },
  {
    id: "problem",
    type: "problem",
    data: {
      headline: "Why Nonprofit Support Matters Here",
      points: [
        "Climate and housing pressures are local—but national noise drowns out trusted guidance",
        "Builders and homeowners need verification, not just slogans",
        "Education and outreach don’t run on ad revenue—they run on members and donors",
        "Small teams multiply impact when the community shows up financially",
      ],
      closing:
        "Sustained funding is what lets us plan programs, answer questions, and show up year after year.",
    },
  },
  {
    id: "solution",
    type: "solution",
    data: {
      headline: "What Your Support Makes Possible",
      subheadline:
        "Gifts power the programs people rely on when they’re ready to build, learn, or save energy.",
      cards: [
        {
          title: "Green Built Homes & verification",
          body: "Help families and pros navigate certification, performance, and healthier materials with clear standards.",
        },
        {
          title: "Education & professional development",
          body: "Fund classes and workshops that keep our building community skilled, connected, and up to date.",
        },
        {
          title: "Community programs & outreach",
          body: "Support initiatives like the Energy Savers Network and public resources that meet people where they are.",
        },
      ],
    },
  },
  {
    id: "steps",
    type: "steps",
    data: {
      title: "Ways to Help",
      steps: [
        {
          title: "Make a gift",
          description:
            "One-time or recurring donations through our secure GiveWP form—allocate to the general fund or a program when options are available.",
        },
        {
          title: "Engage as a member or partner",
          description:
            "Membership and business participation extend your impact through the year—not only on giving days.",
        },
        {
          title: "Amplify the mission",
          description:
            "Share events, nominate a pro for the directory, or connect us with sponsors who care about resilient communities.",
        },
        {
          title: "Stay close to the work",
          description:
            "Sign up for updates so you see outcomes, invitations, and urgent needs when they matter.",
        },
      ],
    },
  },
  {
    id: "proof",
    type: "proof",
    data: {
      headline: "Impact You Can Stand Behind",
      placeholderNote:
        "Replace with audited figures or annual report highlights when ready—numbers below are illustrative.",
      stats: [
        { value: "20+", label: "Years serving Western North Carolina", isPlaceholder: true },
        { value: "2.5k+", label: "Households & pros touched by programs (est.)", isPlaceholder: true },
        { value: "800+", label: "Certified green homes in the region (est.)", isPlaceholder: true },
        { value: "1", label: "Mission: community-centered sustainability", isPlaceholder: false },
      ],
    },
  },
  {
    id: "audience",
    type: "audienceCards",
    data: {
      cards: [
        {
          title: "Ready to give today",
          bullets: [
            "Secure checkout via GiveWP",
            "Recurring options where enabled",
            "Questions? Use the form below and we’ll route you",
          ],
          cta: { href: LEGACY_GIVEWP_DONATE_URL, label: "Open donation form" },
        },
        {
          title: "Corporate or foundation partners",
          bullets: [
            "Sponsor education, events, or program pillars",
            "Co-market credible green outcomes with us",
            "We’ll help align sponsorship with your ESG story",
          ],
          cta: { href: "/support-our-work/#lead", label: "Start a conversation" },
        },
      ],
    },
  },
  {
    id: "lead",
    type: "leadCapture",
    data: {
      headline: "Impact updates & partnership inquiries",
      subheadline:
        "Leave your email for occasional donor and program news—or to flag a sponsorship idea. We read every message.",
      fieldLabel: "Email",
      fieldPlaceholder: "you@example.com",
      fieldName: "email",
      submitLabel: "Notify me",
      trustText: "Unsubscribe anytime. We never sell addresses.",
      sourceSlug: "native-support-our-work",
      page: "/support-our-work/",
      formName: "support-impact-updates",
      intent: "support-our-work-impact-updates",
    },
  },
  {
    id: "testimonial",
    type: "testimonial",
    data: {
      quote:
        "We give because the Alliance meets people with practical help—not doom—and because our region needs that voice.",
      attribution: "Placeholder supporter quote — replace with named donor if permitted",
      isPlaceholder: true,
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Join the People Powering This Work",
      subheadline:
        "Gifts and member dues keep classes, certification help, and community programs within reach.",
      primaryCta: { href: LEGACY_GIVEWP_DONATE_URL, label: "Donate" },
      secondaryCta: { href: "/membership/", label: "Become a member" },
    },
  },
];

export const supportOurWorkPage: NativeMarketingPage = {
  kind: "conversion-funnel",
  path: "/support-our-work/",
  seo: {
    title: "Support Our Work | Donate to Green Built Alliance",
    description:
      "Donate to Green Built Alliance to fund green building education, Green Built Homes, Energy Savers outreach, and climate-resilient communities in Western North Carolina.",
    ogImage: mediaUrl("supportDonateHero"),
  },
  blocks: supportOurWorkBlocks,
};
