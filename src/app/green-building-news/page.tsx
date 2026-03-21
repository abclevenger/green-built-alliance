import { GreenBuildingNewsHubView } from "@/components/news/GreenBuildingNewsHubView";
import {
  buildGreenBuildingNewsHubModel,
  greenBuildingNewsIndexSeo,
} from "@/content/site/green-building-news-hub";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

/** Native Green Building News archive — `NativePost` registry; no WordPress HTML. */
export default function GreenBuildingNewsPage() {
  const model = buildGreenBuildingNewsHubModel();
  return <GreenBuildingNewsHubView model={model} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(greenBuildingNewsIndexSeo, { path: "/green-building-news/" });
}
