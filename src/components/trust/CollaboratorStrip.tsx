import Image from "next/image";
import type { HomePartnerPlaceholder } from "@/lib/content-types";

type Props = {
  headline: string;
  partners: HomePartnerPlaceholder[];
  className?: string;
};

function PartnerCell({ p }: { p: HomePartnerPlaceholder }) {
  const shell =
    "inline-flex min-h-[4.5rem] min-w-[7.5rem] max-w-[11rem] items-center justify-center rounded-lg border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-4 py-3 sm:min-h-[5rem] sm:max-w-[12rem]";

  if (p.logo) {
    const img = (
      <Image
        src={p.logo.src}
        alt={p.logo.alt}
        width={220}
        height={110}
        className="h-14 w-auto max-h-16 max-w-full object-contain sm:h-16"
      />
    );
    const inner = p.href ? (
      <a
        href={p.href}
        className="flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-text)]"
        {...(p.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {img}
      </a>
    ) : (
      img
    );
    return <span className={shell}>{inner}</span>;
  }

  return (
    <span
      className={`inline-flex min-h-[2.75rem] min-w-[7rem] items-center justify-center rounded-lg border px-5 py-2 text-xs font-semibold uppercase tracking-wide ${
        p.isPlaceholder !== false
          ? "border-dashed border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)] text-[color:var(--gb-text-muted)]"
          : "border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] text-[color:var(--gb-text)]"
      }`}
    >
      {p.label}
    </span>
  );
}

/**
 * Partner / collaborator row — logo tiles or text labels; keep copy factual.
 */
export function CollaboratorStrip({ headline, partners, className = "" }: Props) {
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
              <PartnerCell p={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
