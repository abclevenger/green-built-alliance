import type { NativeDirectoryMemberProfile } from "@/lib/content-types";

export function nativeDirectoryMemberProfilePath(legacyMemberId: string): string {
  return `/directory/member-profile/?member-id=${legacyMemberId}`;
}

/**
 * Transitional native profiles for spotlight members only.
 * TODO:DIR_API — Import from directory API; keep `legacyMemberId` for redirects/bookmarks.
 */
const nativeDirectoryMembers: NativeDirectoryMemberProfile[] = [
  {
    legacyMemberId: "290",
    path: nativeDirectoryMemberProfilePath("290"),
    organizationName: "Jade Mountain Builders & Co. Inc.",
    roleLabel: "Green home builder",
    memberLevel: "Leadership Circle",
    summary:
      "A team of craftspeople focused on ecologically sensitive building across the Asheville area—thoughtful homes with an emphasis on how construction touches land, materials, and long-term durability.",
    specialties: [
      "Custom homes",
      "Design-build collaboration",
      "High-performance envelopes",
      "Regional craft and detailing",
    ],
    location: "Asheville & Western North Carolina",
    phone: "828.216.3948",
    email: "hans@jademountainbuilders.com",
    website: { href: "https://www.jademountainbuilders.com", label: "jademountainbuilders.com" },
    directoryCategorySlugs: ["builders"],
    relatedNativePostPaths: [
      "/what-is-a-net-zero-ready-home/",
      "/rainscreens-protecting-your-investment/",
    ],
    seo: {
      title: "Jade Mountain Builders & Co. Inc. | Member Directory | Green Built Alliance",
      description:
        "Jade Mountain Builders—Green Built Alliance member builder serving Asheville and WNC with ecologically sensitive custom homes.",
    },
    listingPriority: 10,
    featured: true,
    badges: ["Featured listing", "Green Built Homes"],
  },
  {
    legacyMemberId: "304",
    path: nativeDirectoryMemberProfilePath("304"),
    organizationName: "Asheville-Buncombe Technical Community College (A-B Tech)",
    roleLabel: "Construction & sustainability education",
    memberLevel: "Platinum Membership",
    summary:
      "Applied programs in construction management, sustainability technologies, and skilled trades—teaching energy efficiency, renewable-energy technologies, and high-performance materials and methods through classroom and live-project learning.",
    specialties: [
      "Construction management",
      "Sustainability technologies",
      "Energy efficiency & renewables curriculum",
      "Skilled trades pathways",
    ],
    location: "Asheville, NC",
    phone: "828.254.1921",
    email: "hmoody@abtech.edu",
    website: { href: "https://abtech.edu/construction", label: "abtech.edu/construction" },
    directoryCategorySlugs: ["education"],
    relatedNativePostPaths: [
      "/green-built-nc-beyond-energy-star/",
      "/introducing-greenbuilt-nc-net-zero-and-net-zero-ready-homes/",
      "/green-building-resources/education/",
    ],
    seo: {
      title: "A-B Tech | Member Directory | Green Built Alliance",
      description:
        "A-B Tech—Green Built Alliance member offering construction and sustainability training in Asheville and WNC.",
    },
  },
  {
    legacyMemberId: "401",
    path: nativeDirectoryMemberProfilePath("401"),
    organizationName: "JAG & Assoc. Construction, Inc.",
    roleLabel: "Green home builder",
    memberLevel: "Leadership Circle",
    summary:
      "Small company specializing in in-town urban infill—healthy, creative, long-lasting houses with a lens on reducing construction’s environmental footprint.",
    specialties: ["Urban spec and infill", "Healthy materials", "Energy-conscious new homes"],
    location: "Asheville area",
    phone: "828.216.0914",
    email: "jody@jaggreen.com",
    website: { href: "http://JAGGREEN.com", label: "JAGGREEN.com" },
    directoryCategorySlugs: ["builders", "developers-communities"],
    relatedNativePostPaths: ["/green-built-nc-beyond-energy-star/", "/design-matters/"],
    seo: {
      title: "JAG & Assoc. Construction | Member Directory | Green Built Alliance",
      description:
        "JAG Construction—member builder focused on healthy, durable in-town homes in Asheville and WNC.",
    },
    listingPriority: 30,
    badges: ["Certified builder"],
  },
  {
    legacyMemberId: "257",
    path: nativeDirectoryMemberProfilePath("257"),
    organizationName: "Evergreen Construct Inc.",
    roleLabel: "Green home builder",
    memberLevel: "Platinum Membership",
    summary:
      "Custom homes, ADUs, and large-scale renovations rooted in sustainable design, efficient construction, and refined craftsmanship—Energy Star and Green Built NC experience for WNC families.",
    specialties: ["Custom homes", "ADUs", "Major renovations", "Certified high-performance homes"],
    location: "Asheville, NC",
    phone: "828.779.4077",
    email: "evergreenconstructinc@gmail.com",
    website: { href: "https://www.evergreenconstruct.com", label: "evergreenconstruct.com" },
    directoryCategorySlugs: ["builders"],
    relatedNativePostPaths: ["/what-is-a-net-zero-energy-home/", "/introducing-greenbuilt-nc-net-zero-and-net-zero-ready-homes/"],
    seo: {
      title: "Evergreen Construct Inc. | Member Directory | Green Built Alliance",
      description:
        "Evergreen Construct—Asheville custom builder for high-performance homes, ADUs, and renovations.",
    },
    listingPriority: 20,
    badges: ["Energy Star", "Green Built NC"],
  },
  {
    legacyMemberId: "71",
    path: nativeDirectoryMemberProfilePath("71"),
    organizationName: "Arcisan, Inc.",
    roleLabel: "Architect",
    memberLevel: "Gold Membership",
    summary:
      "Modern, biophilic architecture for custom homes and light commercial work—new construction and renovations with a focus on integrated design.",
    specialties: ["Residential architecture", "Light commercial", "Renovations", "Biophilic design"],
    location: "WNC & Upstate South Carolina",
    phone: "864.607.2428",
    email: "info@arcisandesign.com",
    website: { href: "https://www.arcisandesign.com", label: "arcisandesign.com" },
    directoryCategorySlugs: ["architects", "realtors"],
    relatedNativePostPaths: ["/design-matters/", "/natural-building/"],
    seo: {
      title: "Arcisan, Inc. | Member Directory | Green Built Alliance",
      description: "Arcisan—member architecture practice for modern, biophilic homes and commercial work in WNC.",
    },
  },
  {
    legacyMemberId: "938",
    path: nativeDirectoryMemberProfilePath("938"),
    organizationName: "Assembly Architecture + Build",
    roleLabel: "Architect / design-build",
    memberLevel: "Gold Membership",
    summary:
      "Design-forward green homes that aim to improve quality of life while conserving resources—balancing building science with enduring aesthetics.",
    specialties: ["Design-led homes", "Sustainability integration", "Performance-minded detailing"],
    location: "Asheville, NC",
    phone: "8282423738",
    email: "ross@assemblyab.com",
    website: { href: "http://assemblyab.com", label: "assemblyab.com" },
    directoryCategorySlugs: ["architects", "realtors"],
    relatedNativePostPaths: ["/comfort-and-asheville-green-building/", "/design-matters/"],
    seo: {
      title: "Assembly Architecture + Build | Member Directory | Green Built Alliance",
      description: "Assembly Architecture + Build—member firm for green residential design in Asheville.",
    },
  },
  {
    legacyMemberId: "34",
    path: nativeDirectoryMemberProfilePath("34"),
    organizationName: "Alice Dodson Architect, PA",
    roleLabel: "Architect",
    memberLevel: "Silver Membership",
    summary:
      "Integrated, affordable residential architectural design with long experience in alternative energy and high-performing, efficient construction assemblies.",
    specialties: ["Residential design", "Energy-smart envelopes", "Renovations and new homes"],
    location: "Asheville, NC",
    phone: "828.712.9326",
    email: "Alice@AliceDodsonArchitect.com",
    website: { href: "https://AliceDodsonArchitect.com", label: "AliceDodsonArchitect.com" },
    directoryCategorySlugs: ["architects"],
    relatedNativePostPaths: ["/natural-building/", "/site-planning/"],
    seo: {
      title: "Alice Dodson Architect, PA | Member Directory | Green Built Alliance",
      description: "Alice Dodson Architect—member residential architect serving Asheville and WNC.",
    },
  },
  {
    legacyMemberId: "958",
    path: nativeDirectoryMemberProfilePath("958"),
    organizationName: "Capua Law",
    roleLabel: "Construction & business law",
    memberLevel: "Gold Membership",
    summary:
      "Full-service construction, business, and litigation law firm supporting projects and companies across Western North Carolina—with offices in Asheville and Boone.",
    specialties: ["Construction law", "Business counsel", "Litigation support", "Contract review"],
    location: "Asheville & Boone, NC",
    phone: "828.264.0260",
    email: "johns@capualaw.com",
    website: { href: "http://www.capualaw.com", label: "capualaw.com" },
    directoryCategorySlugs: ["consultants", "attorneys"],
    relatedNativePostPaths: ["/site-planning/", "/moisture-drainage-management/"],
    seo: {
      title: "Capua Law | Member Directory | Green Built Alliance",
      description: "Capua Law—Green Built Alliance member firm for construction and business law in WNC.",
    },
  },
  {
    legacyMemberId: "887",
    path: nativeDirectoryMemberProfilePath("887"),
    organizationName: "Greenhem Inc.",
    roleLabel: "Green building materials & consulting",
    memberLevel: "Gold Membership",
    summary:
      "Materials and consulting aligned with sustainability, energy efficiency, and advanced eco-friendly construction—supporting teams who want sharper building-science outcomes.",
    specialties: ["Green materials", "Efficiency strategies", "Technical consulting", "Envelope support"],
    location: "Regional (WNC and beyond)",
    phone: "(910) 757-0075",
    email: "consulting@greenhemusa.com",
    website: { href: "http://www.greenhemusa.com", label: "greenhemusa.com" },
    directoryCategorySlugs: ["consultants", "home-energy-raters"],
    relatedNativePostPaths: ["/moisture-drainage-management/", "/natural-building/"],
    seo: {
      title: "Greenhem Inc. | Member Directory | Green Built Alliance",
      description: "Greenhem Inc.—member consultant and materials resource for efficient, sustainable building.",
    },
  },
  {
    legacyMemberId: "40",
    path: nativeDirectoryMemberProfilePath("40"),
    organizationName: "Vandemusser Design",
    roleLabel: "Home energy & green certification consulting",
    memberLevel: "Platinum Membership",
    summary:
      "Technical consulting and certification services for green residential construction—led by architect and engineer experience serving builders, architects, developers, and homeowners.",
    specialties: ["HERS / ratings support", "Green certification", "Technical consulting", "Multidisciplinary review"],
    location: "Western North Carolina & beyond",
    phone: "828.348.4723",
    email: "amy@vandemusser.com",
    website: { href: "https://www.vandemusser.com", label: "vandemusser.com" },
    directoryCategorySlugs: ["home-energy-raters", "renewable-energy", "engineers"],
    relatedNativePostPaths: [
      "/indoor-air-plus-a-green-building-certification-program-thats-all-about-the-details/",
      "/what-is-a-net-zero-energy-home/",
    ],
    seo: {
      title: "Vandemusser Design | Member Directory | Green Built Alliance",
      description: "Vandemusser Design—member energy and green certification consulting for residential projects.",
    },
  },
  {
    legacyMemberId: "726",
    path: nativeDirectoryMemberProfilePath("726"),
    organizationName: "Sure Foot Builders Inc.",
    roleLabel: "Green home builder",
    memberLevel: "Platinum Membership",
    summary:
      "Green home building in the greater Asheville area—focused on beautiful, creative homes that add comfort and value for owners and community. Listed across multiple legacy directory categories; confirm specialty scope when you reach out.",
    specialties: ["Custom homes", "High-performance construction", "Regional craft", "Collaborative design"],
    location: "Asheville area",
    phone: "828.242.0925",
    email: "raymond@surefootbuilders.com",
    website: { href: "https://www.surefootbuilders.com/", label: "surefootbuilders.com" },
    directoryCategorySlugs: [
      "builders",
      "home-energy-raters",
      "hvac-installers",
      "home-inspectors",
      "waterproofing",
      "renovators-remodelers",
      "roofers",
      "landscape-architects",
      "appraisers",
      "interior-designers",
      "developers-communities",
      "nc-licensed-plumbers",
    ],
    relatedNativePostPaths: [
      "/rainscreens-protecting-your-investment/",
      "/air-sealing-the-devilish-details/",
    ],
    seo: {
      title: "Sure Foot Builders Inc. | Member Directory | Green Built Alliance",
      description: "Sure Foot Builders—member green builder serving the greater Asheville area.",
    },
  },
  {
    legacyMemberId: "895",
    path: nativeDirectoryMemberProfilePath("895"),
    organizationName: "B&R Service, Inc.",
    roleLabel: "HVAC & building performance",
    memberLevel: "Silver Membership",
    summary:
      "Building-performance-based HVAC design, installation, and service—whole-building efficiency and diagnostic testing from BPI-certified professionals.",
    specialties: ["HVAC design & install", "Building diagnostics", "BPI-certified testing", "Efficiency retrofits"],
    location: "Western North Carolina",
    phone: "828.783.1177",
    email: "kevin@bandrservice.com",
    website: { href: "https://www.bandrservice.com/", label: "bandrservice.com" },
    directoryCategorySlugs: ["hvac-installers", "electricians"],
    relatedNativePostPaths: ["/comfort-and-asheville-green-building/", "/air-sealing-the-devilish-details/"],
    seo: {
      title: "B&R Service, Inc. | Member Directory | Green Built Alliance",
      description: "B&R Service—member HVAC and building performance contractor in WNC.",
    },
  },
  {
    legacyMemberId: "924",
    path: nativeDirectoryMemberProfilePath("924"),
    organizationName: "Concept to Completion Construction Company, LLC",
    roleLabel: "Appraiser, realtor & builder",
    memberLevel: "Silver Membership",
    summary:
      "Team spanning appraisal, brokerage, and building with interest in sustainable, grid-resilient homes for the community.",
    specialties: ["Appraisal services", "Real estate brokerage", "Construction", "High-performance homes"],
    location: "Western North Carolina",
    phone: "8282421852",
    email: "c2c.construction.co@gmail.com",
    directoryCategorySlugs: ["appraisers"],
    relatedNativePostPaths: [
      "/whats-in-a-green-built-home-a-guide-for-homeowners/",
      "/why-build-green-a-green-rental/",
    ],
    seo: {
      title: "Concept to Completion Construction | Member Directory | Green Built Alliance",
      description:
        "Concept to Completion—Green Built Alliance member offering appraisal, realty, and building services in WNC.",
    },
  },
  {
    legacyMemberId: "733",
    path: nativeDirectoryMemberProfilePath("733"),
    organizationName: "Allard & Roberts Interior Design, Inc.",
    roleLabel: "Residential interior design",
    memberLevel: "Silver Membership",
    summary:
      "Boutique residential interior design and project management for high-end new construction and major renovations.",
    specialties: ["Interior design", "Project management", "New construction", "Renovations"],
    location: "Asheville area",
    phone: "828.271.4350",
    email: "talli@allardandroberts.com",
    website: { href: "http://allardandroberts.com", label: "allardandroberts.com" },
    directoryCategorySlugs: ["interior-designers"],
    relatedNativePostPaths: ["/design-matters/", "/natural-building/"],
    seo: {
      title: "Allard & Roberts Interior Design | Member Directory | Green Built Alliance",
      description:
        "Allard & Roberts—member interior design firm for residential new build and renovation in Asheville and WNC.",
    },
  },
  {
    legacyMemberId: "925",
    path: nativeDirectoryMemberProfilePath("925"),
    organizationName: "Carrie Moore Interior Design, LLC",
    roleLabel: "Residential interior design",
    memberLevel: "Silver Membership",
    summary:
      "Nature-inspired, warm-modern interiors tailored to client values—intentional materials and light for lasting comfort.",
    specialties: ["Interior design", "Residential", "Material palettes", "WNC homes"],
    location: "Western North Carolina",
    phone: "828-545-8529",
    email: "andrew@carriemooreid.com",
    website: { href: "http://www.carriemooreid.com", label: "carriemooreid.com" },
    directoryCategorySlugs: ["interior-designers"],
    relatedNativePostPaths: ["/comfort-and-asheville-green-building/", "/natural-building/"],
    seo: {
      title: "Carrie Moore Interior Design | Member Directory | Green Built Alliance",
      description:
        "Carrie Moore Interior Design—Green Built Alliance member residential interiors in Western North Carolina.",
    },
  },
  {
    legacyMemberId: "564",
    path: nativeDirectoryMemberProfilePath("564"),
    organizationName: "Nicholson and Sun LLC",
    roleLabel: "Green home builder",
    memberLevel: "Gold Membership",
    summary:
      "Science-forward custom homes with emphasis on innovation and climate responsibility—unique true-green assemblies for WNC clients.",
    specialties: ["Custom homes", "High-performance envelopes", "Climate-conscious design"],
    location: "Western North Carolina",
    phone: "828.620.3000",
    email: "team@nicholsonandsun.com",
    website: { href: "https://www.nicholsonandsun.com/", label: "nicholsonandsun.com" },
    directoryCategorySlugs: ["developers-communities"],
    relatedNativePostPaths: ["/lower-carbon-footprint-home/", "/what-is-a-net-zero-ready-home/"],
    seo: {
      title: "Nicholson and Sun LLC | Member Directory | Green Built Alliance",
      description:
        "Nicholson and Sun—Gold member builder focused on innovative green homes in Western North Carolina.",
    },
  },
  {
    legacyMemberId: "920",
    path: nativeDirectoryMemberProfilePath("920"),
    organizationName: "Terra Futura",
    roleLabel: "Regenerative builder & small neighborhoods",
    memberLevel: "Gold Membership",
    summary:
      "Small-footprint, non-toxic, efficient homes and micro-neighborhoods rooted in ecological design, community, and long-term resilience.",
    specialties: ["Regenerative building", "Small neighborhoods", "Non-toxic materials", "Energy-efficient homes"],
    location: "Western North Carolina",
    phone: "828.712.8862",
    email: "kelsey@terrafuturafarm.com",
    website: { href: "http://www.terrafuturafarm.com", label: "terrafuturafarm.com" },
    directoryCategorySlugs: ["developers-communities"],
    relatedNativePostPaths: [
      "/green-built-homes-evolving-to-encourage-regenerative-design-in-new-home-construction/",
      "/natural-building/",
    ],
    seo: {
      title: "Terra Futura | Member Directory | Green Built Alliance",
      description:
        "Terra Futura—member regenerative builder crafting efficient homes and small communities in WNC.",
    },
  },
  {
    legacyMemberId: "723",
    path: nativeDirectoryMemberProfilePath("723"),
    organizationName: "Building for Life, L.L.C.",
    roleLabel: "General contractor — Green Built & Energy Star homes",
    memberLevel: "Silver Membership",
    summary:
      "NC licensed general contractor since 1996 with a cluster of new Green Built and Energy Star homes in Asheville’s Oakley area.",
    specialties: ["New construction", "Green Built Homes", "Energy Star", "Infill development"],
    location: "Asheville, NC",
    phone: "828.230.1424",
    email: "stuartzitin@gmail.com",
    website: { href: "https://www.buildingforlifeasheville.com", label: "buildingforlifeasheville.com" },
    directoryCategorySlugs: ["developers-communities"],
    relatedNativePostPaths: [
      "/green-built-homes-highlights-february-2018-affordable-housing/",
      "/whats-in-a-green-built-home-a-guide-for-homeowners/",
    ],
    seo: {
      title: "Building for Life, L.L.C. | Member Directory | Green Built Alliance",
      description:
        "Building for Life—member GC building certified efficient homes in Asheville and WNC.",
    },
  },
  {
    legacyMemberId: "944",
    path: nativeDirectoryMemberProfilePath("944"),
    organizationName: "NCPD Service Inc",
    roleLabel: "Plumbing contractor",
    memberLevel: "Gold Membership",
    summary:
      "Family-owned plumbing company serving commercial and residential service, replacement, and new construction across the region.",
    specialties: ["Residential plumbing", "Commercial plumbing", "New construction", "Service & replacement"],
    location: "Western North Carolina",
    phone: "828-333-2862",
    email: "ncpdplumbing@gmail.com",
    website: { href: "https://ncpdservice.com", label: "ncpdservice.com" },
    directoryCategorySlugs: ["nc-licensed-plumbers"],
    relatedNativePostPaths: ["/moisture-drainage-management/", "/know-your-stormwater/"],
    seo: {
      title: "NCPD Service Inc | Member Directory | Green Built Alliance",
      description:
        "NCPD Service—Green Built Alliance member plumbing contractor for residential and commercial work in WNC.",
    },
  },
  {
    legacyMemberId: "967",
    path: nativeDirectoryMemberProfilePath("967"),
    organizationName: "Fair Air Heating & Cooling",
    roleLabel: "HVAC contractor",
    memberLevel: "Silver Membership",
    summary:
      "Residential heating and cooling services with emphasis on dependable equipment, indoor air quality, and customer peace of mind.",
    specialties: ["Residential HVAC", "Equipment replacement", "Air quality", "Ongoing service"],
    location: "Western North Carolina",
    phone: "828.774.8614",
    email: "service@fairairhc.com",
    website: { href: "http://fairairhc.com", label: "fairairhc.com" },
    directoryCategorySlugs: ["hvac-installers"],
    relatedNativePostPaths: ["/comfort-and-asheville-green-building/"],
    seo: {
      title: "Fair Air Heating & Cooling | Member Directory | Green Built Alliance",
      description: "Fair Air Heating & Cooling—member HVAC company serving WNC homeowners.",
    },
  },
  {
    legacyMemberId: "245",
    path: nativeDirectoryMemberProfilePath("245"),
    organizationName: "Living Roofs, Inc.",
    roleLabel: "Green roofs & landscape on structure",
    memberLevel: "Silver Membership",
    summary:
      "Landscape-on-structure and living roof projects across the Southeast since 2006—support for complex assemblies where planting, drainage, and structure meet.",
    specialties: ["Living roofs", "Intensive & extensive systems", "Southeast climate", "Design-build coordination"],
    location: "Asheville area & Southeast",
    phone: "828.252.4449",
    email: "info@livingroofsinc.com",
    website: { href: "https://www.livingroofsinc.com/", label: "livingroofsinc.com" },
    directoryCategorySlugs: ["roofers", "landscape-architects"],
    relatedNativePostPaths: ["/buildings-and-botany/", "/moisture-drainage-management/"],
    seo: {
      title: "Living Roofs, Inc. | Member Directory | Green Built Alliance",
      description:
        "Living Roofs, Inc.—Green Built Alliance member specializing in green roofs and landscape on structure in the Southeast.",
    },
  },
  {
    legacyMemberId: "515",
    path: nativeDirectoryMemberProfilePath("515"),
    organizationName: "Fusco Land Planning & Design, PLLC",
    roleLabel: "Landscape architecture & conservation planning",
    memberLevel: "Silver Membership",
    summary:
      "Western North Carolina team providing landscape architecture, conservation planning, and environmental design for nearly two decades.",
    specialties: ["Landscape architecture", "Conservation planning", "Environmental design", "Regional land planning"],
    location: "Western North Carolina",
    phone: "828.243.6604",
    email: "Matt@FuscoLA.com",
    website: { href: "https://www.FuscoLA.com/", label: "FuscoLA.com" },
    directoryCategorySlugs: ["landscape-architects"],
    relatedNativePostPaths: ["/site-planning/", "/more-on-site-planning/"],
    seo: {
      title: "Fusco Land Planning & Design | Member Directory | Green Built Alliance",
      description:
        "Fusco Land Planning & Design—member landscape architecture and conservation planning in WNC.",
    },
  },
  {
    legacyMemberId: "399",
    path: nativeDirectoryMemberProfilePath("399"),
    organizationName: "Osgood Landscape Architecture, Inc.",
    roleLabel: "Landscape architecture",
    memberLevel: "Silver Membership",
    summary:
      "Practice focused on preserving, protecting, and enhancing natural surroundings through thoughtful landscape architecture and site design.",
    specialties: ["Residential landscape architecture", "Ecological sensitivity", "Site enhancement", "WNC projects"],
    location: "Western North Carolina",
    phone: "828.337.7496",
    email: "jo@osgoodla.com",
    website: { href: "http://osgoodla.com", label: "osgoodla.com" },
    directoryCategorySlugs: ["landscape-architects"],
    relatedNativePostPaths: ["/site-planning/", "/natural-building/"],
    seo: {
      title: "Osgood Landscape Architecture | Member Directory | Green Built Alliance",
      description:
        "Osgood Landscape Architecture—Green Built Alliance member landscape architects serving Western North Carolina.",
    },
  },
];

const byLegacyId = new Map(nativeDirectoryMembers.map((m) => [m.legacyMemberId, m]));

export function getNativeDirectoryMemberByLegacyId(id: string): NativeDirectoryMemberProfile | undefined {
  const trimmed = id.trim();
  if (!trimmed) return undefined;
  return byLegacyId.get(trimmed);
}

export function listNativeDirectoryMemberProfiles(): NativeDirectoryMemberProfile[] {
  return [...nativeDirectoryMembers];
}

/** Relative URLs for sitemap (path + query). */
export function listNativeDirectoryMemberProfilePaths(): string[] {
  return nativeDirectoryMembers.map((m) => m.path);
}

