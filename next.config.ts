import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  /* WordPress uses trailing slashes; mirrors are stored as .../index.html */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
