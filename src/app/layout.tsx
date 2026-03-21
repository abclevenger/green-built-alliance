import type { Metadata } from "next";
import "./globals.css";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildDefaultMetadata } from "@/lib/seo";
import { getSiteSettings } from "@/lib/site-config";

const settings = getSiteSettings();

export const metadata: Metadata = {
  ...buildDefaultMetadata(settings.organizationShort),
  title: {
    default: settings.defaultSeo.title,
    template: `%s | ${settings.organizationShort}`,
  },
  description: settings.defaultSeo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-neutral-800 antialiased">
        <SiteJsonLd />
        <a className="skip-to-main" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
