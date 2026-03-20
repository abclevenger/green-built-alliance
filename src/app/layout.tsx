import type { Metadata } from "next";
import "./globals.css";

/** Root layout applies to `/sitemap.xml`, `/robots.txt`, and `_not-found` only. The homepage is static HTML at `public/mirror/index.html` (see `next.config.ts` rewrites). */
export const metadata: Metadata = {
  title: "Green Built Alliance",
  description: "Mirrored from greenbuilt.org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
