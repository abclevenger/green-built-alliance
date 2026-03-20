import type { MetadataRoute } from "next";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.greenbuilt.org").replace(
  /\/$/,
  ""
);

/** Mirrors production rules; sitemap points at this deployment’s generated sitemap.xml */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/wp-content/uploads/wc-logs/",
          "/wp-content/uploads/woocommerce_transient_files/",
          "/wp-content/uploads/woocommerce_uploads/",
          "/*?add-to-cart=",
          "/*?*add-to-cart=",
          "/wp-admin/",
        ],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE.replace(/^https?:\/\//, ""),
  };
}
