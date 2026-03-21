import { EditorialHubView } from "@/components/news/EditorialHubView";
import { greenBuildingNewsLeadCapture } from "@/content/site/green-building-news-hub";
import type { NativePostHubModel } from "@/content/site/native-post-hub-model";
import Link from "next/link";

export function GreenBuildingNewsHubView({ model }: { model: NativePostHubModel }) {
  return (
    <EditorialHubView
      model={model}
      leadCapture={greenBuildingNewsLeadCapture}
      leadSectionId="green-building-news-alerts"
      eyebrow="Green Building News"
      headline="Ideas, guides & perspectives"
      intro="This is the native Green Building News archive—the same migrated articles as our shorter /news/ entry, organized for discovery by topic. Legacy pagination and thousands of historical URLs still fall back to WordPress until those posts are moved into the registry."
      featuredSectionTitle="Editor’s picks"
      featuredSectionSubtitle="A rotating mix of design, building science, and program context from the native library."
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
