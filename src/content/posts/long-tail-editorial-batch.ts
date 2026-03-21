import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/**
 * Long-tail articles migrated off WordPress fallback — structured summaries.
 * TODO:CONTENT — Replace with staff-verified copy or pull quotes from legacy HTML if needed.
 */
export const longTailEditorialPosts: NativePost[] = [
  {
    path: "/talking-to-deniers/",
    slug: "talking-to-deniers",
    title: "Talking to Deniers",
    excerpt:
      "Climate conversations land better when we lead with shared values—comfort, health, and stewardship—before charts and slogans.",
    publishedAt: "2019-06-10T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Building", "Community"],
    tags: ["climate", "communication", "advocacy"],
    seo: {
      title: "Talking to Deniers | Green Built Alliance",
      description:
        "Practical tips for respectful climate conversations grounded in everyday concerns like home comfort and resilience.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Most people do not experience climate change as a spreadsheet—they experience it as heat waves, storms, insurance bills, and smoke days. Meeting someone where they live, literally and figuratively, opens space for curiosity.",
          "Ask questions, acknowledge tradeoffs, and share local examples: high-performance homes that stayed comfortable in a freeze, stormwater projects that reduced flooding, or businesses that cut energy costs with better envelopes.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "What not to do",
      },
      {
        type: "bulletList",
        items: [
          "Open with shame or moral superiority",
          "Assume everyone has time to read dense science",
          "Forget that housing and job security shape how people hear risk",
        ],
      },
      {
        type: "cta",
        title: "Act where you live",
        body: "Match with local pros, explore programs, or join the member community.",
        primary: { href: "/find-a-pro/", label: "Get matched with a pro" },
        secondary: { href: "/membership/", label: "Membership" },
      },
    ],
  },
  {
    path: "/tiny-house-big-idea/",
    slug: "tiny-house-big-idea",
    title: "Tiny House, Big Idea",
    excerpt:
      "Small footprints can teach big lessons about materials, energy, and how we use space—if we keep systems honest.",
    publishedAt: "2016-04-18T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Building", "Housing"],
    tags: ["tiny homes", "design", "efficiency"],
    seo: {
      title: "Tiny House, Big Idea | Green Built Alliance",
      description:
        "What tiny homes get right about resource use—and where shortcuts can undermine performance and safety.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Tiny homes invite discipline: every square foot must earn its keep. That mindset—right-sizing systems, minimizing thermal bridges, and choosing durable finishes—scales up to larger houses too.",
          "The catch is that small volume changes moisture and ventilation dynamics. Without deliberate fresh air and moisture control, a tight tiny shell can still struggle with humidity and indoor pollutants.",
        ],
      },
      {
        type: "cta",
        title: "Related",
        primary: { href: "/green-building-pitfalls-of-tiny-homes/", label: "Tiny home pitfalls" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
  },
  {
    path: "/green-building-pitfalls-of-tiny-homes/",
    slug: "green-building-pitfalls-of-tiny-homes",
    title: "Green Building Pitfalls of Tiny Homes",
    excerpt:
      "Ventilation, zoning, utility connections, and resale realities—common gaps when enthusiasm outpaces building science.",
    publishedAt: "2016-05-02T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Building", "Housing"],
    tags: ["tiny homes", "ventilation", "codes"],
    seo: {
      title: "Green Building Pitfalls of Tiny Homes | Green Built Alliance",
      description:
        "A checklist of technical and regulatory pitfalls for tiny and small homes in Western North Carolina.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Watch for",
        items: [
          "Undersized or absent balanced ventilation in tight shells",
          "Combustion safety with small interior volumes",
          "Trailer vs foundation rules and utility tie-ins",
          "Appliance and plug loads that erase energy savings",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Work early with your jurisdiction, insurer, and a rater or builder who understands small-volume HVAC and moisture. The goal is a home that is legal, safe, and efficient—not just photogenic.",
        ],
      },
      {
        type: "cta",
        title: "Get the right team on small spaces",
        primary: { href: "/find-a-pro/?intent=rate-verify", label: "Find a rater or builder" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
  },
  {
    path: "/carbon-negative-landscaping/",
    slug: "carbon-negative-landscaping",
    title: "Carbon Negative Landscaping",
    excerpt:
      "Soils, plants, and thoughtful maintenance can store carbon on site while supporting stormwater and habitat goals.",
    publishedAt: "2017-03-14T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Sustainable Site", "Green Building"],
    tags: ["landscape", "carbon", "stormwater"],
    seo: {
      title: "Carbon Negative Landscaping | Green Built Alliance",
      description:
        "How landscaping choices interact with carbon storage, water, and biodiversity around WNC homes.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Healthy soil biology, deep-rooted perennials, and reduced turf can lower maintenance emissions while improving infiltration. Pair plantings with grading and drainage so carbon gains are not washed away in the next gully washer.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Pair with stormwater planning",
        body: "See our stormwater article for site-scale strategies that complement plantings.",
      },
      {
        type: "cta",
        title: "Plan the site with pros",
        body: "Landscape and design members help align plantings, grading, and drainage.",
        primary: { href: "/find-a-pro/?intent=design", label: "Get matched with a pro" },
        secondary: { href: "/know-your-stormwater/", label: "Know your stormwater" },
      },
    ],
  },
  {
    path: "/dc-motors-and-cervs/",
    slug: "dc-motors-and-cervs",
    title: "DC Motors and CERVs",
    excerpt:
      "Why efficient motors and combined energy recovery ventilation matter in high-performance homes—and what to ask suppliers.",
    publishedAt: "2015-08-11T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Energy Efficiency & Air Sealing", "Technology"],
    tags: ["HVAC", "ventilation", "motors"],
    seo: {
      title: "DC Motors and CERVs | Green Built Alliance",
      description:
        "A primer on efficient motors and combined energy recovery ventilators for tight, efficient homes.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Electronically commutated motors (ECMs) can cut fan energy compared with older PSC designs—especially important when ventilation runs continuously. Combined energy recovery ventilators (CERVs or similar products) pair fresh air with tempering and sometimes filtration or sensing.",
          "Specifications on paper are not the same as field performance. Commission flows, balance supply and exhaust, and verify controls with your HVAC partner after occupancy patterns are understood.",
        ],
      },
      {
        type: "cta",
        title: "Need ventilation or HVAC help?",
        primary: { href: "/find-a-pro/?intent=hvac-mechanical", label: "Get matched with a pro" },
        secondary: { href: "/events/continuing-education-courses/", label: "Continuing education" },
      },
    ],
  },
  {
    path: "/battered-by-batteries/",
    slug: "battered-by-batteries",
    title: "Battered by Batteries",
    excerpt:
      "Storage is trending—but chemistry, warranty, and integration with solar and panels deserve scrutiny before you buy hype.",
    publishedAt: "2015-09-22T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Energy", "Technology"],
    tags: ["batteries", "solar", "storage"],
    seo: {
      title: "Battered by Batteries | Green Built Alliance",
      description:
        "Questions to ask about home battery storage: safety, warranty, round-trip efficiency, and realistic backup loads.",
      ogImage: og,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Due diligence",
        items: [
          "What loads will you actually back up—and for how many hours?",
          "How does the inverter integrate with existing PV and the main panel?",
          "What is warranted, and who services the system regionally?",
        ],
      },
      {
        type: "cta",
        title: "Solar & storage pros",
        primary: { href: "/find-a-pro/?intent=solar-renewables", label: "Get matched with a pro" },
        secondary: { href: "/directory/renewable-energy/", label: "Renewable energy directory" },
      },
    ],
  },
  {
    path: "/finally-a-decent-alternative-to-hot-water-recirculating-loops/",
    slug: "finally-a-decent-alternative-to-hot-water-recirculating-loops",
    title: "Finally, a Decent Alternative to Hot Water Recirculating Loops",
    excerpt:
      "Demand recirculation and thoughtful layout can cut wait times and energy waste without constant pumping.",
    publishedAt: "2015-07-07T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Energy Efficiency & Air Sealing", "Water"],
    tags: ["hot water", "plumbing", "efficiency"],
    seo: {
      title: "Alternatives to Hot Water Recirc Loops | Green Built Alliance",
      description:
        "Lower wasted water and energy with smarter hot-water distribution and demand-controlled recirculation.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Traditional always-on recirculation can erase efficiency gains from a great water heater. Demand controls, push buttons, or occupancy sensors can move hot water when people need it while shortening pipe runs remain the first prize.",
        ],
      },
      {
        type: "cta",
        title: "Upgrade water & energy systems",
        primary: { href: "/find-a-pro/?intent=save-energy", label: "Get matched with a pro" },
        secondary: { href: "/directory/nc-licensed-plumbers/", label: "Plumbers directory" },
      },
    ],
  },
  {
    path: "/sustainability-or-bust/",
    slug: "sustainability-or-bust",
    title: "Sustainability or Bust",
    excerpt:
      "Why incremental progress still matters—even when perfection is out of reach for a given budget or timeline.",
    publishedAt: "2019-11-05T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Building", "Community"],
    tags: ["sustainability", "policy", "practice"],
    seo: {
      title: "Sustainability or Bust | Green Built Alliance",
      description:
        "A short take on pragmatic green building: stack wins you can afford and document them.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "All-or-nothing framing slows adoption. A better story: choose durable improvements you can verify—envelope testing, right-sized HVAC, safer materials in the rooms where they matter most—and plan upgrades over time.",
        ],
      },
      {
        type: "cta",
        title: "Stack real wins",
        primary: { href: "/find-a-pro/", label: "Get matched with a pro" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
  },
  {
    path: "/do-this-not-that-pinterest-edition/",
    slug: "do-this-not-that-pinterest-edition",
    title: "Do This, Not That: Pinterest Edition",
    excerpt:
      "Trendy interiors meet building science: a lighthearted look at ideas that do not always age well in WNC humidity.",
    publishedAt: "2016-04-01T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Member News", "Green Building"],
    tags: ["design", "humor", "durability"],
    seo: {
      title: "Do This, Not That: Pinterest Edition | Green Built Alliance",
      description:
        "Playful guidance on trendy finishes and assemblies—what to copy with caution in our climate.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Open shelves in kitchens look great in photos; they also collect grease and dust. Barn doors can bypass poorly sealed pockets. Before you replicate a pin, ask how the detail handles moisture, sound, and maintenance.",
        ],
      },
      {
        type: "cta",
        title: "Design that survives our climate",
        primary: { href: "/find-a-pro/?intent=design", label: "Find a designer or architect" },
        secondary: { href: "/directory/builders/", label: "Browse builders" },
      },
    ],
  },
  {
    path: "/lessons-from-ashevilles-first-zero-energy-ready-home/",
    slug: "lessons-from-ashevilles-first-zero-energy-ready-home",
    title: "Lessons from Asheville’s First Zero Energy Ready Home",
    excerpt:
      "Early net zero ready projects reveal what integrated design buys you—and what still surprises owners.",
    publishedAt: "2018-02-12T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Green Built Homes", "Net Zero Energy Homes"],
    tags: ["net zero ready", "case study", "Asheville"],
    seo: {
      title: "Lessons from Asheville’s First Zero Energy Ready Home | Green Built Alliance",
      description:
        "Takeaways from an early zero energy ready home in Asheville—design, testing, and homeowner experience.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Integrated teams caught conflicts between architecture, structure, and mechanicals before they were expensive. Testing proved the envelope performed as modeled—critical for buyer confidence.",
        ],
      },
      {
        type: "cta",
        title: "Build or buy net zero ready",
        body: "Read the explainer, then shortlist pros who deliver verified performance.",
        primary: { href: "/find-a-pro/?intent=new-home", label: "Get matched with a pro" },
        secondary: { href: "/what-is-a-net-zero-ready-home/", label: "What is net zero ready?" },
      },
    ],
  },
  {
    path: "/the-importance-of-home-healthiness-after-a-diagnosis/",
    slug: "the-importance-of-home-healthiness-after-a-diagnosis",
    title: "The Importance of Home Healthiness After a Diagnosis",
    excerpt:
      "When health changes, indoor air, moisture, and accessibility move from abstract ideas to daily priorities.",
    publishedAt: "2018-05-22T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Health", "Green Building"],
    tags: ["IAQ", "accessibility", "homes"],
    seo: {
      title: "Home Healthiness After a Diagnosis | Green Built Alliance",
      description:
        "Why ventilation, moisture control, and universal design matter more when a household faces illness or recovery.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Filtration upgrades, managed ventilation, and reducing tracked-in pollutants are practical steps. So are safer pathways, lighting, and baths that support aging in place. Coordinate medical advice with qualified builders and IAQ professionals.",
        ],
      },
      {
        type: "cta",
        title: "Healthier home, trusted pros",
        primary: { href: "/find-a-pro/?intent=not-sure", label: "Get matched with a pro" },
        secondary: { href: "/directory/home-energy-raters/", label: "Home energy raters" },
      },
    ],
  },
  {
    path: "/green-building-features-in-the-2022-asheville-parade-of-homes/",
    slug: "green-building-features-in-the-2022-asheville-parade-of-homes",
    title: "Green Building Features in the 2022 Asheville Parade of Homes",
    excerpt:
      "Highlights from parade entries that showcased efficiency, electrification, and thoughtful materials.",
    publishedAt: "2022-10-18T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Member News", "Green Building"],
    tags: ["Asheville", "parade of homes", "high performance"],
    seo: {
      title: "2022 Asheville Parade of Homes — Green Features | Green Built Alliance",
      description:
        "Green building ideas on display during the 2022 Asheville Parade of Homes—efficiency, electrification, and healthy materials.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Parade homes are a snapshot of what builders want to showcase. Look past staging for the bones: envelope specs, HVAC approach, solar readiness, and moisture details that will matter long after the open house ends.",
        ],
      },
      {
        type: "cta",
        title: "Tour-ready vs. long-term quality",
        primary: { href: "/find-a-pro/?intent=new-home", label: "Find a high-performance builder" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
  },
  {
    path: "/american-clays-humidity-buffering-qualities-contributes-to-healthy-air-quality/",
    slug: "american-clays-humidity-buffering-qualities-contributes-to-healthy-air-quality",
    title: "American Clay’s Humidity Buffering Qualities Contributes to Healthy Air Quality",
    excerpt:
      "Clay finishes can moderate humidity swings indoors—one tool among many for comfort and durability.",
    publishedAt: "2015-05-19T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Materials", "Health"],
    tags: ["clay plaster", "humidity", "IAQ"],
    seo: {
      title: "Clay Finishes and Humidity Buffering | Green Built Alliance",
      description:
        "How clay interior finishes can buffer humidity modestly—paired with ventilation and envelope control.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Hygroscopic finishes can absorb and release moisture within a narrow band, smoothing short swings. They do not replace ventilation or a sound air barrier, but they can complement good assemblies in mixed-humidity climates.",
        ],
      },
      {
        type: "cta",
        title: "Healthy materials & assemblies",
        primary: { href: "/find-a-pro/?intent=remodel", label: "Get matched with a pro" },
        secondary: { href: "/directory/consultants/", label: "Consultants" },
      },
    ],
  },
  {
    path: "/socially-responsible-investment-for-nc-state-employees/",
    slug: "socially-responsible-investment-for-nc-state-employees",
    title: "Socially Responsible Investment for NC State Employees",
    excerpt:
      "Retirement plan options can align with values—due diligence still matters for fees and diversification.",
    publishedAt: "2015-06-02T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Community", "Finance"],
    tags: ["SRI", "retirement", "North Carolina"],
    seo: {
      title: "Socially Responsible Investment for NC State Employees | Green Built Alliance",
      description:
        "Orientation on socially responsible investment themes for NC public employees exploring plan options.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Screened investments can reflect climate, labor, or governance priorities. Compare expense ratios, fund methodology, and how screens affect diversification. Speak with a fiduciary advisor for personal decisions.",
        ],
      },
    ],
  },
  {
    path: "/local-school-gets-solar-makeover-thanks-to-appalachian-offsets/",
    slug: "local-school-gets-solar-makeover-thanks-to-appalachian-offsets",
    title: "Local School Gets Solar Makeover Thanks to Appalachian Offsets",
    excerpt:
      "Community-backed offsets and volunteer energy helped a school go solar—an example of collective climate action.",
    publishedAt: "2017-11-14T12:00:00.000Z",
    updatedAt: "2023-05-16T17:57:00.000Z",
    author: { name: "Green Built Alliance" },
    categories: ["Community", "Renewable Energy"],
    tags: ["solar", "schools", "Appalachian Offsets"],
    seo: {
      title: "School Solar Makeover — Appalachian Offsets | Green Built Alliance",
      description:
        "How Appalachian Offsets and community partners supported a local school solar installation story.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Solar on schools cuts operating costs and gives students a real-world example of clean energy. Programs that pair donations, technical help, and education multiply impact beyond a single array.",
        ],
      },
      {
        type: "cta",
        title: "Renewables for homes & businesses",
        primary: { href: "/find-a-pro/?intent=solar-renewables", label: "Get matched with a pro" },
        secondary: { href: "/directory/renewable-energy/", label: "Renewable energy directory" },
      },
    ],
  },
];
