import type { HomeTestimonial } from "@/lib/content-types";

type Props = {
  testimonial: HomeTestimonial;
  className?: string;
};

/**
 * Single-quote spotlight — use only approved attributions in content.
 */
export function TestimonialSpotlight({ testimonial, className = "" }: Props) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-8 shadow-sm sm:p-10 lg:p-12 ${className}`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--gb-accent)]/8 blur-2xl"
        aria-hidden
      />
      <blockquote className="relative font-serif text-xl leading-relaxed text-[color:var(--gb-text)] sm:text-2xl">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="relative mt-6 text-sm font-medium text-[color:var(--gb-text-muted)]">
        — {testimonial.attribution}
      </figcaption>
    </figure>
  );
}
