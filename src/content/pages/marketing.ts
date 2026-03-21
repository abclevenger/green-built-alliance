import type { NativeMarketingPage } from "@/lib/content-types";
import { energySaversNetworkPage } from "@/content/pages/energy-savers-network";
import { greenBuiltHomesFunnelPage } from "@/content/pages/green-built-homes";

/**
 * Native marketing routes — proven pattern for migrating off WordPress HTML.
 * Add entries here; conversion funnels can live in dedicated files and be imported.
 */
export const nativeMarketingPages: NativeMarketingPage[] = [
  {
    kind: "sections",
    path: "/about-green-built-alliance/",
    seo: {
      title: "About Green Built Alliance",
      description:
        "Learn about our mission, team, and how we advance green building, education, and climate resilience in Western North Carolina.",
    },
    sections: [
      {
        type: "hero",
        eyebrow: "Our organization",
        title: "About Green Built Alliance",
        subtitle:
          "We work to advance sustainability, grow green building, and strengthen communities.",
      },
      {
        type: "prose",
        heading: "Mission",
        paragraphs: [
          "Green Built Alliance is a nonprofit organization serving Western North Carolina and beyond. We connect residents, building professionals, and partners through education, certification programs, publications, and community initiatives.",
          "Whether you are planning a project, growing a green business, or looking to support local climate solutions, we are here as a trusted regional resource.",
        ],
      },
      {
        type: "bulletList",
        title: "What we do",
        items: [
          "Green Built Homes and related certification pathways",
          "Continuing education and professional development",
          "Member directory and community visibility",
          "Annual magazine and green building news",
          "Programs that support clean energy and resilience",
        ],
      },
      {
        type: "cta",
        title: "Work with us",
        body: "Explore membership, classes, or ways to give.",
        primary: { href: "/membership/", label: "Membership" },
        secondary: { href: "/support-our-work/", label: "Support our work" },
      },
    ],
  },
  greenBuiltHomesFunnelPage,
  energySaversNetworkPage,
];

const byPath = new Map(
  nativeMarketingPages.map((p) => [normalizePathKey(p.path), p])
);

function normalizePathKey(path: string): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export function getNativeMarketingPage(path: string): NativeMarketingPage | undefined {
  return byPath.get(normalizePathKey(path));
}
