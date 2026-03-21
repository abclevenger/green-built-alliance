import type { HomePartnerPlaceholder } from "@/lib/content-types";

type Props = {
  headline: string;
  partners: HomePartnerPlaceholder[];
  className?: string;
};

/**
 * Logo row using text placeholders until real SVG/PNG assets exist.
 * PLACEHOLDER: replace partners[] with real names; set isPlaceholder: false when logos ship.
 */
export function PartnerPlaceholderStrip({
  headline,
  partners,
  className = "",
}: Props) {
  if (!partners.length) return null;

  return (
    <section
      className={`py-10 sm:py-12 ${className}`}
      aria-label="Partners and collaborators"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-text-muted)]">
          {headline}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {partners.map((p) => (
            <li key={p.label}>
              <span
                className={`inline-flex min-h-[2.75rem] min-w-[7rem] items-center justify-center rounded-lg border px-5 py-2 text-xs font-semibold uppercase tracking-wide ${
                  p.isPlaceholder !== false
                    ? "border-dashed border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)] text-[color:var(--gb-text-muted)]"
                    : "border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] text-[color:var(--gb-text)]"
                }`}
              >
                {p.label}
              </span>
            </li>
          ))}
        </ul>
        {partners.some((p) => p.isPlaceholder !== false) ? (
          <p className="mt-6 text-center text-[10px] font-medium uppercase tracking-wider text-amber-700/90 dark:text-amber-400/90">
            PLACEHOLDER slots — swap for partner logos when approved
          </p>
        ) : null}
      </div>
    </section>
  );
}
