import type { HomeContent } from "@/lib/content-types";
import Link from "next/link";

function isHashHref(href: string) {
  return href.startsWith("#");
}

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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={content.hero.primaryCta.href}
              className="inline-flex min-h-[44px] min-w-[10rem] items-center justify-center rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a7c00]"
            >
              {content.hero.primaryCta.label}
            </Link>
            {isHashHref(content.hero.secondaryCta.href) ? (
              <a
                href={content.hero.secondaryCta.href}
                className="inline-flex min-h-[44px] min-w-[10rem] items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f] hover:text-[#5a7c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a7c00]"
              >
                {content.hero.secondaryCta.label}
              </a>
            ) : (
              <Link
                href={content.hero.secondaryCta.href}
                className="inline-flex min-h-[44px] min-w-[10rem] items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f] hover:text-[#5a7c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a7c00]"
              >
                {content.hero.secondaryCta.label}
              </Link>
            )}
          </div>
          <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-2 text-left text-sm text-neutral-600 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-1 sm:text-center">
            {content.hero.trustBullets.map((line) => (
              <li key={line} className="flex items-start gap-2 sm:inline-flex sm:items-center">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#96c11f] sm:mt-0" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="home-pillars-heading">
        <h2
          id="home-pillars-heading"
          className="text-center text-2xl font-extrabold text-neutral-900 md:text-3xl"
        >
          {content.pillarsSectionTitle}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
          {content.pillars.map((p, index) => {
            const isPrimary = index === 0;
            return (
              <Link
                key={p.href}
                href={p.href}
                className={
                  isPrimary
                    ? "group relative flex flex-col rounded-2xl border-2 border-[#96c11f] bg-gradient-to-b from-[#f4f8ea] to-white p-7 shadow-md transition hover:border-[#5a7c00] hover:shadow-lg md:z-[1] md:scale-[1.02]"
                    : "group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-[#96c11f] hover:shadow-md"
                }
              >
                <h3
                  className={
                    isPrimary
                      ? "text-xl font-bold text-neutral-900 group-hover:text-[#5a7c00] md:text-[1.35rem]"
                      : "text-xl font-bold text-neutral-900 group-hover:text-[#5a7c00]"
                  }
                >
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{p.description}</p>
                <span
                  className={
                    isPrimary
                      ? "mt-5 inline-flex items-center rounded-full bg-[#e34d0c] px-4 py-2 text-sm font-bold text-white transition group-hover:bg-[#c4410a]"
                      : "mt-4 text-sm font-semibold text-[#e34d0c]"
                  }
                >
                  {isPrimary ? "Explore program →" : "Explore program →"}
                </span>
              </Link>
            );
          })}
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

      <section id="programs" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
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
