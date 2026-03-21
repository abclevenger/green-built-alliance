import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { PageCta, SeoFields } from "@/lib/content-types";
import { resolveNativeMediaUrl } from "@/lib/native-media";

/**
 * Native `/magazine/` hub — annual *Green Home & Living Guide* / Green Building Directory product.
 *
 * **Not** the blog: ongoing articles live under `/news/` and `/green-building-news/` (`NativePost`).
 *
 * **Media:** Edition PDFs/covers resolve through `resolveNativeMediaUrl` (see `src/lib/native-media.ts`).
 * Set `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA=true` and copy files into `public/` using the optional
 * `*LocalPublicPath` fields below to drop WordPress hosting.
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

/**
 * One print edition. Legacy paths hit WordPress when `NEXT_PUBLIC_USE_LOCAL_SITE_MEDIA` is off.
 * Local files live under `public/media/magazine/{folder}/` as `guide.pdf` and `cover.jpg` (same folder in both path fields).
 */
export type MagazineEditionSource = {
  label: string;
  season: string;
  coverAlt: string;
  pdfLegacyPath: string;
  coverLegacyPath: string;
  /** `public` URL path, e.g. `/media/magazine/2022/guide.pdf` */
  pdfLocalPublicPath: string;
  /** `public` URL path, e.g. `/media/magazine/2022/cover.jpg` */
  coverLocalPublicPath: string;
  isCurrent?: boolean;
};

export const magazineEditionSources: readonly MagazineEditionSource[] = [
  {
    label: "2024–2025",
    season: "Current edition",
    coverAlt: "Green Home & Living Guide 2024–2025 cover",
    pdfLegacyPath: "/wp-content/uploads/2025/03/Green-Built-24-25.pdf",
    coverLegacyPath: "/wp-content/uploads/2025/03/Green-Built-24-25.jpg",
    pdfLocalPublicPath: "/media/magazine/2024-25/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2024-25/cover.jpg",
    isCurrent: true,
  },
  {
    label: "2023",
    season: "Green Home & Living Guide",
    coverAlt: "Green Home and Living Guide 2023 cover",
    pdfLegacyPath: "/wp-content/uploads/2023/10/Green-Home-and-Living-Guide-2023.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/10/guide.jpg",
    pdfLocalPublicPath: "/media/magazine/2023/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2023/cover.jpg",
  },
  {
    label: "2022",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2022 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2022.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2022-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2022/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2022/cover.jpg",
  },
  {
    label: "2021",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2021 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2021.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2021-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2021/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2021/cover.jpg",
  },
  {
    label: "2020",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2020 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2020.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2020-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2020/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2020/cover.jpg",
  },
  {
    label: "2019",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2019 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2019.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2019-cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2019/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2019/cover.jpg",
  },
  {
    label: "2018",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2018 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2018.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2018-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2018/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2018/cover.jpg",
  },
  {
    label: "2017",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2017 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2017.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2017-cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2017/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2017/cover.jpg",
  },
  {
    label: "2016",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2016 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2016.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2016-cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2016/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2016/cover.jpg",
  },
  {
    label: "2015",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2015 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2015.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2015-cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2015/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2015/cover.jpg",
  },
  {
    label: "2014",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2014 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2014.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2014-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2014/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2014/cover.jpg",
  },
  {
    label: "2013",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2013 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2013.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2013-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2013/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2013/cover.jpg",
  },
  {
    label: "2012",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2012 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2012.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2012-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2012/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2012/cover.jpg",
  },
  {
    label: "2011",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2011 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2011.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2011-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2011/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2011/cover.jpg",
  },
  {
    label: "2010",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2010 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2010.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2010-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2010/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2010/cover.jpg",
  },
  {
    label: "2009",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2009 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2009.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2009-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2009/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2009/cover.jpg",
  },
  {
    label: "2008",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2008 cover",
    pdfLegacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2008.pdf",
    coverLegacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2008-Cover.jpg",
    pdfLocalPublicPath: "/media/magazine/2008/guide.pdf",
    coverLocalPublicPath: "/media/magazine/2008/cover.jpg",
  },
];

function mapMagazineEdition(s: MagazineEditionSource): MagazineEdition {
  return {
    label: s.label,
    season: s.season,
    coverAlt: s.coverAlt,
    pdfUrl: resolveNativeMediaUrl({
      legacyPath: s.pdfLegacyPath,
      localPublicPath: s.pdfLocalPublicPath,
    }),
    coverImageUrl: resolveNativeMediaUrl({
      legacyPath: s.coverLegacyPath,
      localPublicPath: s.coverLocalPublicPath,
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
  editions: magazineEditionSources.map(mapMagazineEdition),
  exploreLinks: [
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
