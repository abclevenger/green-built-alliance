import type { HomeStat } from "@/lib/content-types";

type Props = {
  stats: HomeStat[];
  /** Optional kicker above the row */
  eyebrow?: string;
  className?: string;
};

/**
 * Reusable impact / credibility strip. Pass verified stats from content.
 * Omit unverified figures from content; `isPlaceholder` remains on the type for staging only.
 */
export function ImpactStatStrip({ stats, eyebrow, className = "" }: Props) {
  if (!stats.length) return null;

  return (
    <section
      className={`border-y border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)] py-10 sm:py-12 ${className}`}
      aria-label="Trust highlights"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-text-muted)]">
            {eyebrow}
          </p>
        ) : null}
        <ul className="grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center lg:text-left">
              <p className="font-serif text-3xl font-semibold tracking-tight text-[color:var(--gb-text)] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-[color:var(--gb-text)]">
                {stat.label}
              </p>
              {stat.detail ? (
                <p className="mt-1 text-xs text-[color:var(--gb-text-muted)]">
                  {stat.detail}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
