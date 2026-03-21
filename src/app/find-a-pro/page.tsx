import { MatchmakingWizard } from "@/components/matchmaking/MatchmakingWizard";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Find a Green Building Pro | Green Built Alliance",
  description:
    "Get matched with trusted architects, builders, raters, and trades in Western North Carolina—guided steps based on your project goal.",
};

function WizardFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-white px-4 text-neutral-600">
      Loading guided match…
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
