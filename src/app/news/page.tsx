import { NewsHubView } from "@/components/news/NewsHubView";
import { buildNewsHubModel, newsIndexSeo } from "@/content/site/news-hub";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(newsIndexSeo, { path: "/news/" });
}

/** Native news hub — lists `NativePost` registry only; no WordPress HTML. */
export default function NewsIndexPage() {
  const model = buildNewsHubModel();
  return <NewsHubView model={model} />;
}
