import { magazineEditionMediaDefinitions } from "@/content/assets/magazine-edition-media";
import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { PageCta, SeoFields } from "@/lib/content-types";
import { resolveNativeMediaUrl } from "@/lib/native-media";

/**
 * Native `/magazine/` hub — annual *Green Home & Living Guide* / Green Building Directory product.
 *
 * **Not** the blog: ongoing articles live under `/news/` and `/green-building-news/` (`NativePost`).
 *
 * **Media:** Edition PDFs/covers are inventoried in `src/content/assets/magazine-edition-media.ts` and resolve
 * through `resolveNativeMediaUrl`. Set `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA=true` after copying files to `public/media/`.
 * TODO:MAG_PARITY — Sponsor blocks, embedded video, or subpages under `/magazine/*` if still needed.
 */
export type MagazineEdition = {
  label: string;
  season: string;
  pdfUrl: string;
  coverImageUrl: string;
  coverAlt: string;
  isCurrent?: boolean;
};

function mapMagazineEdition(
  s: (typeof magazineEditionMediaDefinitions)[number],
): MagazineEdition {
  return {
    label: s.label,
    season: s.season,
    coverAlt: s.coverAlt,
    pdfUrl: resolveNativeMediaUrl({
      legacyPath: s.pdf.legacyPath,
      localPublicPath: s.pdf.localPublicPath,
    }),
    coverImageUrl: resolveNativeMediaUrl({
      legacyPath: s.cover.legacyPath,
      localPublicPath: s.cover.localPublicPath,
    }),
    isCurrent: s.isCurrent,
  };
}

export type MagazineHubContent = {
  seo: SeoFields;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  productKicker: string;
  productTitle: string;
  productBody: string;
  whatToExpect: string[];
  historyHeading: string;
  historyParagraphs: string[];
  distributionStats: { value: string; label: string }[];
  contribute: { title: string; body: string; cta: PageCta };
  archivesHeading: string;
  archivesIntro: string;
  editions: MagazineEdition[];
  exploreLinks: { href: string; label: string; description: string }[];
};

export const magazineHubContent: MagazineHubContent = {
  seo: {
    title: "Green Building Magazine | Green Built Alliance",
    description:
      "Since 2001, the Green Home & Living Guide has provided green building education and professional directory listings for Western North Carolina.",
    ogImage: mediaUrl("magazineCover2024_25"),
  },
  heroEyebrow: "Annual publication",
  heroTitle: "Green Home & Living Guide",
  heroSubtitle:
    "Our magazine and print directory connect homeowners with WNC’s green building community—articles, technical sheets, case studies, and member listings in one annual edition.",
  productKicker: "Product",
  productTitle: "The magazine and directory",
  productBody:
    "For two decades, the Green Home & Living Guide—formerly the Green Building Directory—has been a primary tool for education, outreach, and professional connection in western North Carolina’s green building industry. It is a collective effort from professionals across the region, with information for both building trades and the general public.",
  whatToExpect: [
    "Green building innovations and ideas",
    "Sustainability and renewable energy news",
    "Technical fact sheets",
    "Case studies on efficiency, innovative homes, and techniques",
    "Trend features in green building",
    "A directory of local businesses that design, build, or supply sustainable products and services",
    "Stories that celebrate local sustainable builders, businesses, and leaders",
  ],
  historyHeading: "Magazine history",
  historyParagraphs: [
    "In 2002, the WNC Green Building Council published and distributed 10,000 copies of its first WNC Green Building Directory. The directory evolved into a full magazine and increased its reach to about 25,000 copies annually.",
    "The Green Home & Living Guide is published each September, digitally through the Green Built Alliance website and in print across Western North Carolina—at regional chambers, local merchants, supply stores, and realtors. The directory portion has linked hundreds of businesses to thousands of homeowners, advancing sustainability and green standards for the community.",
  ],
  distributionStats: [
    { value: "~25K", label: "Print copies annually" },
    { value: "Sept", label: "New edition each year" },
    { value: "2001", label: "Serving WNC since" },
  ],
  contribute: {
    title: "Contribute to the magazine",
    body: "We could not produce this guide without members and community contributors. Reach out to discuss an article idea or membership.",
    cta: { href: "/about-green-built-alliance/", label: "Contact us" },
  },
  archivesHeading: "Directory & magazine archives",
  archivesIntro:
    "Download past editions as PDFs. URLs resolve through the native media layer (legacy WordPress host by default; flip `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA` after copying files to `public/media/`).",
  editions: magazineEditionMediaDefinitions.map(mapMagazineEdition),
  exploreLinks: [
    {
      href: "/find-a-pro/",
      label: "Get matched with a pro",
      description: "Guided questions, then suggested directory categories and member spotlights for your project.",
    },
    {
      href: "/directory/",
      label: "Member directory",
      description: "Search pros online year-round—beyond the annual print listings.",
    },
    {
      href: "/membership/",
      label: "Membership",
      description: "Get listed, access classes, and support the programs behind the guide.",
    },
    {
      href: "/support-our-work/",
      label: "Support our work",
      description: "Help fund education, certification, and publications across WNC.",
    },
    {
      href: "/green-building-news/",
      label: "Green Building News",
      description: "Ongoing articles and explainers between print editions.",
    },
    {
      href: "/news/",
      label: "News",
      description: "Shorter entry point to the same native article library.",
    },
    {
      href: "/events/",
      label: "Events & classes",
      description: "Workshops and CE tied to the community featured in the magazine.",
    },
  ],
};
