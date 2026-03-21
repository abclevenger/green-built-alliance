import { MatchmakingWizard } from "@/components/matchmaking/MatchmakingWizard";
import { mediaUrl } from "@/content/assets/native-media-catalog";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = pageMetadata(
  {
    title: "Find a Vetted Green Building Pro in Western North Carolina",
    description:
      "Answer a few questions about your project—new build, retrofit, or energy savings—and we’ll point you to the right directory categories and Green Built Alliance members in WNC.",
    ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
  },
  {
    path: "/find-a-pro/",
    keywords: [
      "find a builder WNC",
      "green building professional",
      "home energy rater",
      "Green Built Alliance directory",
      "Asheville green builder",
      "sustainable building Western North Carolina",
    ],
  }
);

function WizardFallback() {
  return (
    <div
      className="flex min-h-[40vh] flex-col items-center justify-center gap-4 bg-white px-4"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span
        className="size-9 animate-spin rounded-full border-2 border-[#96c11f] border-t-transparent motion-reduce:animate-none motion-reduce:border-[#5a7c00]"
        aria-hidden
      />
      <p className="text-sm font-medium text-neutral-600">Loading guided match…</p>
    </div>
  );
}

export default function FindAProPage() {
  return (
    <Suspense fallback={<WizardFallback />}>
      <MatchmakingWizard />
    </Suspense>
  );
}
