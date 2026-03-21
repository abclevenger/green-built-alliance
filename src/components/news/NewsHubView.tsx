import { EditorialHubView } from "@/components/news/EditorialHubView";
import { editorialHubImpactStats } from "@/content/site/editorial-hub-trust";
import { newsIndexLeadCapture } from "@/content/site/news-hub";
import type { NewsHubModel } from "@/content/site/news-hub";
import Link from "next/link";

export function NewsHubView({ model }: { model: NewsHubModel }) {
  return (
    <EditorialHubView
      model={model}
      leadCapture={newsIndexLeadCapture}
      leadSectionId="news-alerts"
      impactStrip={editorialHubImpactStats}
      eyebrow="News"
      headline="Articles & program explainers"
      intro="Short, practical reads from Green Built Alliance—net zero and high-performance homes, air sealing, stormwater, certification, and building science in Western North Carolina."
      footnote={
        <>
          Want the broader archive and topic layout? Open{" "}
          <Link href="/green-building-news/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
            Green Building News
          </Link>
          . For the annual print directory and PDF editions, visit the{" "}
          <Link href="/magazine/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
            Magazine
          </Link>{" "}
          hub.
        </>
      }
    />
  );
}
