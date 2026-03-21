import type { HomeContent } from "@/lib/content-types";
import Link from "next/link";

export function HomePageView({ content }: { content: HomeContent }) {
  return (
    <div className="bg-white">
      <section className="border-b border-neutral-100 bg-gradient-to-b from-[#f8faf3] to-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
            {content.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-600">
            {content.hero.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {content.pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-[#96c11f] hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-neutral-900 group-hover:text-[#5a7c00]">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {p.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-[#e34d0c]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {content.stats && content.stats.length > 0 ? (
        <section className="border-y border-neutral-100 bg-neutral-50 py-10">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 px-4">
            {content.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-[#5a7c00]">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-neutral-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-neutral-900 md:text-3xl">
            {content.programsSection.title}
          </h2>
          <p className="mt-4 text-neutral-600">{content.programsSection.description}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.programsSection.cards.map((c) => (
            <ProgramCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {content.midCta ? (
        <section className="bg-[#6d6e71] px-4 py-14 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">{content.midCta.title}</h2>
            {content.midCta.description ? (
              <p className="mt-4 text-neutral-200">{content.midCta.description}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={content.midCta.primary.href}
                className="inline-flex rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white hover:bg-[#5a7c00]"
              >
                {content.midCta.primary.label}
              </Link>
              {content.midCta.secondary ? (
                <Link
                  href={content.midCta.secondary.href}
                  className="inline-flex rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  {content.midCta.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function ProgramCard({
  href,
  title,
  description,
  external,
}: {
  href: string;
  title: string;
  description: string;
  external?: boolean;
}) {
  const className =
    "flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition hover:border-[#96c11f]";
  const inner = (
    <>
      <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-neutral-600">{description}</p>
      <span className="mt-4 text-sm font-semibold text-[#5a7c00]">
        {external ? "Visit →" : "Explore →"}
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} className={className} rel="noopener noreferrer" target="_blank">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
