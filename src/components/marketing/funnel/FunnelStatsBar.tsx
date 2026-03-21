import type { FunnelProofSection } from "@/lib/content-types";

export function FunnelStatsBar({ proof }: { proof: FunnelProofSection }) {
  return (
    <section className="border-y border-neutral-200 bg-neutral-900 px-4 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-xl font-extrabold md:text-2xl">{proof.headline}</h2>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {proof.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-[#c5e063] md:text-3xl">{s.value}</p>
              <p className="mt-2 text-xs font-medium text-neutral-300 md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
