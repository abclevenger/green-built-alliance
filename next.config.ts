import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  /*
   * App Router: local-first content in `src/content/*`; unmigrated paths may still use WP REST
   * via `[...slug]` → `resolveWordPressRoute`. `public/mirror/` is optional crawl output.
   */
  async redirects() {
    return [
      /* Live site uses /event/earth-day-5k/; legacy marketing slug still linked as /earthday5k/ */
      { source: "/earthday5k", destination: "/event/earth-day-5k/", permanent: true },
      { source: "/earthday5k/", destination: "/event/earth-day-5k/", permanent: true },
      /* Native /news/ hub supersedes WP newsletters subpage — see docs/WORDPRESS_FALLBACK_AUDIT.md */
      { source: "/news/newsletters", destination: "/news/", permanent: true },
      { source: "/news/newsletters/", destination: "/news/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.greenbuilt.org",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.greenbuilt.org",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/media/**",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
