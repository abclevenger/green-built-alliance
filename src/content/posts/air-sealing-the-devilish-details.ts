import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

/** Migrated summary from legacy WordPress article; verify with program staff. */
export const postAirSealingTheDevilishDetails: NativePost = {
  path: "/air-sealing-the-devilish-details/",
  slug: "air-sealing-the-devilish-details",
  title: "Air sealing: the devilish details",
  excerpt:
    "Air sealing is easy to talk about and hard to perfect—here is why the small gaps at top plates, penetrations, and transitions matter for comfort, moisture, and energy.",
  publishedAt: "2015-03-10T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:16.000Z",
  author: { name: "Boone Guyton and Claudia Cady" },
  categories: ["Energy Efficiency & Air Sealing", "Member News"],
  tags: ["air sealing", "envelope", "construction"],
  seo: {
    title: "Air sealing: the devilish details | Green Built Alliance",
    description:
      "Why detail-level air sealing matters at top plates and penetrations—and how it ties to comfort, durability, and efficient homes.",
    ogImage: mediaUrl("ogAirSealingTopPlates"),
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Most builders understand that a tight envelope saves energy, but the last few percent of air leakage often hides in places you only see once: gaps at top plates, around recessed lights, behind tubs, and where framing meets masonry. Those paths add up.",
        "Treating air sealing as a process—not a single product—means sequencing caulks, tapes, and membranes so the air barrier is continuous. Inspection before drywall is the practical moment to catch what finish surfaces will hide.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Detail checklist mindset",
    },
    {
      type: "bulletList",
      items: [
        "Seal rim joists and sill plates; they are common leakage highways.",
        "Detail penetrations for plumbing, wiring, and HVAC boots before insulation hides them.",
        "Pay attention to interior partitions that touch the attic—air can move through hidden chases.",
        "Coordinate with your HVAC designer so ventilation is intentional, not accidental leakage.",
      ],
    },
    {
      type: "cta",
      title: "Tighten the envelope with the right team",
      body: "Shortlist builders, raters, and consultants who treat air sealing as a process—not a one-off product.",
      primary: { href: "/find-a-pro/?intent=rate-verify", label: "Get matched with a rater or builder" },
      secondary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
    },
  ],
  footerLeadCapture: {
    headline: "Performance & building science updates",
    subheadline: "Guides, classes, and program news from Green Built Alliance—unsubscribe anytime.",
    fieldLabel: "Email",
    submitLabel: "Keep me posted",
    trustText: "We never sell your address.",
    sourceSlug: "native-post-air-sealing",
    page: "/air-sealing-the-devilish-details/",
    formName: "native-post-air-sealing-updates",
    intent: "post-air-sealing-updates",
  },
};
