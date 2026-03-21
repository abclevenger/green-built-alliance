import type { FunnelBlock } from "@/lib/content-types";
import { FunnelFinalCta } from "./funnel/FunnelFinalCta";
import { FunnelHero } from "./funnel/FunnelHero";
import { FunnelHowItWorks } from "./funnel/FunnelHowItWorks";
import { FunnelLeadCapture } from "./funnel/FunnelLeadCapture";
import { FunnelOfferCards } from "./funnel/FunnelOfferCards";
import { FunnelProblem } from "./funnel/FunnelProblem";
import { FunnelSolution } from "./funnel/FunnelSolution";
import { FunnelStatsBar } from "./funnel/FunnelStatsBar";
import { FunnelTestimonial } from "./funnel/FunnelTestimonial";

/** Maps a single funnel block to its section component (server-safe except leadCapture). */
export function FunnelBlockRenderer({ block }: { block: FunnelBlock }) {
  switch (block.type) {
    case "hero":
      return <FunnelHero hero={block.data} />;
    case "problem":
      return <FunnelProblem problem={block.data} />;
    case "solution":
      return <FunnelSolution solution={block.data} />;
    case "steps":
      return <FunnelHowItWorks howItWorks={block.data} />;
    case "proof":
      return <FunnelStatsBar proof={block.data} />;
    case "audienceCards":
      return <FunnelOfferCards cards={block.data.cards} />;
    case "testimonial":
      return <FunnelTestimonial testimonial={block.data} />;
    case "leadCapture":
      return <FunnelLeadCapture block={block.data} sectionId={block.id ?? "lead"} />;
    case "finalCta":
      return <FunnelFinalCta finalCta={block.data} />;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}
