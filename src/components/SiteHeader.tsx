import { mediaUrl } from "@/content/assets/native-media-catalog";
import { SiteHeaderClient } from "@/components/SiteHeaderClient";
import { getSiteSettings } from "@/lib/site-config";

export function SiteHeader() {
  const { siteName, megaNav } = getSiteSettings();
  const logoSrc = mediaUrl("gbaLogoHorizontalWebp");

  return <SiteHeaderClient siteName={siteName} logoSrc={logoSrc} megaNav={megaNav} />;
}
