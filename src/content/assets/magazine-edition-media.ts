import type { NativeMediaRef } from "@/lib/native-media";

/**
 * Single inventory for `/magazine/` PDFs and cover images (legacy WordPress paths + local `public/media/` targets).
 * **Do not** scatter `/wp-content/` strings in hub components — reference this module only.
 */
export type MagazineEditionMediaDefinition = {
  label: string;
  season: string;
  coverAlt: string;
  isCurrent?: boolean;
  pdf: Pick<NativeMediaRef, "legacyPath" | "localPublicPath">;
  cover: Pick<NativeMediaRef, "legacyPath" | "localPublicPath">;
};

export const magazineEditionMediaDefinitions: readonly MagazineEditionMediaDefinition[] = [
  {
    label: "2024–2025",
    season: "Current edition",
    coverAlt: "Green Home & Living Guide 2024–2025 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/2025/03/Green-Built-24-25.pdf",
      localPublicPath: "/media/magazine/2024-25/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2025/03/Green-Built-24-25.jpg",
      localPublicPath: "/media/magazine/2024-25/cover.jpg",
    },
    isCurrent: true,
  },
  {
    label: "2023",
    season: "Green Home & Living Guide",
    coverAlt: "Green Home and Living Guide 2023 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/2023/10/Green-Home-and-Living-Guide-2023.pdf",
      localPublicPath: "/media/magazine/2023/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/10/guide.jpg",
      localPublicPath: "/media/magazine/2023/cover.jpg",
    },
  },
  {
    label: "2022",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2022 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2022.pdf",
      localPublicPath: "/media/magazine/2022/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2022-Cover.jpg",
      localPublicPath: "/media/magazine/2022/cover.jpg",
    },
  },
  {
    label: "2021",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2021 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2021.pdf",
      localPublicPath: "/media/magazine/2021/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2021-Cover.jpg",
      localPublicPath: "/media/magazine/2021/cover.jpg",
    },
  },
  {
    label: "2020",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2020 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2020.pdf",
      localPublicPath: "/media/magazine/2020/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2020-Cover.jpg",
      localPublicPath: "/media/magazine/2020/cover.jpg",
    },
  },
  {
    label: "2019",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2019 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2019.pdf",
      localPublicPath: "/media/magazine/2019/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2019-cover.jpg",
      localPublicPath: "/media/magazine/2019/cover.jpg",
    },
  },
  {
    label: "2018",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2018 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2018.pdf",
      localPublicPath: "/media/magazine/2018/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2018-Cover.jpg",
      localPublicPath: "/media/magazine/2018/cover.jpg",
    },
  },
  {
    label: "2017",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2017 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2017.pdf",
      localPublicPath: "/media/magazine/2017/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2017-cover.jpg",
      localPublicPath: "/media/magazine/2017/cover.jpg",
    },
  },
  {
    label: "2016",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2016 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2016.pdf",
      localPublicPath: "/media/magazine/2016/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2016-cover.jpg",
      localPublicPath: "/media/magazine/2016/cover.jpg",
    },
  },
  {
    label: "2015",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2015 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2015.pdf",
      localPublicPath: "/media/magazine/2015/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/02/Green-Building-Directory-2015-cover.jpg",
      localPublicPath: "/media/magazine/2015/cover.jpg",
    },
  },
  {
    label: "2014",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2014 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2014.pdf",
      localPublicPath: "/media/magazine/2014/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2014-Cover.jpg",
      localPublicPath: "/media/magazine/2014/cover.jpg",
    },
  },
  {
    label: "2013",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2013 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2013.pdf",
      localPublicPath: "/media/magazine/2013/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2013-Cover.jpg",
      localPublicPath: "/media/magazine/2013/cover.jpg",
    },
  },
  {
    label: "2012",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2012 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2012.pdf",
      localPublicPath: "/media/magazine/2012/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2012-Cover.jpg",
      localPublicPath: "/media/magazine/2012/cover.jpg",
    },
  },
  {
    label: "2011",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2011 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2011.pdf",
      localPublicPath: "/media/magazine/2011/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2011-Cover.jpg",
      localPublicPath: "/media/magazine/2011/cover.jpg",
    },
  },
  {
    label: "2010",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2010 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2010.pdf",
      localPublicPath: "/media/magazine/2010/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2010-Cover.jpg",
      localPublicPath: "/media/magazine/2010/cover.jpg",
    },
  },
  {
    label: "2009",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2009 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2009.pdf",
      localPublicPath: "/media/magazine/2009/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2009-Cover.jpg",
      localPublicPath: "/media/magazine/2009/cover.jpg",
    },
  },
  {
    label: "2008",
    season: "Green Building Directory",
    coverAlt: "Green Building Directory 2008 cover",
    pdf: {
      legacyPath: "/wp-content/uploads/gba-directories/Green-Building-Directory-2008.pdf",
      localPublicPath: "/media/magazine/2008/guide.pdf",
    },
    cover: {
      legacyPath: "/wp-content/uploads/2023/03/Green-Building-Directory-2008-Cover.jpg",
      localPublicPath: "/media/magazine/2008/cover.jpg",
    },
  },
] as const;
