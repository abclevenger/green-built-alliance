import type { FunnelHero as FunnelHeroModel } from "@/lib/content-types";
import { FunnelPrimaryCta, FunnelSecondaryCta } from "./FunnelButtons";

export function FunnelHero({ hero }: { hero: FunnelHeroModel }) {
  return (
    <section className="border-b border-neutral-200 bg-linear-to-b from-[#f8faf3] to-white px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-[2.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">{hero.subheadline}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <FunnelPrimaryCta href={hero.primaryCta.href} label={hero.primaryCta.label} />
            <FunnelSecondaryCta href={hero.secondaryCta.href} label={hero.secondaryCta.label} />
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[#96c11f]/30 bg-linear-to-br from-[#5a7c00] via-[#6d8f1a] to-[#96c11f] shadow-lg lg:min-h-[320px]">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
          <div className="relative flex h-full flex-col justify-end p-8 text-white">
            {hero.visualTagline ? (
              <p className="text-lg font-semibold leading-snug md:text-xl">{hero.visualTagline}</p>
            ) : null}
            <p className="mt-4 text-sm text-white/85">
              Certification · Energy · Health · Durability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
