import type { FunnelHowItWorks } from "@/lib/content-types";

export function FunnelHowItWorks({ howItWorks }: { howItWorks: FunnelHowItWorks }) {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold text-neutral-900 md:text-3xl">
          {howItWorks.title}
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#96c11f] text-sm font-extrabold text-white"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
