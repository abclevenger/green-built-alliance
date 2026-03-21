import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { MarketingSection, NativeMarketingPage } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroReadyLogo");

function hubCta(): MarketingSection {
  return {
    type: "cta",
    title: "Programs & community",
    body: "Connect certification, classes, and the professionals who implement this work.",
    primary: { href: "/green-built-homes/", label: "Green Built Homes" },
    secondary: { href: "/events/", label: "Events" },
  };
}

/** Index hub for the resources tree. */
export const greenBuildingResourcesHubPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/",
  seo: {
    title: "Green Building Resources | Green Built Alliance",
    description:
      "Trusted guides on energy, water, materials, health, and site—curated for homeowners and pros in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Education",
      title: "Green building resources",
      subtitle:
        "Practical explainers on the systems that make homes efficient, durable, and healthy—grounded in regional experience.",
    },
    {
      type: "prose",
      paragraphs: [
        "Use these pages as a starting point—not a substitute for project-specific advice from qualified designers, builders, and raters.",
      ],
    },
    {
      type: "bulletList",
      title: "Topics",
      items: [
        "Videos — workshops and explainers to watch and share",
        "Glossary — common green building terms decoded",
        "Case studies — real projects and lessons learned",
        "Education & green building groups — learning pathways and community",
        "Homeowner hub — planning upgrades and working with pros",
        "Building envelope, air sealing, remodeling, and wall systems",
        "Renewables, EVs, appliances & lighting, smart growth, and site/landscape",
        "Water, indoor air, heating & cooling, and sustainable materials",
        "Energy tax credits & government resources",
        "Financial incentives — guidance and starting points (not a live incentive database)",
        "Natural building — bridge to our deep-dive article",
      ],
    },
    {
      type: "prose",
      heading: "Also on the site",
      paragraphs: [
        "Browse native articles on stormwater, site planning, air sealing, rainscreens, and more from the News and Green Building News hubs.",
      ],
    },
    hubCta(),
  ],
};

export const gbrHomeownerPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/homeowner/",
  seo: {
    title: "Green Building Resources for Homeowners | Green Built Alliance",
    description:
      "Plan smarter upgrades and new projects with green building basics—comfort, health, and efficiency in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "For homeowners",
      subtitle: "A roadmap for asking better questions and hiring the right help.",
    },
    {
      type: "bulletList",
      title: "Start here",
      items: [
        "Clarify goals: lower bills, healthier air, storm resilience, or smaller carbon footprint",
        "Prioritize the building envelope before oversizing equipment",
        "Request testing and documentation—not just product labels",
        "Talk with Green Built Homes professionals when certification is on the table",
      ],
    },
    {
      type: "cta",
      title: "Explore",
      primary: { href: "/green-built-homes/", label: "Green Built Homes" },
      secondary: { href: "/directory/", label: "Find a pro" },
    },
  ],
};

export const gbrBuildingEnvelopePage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/building-envelope/",
  seo: {
    title: "Building Envelope Resources | Green Built Alliance",
    description:
      "Insulation, air sealing, and water management for durable, efficient homes in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Building envelope",
      subtitle: "The shell of the home is where comfort, moisture, and energy bills are won or lost.",
    },
    {
      type: "prose",
      paragraphs: [
        "A continuous air barrier, adequate insulation for the assembly, controlled ventilation, and detailed flashing work together. Weaknesses at rim joists, penetrations, and transitions between materials are common leakage paths.",
      ],
    },
    {
      type: "cta",
      title: "Go deeper",
      primary: { href: "/air-sealing-the-devilish-details/", label: "Air sealing details" },
      secondary: { href: "/rainscreens-simple-strategies-for-protecting-ones-biggest-investment/", label: "Rainscreens" },
    },
  ],
};

export const gbrWaterEfficiencyPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/water-efficiency/",
  seo: {
    title: "Water Efficiency | Green Building Resources | Green Built Alliance",
    description:
      "Fixtures, hot water, landscaping, and moisture awareness for efficient water use in WNC homes.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Water efficiency",
      subtitle: "Save water and protect the building from moisture at the same time.",
    },
    {
      type: "bulletList",
      title: "Practical moves",
      items: [
        "Choose WaterSense fixtures where they fit your design",
        "Shorten hot-water pipe runs and insulate distribution lines",
        "Grade and detail foundations so bulk water stays outside",
        "Pair stormwater planning with landscaping—see our stormwater article",
      ],
    },
    {
      type: "cta",
      title: "Related",
      primary: { href: "/know-your-stormwater/", label: "Stormwater guide" },
      secondary: { href: "/moisture-drainage-management/", label: "Moisture management" },
    },
  ],
};

export const gbrHealthIaqPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/health-indoor-air-quality/",
  seo: {
    title: "Health & Indoor Air Quality | Green Built Alliance",
    description:
      "Ventilation, filtration, combustion safety, and material choices for healthier indoor air in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Health & indoor air quality",
      subtitle: "Design and build so fresh air, filtration, and source control work together.",
    },
    {
      type: "prose",
      paragraphs: [
        "Tight envelopes need planned ventilation. Pair balanced or supply ventilation with good filtration where allergies or wildfire smoke matter. Coordinate with HVAC installers early so ducts, ERV/HRV locations, and kitchen/bath exhaust actually work on paper and in the field.",
      ],
    },
    {
      type: "cta",
      title: "Further reading",
      primary: {
        href: "/indoor-air-plus-a-green-building-certification-program-thats-all-about-the-details/",
        label: "Indoor air plus overview",
      },
      secondary: { href: "/comfort-and-asheville-green-building/", label: "Comfort & green building" },
    },
  ],
};

export const gbrHeatingCoolingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/heating-cooling-systems/",
  seo: {
    title: "Heating & Cooling Systems | Green Built Alliance",
    description:
      "Right-sized HVAC, distribution, and controls for efficient comfort in mountain and mixed-humidity climates.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Heating & cooling",
      subtitle: "Loads drive equipment size; distribution and commissioning determine real comfort.",
    },
    {
      type: "prose",
      paragraphs: [
        "Manual J–style load calculations should reflect windows, shading, envelope performance, and internal gains. After install, verify airflow and refrigerant charge per manufacturer guidance—especially for high-performance homes where margins are thinner.",
      ],
    },
    hubCta(),
  ],
};

export const gbrMaterialsPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/sustainable-building-materials/",
  seo: {
    title: "Sustainable Building Materials | Green Built Alliance",
    description:
      "Choosing materials with lower embodied carbon, better durability, and healthier interiors—without greenwash.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Sustainable materials",
      subtitle: "Ask what a product is made of, how long it lasts, and how it affects installers and occupants.",
    },
    {
      type: "bulletList",
      title: "Lens to use",
      items: [
        "Durability and maintenance for your climate",
        "Moisture tolerance and compatibility with adjacent assemblies",
        "VOCs and emissions where enclosed living spaces are involved",
        "Local availability and skilled labor to install correctly",
      ],
    },
    {
      type: "cta",
      title: "Stories",
      primary: { href: "/natural-building/", label: "Natural building article" },
      secondary: { href: "/design-matters/", label: "Design matters" },
    },
  ],
};

export const gbrEnergyTaxCreditsPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/energy-tax-credits/",
  seo: {
    title: "Energy Tax Credits | Green Built Alliance",
    description:
      "Orientation on federal and state incentives that often touch efficient homes and renewables—always verify current law.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Energy tax credits",
      subtitle: "Incentives change with legislation; treat this page as context, not tax advice.",
    },
    {
      type: "prose",
      paragraphs: [
        "Homeowners and pros should confirm eligibility, effective dates, and documentation rules with the IRS, NC DSIRE, utilities, and qualified tax professionals before claiming credits or advertising them to clients.",
      ],
    },
    {
      type: "cta",
      title: "Stay current",
      primary: { href: "/news/", label: "News" },
      secondary: { href: "/green-building-resources/government-resources/", label: "Government resources" },
    },
    {
      type: "cta",
      title: "Broader incentive context",
      primary: { href: "/green-building-resources/financial-incentives/", label: "Financial incentives hub" },
      secondary: { href: "/maggie-leslie-incentives-for-building-green/", label: "Magazine: incentives for building green" },
    },
  ],
};

/** Framing page only — utilities, tax law, and rebate programs change frequently; verify with authoritative sources. */
export const gbrFinancialIncentivesPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/financial-incentives/",
  seo: {
    title: "Financial Incentives for Green Building | Green Built Alliance",
    description:
      "Starting-point guidance on incentives for efficient homes in NC—not a substitute for utilities, agencies, or tax professionals.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Financial incentives",
      subtitle:
        "Use this page to orient your research. It is not a live database of offers, rates, or eligibility.",
    },
    {
      type: "prose",
      paragraphs: [
        "Rebate menus, tax credits, and financing products change with legislation, commission decisions, and utility program cycles. Green Built Alliance does not maintain a real-time incentive ledger—always confirm dates, caps, and paperwork with the issuing entity and with your CPA, lender, or rater.",
        "The strongest projects still start with a good envelope, right-sized equipment, and quality installation; incentives should layer on top of that foundation, not drive hasty equipment swaps.",
      ],
    },
    {
      type: "bulletList",
      title: "Where to look next",
      items: [
        "Federal energy property and efficiency themes — see our energy tax credits page for high-level framing (not tax advice)",
        "North Carolina and regional summaries — start from our government resources hub and NC DSIRE-style references there",
        "Utility efficiency programs — your electric and gas providers publish current residential and commercial offers",
        "Green Built Homes and raters — program staff and HERS professionals often know which documentation lenders expect",
      ],
    },
    {
      type: "cta",
      title: "On the site",
      primary: { href: "/green-building-resources/energy-tax-credits/", label: "Energy tax credits" },
      secondary: { href: "/green-building-resources/government-resources/", label: "Government resources" },
    },
    {
      type: "cta",
      title: "Editorial context",
      primary: { href: "/maggie-leslie-incentives-for-building-green/", label: "Incentives for building green (2014)" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
};

export const gbrGovernmentResourcesPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/government-resources/",
  seo: {
    title: "Government & Utility Resources | Green Built Alliance",
    description:
      "Where to look for codes, incentives, and regional programs that intersect with green building in NC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Government resources",
      subtitle: "Start with authoritative sources, then loop in your design and construction team.",
    },
    {
      type: "bulletList",
      title: "Checklist",
      items: [
        "NC Energy Office and DSIRE for incentive summaries",
        "Local utility efficiency programs and rate structures",
        "Adopted energy and residential codes for your jurisdiction",
        "County/city stormwater and zoning requirements for your parcel",
      ],
    },
    hubCta(),
  ],
};

export const gbrVideosPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/videos/",
  seo: {
    title: "Green Building Videos | Green Built Alliance",
    description:
      "Workshops, tours, and explainers on high-performance homes, materials, and programs in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Videos",
      subtitle: "Learn visually—then dig into articles, classes, and the member directory.",
    },
    {
      type: "prose",
      paragraphs: [
        "We are consolidating the best public video content with the native site. For live learning, browse upcoming workshops on the events calendar and continuing education hub.",
      ],
    },
    {
      type: "cta",
      title: "Keep learning",
      primary: { href: "/events/", label: "Events" },
      secondary: { href: "/green-building-news/", label: "Green Building News" },
    },
  ],
};

export const gbrGlossaryPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/glossary-of-green-building-terms/",
  seo: {
    title: "Glossary of Green Building Terms | Green Built Alliance",
    description:
      "Quick definitions for HERS, ERV, thermal bridge, VOC, and other terms you will hear on green projects in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Glossary of green building terms",
      subtitle: "Plain-language anchors for conversations with builders, raters, and designers.",
    },
    {
      type: "bulletList",
      title: "Common terms",
      items: [
        "Air barrier — continuous layer that controls air leakage through the enclosure",
        "Blower door — fan test that measures envelope tightness and helps find leaks",
        "ERV / HRV — energy/heat recovery ventilators that bring in fresh air while tempering exhaust",
        "HERS — Home Energy Rating System; index comparing modeled energy use to a reference home",
        "Thermal bridge — localized path where insulation is thin or interrupted, increasing heat flow",
        "VOC — volatile organic compound; relevant for finishes, adhesives, and indoor air quality",
        "Rainscreen — drained and vented gap behind cladding to manage bulk water",
      ],
    },
    {
      type: "prose",
      heading: "Go deeper",
      paragraphs: [
        "Pair terms with our articles on air sealing, stormwater, indoor air quality, and Green Built Homes certification.",
      ],
    },
    {
      type: "cta",
      title: "Related",
      primary: { href: "/air-sealing-the-devilish-details/", label: "Air sealing" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
};

export const gbrCaseStudiesPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/case-studies/",
  seo: {
    title: "Green Building Case Studies | Green Built Alliance",
    description:
      "Lessons from real homes and projects—performance, materials, and process in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Case studies",
      subtitle: "Stories that show how good buildings get built—not just what they look like in photos.",
    },
    {
      type: "prose",
      paragraphs: [
        "Strong case studies name the climate, the assembly, the testing that was performed, and what the team would do differently next time. Use the articles below as a starting library while we expand curated project pages.",
      ],
    },
    {
      type: "bulletList",
      title: "Start here",
      items: [
        "Lessons from Asheville’s first zero energy ready home",
        "Parade of Homes green features snapshot",
        "Moisture, rainscreens, and stormwater articles for durability lessons",
      ],
    },
    {
      type: "cta",
      title: "Read",
      primary: { href: "/lessons-from-ashevilles-first-zero-energy-ready-home/", label: "Zero energy ready lessons" },
      secondary: {
        href: "/green-building-features-in-the-2022-asheville-parade-of-homes/",
        label: "2022 Parade of Homes",
      },
    },
  ],
};

export const gbrEducationPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/education/",
  seo: {
    title: "Green Building Education | Green Built Alliance",
    description:
      "Classes, workshops, and learning paths for homeowners and pros through Green Built Alliance in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Education",
      subtitle: "Build skills that match how homes really perform in our mountains and valleys.",
    },
    {
      type: "prose",
      paragraphs: [
        "Continuing education for licensed professionals lives alongside community workshops. Start with the events calendar and the continuing education funnel, then join membership for year-round access to programs and the directory.",
      ],
    },
    {
      type: "cta",
      title: "Next steps",
      primary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
      secondary: { href: "/directory/education/", label: "Education partners (directory)" },
    },
  ],
};

export const gbrGreenBuildingGroupsPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/green-building-groups/",
  seo: {
    title: "Green Building Groups | Green Built Alliance",
    description:
      "Connect with peers, advocates, and practitioners advancing green building across Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Green building groups",
      subtitle: "Community is part of the infrastructure—show up, learn, and share leads responsibly.",
    },
    {
      type: "prose",
      paragraphs: [
        "Green Built Alliance convenes builders, designers, raters, and homeowners through events, publications, and the member directory. Local meetups and partner organizations extend that network—watch the events feed for gatherings aligned with your interests.",
      ],
    },
    hubCta(),
  ],
};

export const gbrAlternativeRenewableEnergyPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/alternative-renewable-energy/",
  seo: {
    title: "Alternative & Renewable Energy | Green Built Alliance",
    description:
      "Solar, storage, and clean power paired with efficiency—how renewables fit WNC homes and businesses.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Alternative & renewable energy",
      subtitle: "Rightsize generation with a tight envelope and honest load estimates.",
    },
    {
      type: "prose",
      paragraphs: [
        "PV production, battery backup, and rate structures change quickly. Start with an efficient shell and realistic usage data, then work with qualified installers and your utility on interconnection.",
      ],
    },
    {
      type: "cta",
      title: "Explore",
      primary: { href: "/directory/renewable-energy/", label: "Renewable energy directory" },
      secondary: { href: "/what-is-a-net-zero-energy-home/", label: "Net zero energy homes" },
    },
  ],
};

export const gbrAppliancesLightingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/appliances-lighting/",
  seo: {
    title: "Appliances & Lighting | Green Built Alliance",
    description:
      "Efficient appliances and quality lighting design—comfort, bills, and grid impact for WNC homes.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Appliances & lighting",
      subtitle: "Plug loads and lighting design matter as much as HVAC when totals are tallied.",
    },
    {
      type: "bulletList",
      title: "Principles",
      items: [
        "Choose efficient appliances and avoid oversizing equipment you rarely use",
        "Layer lighting with controls; prioritize task and ambient over raw wattage",
        "Plan for heat pump dryers, induction cooking, and EV charging as loads evolve",
      ],
    },
    hubCta(),
  ],
};

export const gbrAlternativeWallSystemsPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/alternative-wall-systems/",
  seo: {
    title: "Alternative Wall Systems | Green Built Alliance",
    description:
      "Straw bale, ICFs, and other alternative assemblies—moisture, structure, and code coordination in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Alternative wall systems",
      subtitle: "Unconventional can work—when details, testing, and trades align.",
    },
    {
      type: "prose",
      paragraphs: [
        "Alternative assemblies demand early engineer and rater involvement, clear moisture strategies, and crews with relevant experience. Pair with our natural building article and moisture management resources.",
      ],
    },
    {
      type: "cta",
      title: "Read next",
      primary: { href: "/natural-building/", label: "Natural building" },
      secondary: { href: "/moisture-drainage-management/", label: "Moisture management" },
    },
  ],
};

export const gbrElectricVehiclesPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/electric-vehicles/",
  seo: {
    title: "Electric Vehicles & Homes | Green Built Alliance",
    description:
      "EV charging at home—panel capacity, rates, and safety alongside an efficient building shell.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Electric vehicles",
      subtitle: "Plan electrical service and charging before the car arrives in the driveway.",
    },
    {
      type: "prose",
      paragraphs: [
        "Coordinate charger location, amperage, and utility time-of-use programs with your electrician. Net zero ready homes often pre-wire for future EV even if a charger waits until later.",
      ],
    },
    {
      type: "cta",
      title: "Programs",
      primary: { href: "/what-is-a-net-zero-ready-home/", label: "Net zero ready" },
      secondary: { href: "/green-building-resources/energy-tax-credits/", label: "Tax credits overview" },
    },
  ],
};

export const gbrRemodelingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/remodeling/",
  seo: {
    title: "Green Remodeling | Green Built Alliance",
    description:
      "Prioritize envelope, health, and systems when renovating—practical guidance for WNC homeowners.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Remodeling",
      subtitle: "The best retrofits sequence air sealing, moisture fixes, then equipment upgrades.",
    },
    {
      type: "bulletList",
      title: "High leverage moves",
      items: [
        "Fix bulk water and drainage before dense-packing cavities",
        "Improve attic and rim details where accessible",
        "Right-size HVAC after envelope improvements",
        "Target kitchens and baths for ventilation and material upgrades",
      ],
    },
    {
      type: "cta",
      title: "Find help",
      primary: { href: "/directory/renovators-remodelers/", label: "Renovators directory" },
      secondary: { href: "/directory/", label: "All categories" },
    },
  ],
};

export const gbrEnergyEfficiencyAirSealingPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/energy-efficiency-air-sealing/",
  seo: {
    title: "Energy Efficiency & Air Sealing | Green Built Alliance",
    description:
      "Why air sealing and insulation details dominate energy savings—and where projects usually leak.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Energy efficiency & air sealing",
      subtitle: "The invisible work that makes efficient equipment actually perform.",
    },
    {
      type: "prose",
      paragraphs: [
        "This hub summarizes the topic; our dedicated article walks through devilish details at top plates, penetrations, and transitions.",
      ],
    },
    {
      type: "cta",
      title: "Deep dive",
      primary: { href: "/air-sealing-the-devilish-details/", label: "Air sealing article" },
      secondary: { href: "/green-building-resources/building-envelope/", label: "Building envelope" },
    },
  ],
};

export const gbrSmartGrowthPage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/smart-growth/",
  seo: {
    title: "Smart Growth & Sustainable Communities | Green Built Alliance",
    description:
      "Compact development, transportation, and land use choices that pair with efficient buildings in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Smart growth",
      subtitle: "Homes do not exist in a vacuum—where and how we build shapes emissions and equity.",
    },
    {
      type: "prose",
      paragraphs: [
        "Walkable neighborhoods, transit access, and thoughtful infill reduce per-capita driving and preserve working lands. Pair regional planning themes with site-scale stormwater and tree protection practices.",
      ],
    },
    {
      type: "cta",
      title: "Site scale",
      primary: { href: "/site-planning/", label: "Site planning article" },
      secondary: { href: "/know-your-stormwater/", label: "Stormwater" },
    },
  ],
};

export const gbrSustainableSiteLandscapePage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/sustainable-site-landscape/",
  seo: {
    title: "Sustainable Site & Landscape | Green Built Alliance",
    description:
      "Soils, plants, and water on your lot—working with WNC slopes, storms, and biodiversity.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Sustainable site & landscape",
      subtitle: "Keep rain where it helps and away from foundations.",
    },
    {
      type: "prose",
      paragraphs: [
        "Native plantings, reduced turf, and healthy soils support pollinators and infiltration. Tie landscape plans to roof runoff, foundation drains, and any steep-slope constraints early.",
      ],
    },
    {
      type: "cta",
      title: "Related",
      primary: { href: "/know-your-stormwater/", label: "Stormwater guide" },
      secondary: { href: "/carbon-negative-landscaping/", label: "Carbon-smart landscaping" },
    },
  ],
};

export const gbrNaturalBuildingBridgePage: NativeMarketingPage = {
  kind: "sections",
  path: "/green-building-resources/natural-building/",
  seo: {
    title: "Natural Building | Green Built Alliance",
    description:
      "Straw, clay, and low-impact methods—read the full native article on natural building in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Resources",
      title: "Natural building",
      subtitle: "We maintain a dedicated article with more depth than this short bridge page.",
    },
    {
      type: "prose",
      paragraphs: [
        "Natural building techniques emphasize low-impact materials, careful moisture management, and craft skills. For photos, considerations, and regional context, open the migrated article below.",
      ],
    },
    {
      type: "cta",
      title: "Full article",
      primary: { href: "/natural-building/", label: "Read natural building article" },
      secondary: { href: "/green-building-resources/", label: "All resources" },
    },
  ],
};

export const greenBuildingResourcesPages: NativeMarketingPage[] = [
  greenBuildingResourcesHubPage,
  gbrVideosPage,
  gbrGlossaryPage,
  gbrCaseStudiesPage,
  gbrEducationPage,
  gbrGreenBuildingGroupsPage,
  gbrAlternativeRenewableEnergyPage,
  gbrAppliancesLightingPage,
  gbrAlternativeWallSystemsPage,
  gbrElectricVehiclesPage,
  gbrRemodelingPage,
  gbrEnergyEfficiencyAirSealingPage,
  gbrSmartGrowthPage,
  gbrSustainableSiteLandscapePage,
  gbrHomeownerPage,
  gbrBuildingEnvelopePage,
  gbrWaterEfficiencyPage,
  gbrHealthIaqPage,
  gbrHeatingCoolingPage,
  gbrMaterialsPage,
  gbrEnergyTaxCreditsPage,
  gbrFinancialIncentivesPage,
  gbrGovernmentResourcesPage,
  gbrNaturalBuildingBridgePage,
];
