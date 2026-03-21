import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  /*
   * Pages render via the App Router; content comes from WordPress REST.
   * `public/mirror/` is optional crawl output (not served as the site by default).
   */
  async redirects() {
    return [
      /* Live site uses /event/earth-day-5k/; legacy marketing slug still linked as /earthday5k/ */
      { source: "/earthday5k", destination: "/event/earth-day-5k/", permanent: true },
      { source: "/earthday5k/", destination: "/event/earth-day-5k/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.greenbuilt.org",
        pathname: "/wp-content/**",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
