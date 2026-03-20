import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  /*
   * Serve crawled HTML as static files from public/mirror (no Route Handler).
   * A catch-all route that used fs.readFile on public/mirror caused Vercel to trace
   * the entire mirror into the serverless function (>250 MB unzipped limit).
   */
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/mirror/index.html" },
        { source: "/:path*/", destination: "/mirror/:path*/index.html" },
      ],
    };
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
