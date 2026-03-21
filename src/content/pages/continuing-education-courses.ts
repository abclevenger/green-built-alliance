import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { FunnelBlock, NativeMarketingPage } from "@/lib/content-types";

/**
 * /events/continuing-education-courses/ — native funnel for professional CE & training.
 *
 * Live calendars, single-event pages, registration, tickets, and CE certificates still run on
 * The Events Calendar / WordPress (and related plugins). This page is the conversion layer only.
 *
 * TODO:WP_EVENTS — Headless events API, native calendar UI, or embedded TEC widgets when ready.
 */
const continuingEducationBlocks: FunnelBlock[] = [
  {
    id: "hero",
    type: "hero",
    data: {
      headline: "Continuing Education Built for WNC’s Green Building Pros",
      subheadline:
        "Earn credits, stay code-sharp, and learn beside peers who care about performance—not greenwash. Start here, then open the full event calendar to register for the sessions that fit your license and schedule.",
      primaryCta: { href: "/events/", label: "Browse calendar & register" },
      secondaryCta: { href: "/find-a-pro/?intent=not-sure", label: "Get matched with a pro" },
      visualTagline: "Credentials · building science · regional practice",
    },
  },
  {
    id: "problem",
    type: "problem",
    data: {
      headline: "Stale Skills Cost You More Than a Renewal Fee",
      points: [
        "Codes, incentives, and assemblies change faster than YouTube can explain",
        "Clients expect proof—not a decade-old talking point",
        "Random webinars rarely match how WNC actually builds",
        "CE is easy to defer until you’re scrambling before a deadline",
      ],
      closing:
        "Focused, local training keeps you credible in the room where decisions get made.",
    },
  },
  {
    id: "solution",
    type: "solution",
    data: {
      headline: "What You Walk Away With",
      subheadline:
        "Sessions are designed for people who touch real projects—design, build, rate, inspect, or advise.",
      cards: [
        {
          title: "License- and credential-friendly",
          body: "Programming aligned with continuing education expectations for builders, raters, and allied trades—always confirm credit details on each event listing.",
        },
        {
          title: "Regional context first",
          body: "Humidity, mixed fuels, mountain microclimates, and local supply chains show up in the curriculum—not generic national slides.",
        },
        {
          title: "Network while you learn",
          body: "Sit next to future collaborators, referral partners, and program staff who can unblock certification or marketing questions.",
        },
      ],
    },
  },
  {
    id: "steps",
    type: "steps",
    data: {
      title: "How to Get Started",
      steps: [
        {
          title: "Scan the live calendar",
          description:
            "Use the Events calendar on this site for dates, descriptions, and pricing. Each listing links through to registration on our events system.",
        },
        {
          title: "Register from the event page",
          description:
            "Complete signup, tickets, or RSVPs on the page for the session you choose—follow the prompts on that listing.",
        },
        {
          title: "Attend & document",
          description:
            "Bring job stories and questions; grab certificates or receipts from the organizer process outlined on each event.",
        },
        {
          title: "Stay in the loop",
          description:
            "Use the email capture on this page for heads-ups—members often receive additional discounts or early access.",
        },
      ],
    },
  },
  {
    id: "proof",
    type: "proof",
    data: {
      headline: "Trusted Training from the Same Team Behind Green Built Homes",
      stats: [
        { value: "20+ yrs", label: "Regional workshops and professional training", isPlaceholder: false },
        { value: "Multi-trade", label: "Builders, raters, designers, and allied pros", isPlaceholder: false },
        { value: "WNC-first", label: "Local climate, incentives, and assemblies", isPlaceholder: false },
        { value: "Live calendar", label: "Browse and register via Events", isPlaceholder: false },
      ],
    },
  },
  {
    id: "audience",
    type: "audienceCards",
    data: {
      cards: [
        {
          title: "Builders, raters & design leads",
          bullets: [
            "Stack CE with certification and sales conversations",
            "Compare notes on assemblies that actually work here",
            "Meet homeowners indirectly through shared credibility",
          ],
          cta: { href: "/events/", label: "Find your next session" },
        },
        {
          title: "Allied pros & rising talent",
          bullets: [
            "HVAC, envelope, solar, and inspection paths intersect in class",
            "Affiliate-style members can still access many offerings",
            "Pair classes with directory visibility when you’re ready",
          ],
          cta: { href: "/membership/", label: "See membership options" },
        },
      ],
    },
  },
  {
    id: "lead",
    type: "leadCapture",
    data: {
      headline: "Class alerts for busy pros",
      subheadline:
        "We’ll email when high-demand CE dates open or when new green building trainings land—unsubscribe anytime.",
      fieldLabel: "Email",
      fieldPlaceholder: "you@example.com",
      fieldName: "email",
      submitLabel: "Notify me",
      trustText: "No spam. Member discounts still apply where published on each event.",
      sourceSlug: "native-ce-courses",
      page: "/events/continuing-education-courses/",
      formName: "continuing-education-alerts",
      intent: "continuing-education-alerts",
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Reserve Your Seat Before Rosters Fill",
      subheadline:
        "Pick a session on the calendar, register from the listing, and bring job-site questions—you will be among crews who build here every week.",
      primaryCta: { href: "/events/", label: "Browse event calendar" },
      secondaryCta: { href: "/find-a-pro/", label: "See your pro options" },
    },
  },
];

export const continuingEducationCoursesPage: NativeMarketingPage = {
  kind: "conversion-funnel",
  path: "/events/continuing-education-courses/",
  seo: {
    title: "Continuing Education Courses | Green Built Alliance",
    description:
      "Continuing education for green building professionals in Western North Carolina—earn CE credits, learn regional best practices, and train with Green Built Alliance. Browse the calendar and register for upcoming classes.",
    ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
  },
  blocks: continuingEducationBlocks,
};
