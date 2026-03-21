import type { NativePost } from "@/lib/content-types";

export const postIndoorAirPlusCertification: NativePost = {
  path: "/indoor-air-plus-a-green-building-certification-program-thats-all-about-the-details/",
  slug: "indoor-air-plus-a-green-building-certification-program-thats-all-about-the-details",
  title: "Indoor airPLUS: A Green Building Certification Program That’s All About the Details",
  excerpt:
    "EPA’s Indoor airPLUS label layers health-focused construction specs on top of strong efficiency baselines—ventilation, moisture, combustion safety, and low-emission materials where they count.",
  publishedAt: "2016-08-03T08:00:00.000Z",
  updatedAt: "2023-05-16T17:57:14.000Z",
  author: { name: "Green Built Alliance" },
  categories: ["Healthy homes", "Certification"],
  tags: ["indoor air quality", "indoor airplus", "EPA", "ventilation"],
  seo: {
    title: "Indoor airPLUS Certification | Green Built Alliance",
    description:
      "What Indoor airPLUS adds beyond efficiency: ventilation, moisture management, combustion safety, and material choices for healthier indoor air—plus how it fits regional green programs.",
  },
  introLeadCapture: {
    headline: "Healthy home & certification updates",
    subheadline: "Tips on IAQ, ventilation, and Green Built programs—without cluttering your inbox.",
    fieldLabel: "Email",
    submitLabel: "Send me updates",
    trustText: "Unsubscribe anytime.",
    sourceSlug: "native-post-indoor-airplus",
    page: "/indoor-air-plus-a-green-building-certification-program-thats-all-about-the-details/",
    formName: "native-post-healthy-homes",
    intent: "post-indoor-airplus-healthy-homes",
  },
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Efficiency programs answer “how much energy?” Indoor airPLUS asks “what are you breathing?” It builds on a solid energy baseline (commonly Energy Star certified homes) and adds checklists for moisture control, HVAC design, garage isolation, pest management, and low-VOC product selections in key areas.",
        "For buyers, the value is documentation: you’re not guessing whether fresh air delivery, combustion safety, and material choices were thought through—you’re seeing a structured protocol.",
      ],
    },
    {
      type: "bulletList",
      title: "Themes buyers notice",
      items: [
        "Controlled mechanical ventilation and better filtration paths",
        "Details that keep garage fumes and crawlspace air out of living space",
        "Moisture-managed assemblies that reduce mold risk",
        "Product and installation specs aimed at lower chemical exposure at move-in",
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Regional context",
      body: "Humidity and mixed heating systems in WNC mean ventilation and enclosure design should always be interpreted with local experience—not only a national checklist.",
    },
    {
      type: "cta",
      title: "Connect with pros who build for health and performance",
      body: "Explore Green Built Homes and the member directory for teams used to layered programs.",
      primary: { href: "/find-a-pro/?intent=rate-verify", label: "Get matched with a rater" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
};
