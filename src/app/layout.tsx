import type { Metadata } from "next";
import "./globals.css";

/** Root layout applies to React pages only; mirrored HTML is served via Route Handlers. */
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
