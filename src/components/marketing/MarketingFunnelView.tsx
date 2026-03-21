import type { FunnelBlock } from "@/lib/content-types";
import { FunnelBlockRenderer } from "./FunnelBlockRenderer";

/**
 * Composable conversion page — order and subset of `blocks` is per-route.
 * Add/remove/reorder blocks in content files only; no markup duplication.
 */
export function MarketingFunnelView({ blocks }: { blocks: FunnelBlock[] }) {
  return (
    <div className="bg-white">
      {blocks.map((block, i) => (
        <FunnelBlockRenderer key={block.id ?? `${block.type}-${i}`} block={block} />
      ))}
    </div>
  );
}
