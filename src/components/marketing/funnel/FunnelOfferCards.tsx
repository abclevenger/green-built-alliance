import type { FunnelAudienceCard } from "@/lib/content-types";
import { FunnelPrimaryCta } from "./FunnelButtons";

export function FunnelOfferCards({
  cards,
}: {
  cards: [FunnelAudienceCard, FunnelAudienceCard];
}) {
  return (
    <section className="bg-linear-to-b from-white to-[#f8faf3] px-4 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-md"
          >
            <h2 className="text-xl font-extrabold text-neutral-900">{card.title}</h2>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-600">
              {card.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-0.5 font-bold text-[#96c11f]" aria-hidden>
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <FunnelPrimaryCta href={card.cta.href} label={card.cta.label} className="w-full sm:w-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
