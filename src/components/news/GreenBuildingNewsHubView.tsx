import { EditorialHubView } from "@/components/news/EditorialHubView";
import { editorialHubImpactStats } from "@/content/site/editorial-hub-trust";
import { greenBuildingNewsLeadCapture } from "@/content/site/green-building-news-hub";
import type { NativePostHubModel } from "@/content/site/native-post-hub-model";
import Link from "next/link";

export function GreenBuildingNewsHubView({ model }: { model: NativePostHubModel }) {
  return (
    <EditorialHubView
      model={model}
      leadCapture={greenBuildingNewsLeadCapture}
      leadSectionId="green-building-news-alerts"
      impactStrip={editorialHubImpactStats}
      eyebrow="Green Building News"
      headline="Ideas, guides & perspectives"
      intro="Practical articles on high-performance homes, building science, and what is happening in Western North Carolina—sorted by topic so you can skim or go deep. For a shorter feed, visit News; for the annual print guide and PDFs, head to Magazine."
      featuredSectionTitle="Editor’s picks"
      featuredSectionSubtitle="Design, building science, and program context—refreshed as we publish."
      footnote={
        <>
          Prefer a compact view? Visit{" "}
          <Link href="/news/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
            News
          </Link>
          . Long-form annual directory content lives on the{" "}
          <Link href="/magazine/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
            Magazine
          </Link>{" "}
          hub (print guide + PDF archives).
        </>
      }
    />
  );
}
