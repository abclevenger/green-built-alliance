import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { HomeContent } from "@/lib/content-types";

/**
 * Homepage structured content — native only (no WordPress at runtime).
 */
export const homeContent: HomeContent = {
  seo: {
    title:
      "Green Homes, Energy Savings & Vetted Building Pros in Western North Carolina",
    description:
      "WNC nonprofit: Green Built Homes certification, Energy Savers Network, continuing education for trades, and a vetted member directory—builders, raters, and energy specialists for efficient, durable homes.",
    ogImage: mediaUrl("ogGbaLogoVertical"),
  },
  statsEyebrow: "Why households and crews trust us",
  hero: {
    eyebrow: "Western North Carolina · Nonprofit since 2001",
    title: "Efficient homes, lower bills, and pros who build to perform",
    valueLine:
      "We certify homes, train the trades, and run energy programs—then connect you with members who do the work in the field.",
    description:
      "Homeowners, renters improving efficiency, builders, and partners all use the same hub: clear programs, vetted directory listings, and classes—without vague “green” slogans.",
    primaryCta: { href: "/find-a-pro/", label: "Get matched with a vetted pro" },
    secondaryCta: { href: "/green-built-homes/", label: "See Green Built Homes certification" },
    trustBullets: [
      "Nonprofit serving WNC since 2001",
      "Certification, training, and directory together",
      "Straight talk on savings, health, and durability",
    ],
    belowCtaLink: { href: "#choose-path", label: "Compare paths by audience →" },
    heroImage: {
      src: mediaUrl("homeHeroAsheville"),
      alt: "High-performance green home in Asheville, North Carolina—regional building context.",
    },
  },
  startHelper: {
    title: "Not sure where to start?",
    intro: "Pick the line that fits you—we’ll suggest concrete pages. No forms required.",
  },
  credibilityBlock: {
    title: "Regional nonprofit, not a national ad network",
    body: "Green Built Alliance is a nonprofit organization serving Western North Carolina. Programs like Green Built Homes and Energy Savers exist to make high-performance housing easier to plan and verify. The member directory ties to membership and ethics—not pay-to-list rankings. When you need a pro, we help you narrow the field; you still interview, check references, and confirm scope in writing.",
  },
  pillarsSectionTitle: "Choose your path",
  pillarsSectionIntro:
    "Use the tabs to focus one audience—or open any path’s full page for schedules, FAQs, and depth.",
  pillars: [
    {
      audienceLabel: "Homeowners & buyers",
      href: "/find-a-pro/?intent=new-home",
      title: "Build or buy a high-performance home",
      description:
        "Guided match points you to trades and raters. Green Built Homes gives teams a recognized standard buyers and appraisers can understand.",
      ctaLabel: "Start match or certification →",
      relatedLinks: [
        { href: "/green-built-homes/", label: "Green Built Homes overview" },
        { href: "/directory/", label: "Browse the directory" },
      ],
    },
    {
      audienceLabel: "Households & small business",
      href: "/energysaversnetwork/",
      title: "Cut energy waste and utility bills",
      description:
        "Energy Savers Network and partners focus on practical upgrades and priorities that fit our climate—not generic tips.",
      ctaLabel: "See Energy Savers programs →",
      relatedLinks: [
        { href: "/find-a-pro/?intent=save-energy", label: "Guided match for upgrades" },
        { href: "/directory/", label: "Find efficiency pros" },
      ],
    },
    {
      audienceLabel: "Professionals & supporters",
      href: "/support-our-work/",
      title: "Train, get listed, or fund the work",
      description:
        "Continuing education, Green Built Homes participation, directory visibility, magazine reach, and ways to donate or partner.",
      ctaLabel: "Train, join, or give →",
      relatedLinks: [
        { href: "/events/continuing-education-courses/", label: "Continuing education" },
        { href: "/membership/", label: "Membership" },
      ],
    },
  ],
  programsSection: {
    title: "What we do",
    description:
      "Five program doors—each opens a specific resource. Pick the one that matches what you need today.",
    cards: [
      {
        href: "/events/continuing-education-courses/",
        title: "Train the trades",
        description:
          "Continuing education on building science, codes, and high-performance practice so crews stay current and competitive.",
        ctaLabel: "View CE courses →",
      },
      {
        href: "/green-built-homes/",
        title: "Certify green homes",
        description:
          "Green Built Homes helps teams deliver healthier, efficient homes and document performance for buyers and appraisers.",
        ctaLabel: "Read how certification works →",
      },
      {
        href: "/directory/",
        title: "Connect with members",
        description:
          "Search by category for builders, raters, energy specialists, and allied pros tied to our programs.",
        ctaLabel: "See member listings →",
      },
      {
        href: "/magazine/",
        title: "Publish the annual guide",
        description:
          "The Green Home & Living Guide—editorial, listings, and regional leadership in print and digital.",
        ctaLabel: "See the magazine →",
      },
      {
        href: "https://www.cutmycarbon.org/",
        title: "Fund clean energy projects",
        description:
          "Cut My Carbon supports clean energy for nonprofits and schools—grants and campaigns that put projects on the ground.",
        external: true,
        ctaLabel: "Visit Cut My Carbon →",
      },
    ],
  },
  stats: [
    {
      value: "2001",
      label: "Serving the region",
      detail: "Nonprofit continuity through evolving codes, climate, and housing needs",
    },
    {
      value: "WNC",
      label: "Rooted here",
      detail: "Programs, events, and members centered on Western North Carolina",
    },
    {
      value: "All in one",
      label: "Network & programs",
      detail: "Certification, Energy Savers, CE, directory, and magazine under one roof",
    },
    {
      value: "Member-backed",
      label: "Directory you can use",
      detail: "Profiles tied to membership—not a pay-to-list ad network",
    },
  ],
  partnerStrip: {
    headline: "Collaboration across utilities, towns, schools, and industry",
    partners: [
      {
        label: "Duke Energy",
        isPlaceholder: false,
        href: "https://www.duke-energy.com/",
        external: true,
        logo: {
          src: "/media/partners/partner-duke-energy.png",
          alt: "Duke Energy",
        },
      },
      {
        label: "1% for the Planet — Environmental Partner",
        isPlaceholder: false,
        href: "https://www.onepercentfortheplanet.org/",
        external: true,
        logo: {
          src: "/media/partners/partner-1-percent-planet.png",
          alt: "1% for the Planet, environmental partner",
        },
      },
      {
        label: "EEBA",
        isPlaceholder: false,
        href: "https://eeba.org/",
        external: true,
        logo: {
          src: "/media/partners/partner-eeba.png",
          alt: "EEBA — Energy and Environmental Building Alliance",
        },
      },
      {
        label: "NC Sustainable Energy Association",
        isPlaceholder: false,
        href: "https://www.energync.org/",
        external: true,
        logo: {
          src: "/media/partners/partner-ncsea.png",
          alt: "NC Sustainable Energy Association",
        },
      },
      {
        label: "U.S. Green Building Council member",
        isPlaceholder: false,
        href: "https://www.usgbc.org/",
        external: true,
        logo: {
          src: "/media/partners/partner-usgbc-member.png",
          alt: "U.S. Green Building Council member",
        },
      },
      {
        label: "Asheville Downtown Association",
        isPlaceholder: false,
        href: "https://www.ashevilledowntown.org/",
        external: true,
        logo: {
          src: "/media/partners/partner-asheville-downtown.png",
          alt: "Asheville Downtown Association",
        },
      },
    ],
  },
  communityImagery: {
    title: "In the field across Western North Carolina",
    intro:
      "Solar projects, natural-building tours, families on the trail, and the forests and ridges we build for—real photos from Alliance programs and outreach.",
    photos: [
      {
        src: mediaUrl("photoInstallingSolar"),
        alt: "Three installers wearing safety harnesses place solar panels on a residential shingle roof.",
      },
      {
        src: mediaUrl("photoTeamTour"),
        alt: "Group of people outdoors in front of a round natural building with a green roof, surrounded by trees.",
      },
      {
        src: mediaUrl("photoGreenHome"),
        alt: "Family of three smiling together outdoors with blue mountain ridges in the distance.",
      },
      {
        src: mediaUrl("directoryHeroForest"),
        alt: "Dirt path through a mixed forest with ferns and tall trees, soft daylight through the canopy.",
      },
    ],
    memberPortraits: [
      {
        src: mediaUrl("testimonialPortraitBowman"),
        alt: "Smiling man with a beard in a light grey shirt, outdoor foliage behind him.",
      },
      {
        src: mediaUrl("testimonialPortraitChelseyHett"),
        alt: "Smiling woman with long hair beside a white vehicle with Energy Savers Network branding.",
      },
      {
        src: mediaUrl("testimonialPortraitDougAger"),
        alt: "Portrait of a man smiling at the camera.",
      },
      {
        src: mediaUrl("testimonialPortraitScottMcgehee"),
        alt: "Black and white headshot of a man in a sweater and tie.",
      },
    ],
  },
  midCta: {
    title: "Ready for a concrete next step?",
    description:
      "Guided match suggests categories and members. The directory lets you compare profiles. Programs and workshops fill in the rest.",
    primary: { href: "/find-a-pro/", label: "Start guided match" },
    secondary: { href: "/directory/", label: "Browse the member directory" },
  },
  faqSection: {
    title: "Common questions",
    intro: "Short answers while you decide where to go. For the full list, use the FAQ page.",
    items: [
      {
        question: "Is Green Built Alliance only for builders?",
        answer:
          "No. We work with homeowners, renters improving efficiency, design and construction professionals, and community partners. Programs include certification, classes, Energy Savers, the directory, and magazine—choose what fits your role.",
      },
      {
        question: "How do I find a trustworthy green professional?",
        answer:
          "Start with guided match or browse the directory by category. Interview teams, check references, and confirm insurance and scope in writing. Listings are a vetted starting point—not a guarantee for every project.",
      },
      {
        question: "What is the difference between the website and the annual magazine?",
        answer:
          "The site offers live directory browsing, events, and articles year-round. The Green Home & Living Guide is an annual print and PDF edition with features and listings. Both support the same regional network.",
      },
      {
        question: "Where can I read about certification for my home?",
        answer:
          "Start with the Green Built Homes overview and FAQ, then talk with a participating builder or rater. Certification is project-specific; early conversations save time and avoid rework.",
      },
    ],
  },
  ecosystemSection: {
    title: "Where to go next",
    description: "Frequent next clicks—pick what matches what you came here to do.",
    links: [
      {
        href: "/green-built-homes/",
        label: "Green Built Homes",
        description: "Requirements, benefits, and how builders and raters participate.",
        ctaLabel: "Certification details →",
      },
      {
        href: "/energysaversnetwork/",
        label: "Energy Savers Network",
        description: "Programs and partners focused on lower bills and better buildings.",
        ctaLabel: "Energy programs →",
      },
      {
        href: "/directory/",
        label: "Member directory",
        description: "Find pros by trade—aligned with certification and training.",
        ctaLabel: "Find a member →",
      },
      {
        href: "/events/",
        label: "Events & workshops",
        description: "Trainings, community sessions, and schedules.",
        ctaLabel: "See upcoming events →",
      },
      {
        href: "/green-building-news/",
        label: "Green building news",
        description: "Regional how-tos, policy context, and project ideas.",
        ctaLabel: "Read articles →",
      },
      {
        href: "/support-our-work/",
        label: "Support & membership",
        description: "Donate, become a member, or partner on programs.",
        ctaLabel: "Support the mission →",
      },
      {
        href: "/faq/",
        label: "FAQs",
        description: "Directory, classes, programs, and getting started.",
        ctaLabel: "Full FAQ →",
      },
    ],
  },
};
