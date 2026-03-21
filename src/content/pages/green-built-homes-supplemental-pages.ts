import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativeMarketingPage } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");

/**
 * Green Built Homes child routes — structured sections (no WordPress HTML).
 * Preserves legacy public paths linked from the main GBH funnel.
 */
export const greenBuiltHomesFaqPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/faq/",
  seo: {
    title: "Green Built Homes FAQ | Green Built Alliance",
    description:
      "Frequently asked questions about Green Built Homes certification, builders, homeowners, and performance verification in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Green Built Homes",
      title: "Frequently asked questions",
      subtitle:
        "Quick answers about how the program works for homeowners, buyers, and building professionals.",
    },
    {
      type: "prose",
      heading: "What is Green Built Homes?",
      paragraphs: [
        "Green Built Homes is a regional certification program that verifies healthier, more efficient, and more sustainable new and existing homes. It goes beyond slogans by using clear checklists and third-party verification so performance is documented.",
      ],
    },
    {
      type: "prose",
      heading: "How is it different from a marketing “green home” label?",
      paragraphs: [
        "Certified homes meet program requirements that cover energy, water, materials, indoor environmental quality, and site impacts—depending on the pathway. A third-party verifier helps ensure key details are implemented, not just advertised.",
      ],
    },
    {
      type: "prose",
      heading: "Can I certify a remodel or addition?",
      paragraphs: [
        "Program options evolve over time. If you have a specific project, talk with a participating builder or rater early so they can map the right pathway and documentation for your scope.",
      ],
    },
    {
      type: "prose",
      heading: "How do I find a builder or professional?",
      paragraphs: [
        "Start with the member directory and the main Green Built Homes overview. Many teams list program experience in their profiles; ask directly how they approach testing, documentation, and handoff for homeowners.",
      ],
    },
    {
      type: "prose",
      heading: "Where do Net Zero and Net Zero Ready fit in?",
      paragraphs: [
        "These are structured pathways within Green Built NC for top-tier efficiency and renewable readiness. See our native articles on net zero and net zero ready homes for plain-language explanations.",
      ],
    },
    {
      type: "cta",
      title: "Go deeper",
      body: "Explore the program overview, certification steps, and directory listings.",
      primary: { href: "/green-built-homes/", label: "Green Built Homes home" },
      secondary: { href: "/directory/", label: "Member directory" },
    },
  ],
};

export const greenBuiltHomesStepsPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/steps-to-certify-a-home/",
  seo: {
    title: "Steps to Certify a Green Built Home | Green Built Alliance",
    description:
      "How teams move a project through Green Built Homes—from integrated design through verification and homeowner handoff in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "For professionals",
      title: "Steps to certify a home",
      subtitle:
        "A practical sequence teams follow to keep documentation, testing, and field work aligned with program requirements.",
    },
    {
      type: "bulletList",
      title: "Typical flow",
      items: [
        "Align early: bring the builder, designer, rater, and key trades into program requirements before details harden",
        "Document the plan: capture specs, assemblies, and ventilation strategy so verification matches what gets built",
        "Execute and test: schedule blower door, duct, and other checks when the envelope and systems are accessible",
        "Close out: complete checklist items, submit paperwork, and prepare a clear handoff for the homeowner",
      ],
    },
    {
      type: "prose",
      heading: "Training and support",
      paragraphs: [
        "Continuing education and community events help teams stay current with code changes, incentives, and best practices. Browse the events calendar for classes relevant to raters, builders, and designers.",
      ],
    },
    {
      type: "cta",
      title: "Resources",
      primary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
      secondary: { href: "/green-built-homes/faq/", label: "FAQ" },
    },
  ],
};

export const greenBuiltHomesMapPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/map-of-certified-homes/",
  seo: {
    title: "Map of Certified Green Built Homes | Green Built Alliance",
    description:
      "Explore certified Green Built Homes across Western North Carolina—start with the directory and program overview while interactive maps are consolidated.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Green Built Homes",
      title: "Certified homes map",
      subtitle:
        "We are consolidating public-facing maps with the rest of the native site. Use the directory and program pages to explore certified projects and professionals.",
    },
    {
      type: "prose",
      paragraphs: [
        "Certified projects span custom homes, production builds, and major renovations. For the most up-to-date view of teams actively working in the program, browse the member directory and connect with builders and raters directly.",
      ],
    },
    {
      type: "cta",
      title: "Explore",
      primary: { href: "/directory/", label: "Member directory" },
      secondary: { href: "/green-built-homes/", label: "Program overview" },
    },
  ],
};

export const greenBuiltHomesBuilderCertificationsPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/green-builder-certifications/",
  seo: {
    title: "Green Builder Certifications | Green Built Alliance",
    description:
      "How builder credentials and program participation fit together for Green Built Homes projects in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Green Built Homes",
      title: "Green builder certifications",
      subtitle:
        "Builders often pair regional program participation with national credentials—here is how those pieces typically fit together.",
    },
    {
      type: "prose",
      heading: "Program participation vs. personal credentials",
      paragraphs: [
        "Green Built Homes certifies projects against a published standard. Individual professionals may also hold credentials from training bodies or partner programs; both can strengthen quality, but they answer different questions.",
      ],
    },
    {
      type: "bulletList",
      title: "What to ask a prospective builder",
      items: [
        "Which Green Built Homes or Green Built NC pathways have they delivered recently?",
        "How do they schedule testing and inspections relative to insulation and finishes?",
        "Who is the rater or verifier of record, and how are punch items tracked?",
      ],
    },
    {
      type: "cta",
      title: "Learn more",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/green-built-nc-beyond-energy-star/", label: "Beyond Energy Star" },
    },
  ],
};

export const greenBuiltHomesCertificationLevelsPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/green-built-certification-levels/",
  seo: {
    title: "Green Built Certification Levels | Green Built Alliance",
    description:
      "Overview of certification levels and pathways within Green Built Homes and related Green Built NC programs.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Green Built Homes",
      title: "Certification levels",
      subtitle:
        "Programs recognize stepped performance—from solid baselines to ambitious net zero targets.",
    },
    {
      type: "prose",
      paragraphs: [
        "Published checklists define how projects earn recognition. Exact level names and requirements can change as codes and incentives evolve; your builder and rater should reference the current program manual for your project year.",
        "Net Zero and Net Zero Ready are examples of pathways that communicate how close a home is to offsetting annual energy use—and how ready it is for renewables.",
      ],
    },
    {
      type: "cta",
      title: "Related reading",
      primary: { href: "/what-is-a-net-zero-energy-home/", label: "Net zero energy homes" },
      secondary: { href: "/what-is-a-net-zero-ready-home/", label: "Net zero ready homes" },
    },
  ],
};

export const greenBuiltHomesRegisterPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/register-green-built-nc-homes/",
  seo: {
    title: "Register a Green Built NC Home | Green Built Alliance",
    description:
      "Start registration for Green Built NC / Green Built Homes projects—connect with program staff, training, and member resources.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Professionals",
      title: "Register a project",
      subtitle:
        "Registration workflows may still use legacy member tools while checkout experiences are modernized. Use the links below to reach the right entry points.",
    },
    {
      type: "prose",
      heading: "Before you begin",
      paragraphs: [
        "Confirm which pathway applies, who your rater or verifier will be, and whether the project is new construction, a major renovation, or a specific program pilot.",
      ],
    },
    {
      type: "bulletList",
      title: "Where to go next",
      items: [
        "Members: use account tools on the legacy site for forms tied to membership and program registration when directed by staff",
        "Not a member yet? Review membership benefits and join the network that powers the directory and education programs",
        "Need a human? Contact Green Built Alliance staff through the channels listed on the about page",
      ],
    },
    {
      type: "cta",
      title: "Take action",
      primary: { href: "/membership/", label: "Membership" },
      secondary: { href: "/green-built-homes/steps-to-certify-a-home/", label: "Certification steps" },
    },
  ],
};

export const greenBuiltHomesCertificationsCurrentPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/green-built-certifications-current/",
  seo: {
    title: "Current Green Built Certifications | Green Built Homes | Green Built Alliance",
    description:
      "Current Green Built Homes and Green Built NC certification options in Western North Carolina—pathways, updates, and where to start.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Green Built Homes",
      title: "Current certifications",
      subtitle:
        "Program checklists evolve with code and market needs—use this page as orientation, then confirm details with staff and your rater for your project year.",
    },
    {
      type: "prose",
      heading: "What “current” means",
      paragraphs: [
        "Published requirements and forms can change between construction cycles. Your builder and energy rater should reference the manual and bulletins in effect when your project registers—not blog posts alone.",
        "Green Built NC includes stepped performance levels and specialized pathways such as Net Zero and Net Zero Ready for teams targeting top-tier efficiency and renewable readiness.",
      ],
    },
    {
      type: "bulletList",
      title: "Where to go next",
      items: [
        "Homeowners & buyers: start with the Green Built Homes overview and directory",
        "Builders & raters: review certification steps, continuing education, and registration guidance",
        "Everyone: pair program goals with building science articles on air sealing, moisture, and ventilation",
      ],
    },
    {
      type: "cta",
      title: "Explore",
      primary: { href: "/green-built-homes/green-built-certification-levels/", label: "Certification levels" },
      secondary: { href: "/green-built-homes/faq/", label: "FAQ" },
    },
  ],
};

export const greenBuiltHomesRegenerativePage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-built-homes/regenerative-certification/",
  seo: {
    title: "Regenerative Certification | Green Built Homes | Green Built Alliance",
    description:
      "How regenerative design themes connect to Green Built Homes and evolving certification options in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Green Built Homes",
      title: "Regenerative certification",
      subtitle:
        "Regenerative design looks beyond efficiency to carbon, ecology, and long-term resilience—aligned with where advanced green programs are heading.",
    },
    {
      type: "prose",
      paragraphs: [
        "Program details change over time. Teams should rely on the current Green Built Homes / Green Built NC guidance and training for the construction year of record.",
        "For a readable overview of how the program has encouraged regenerative thinking, see our migrated article on evolving regenerative design in new home construction.",
      ],
    },
    {
      type: "cta",
      title: "Read more",
      primary: {
        href: "/green-built-homes-evolving-to-encourage-regenerative-design-in-new-home-construction/",
        label: "Regenerative design article",
      },
      secondary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
    },
  ],
};

export const greenBuiltHomesSupplementalPages: NativeMarketingPage[] = [
  greenBuiltHomesFaqPage,
  greenBuiltHomesStepsPage,
  greenBuiltHomesMapPage,
  greenBuiltHomesBuilderCertificationsPage,
  greenBuiltHomesCertificationLevelsPage,
  greenBuiltHomesCertificationsCurrentPage,
  greenBuiltHomesRegisterPage,
  greenBuiltHomesRegenerativePage,
];
