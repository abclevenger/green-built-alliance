import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativeDirectoryCategory } from "@/lib/content-types";
import { nativeDirectoryMemberProfilePath } from "./members/registry";

/**
 * Whitelisted native directory category hubs (`/directory/{slug}/`).
 * `member-profile` with a registered `member-id` is native (see `members/registry.ts`); unknown ids fall back to WP.
 *
 * TODO:DIR_API — Swap `spotlightListings` for live MemberPress/CRM/API data; add pagination and filters.
 * Spotlight names/links were aligned to a static mirror snapshot and may drift—verify periodically.
 */
const nativeDirectoryCategories: NativeDirectoryCategory[] = [
  {
    slug: "builders",
    path: "/directory/builders/",
    title: "Green home builders",
    heroEyebrow: "Directory",
    heroHeadline: "Green home builders in Western North Carolina",
    heroIntro:
      "Find member builders who invest in training, community ties, and credible high-performance construction—from custom homes and ADUs to thoughtful renovations.",
    valueBullets: [
      "Ask how they approach air sealing, moisture, and ventilation in our climate",
      "Request Green Built Homes or other program experience that matches your goals",
      "Shortlist several teams, then compare process, references, and communication fit",
    ],
    seo: {
      title: "Green Home Builders Asheville NC | Green Built Alliance",
      description:
        "Browse Green Built Alliance member builders across Asheville and WNC—teams focused on efficient, durable homes and transparent practice.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "Jade Mountain Builders & Co. Inc.",
        locationHint: "Asheville area",
        summary:
          "Ecologically sensitive craft building with a large in-house team focused on thoughtful homes.",
        href: nativeDirectoryMemberProfilePath("290"),
        featured: true,
        badges: ["Green Built Homes", "Certified"],
      },
      {
        name: "JAG & Assoc. Construction, Inc.",
        locationHint: "Urban infill, Asheville",
        summary: "Small team specializing in healthy, creative in-town homes with lower environmental impact.",
        href: nativeDirectoryMemberProfilePath("401"),
        badges: ["Certified builder"],
        recommended: true,
        listingPriority: 2,
      },
      {
        name: "Evergreen Construct Inc.",
        locationHint: "Asheville, NC",
        summary:
          "Custom homes, ADUs, and large renovations with Energy Star and Green Built NC experience.",
        href: nativeDirectoryMemberProfilePath("257"),
        badges: ["Energy Star", "Green Built NC"],
      },
    ],
    relatedNativePostPaths: [
      "/what-is-a-net-zero-ready-home/",
      "/green-built-nc-beyond-energy-star/",
      "/rainscreens-protecting-your-investment/",
    ],
  },
  {
    slug: "architects",
    path: "/directory/architects/",
    title: "Architects",
    heroEyebrow: "Directory",
    heroHeadline: "Architects & design-led practices",
    heroIntro:
      "Connect with members who shape massing, daylight, envelope strategy, and durability before the first footing is poured—especially valuable for performance targets and code-plus programs.",
    valueBullets: [
      "Clarify whether you need full architectural services or design-build collaboration",
      "Review experience with passive solar, shading, and WNC weather extremes",
      "Align early on how specs will translate to bids and field quality",
    ],
    seo: {
      title: "Green Architects & Designers | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member architects and design practices serving Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroLogo"),
    },
    spotlightListings: [
      {
        name: "Arcisan, Inc.",
        locationHint: "WNC / Upstate SC",
        summary: "Modern, biophilic residential and light commercial—new construction and renovations.",
        href: nativeDirectoryMemberProfilePath("71"),
        featured: true,
      },
      {
        name: "Assembly Architecture + Build",
        locationHint: "Asheville",
        summary: "Design-forward green homes focused on quality of life and resource conservation.",
        href: nativeDirectoryMemberProfilePath("938"),
      },
      {
        name: "Alice Dodson Architect, PA",
        locationHint: "Asheville",
        summary: "Integrated residential design with deep experience in energy-smart construction.",
        href: nativeDirectoryMemberProfilePath("34"),
      },
    ],
    relatedNativePostPaths: ["/design-matters/", "/natural-building/", "/comfort-and-asheville-green-building/"],
  },
  {
    slug: "attorneys",
    path: "/directory/attorneys/",
    title: "Attorneys",
    heroEyebrow: "Directory",
    heroHeadline: "Construction & real estate counsel",
    heroIntro:
      "Legal guidance for contracts, liens, land use, and dispute risk on complex projects. The native roster here is intentionally small—TODO:DIR_API will surface the full member grid when wired.",
    valueBullets: [
      "Engage counsel before signature—not after scope, schedule, or payment fights harden",
      "Share program paperwork (Green Built Homes, HERS, solar agreements) so advice matches your deal",
      "Confirm bar admission and relevant construction experience for your county and project type",
    ],
    seo: {
      title: "Green Building Attorneys WNC | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member attorneys with construction and business law experience in Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroLogo"),
    },
    spotlightListings: [
      {
        name: "Capua Law",
        locationHint: "Asheville & Boone",
        summary: "Construction, business, and litigation counsel for firms and projects across WNC.",
        href: nativeDirectoryMemberProfilePath("958"),
        featured: true,
      },
    ],
    relatedNativePostPaths: ["/green-built-homes/", "/site-planning/", "/moisture-drainage-management/"],
  },
  {
    slug: "education",
    path: "/directory/education/",
    title: "Education & training",
    heroEyebrow: "Directory",
    heroHeadline: "Workforce education partners",
    heroIntro:
      "Colleges and programs that train the trades and sustainability skill sets behind high-performance buildings. Spotlight reflects mirror-quality listings; confirm current offerings with each institution.",
    valueBullets: [
      "Ask which credentials, stackable certificates, or degrees align with your career goals",
      "Pair classroom learning with field experience—many pathways emphasize live projects",
      "Cross-check prerequisites, schedules, and financial aid directly on the school’s site",
    ],
    seo: {
      title: "Green Building Education & Training | Green Built Alliance Directory",
      description:
        "Explore Green Built Alliance member education partners for construction, sustainability, and trades training in WNC.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "AB Tech",
        locationHint: "Asheville, NC",
        summary:
          "Construction management, sustainability technologies, and applied trades programs with hands-on green building skills.",
        href: nativeDirectoryMemberProfilePath("304"),
        featured: true,
      },
    ],
    relatedNativePostPaths: [
      "/green-building-resources/education/",
      "/introducing-greenbuilt-nc-net-zero-and-net-zero-ready-homes/",
      "/events/",
    ],
  },
  {
    slug: "consultants",
    path: "/directory/consultants/",
    title: "Consultants",
    heroEyebrow: "Directory",
    heroHeadline: "Consultants & specialty advisors",
    heroIntro:
      "Engineers, green consultants, attorneys, materials specialists, and other advisors who help teams de-risk projects—especially when programs, codes, or assemblies get complex.",
    valueBullets: [
      "Bring consultants in when scope touches energy modeling, moisture, or compliance documentation",
      "Ask for relevant certifications and recent projects similar to yours",
      "Coordinate roles so builders and designers aren’t hearing conflicting guidance",
    ],
    seo: {
      title: "Green Building Consultants | Green Built Alliance Directory",
      description:
        "Explore Green Built Alliance member consultants and professional services across Western North Carolina.",
    },
    spotlightListings: [
      {
        name: "Capua Law",
        locationHint: "Asheville & Boone",
        summary: "Construction, business, and litigation counsel for projects and firms across WNC.",
        href: nativeDirectoryMemberProfilePath("958"),
        featured: true,
      },
      {
        name: "Greenhem Inc.",
        locationHint: "Regional",
        summary: "Green building materials and efficiency-focused solutions for project teams.",
        href: nativeDirectoryMemberProfilePath("887"),
      },
    ],
    relatedNativePostPaths: ["/natural-building/", "/moisture-drainage-management/", "/site-planning/"],
  },
  {
    slug: "home-energy-raters",
    path: "/directory/home-energy-raters/",
    title: "Home energy raters",
    heroEyebrow: "Directory",
    heroHeadline: "Home energy raters & verification",
    heroIntro:
      "Raters and analysts who document performance, support code compliance, and help you understand how a home actually behaves—not just how it looks on paper.",
    valueBullets: [
      "Confirm which rating or compliance pathway you are targeting (HERS, IECC, program-specific)",
      "Schedule testing when the envelope and systems are ready—not after finishes hide issues",
      "Use reports to prioritize upgrades on existing homes, not only new construction",
    ],
    seo: {
      title: "Home Energy Raters | Green Built Alliance Directory",
      description:
        "Find member home energy raters and performance professionals serving Asheville and Western North Carolina.",
    },
    spotlightListings: [
      {
        name: "Vandemusser Design",
        locationHint: "WNC & beyond",
        summary:
          "Technical consulting and certification support led by architect and engineer experience.",
        href: nativeDirectoryMemberProfilePath("40"),
        featured: true,
      },
      {
        name: "Greenhem Inc.",
        locationHint: "Regional",
        summary: "Materials and building-science aligned solutions supporting efficient assemblies.",
        href: nativeDirectoryMemberProfilePath("887"),
      },
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Green home building company—also appears across multiple directory categories on the legacy grid.",
        href: nativeDirectoryMemberProfilePath("726"),
      },
    ],
    relatedNativePostPaths: [
      "/indoor-air-plus-a-green-building-certification-program-thats-all-about-the-details/",
      "/what-is-a-net-zero-energy-home/",
      "/are-the-energy-bills-in-my-new-house-too-high/",
    ],
  },
  {
    slug: "hvac-installers",
    path: "/directory/hvac-installers/",
    title: "HVAC installers",
    heroEyebrow: "Directory",
    heroHeadline: "HVAC installers & mechanical partners",
    heroIntro:
      "Mechanical contractors who understand load calculations, filtration, ventilation, and how HVAC interacts with a tight envelope—critical for comfort and efficiency in WNC.",
    valueBullets: [
      "Ask how they commission equipment and verify airflow after install",
      "Discuss ventilation strategy (ERV/HRV) if you are tightening the shell",
      "Plan for right-sizing—not defaulting to the tonnage from the last decade",
    ],
    seo: {
      title: "HVAC Installers | Green Built Alliance Directory",
      description:
        "Browse member HVAC installers focused on efficient, healthy mechanical systems in Western North Carolina.",
    },
    spotlightListings: [
      {
        name: "B&R Service, Inc.",
        locationHint: "WNC",
        summary: "Building-performance HVAC design, install, and diagnostics with BPI-certified pros.",
        href: nativeDirectoryMemberProfilePath("895"),
        featured: true,
      },
      {
        name: "Fair Air Heating & Cooling",
        locationHint: "Regional",
        summary: "Residential HVAC services with emphasis on air quality and dependable equipment.",
        href: nativeDirectoryMemberProfilePath("967"),
      },
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Listed on the legacy multi-category grid—verify HVAC scope directly with the team.",
        href: nativeDirectoryMemberProfilePath("726"),
      },
    ],
    relatedNativePostPaths: ["/comfort-and-asheville-green-building/", "/air-sealing-the-devilish-details/"],
  },
  {
    slug: "home-inspectors",
    path: "/directory/home-inspectors/",
    title: "Home inspectors",
    heroEyebrow: "Directory",
    heroHeadline: "Home inspectors",
    heroIntro:
      "Inspectors help buyers and owners understand existing conditions, safety concerns, and upgrade opportunities—especially valuable before you commit to a major retrofit roadmap.",
    valueBullets: [
      "Clarify whether you need a standard inspection, specialized testing, or both",
      "Share efficiency or durability goals so they can tailor observations",
      "Pair findings with raters or contractors for prioritized next steps",
    ],
    seo: {
      title: "Home Inspectors | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member home inspectors serving Western North Carolina.",
    },
    spotlightListings: [
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary:
          "Snapshot from the legacy category grid—this category has fewer public listings; TODO:DIR_API to sync full roster.",
        href: nativeDirectoryMemberProfilePath("726"),
        featured: true,
      },
    ],
    relatedNativePostPaths: ["/rainscreens-protecting-your-investment/", "/are-the-energy-bills-in-my-new-house-too-high/"],
  },
  {
    slug: "renewable-energy",
    path: "/directory/renewable-energy/",
    title: "Renewable energy",
    heroEyebrow: "Directory",
    heroHeadline: "Solar, storage & renewable partners",
    heroIntro:
      "Member businesses that help homes and buildings generate clean power, integrate storage, and navigate interconnection—paired with an efficient envelope for best results.",
    valueBullets: [
      "Confirm experience with your utility’s interconnection rules and timeline",
      "Rightsize production with realistic load profiles and future EV or heat-pump plans",
      "Pair PV with air sealing and ventilation so efficiency gains aren’t lost to leakage",
    ],
    seo: {
      title: "Renewable Energy Professionals | Green Built Alliance Directory",
      description:
        "Browse Green Built Alliance members in solar, storage, and renewable services across Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "Vandemusser Design",
        locationHint: "WNC & beyond",
        summary: "Technical consulting and certification support with architecture and engineering depth.",
        href: nativeDirectoryMemberProfilePath("40"),
        featured: true,
      },
      {
        name: "Greenhem Inc.",
        locationHint: "Regional",
        summary: "Materials and building-science aligned solutions supporting efficient, durable assemblies.",
        href: nativeDirectoryMemberProfilePath("887"),
      },
    ],
    relatedNativePostPaths: [
      "/what-is-a-net-zero-energy-home/",
      "/lessons-from-ashevilles-first-zero-energy-ready-home/",
      "/local-school-gets-solar-makeover-thanks-to-appalachian-offsets/",
      "/cari-barcas-solar-for-schools/",
    ],
  },
  {
    slug: "waterproofing",
    path: "/directory/waterproofing/",
    title: "Waterproofing",
    heroEyebrow: "Directory",
    heroHeadline: "Waterproofing & building envelope partners",
    heroIntro:
      "Members who focus on keeping bulk water out—foundations, decks, transitions, and details that protect everything downstream.",
    valueBullets: [
      "Coordinate waterproofing scope with flashing, insulation, and drainage plans early",
      "Ask how details are inspected before finishes hide problem areas",
      "Document transitions between trades so the air and water barriers stay continuous",
    ],
    seo: {
      title: "Waterproofing | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member waterproofing and envelope specialists serving Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Green builder with strong craft focus—verify waterproofing scope when engaging for envelope work.",
        href: nativeDirectoryMemberProfilePath("726"),
        featured: true,
      },
    ],
    relatedNativePostPaths: ["/moisture-drainage-management/", "/rainscreens-simple-strategies-for-protecting-ones-biggest-investment/"],
  },
  {
    slug: "realtors",
    path: "/directory/realtors/",
    title: "Realtors",
    heroEyebrow: "Directory",
    heroHeadline: "Realtors who know green homes",
    heroIntro:
      "Agents and brokers who understand high-performance homes, certifications, and how to communicate value without greenwash.",
    valueBullets: [
      "Ask how they document HERS scores, Green Built Homes status, or solar agreements in transactions",
      "Request references from buyers who purchased efficient or certified homes",
      "Pair realtor tours with raters or builders when technical questions arise",
    ],
    seo: {
      title: "Green Realtors | Green Built Alliance Directory",
      description:
        "Explore Green Built Alliance member realtors serving buyers and sellers of efficient homes in WNC.",
      ogImage: mediaUrl("ogGbhNetZeroLogo"),
    },
    spotlightListings: [
      {
        name: "Assembly Architecture + Build",
        locationHint: "Asheville",
        summary: "Design-forward team—confirm brokerage referrals if you need a dedicated agent partner.",
        href: nativeDirectoryMemberProfilePath("938"),
        featured: true,
      },
      {
        name: "Arcisan, Inc.",
        locationHint: "WNC / Upstate SC",
        summary: "Architecture-led practice; use directory filters for dedicated realtor members as the roster grows.",
        href: nativeDirectoryMemberProfilePath("71"),
      },
    ],
    relatedNativePostPaths: ["/green-built-nc-beyond-energy-star/", "/what-is-a-net-zero-ready-home/"],
  },
  {
    slug: "renovators-remodelers",
    path: "/directory/renovators-remodelers/",
    title: "Renovators & remodelers",
    heroEyebrow: "Directory",
    heroHeadline: "Renovation & remodeling pros",
    heroIntro:
      "Member teams that specialize in thoughtful renovations—opening walls safely, improving envelopes, and sequencing upgrades without surprise moisture or code issues.",
    valueBullets: [
      "Ask how they phase envelope work before equipment swaps",
      "Request references for projects similar in age and style to yours",
      "Clarify who leads rater or inspector coordination on performance goals",
    ],
    seo: {
      title: "Renovators & Remodelers | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member renovators and remodelers serving Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Custom homes and substantial renovations with craft-forward green building.",
        href: nativeDirectoryMemberProfilePath("726"),
        featured: true,
      },
    ],
    relatedNativePostPaths: ["/green-building-resources/remodeling/", "/moisture-drainage-management/"],
  },
  {
    slug: "engineers",
    path: "/directory/engineers/",
    title: "Engineers",
    heroEyebrow: "Directory",
    heroHeadline: "Structural & building engineers",
    heroIntro:
      "Engineering members who support unconventional assemblies, retrofits, and performance targets with documentation builders can build from.",
    valueBullets: [
      "Engage early when altering loads, openings, or lateral systems",
      "Share program targets (e.g., blower door) so details align with energy models",
      "Coordinate with architects and raters on moisture and durability assumptions",
    ],
    seo: {
      title: "Engineers | Green Built Alliance Directory",
      description:
        "Browse Green Built Alliance member engineers supporting residential and light commercial projects in WNC.",
      ogImage: mediaUrl("ogGbhNetZeroLogo"),
    },
    spotlightListings: [
      {
        name: "Vandemusser Design",
        locationHint: "WNC & beyond",
        summary: "Multidisciplinary consulting with architecture and engineering depth for high-performance homes.",
        href: nativeDirectoryMemberProfilePath("40"),
        featured: true,
      },
    ],
    relatedNativePostPaths: ["/design-matters/", "/rainscreens-simple-strategies-for-protecting-ones-biggest-investment/"],
  },
  {
    slug: "electricians",
    path: "/directory/electricians/",
    title: "Electricians",
    heroEyebrow: "Directory",
    heroHeadline: "Electricians & low-voltage partners",
    heroIntro:
      "Licensed electrical contractors who understand modern loads—heat pumps, EV chargers, solar-ready panels, and efficient lighting packages.",
    valueBullets: [
      "Confirm panel capacity for future EV and heat pump water heaters",
      "Ask about surge protection and generator interlocks if relevant",
      "Coordinate lighting controls with HVAC and ventilation schedules",
    ],
    seo: {
      title: "Electricians | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member electricians serving Western North Carolina homes and businesses.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "B&R Service, Inc.",
        locationHint: "Western North Carolina",
        summary: "BPI-certified team focused on building-performance-based HVAC and related electrical coordination.",
        href: nativeDirectoryMemberProfilePath("895"),
        featured: true,
      },
    ],
    relatedNativePostPaths: [
      "/green-building-resources/appliances-lighting/",
      "/green-building-resources/electric-vehicles/",
    ],
  },
  {
    slug: "appraisers",
    path: "/directory/appraisers/",
    title: "Appraisers",
    heroEyebrow: "Directory",
    heroHeadline: "Appraisers & valuation partners",
    heroIntro:
      "Members who understand high-performance construction can translate HERS scores, solar agreements, and certification paperwork into credible valuations—critical when buyers and lenders ask hard questions.",
    valueBullets: [
      "Request experience with Green Built Homes, solar PPAs, or net-metered systems",
      "Ask how comparables are chosen when efficient homes are scarce in MLS data",
      "Coordinate timing so field visits capture operating equipment and documentation",
    ],
    seo: {
      title: "Green Home Appraisers WNC | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance members offering appraisal and related real estate services attuned to efficient homes.",
      ogImage: mediaUrl("ogGbhNetZeroLogo"),
    },
    spotlightListings: [
      {
        name: "Concept to Completion Construction Company, LLC",
        locationHint: "Western North Carolina",
        summary: "Appraisal, brokerage, and building under one roof—confirm which service line you need when you call.",
        href: nativeDirectoryMemberProfilePath("924"),
        featured: true,
      },
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Listed on the legacy appraisers grid as a builder—verify appraisal scope before engaging.",
        href: nativeDirectoryMemberProfilePath("726"),
      },
    ],
    relatedNativePostPaths: [
      "/whats-in-a-green-built-home-a-guide-for-homeowners/",
      "/why-build-green-a-green-rental/",
    ],
  },
  {
    slug: "interior-designers",
    path: "/directory/interior-designers/",
    title: "Interior designers",
    heroEyebrow: "Directory",
    heroHeadline: "Interior design for healthy, durable homes",
    heroIntro:
      "Interior designers shape finishes, lighting, and moisture-sensitive assemblies that touch indoor air quality daily—especially important when envelopes get tighter and ventilation strategies change.",
    valueBullets: [
      "Align material selections with ventilation and humidity plans",
      "Ask how they coordinate with architects and builders before finishes lock in",
      "Request low-VOC and durable options suited to mountain climate swings",
    ],
    seo: {
      title: "Green Interior Designers Asheville | Green Built Alliance Directory",
      description:
        "Browse Green Built Alliance member interior designers serving high-performance homes in Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "Allard & Roberts Interior Design, Inc.",
        locationHint: "Asheville area",
        summary: "Boutique residential interiors for new construction and substantial renovations.",
        href: nativeDirectoryMemberProfilePath("733"),
        featured: true,
      },
      {
        name: "Carrie Moore Interior Design, LLC",
        locationHint: "Western North Carolina",
        summary: "Warm-modern, nature-inspired residential interiors with intentional materials.",
        href: nativeDirectoryMemberProfilePath("925"),
      },
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Legacy grid listing—confirm interior design scope with the team.",
        href: nativeDirectoryMemberProfilePath("726"),
      },
    ],
    relatedNativePostPaths: ["/design-matters/", "/indoor-air-plus-a-green-building-certification-program-thats-all-about-the-details/"],
  },
  {
    slug: "developers-communities",
    path: "/directory/developers-communities/",
    title: "Developers & communities",
    heroEyebrow: "Directory",
    heroHeadline: "Developers building thoughtful neighborhoods",
    heroIntro:
      "Teams planning infill, small clusters, or regenerative neighborhoods need alignment on stormwater, tree preservation, and long-term maintenance—especially when marketing green performance to buyers.",
    valueBullets: [
      "Ask how common amenities, roads, and utilities will be operated and funded after sale",
      "Confirm which certification or testing applies to each plan type in the community",
      "Engage landscape and civil partners before mass grading locks in tree loss",
    ],
    seo: {
      title: "Green Developers & Communities WNC | Green Built Alliance Directory",
      description:
        "Explore Green Built Alliance members developing residential communities and infill projects in Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroLogo"),
    },
    spotlightListings: [
      {
        name: "JAG & Assoc. Construction, Inc.",
        locationHint: "Asheville in-town",
        summary: "Urban spec and infill focused on healthy, durable homes with lower environmental footprint.",
        href: nativeDirectoryMemberProfilePath("401"),
        featured: true,
      },
      {
        name: "Nicholson and Sun LLC",
        locationHint: "WNC",
        summary: "Custom true-green homes with science-forward detailing and climate focus.",
        href: nativeDirectoryMemberProfilePath("564"),
      },
      {
        name: "Terra Futura",
        locationHint: "WNC",
        summary: "Regenerative small-footprint homes and micro-neighborhoods.",
        href: nativeDirectoryMemberProfilePath("920"),
      },
      {
        name: "Building for Life, L.L.C.",
        locationHint: "Asheville / Oakley",
        summary: "GC with Green Built and Energy Star new home experience on multi-lot work.",
        href: nativeDirectoryMemberProfilePath("723"),
      },
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Legacy directory listing—confirm developer vs. single-lot scope when you reach out.",
        href: nativeDirectoryMemberProfilePath("726"),
      },
    ],
    relatedNativePostPaths: ["/housing-complex/", "/margaret-chandler-tree-preservation/", "/site-planning/"],
  },
  {
    slug: "nc-licensed-plumbers",
    path: "/directory/nc-licensed-plumbers/",
    title: "NC licensed plumbers",
    heroEyebrow: "Directory",
    heroHeadline: "Plumbing for efficient homes",
    heroIntro:
      "Heat-pump water heaters, low-flow fixtures, and tight envelopes change how plumbing interacts with HVAC and moisture. Shortlist licensed plumbers comfortable with high-performance specifications.",
    valueBullets: [
      "Clarify drain layouts for ERV/HRV condensate and humid climates",
      "Ask about experience with heat-pump water heaters and recirculation controls",
      "Coordinate pressure balancing with blower door and ventilation results",
    ],
    seo: {
      title: "NC Licensed Plumbers — Green Homes | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member plumbers serving efficient and green homes in Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "NCPD Service Inc",
        locationHint: "Western North Carolina",
        summary: "Family-owned residential and commercial plumbing—service, replacement, and new construction.",
        href: nativeDirectoryMemberProfilePath("944"),
        featured: true,
      },
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary: "Listed on legacy plumber grid as builder—confirm licensed plumbing scope with the team.",
        href: nativeDirectoryMemberProfilePath("726"),
      },
    ],
    relatedNativePostPaths: ["/moisture-drainage-management/", "/kelvin-bonilla-tips-to-save-energy-at-home/"],
  },
  {
    slug: "roofers",
    path: "/directory/roofers/",
    title: "Roofers & living-roof partners",
    heroEyebrow: "Directory",
    heroHeadline: "Roofing and roof-adjacent specialists",
    heroIntro:
      "High-performance homes need watertight transitions, durable underlayments, and—when you choose them—properly engineered green roofs. Shortlist members and confirm licensing, warranty, and scope for your assembly.",
    valueBullets: [
      "Ask how flashing and penetration details align with your air barrier and ventilation plan",
      "For vegetated roofs, confirm structural, drainage, and maintenance expectations up front",
      "Coordinate with builders or architects so trades are not sequenced into conflict",
    ],
    seo: {
      title: "Green Roofers & Living Roofs | Green Built Alliance Directory",
      description:
        "Browse Green Built Alliance members listed for roofing and living-roof work in Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroLogo"),
    },
    spotlightListings: [
      {
        name: "Sure Foot Builders Inc.",
        locationHint: "Asheville area",
        summary:
          "Green builder listed in legacy roofing categories—confirm roofing scope and trade partners when you inquire.",
        href: nativeDirectoryMemberProfilePath("726"),
        featured: true,
      },
      {
        name: "Living Roofs, Inc.",
        locationHint: "Asheville & Southeast",
        summary: "Landscape on structure and living roof systems for complex projects since 2006.",
        href: nativeDirectoryMemberProfilePath("245"),
      },
    ],
    relatedNativePostPaths: [
      "/rainscreens-simple-strategies-for-protecting-ones-biggest-investment/",
      "/moisture-drainage-management/",
    ],
  },
  {
    slug: "landscape-architects",
    path: "/directory/landscape-architects/",
    title: "Landscape architects",
    heroEyebrow: "Directory",
    heroHeadline: "Landscape architecture & site design",
    heroIntro:
      "Landscape architects connect grading, planting, stormwater, and outdoor living to the building envelope. Engage early so driveways, retaining walls, and tree preservation align with energy and durability goals.",
    valueBullets: [
      "Share sun/wind studies and roof overhangs so plant palettes support—not fight—the design",
      "Clarify who owns stormwater BMP maintenance after certificate of occupancy",
      "Ask how they coordinate with civil engineers and builders during construction",
    ],
    seo: {
      title: "Landscape Architects WNC | Green Built Alliance Directory",
      description:
        "Find Green Built Alliance member landscape architects and site design practices in Western North Carolina.",
      ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
    },
    spotlightListings: [
      {
        name: "Fusco Land Planning & Design, PLLC",
        locationHint: "Western North Carolina",
        summary: "Landscape architecture, conservation planning, and environmental design.",
        href: nativeDirectoryMemberProfilePath("515"),
        featured: true,
      },
      {
        name: "Osgood Landscape Architecture, Inc.",
        locationHint: "Western North Carolina",
        summary: "Site design with emphasis on preserving and enhancing the natural environment.",
        href: nativeDirectoryMemberProfilePath("399"),
      },
      {
        name: "Living Roofs, Inc.",
        locationHint: "Asheville & Southeast",
        summary: "Landscape on structure—green roofs and intensive planting over occupied space.",
        href: nativeDirectoryMemberProfilePath("245"),
      },
    ],
    relatedNativePostPaths: [
      "/site-planning/",
      "/more-on-site-planning/",
      "/buildings-and-botany/",
    ],
  },
];

const bySlug = new Map(nativeDirectoryCategories.map((c) => [c.slug, c]));

export function getNativeDirectoryCategoryBySegments(segments: string[]): NativeDirectoryCategory | null {
  if (segments.length !== 2) return null;
  const root = segments[0];
  const slug = segments[1];
  if (!root || !slug || root.toLowerCase() !== "directory") return null;
  const decoded = decodeURIComponent(slug);
  return bySlug.get(decoded) ?? null;
}

export function listNativeDirectoryCategoryPaths(): string[] {
  return nativeDirectoryCategories.map((c) => c.path);
}

export function listNativeDirectoryCategories(): NativeDirectoryCategory[] {
  return [...nativeDirectoryCategories];
}
