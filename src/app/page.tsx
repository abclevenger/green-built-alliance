import { HomePageView } from "@/components/home/HomePageView";
import { getNativeHome } from "@/lib/content-source";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = false;

export function generateMetadata(): Metadata {
  const content = getNativeHome();
  return pageMetadata(content.seo, { path: "/" });
}

export default function HomePage() {
  const content = getNativeHome();
  return <HomePageView content={content} />;
}
