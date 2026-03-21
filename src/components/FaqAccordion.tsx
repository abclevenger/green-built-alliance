import type { ReactNode } from "react";

export type FaqItem = { question: string; answer: string };

type Props = {
  id: string;
  title: string;
  intro?: ReactNode;
  items: readonly FaqItem[];
  className?: string;
};

/**
 * Native `<details>` accordion — no client JS, keyboard-friendly, works with FAQPage JSON-LD when paired.
 */
export function FaqAccordion({ id, title, intro, items, className = "" }: Props) {
  if (items.length === 0) return null;

  return (
    <section className={className} aria-labelledby={id}>
      <h2 id={id} className="font-serif text-2xl font-semibold text-[color:var(--gb-text)] md:text-3xl">
        {title}
      </h2>
      {intro ? <div className="mt-4 text-base text-[color:var(--gb-text-muted)]">{intro}</div> : null}
      <div className="mt-8 divide-y divide-[color:var(--gb-border)] overflow-hidden rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] shadow-sm">
        {items.map((item, i) => (
          <details
            key={i}
            className="group border-0 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-0 open:bg-[color:var(--gb-surface-muted)]/40"
          >
            <summary className="cursor-pointer list-none px-5 py-4 text-left text-sm font-bold text-[color:var(--gb-text)] marker:hidden outline-none md:px-6 md:text-base [&::-webkit-details-marker]:hidden focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[color:var(--gb-accent-deep)] focus-visible:ring-offset-2">
              <span className="flex items-start justify-between gap-3">
                <span className="pr-2">{item.question}</span>
                <span
                  className="mt-0.5 shrink-0 text-[color:var(--gb-accent-deep)] motion-safe:transition-transform motion-safe:duration-200 motion-reduce:transition-none group-open:motion-safe:rotate-180"
                  aria-hidden
                >
                  ▼
                </span>
              </span>
            </summary>
            <div className="border-t border-[color:var(--gb-border)]/80 px-5 pb-5 pt-0 md:px-6">
              <p className="pt-4 text-pretty text-sm leading-relaxed text-[color:var(--gb-text-muted)] md:text-[0.9375rem]">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
