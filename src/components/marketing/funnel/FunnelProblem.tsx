import type { FunnelProblemSection } from "@/lib/content-types";

export function FunnelProblem({ problem }: { problem: FunnelProblemSection }) {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold text-neutral-900 md:text-3xl">
          {problem.headline}
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problem.points.map((text) => (
            <div
              key={text}
              className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 text-sm font-medium text-neutral-800 shadow-sm"
            >
              {text}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-neutral-600">
          {problem.closing}
        </p>
      </div>
    </section>
  );
}
