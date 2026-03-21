import { MagazineHubView } from "@/components/magazine/MagazineHubView";
import { magazineHubContent } from "@/content/site/magazine-hub";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

/** Native magazine / annual directory hub — structured content; PDFs still legacy-hosted. */
export default function MagazinePage() {
  return <MagazineHubView content={magazineHubContent} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(magazineHubContent.seo, { path: "/magazine/" });
}
