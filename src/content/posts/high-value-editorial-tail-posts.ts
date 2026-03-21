import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativePost } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");
const ogReady = mediaUrl("ogGbhNetZeroReadyLogo");

/**
 * High-traffic / registry-priority editorial URLs migrated from WordPress posts.
 * TODO:CONTENT — staff may expand blocks from legacy HTML; dates/authors align with Yoast mirror metadata.
 */
export const highValueEditorialTailPosts: NativePost[] = [
  {
    path: "/why-build-green-a-green-rental/",
    slug: "why-build-green-a-green-rental",
    title: "Why Build a green rental?",
    excerpt:
      "Rental housing is a major slice of the market—efficiency, solar, and indoor air quality still matter for tenants, owners, and climate outcomes.",
    publishedAt: "2014-08-26T08:00:00.000Z",
    updatedAt: "2023-06-28T14:54:47.000Z",
    author: { name: "Boone Guyton and Claudia Cady" },
    categories: ["Green Real Estate", "General Green Building", "Equity & the Green Economy"],
    tags: ["rentals", "investment", "WNC"],
    seo: {
      title: "Why Build a Green Rental? | Green Built Alliance",
      description:
        "Why certified, efficient rentals make sense in Western North Carolina—lower bills, better marketing, and the same environmental stakes as owner-occupied homes.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Rental property is a real asset with predictable cash flow compared to many alternatives. In growing markets like Buncombe County, demand for housing—owned and rented—puts pressure on both affordability and quality.",
          "Green features are not “extras” for tenants you will never meet. Rentals share the same grid, the same watersheds, and the same carbon math as for-sale homes. Lower utility burdens, healthier indoor air, and documented performance help with lease-up and resale if you exit.",
          "If you add solar, plan early with your utility on metering and account structure—rental scenarios often need the owner to retain the electric account while tenants reimburse usage.",
        ],
      },
      {
        type: "bulletList",
        title: "Takeaways",
        items: [
          "Treat performance and certification as marketing and risk reduction, not only altruism",
          "Document HERS or program paperwork so the next buyer inherits a credible story",
          "Pair rental strategy with local professionals in the member directory",
        ],
      },
      {
        type: "cta",
        title: "Build or retrofit with trusted pros",
        body: "Shortlist members who understand rentals, performance documentation, and regional programs.",
        primary: { href: "/find-a-pro/?intent=not-sure", label: "Get matched with a pro" },
        secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
      },
    ],
    stickyCta: { href: "/find-a-pro/?intent=not-sure", label: "Get matched with a pro" },
  },
  {
    path: "/act-locallybuild-green/",
    slug: "act-locallybuild-green",
    title: "Act Locally, Build Green",
    excerpt:
      "Climate headlines are global; leverage in housing is local—efficient buildings and regional programs are mature parts of the solution.",
    publishedAt: "2014-06-02T08:00:00.000Z",
    updatedAt: "2023-07-26T15:03:27.000Z",
    author: { name: "Boone Guyton and Claudia Cady" },
    categories: ["General Green Building", "Member News"],
    tags: ["climate", "policy", "efficiency"],
    seo: {
      title: "Act Locally, Build Green | Green Built Alliance",
      description:
        "Why local action on high-performance buildings matters—connecting climate science to practical efficiency, electrification, and verified programs in WNC.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "National and international reports describe accelerating risk from fossil-fuel dependence. The building sector is both a large emitter and one of the fastest places to make durable gains with known techniques.",
          "Net-zero-capable design, better envelopes, heat pumps, and thoughtful grid interaction are no longer experimental—they are implementable today, especially when teams coordinate early.",
        ],
      },
      {
        type: "bulletList",
        title: "What you can do here",
        items: [
          "Choose or specify programs like Green Built Homes when projects need verified outcomes",
          "Support regional education and policy voices that align with building science",
          "Hire and train local trades so quality scales beyond one-off demonstrations",
        ],
      },
      {
        type: "cta",
        title: "Get involved",
        body: "Join as a member, browse classes—or get matched with pros for your next project.",
        primary: { href: "/membership/", label: "Membership" },
        secondary: { href: "/find-a-pro/", label: "Get matched with a pro" },
      },
    ],
    stickyCta: { href: "/find-a-pro/", label: "Find a green professional" },
  },
  {
    path: "/kelvin-bonilla-tips-to-save-energy-at-home/",
    slug: "kelvin-bonilla-tips-to-save-energy-at-home",
    title: "Tips to Save Energy At Home: Simple, Low-Budget Ways to Save on Electricity Bills",
    excerpt:
      "LEDs, laundry habits, ceiling fans, and maintenance checks that trim bills without a major retrofit—plus where to find no-cost help in Buncombe County.",
    publishedAt: "2023-02-25T02:23:00.000Z",
    updatedAt: "2023-05-25T15:20:59.000Z",
    author: { name: "Kelvin Bonilla" },
    categories: ["Energy Efficiency & Air Sealing", "Magazine Articles"],
    tags: ["homeowner", "electric bills", "Energy Savers Network"],
    seo: {
      title: "Low-Budget Tips to Save Energy at Home | Green Built Alliance",
      description:
        "Practical, low-cost ways to cut electricity use in WNC homes—from LEDs and laundry settings to HVAC filters and phantom loads—plus Energy Savers Network resources.",
      ogImage: ogReady,
    },
    blocks: [
      {
        type: "bulletList",
        title: "Quick wins",
        items: [
          "Upgrade to LED lighting; prioritize bulbs that stay on longest",
          "Wash laundry in cold water and air-dry when practical; clean dryer lint paths",
          "Run ceiling fans only when rooms are occupied; reverse seasonally",
          "Vacuum refrigerator coils and keep condenser intakes clear a few times per year",
          "Change or clean HVAC filters on a regular schedule",
          "Cut phantom loads with switched strips for entertainment centers and offices",
          "Use efficient showerheads and aerators; consider lowering tank temperature only where safe per manufacturer guidance",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "These steps complement—not replace—air sealing and insulation work when bills stay high. Income-qualified households in Buncombe County may be eligible for no-cost weatherization through Energy Savers Network; eligibility and scheduling change over time, so confirm current details on energysaversnetwork.org.",
        ],
      },
      {
        type: "cta",
        title: "Lower bills with local help",
        body: "Guided match points you to efficiency-minded pros; Energy Savers adds programs and tips.",
        primary: { href: "/find-a-pro/?intent=save-energy", label: "Get matched for energy savings" },
        secondary: { href: "/energysaversnetwork/", label: "Energy Savers Network" },
      },
    ],
    stickyCta: { href: "/find-a-pro/?intent=save-energy", label: "Save energy — get matched" },
  },
  {
    path: "/emilio-ancaya-blue-sky-green-roof-reimagining-ashevilles-rooftops/",
    slug: "emilio-ancaya-blue-sky-green-roof-reimagining-ashevilles-rooftops",
    title: "Blue Sky, Green Roof: Reimagining Asheville’s Rooftops",
    excerpt:
      "Living roofs can cool urban heat islands, manage stormwater, and add habitat—if structure, waterproofing, and maintenance are designed honestly.",
    publishedAt: "2019-10-14T18:33:00.000Z",
    updatedAt: "2023-05-25T16:16:21.000Z",
    author: { name: "Emilio Ancaya" },
    categories: ["Natural Building", "Smart Growth", "Magazine Articles"],
    tags: ["green roofs", "Asheville", "stormwater"],
    seo: {
      title: "Blue Sky, Green Roof — Asheville Rooftops | Green Built Alliance",
      description:
        "How green roofs fit downtown Asheville and similar mountain cities—benefits, design discipline, and who to talk to before specifying vegetated assemblies.",
      ogImage: og,
    },
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Vegetated roofs turn dead roof area into stormwater sponge, summer shade, and pollinator habitat—but they are engineered systems, not potted plants. Dead-level drainage, root barriers, and long-term irrigation or drought-tolerant palettes must match our wet/dry cycles.",
          "Coordinate early with structural engineers, roofing specialists, and landscape partners who have built and maintained living roofs in similar climates.",
        ],
      },
      {
        type: "cta",
        title: "Find pros for green roofs",
        body: "Start with guided match, then open category hubs for landscape and roofing partners.",
        primary: { href: "/find-a-pro/?intent=not-sure", label: "Get matched with a pro" },
        secondary: { href: "/directory/landscape-architects/", label: "Landscape architects" },
      },
    ],
    stickyCta: { href: "/find-a-pro/?intent=not-sure", label: "Get matched with a pro" },
  },
];
