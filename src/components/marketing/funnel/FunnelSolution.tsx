import type { FunnelSolutionSection } from "@/lib/content-types";

export function FunnelSolution({ solution }: { solution: FunnelSolutionSection }) {
  return (
    <section className="border-y border-neutral-100 bg-[#f8faf3] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-extrabold text-neutral-900 md:text-3xl">{solution.headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">{solution.subheadline}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:text-left">
          {solution.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#96c11f]/25 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#5a7c00]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
