import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

/**
 * Representative member story / explainer — high search overlap with Green Built NC & Energy Star.
 * Summarized native version; original lived in WordPress under the same path.
 */
export const postGreenBuiltNcBeyondEnergyStar: NativePost = {
  path: "/green-built-nc-beyond-energy-star/",
  slug: "green-built-nc-beyond-energy-star",
  title: "Green Built NC: Beyond Energy Star",
  excerpt:
    "Energy Star® is a strong baseline for efficiency—but holistic green building also considers health, materials, water, and site impact. Here is how programs like Green Built Homes layer on what ratings alone might miss.",
  publishedAt: "2015-04-21T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Boone Guyton and Claudia Cady" },
  categories: ["Member News", "Green Building"],
  tags: ["energy star", "green built nc", "certification", "holistic building"],
  seo: {
    title: "Green Built NC: Beyond Energy Star | Green Built Alliance",
    description:
      "Why builders and homeowners look beyond single-metric labels: durability, indoor air quality, responsible materials, and verified performance through regional programs.",
    ogImage: mediaUrl("ogGreenBuiltNcLogo"),
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Energy-focused labels answer an important question: “How much energy will this home likely use?” They rarely tell the whole story of how healthy, durable, or resource-conscious the project is. That is where broader green building programs add depth—without asking families to become building scientists overnight.",
        "In practice, “beyond Energy Star” often means attention to ventilation and filtration, moisture management, low-toxic finishes where they matter most, water-efficient fixtures, thoughtful site planning, and documentation so future owners know what is in the walls—not just what the HERS® or similar score says on closing day.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What to look for in a regional program",
    },
    {
      type: "bulletList",
      items: [
        "Third-party verification tied to a published checklist (not only modeled predictions).",
        "Indoor air quality measures you can feel—fresh air delivery, combustion safety, and moisture control.",
        "Durability details that reduce callbacks: flashing, drainage planes, and efficient envelope assemblies suited to local climate.",
        "A local network of trained pros so you are not solving problems alone.",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "Green Built Alliance’s programs and education exist to make those outcomes legible: builders get credit for doing the harder, less photogenic work, and residents get clearer comparisons between homes that otherwise look similar on a listing page.",
      ],
    },
    {
      type: "cta",
      title: "Take a next step",
      body: "Explore certification, classes, or membership—whatever matches your role in the project.",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/membership/", label: "Membership" },
    },
  ],
  introLeadCapture: {
    headline: "Stay in the loop",
    subheadline: "Member news, classes, and program updates from Green Built Alliance.",
    fieldLabel: "Email",
    submitLabel: "Subscribe",
    sourceSlug: "native-post-green-built-nc",
    page: "/green-built-nc-beyond-energy-star/",
    formName: "native-post-member-news",
  },
};
