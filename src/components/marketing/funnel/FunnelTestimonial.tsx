import type { FunnelTestimonial as FunnelTestimonialModel } from "@/lib/content-types";

export function FunnelTestimonial({ testimonial }: { testimonial: FunnelTestimonialModel }) {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        {testimonial.isPlaceholder ? (
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Placeholder testimonial — replace with a real quote
          </p>
        ) : null}
        <blockquote className="text-xl font-medium leading-relaxed text-neutral-800 md:text-2xl">
          <span className="text-[#5a7c00]" aria-hidden>
            “
          </span>
          {testimonial.quote}
          <span className="text-[#5a7c00]" aria-hidden>
            ”
          </span>
        </blockquote>
        <footer className="mt-6 text-sm font-semibold text-neutral-500">{testimonial.attribution}</footer>
      </div>
    </section>
  );
}
