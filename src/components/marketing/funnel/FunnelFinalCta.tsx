import type { FunnelFinalCta as FunnelFinalCtaModel } from "@/lib/content-types";
import { FunnelPrimaryCta, FunnelSecondaryCta } from "./FunnelButtons";

export function FunnelFinalCta({ finalCta }: { finalCta: FunnelFinalCtaModel }) {
  return (
    <section className="bg-[#6d6e71] px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold md:text-3xl">{finalCta.headline}</h2>
        <p className="mt-4 text-lg text-neutral-200">{finalCta.subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <FunnelPrimaryCta href={finalCta.primaryCta.href} label={finalCta.primaryCta.label} />
          <FunnelSecondaryCta
            variant="dark"
            href={finalCta.secondaryCta.href}
            label={finalCta.secondaryCta.label}
          />
        </div>
      </div>
    </section>
  );
}
