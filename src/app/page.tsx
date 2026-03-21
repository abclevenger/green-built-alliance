import { HomePageView } from "@/components/home/HomePageView";
import { getNativeHome } from "@/lib/content-source";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = false;

export function generateMetadata(): Metadata {
  const content = getNativeHome();
  return pageMetadata(content.seo, {
    path: "/",
    keywords: [
      "Green Built Alliance",
      "Western North Carolina",
      "Asheville",
      "Buncombe County",
      "vetted building professionals",
      "green homes",
      "sustainable building",
      "energy savings",
      "Green Built Homes",
      "home certification",
      "builder directory",
      "continuing education",
      "Energy Savers Network",
    ],
  });
}

export default function HomePage() {
  const content = getNativeHome();
  return <HomePageView content={content} />;
}
