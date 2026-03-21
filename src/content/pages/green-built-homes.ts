import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { FunnelBlock, NativeMarketingPage } from "@/lib/content-types";

/**
 * /green-built-homes/ — composable conversion funnel (native only).
 *
 * PLACEHOLDER: proof.stats — replace when verified program metrics exist.
 * PLACEHOLDER: testimonial — replace with real homeowner quote + name/location.
 */
const greenBuiltHomesBlocks: FunnelBlock[] = [
  {
    id: "hero",
    type: "hero",
    data: {
      headline: "Build or Buy a Certified Green Home You Can Trust",
      subheadline:
        "The Green Built Homes program connects you with vetted builders and verifies energy-efficient, healthy, and sustainable homes—so you don’t have to guess.",
      primaryCta: { href: "/find-a-pro/?intent=new-home", label: "Get matched with a certified builder" },
      secondaryCta: {
        href: "/green-built-homes/steps-to-certify-a-home/",
        label: "Are You a Builder? Join the Program",
      },
      visualTagline: "Verified standards. Real performance. Regional trust.",
    },
  },
  {
    id: "problem",
    type: "problem",
    data: {
      headline: "Building Green Shouldn’t Be This Confusing",
      points: [
        "Green claims that mean nothing",
        "No clear way to compare homes",
        "Hard to find trusted builders",
        "Energy savings that don’t match promises",
      ],
      closing: "Most people want a better home—but don’t know who to trust.",
    },
  },
  {
    id: "solution",
    type: "solution",
    data: {
      headline: "That’s Why Green Built Homes Exists",
      subheadline: "We take the guesswork out of green building.",
      cards: [
        {
          title: "Verified Standards",
          body: "Every certified home meets strict energy and sustainability benchmarks—not marketing fluff.",
        },
        {
          title: "Trusted Builders",
          body: "Work with professionals who are trained, engaged with the program, and held to a clear standard.",
        },
        {
          title: "Real Performance",
          body: "Homes are checked against the program’s requirements so performance is documented, not just advertised.",
        },
      ],
    },
  },
  {
    id: "steps",
    type: "steps",
    data: {
      title: "How It Works",
      steps: [
        {
          title: "Choose your path",
          description: "Buy, build, or partner—pick the lane that fits your project.",
        },
        {
          title: "Connect with certified builders or trusted resources",
          description: "Get matched with people who already work inside the program.",
        },
        {
          title: "Build or find a verified green home",
          description: "Move through certification steps with clarity at each milestone.",
        },
        {
          title: "Enjoy lower energy costs and healthier living",
          description: "Live in a home built for efficiency, durability, and indoor air quality.",
        },
      ],
    },
  },
  {
    id: "proof",
    type: "proof",
    data: {
      headline: "Built on Real Homes, Real Builders, Real Impact",
      placeholderNote:
        "Figures below are placeholders until verified program totals are published—replace in green-built-homes.ts.",
      stats: [
        {
          value: "2,500+",
          label: "Families served through programs & resources",
          isPlaceholder: true,
        },
        {
          value: "800+",
          label: "Certified green homes in the region",
          isPlaceholder: true,
        },
        {
          value: "350+",
          label: "Builders & professionals engaged",
          isPlaceholder: true,
        },
        {
          value: "20+",
          label: "Years of regional impact",
          isPlaceholder: true,
        },
      ],
    },
  },
  {
    id: "audience",
    type: "audienceCards",
    data: {
      cards: [
        {
          title: "For Homeowners & Buyers",
          bullets: [
            "Verified energy performance you can compare",
            "Lower utility bills over time",
            "Healthier indoor air and materials you can feel good about",
          ],
          cta: { href: "/directory/", label: "Explore Green Homes" },
        },
        {
          title: "For Builders & Professionals",
          bullets: [
            "Stand out in a crowded market with a credible badge",
            "Build trust faster with third-party verification",
            "Access program support, education, and a regional network",
          ],
          cta: {
            href: "/green-built-homes/steps-to-certify-a-home/",
            label: "Join the Program",
          },
        },
      ],
    },
  },
  {
    id: "gbh-lead",
    type: "leadCapture",
    data: {
      headline: "Start your green home plan",
      subheadline:
        "Drop your email—we’ll connect you with program pathways, classes, and trusted pros in North Carolina.",
      fieldLabel: "Email",
      submitLabel: "Send me next steps",
      trustText: "We respect your inbox.",
      sourceSlug: "green-built-homes",
      page: "/green-built-homes/",
      formName: "gbh-homeowner-plan",
      intent: "green-built-homes-plan",
    },
  },
  {
    id: "testimonial",
    type: "testimonial",
    data: {
      quote:
        "We wanted a home that was efficient and healthy, but didn’t know where to start. This program made the process much clearer.",
      attribution: "Placeholder homeowner testimonial — replace with name & location",
      isPlaceholder: true,
    },
  },
  {
    id: "final",
    type: "finalCta",
    data: {
      headline: "Ready to Build or Find a Better Home?",
      subheadline:
        "Start with trusted standards, real performance, and the right people at your side.",
      primaryCta: {
        href: "/find-a-pro/?intent=new-home",
        label: "See your builder options",
      },
      secondaryCta: {
        href: "/green-built-homes/steps-to-certify-a-home/",
        label: "Builders: join the program",
      },
    },
  },
];

export const greenBuiltHomesFunnelPage: NativeMarketingPage = {
  kind: "conversion-funnel",
  path: "/green-built-homes/",
  seo: {
    title: "Green Built Homes | Certified Sustainable Homes and Builders",
    description:
      "Find or build a verified green home with trusted builders, healthier materials, and proven energy performance through Green Built Homes.",
    ogImage: mediaUrl("ogGbhNetZeroLogo"),
  },
  blocks: greenBuiltHomesBlocks,
};
