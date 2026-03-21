import type { HomeStat } from "@/lib/content-types";

type Props = {
  stats: HomeStat[];
  /** Optional kicker above the row */
  eyebrow?: string;
  className?: string;
};

/**
 * Reusable impact / credibility strip. Pass verified stats from content.
 * When values are PLACEHOLDER, set stat.isPlaceholder in content so UI can annotate.
 */
export function ImpactStatStrip({ stats, eyebrow, className = "" }: Props) {
  if (!stats.length) return null;

  return (
    <section
      className={`border-y border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)] py-10 sm:py-12 ${className}`}
      aria-label="Impact and reach"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-text-muted)]">
            {eyebrow}
          </p>
        ) : null}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center lg:text-left"
            >
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
              {stat.isPlaceholder ? (
                <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-amber-700/90 dark:text-amber-400/90">
                  Verify before publishing externally
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
