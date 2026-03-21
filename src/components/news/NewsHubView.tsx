import { EditorialHubView } from "@/components/news/EditorialHubView";
import { newsIndexLeadCapture } from "@/content/site/news-hub";
import type { NewsHubModel } from "@/content/site/news-hub";
import Link from "next/link";

export function NewsHubView({ model }: { model: NewsHubModel }) {
  return (
    <EditorialHubView
      model={model}
      leadCapture={newsIndexLeadCapture}
      leadSectionId="news-alerts"
      eyebrow="News"
      headline="Articles & program explainers"
      intro="Native articles from Green Built Alliance—net zero homes, air sealing, stormwater, certification, and building science in Western North Carolina. More legacy blog URLs still resolve through the site shell until they are migrated into this registry."
      footnote={
        <>
          For the full legacy blog index path, see{" "}
          <Link href="/green-building-news/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
            Green Building News
          </Link>
          .           Looking for the annual directory publication? The{" "}
          <Link href="/magazine/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
            Magazine
          </Link>{" "}
          hub covers the Green Home & Living Guide and PDF archives; these pages focus on readable articles and guides.
        </>
      }
    />
  );
}
