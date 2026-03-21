import { FaqAccordion } from "@/components/FaqAccordion";
import type { HomeContent } from "@/lib/content-types";
import type { ReactNode } from "react";
import { ImpactStatStrip } from "@/components/trust/ImpactStatStrip";
import { PartnerPlaceholderStrip } from "@/components/trust/PartnerPlaceholderStrip";
import { TestimonialSpotlight } from "@/components/trust/TestimonialSpotlight";
import Link from "next/link";

function isHashHref(href: string) {
  return href.startsWith("#");
}

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (isHashHref(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function HomePageView({ content }: { content: HomeContent }) {
  const primaryBtn =
    "inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[color:var(--gb-accent-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]";
  const secondaryBtn =
    "inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)] hover:text-[color:var(--gb-accent-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]";
  const tertiaryLink =
    "inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-[color:var(--gb-accent-deep)] underline-offset-4 hover:underline";

  return (
    <div className="bg-[color:var(--gb-surface)] text-[color:var(--gb-text)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--gb-border)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#f4f8ea_0%,#fff_45%,#fafaf9_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-14 text-center md:pb-20 md:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-accent-deep)]">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-[color:var(--gb-text)] sm:text-4xl md:text-[2.65rem]">
            {content.hero.title}
          </h1>
          {content.hero.valueLine ? (
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[color:var(--gb-text)] sm:text-lg">
              {content.hero.valueLine}
            </p>
          ) : null}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--gb-text-muted)]">
            {content.hero.description}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaLink href={content.hero.primaryCta.href} className={primaryBtn}>
              {content.hero.primaryCta.label}
            </CtaLink>
            <CtaLink href={content.hero.secondaryCta.href} className={secondaryBtn}>
              {content.hero.secondaryCta.label}
            </CtaLink>
            {content.hero.tertiaryCta ? (
              <CtaLink href={content.hero.tertiaryCta.href} className={tertiaryLink}>
                {content.hero.tertiaryCta.label}
              </CtaLink>
            ) : null}
          </div>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 text-left text-sm text-[color:var(--gb-text-muted)] sm:mx-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:text-center">
            {content.hero.trustBullets.map((line) => (
              <li key={line} className="flex items-start gap-2 sm:inline-flex sm:items-center">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gb-accent)] sm:mt-0"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pathways */}
      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="home-pillars-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="home-pillars-heading"
            className="font-serif text-2xl font-semibold tracking-tight text-[color:var(--gb-text)] sm:text-3xl"
          >
            {content.pillarsSectionTitle}
          </h2>
          {content.pillarsSectionIntro ? (
            <p className="mt-4 text-base leading-relaxed text-[color:var(--gb-text-muted)]">
              {content.pillarsSectionIntro}
            </p>
          ) : null}
        </div>
        <ol className="mt-12 grid list-none gap-6 md:grid-cols-3 md:items-stretch md:gap-8">
          {content.pillars.map((p, index) => {
            const isPrimary = index === 0;
            const step = String(index + 1).padStart(2, "0");
            return (
              <li key={p.href} className="h-full">
                <Link
                  href={p.href}
                  className={
                    isPrimary
                      ? "group relative flex h-full flex-col rounded-2xl border-2 border-[color:var(--gb-accent)] bg-gradient-to-b from-[#f4f8ea] to-[color:var(--gb-surface)] p-7 shadow-md transition hover:border-[color:var(--gb-accent-deep)] hover:shadow-lg md:z-[1] md:scale-[1.02]"
                      : "group flex h-full flex-col rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-7 shadow-sm transition hover:border-[color:var(--gb-accent)]/80 hover:shadow-md"
                  }
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--gb-text-muted)]">
                    Path {step}
                  </span>
                  {p.audienceLabel ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--gb-accent-deep)]">
                      {p.audienceLabel}
                    </p>
                  ) : null}
                  <h3 className="mt-2 text-xl font-bold leading-snug text-[color:var(--gb-text)] group-hover:text-[color:var(--gb-accent-deep)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--gb-text-muted)]">
                    {p.description}
                  </p>
                  <span
                    className={
                      isPrimary
                        ? "mt-6 inline-flex w-fit items-center rounded-full bg-[#e34d0c] px-4 py-2 text-sm font-bold text-white transition group-hover:bg-[#c4410a]"
                        : "mt-6 text-sm font-bold text-[#e34d0c]"
                    }
                  >
                    {p.ctaLabel ?? "Continue →"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {content.stats && content.stats.length > 0 ? (
        <ImpactStatStrip stats={content.stats} eyebrow="Proof of scale & longevity" />
      ) : null}

      {content.testimonial ? (
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <TestimonialSpotlight testimonial={content.testimonial} />
        </section>
      ) : null}

      {content.partnerStrip ? (
        <PartnerPlaceholderStrip
          headline={content.partnerStrip.headline}
          partners={content.partnerStrip.partners}
          className="border-t border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/60"
        />
      ) : null}

      {/* Programs */}
      <section
        id="programs"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-accent-deep)]">
            What we do
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[color:var(--gb-text)] sm:text-3xl">
            {content.programsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--gb-text-muted)]">
            {content.programsSection.description}
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.programsSection.cards.map((c) => (
            <ProgramCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {content.midCta ? (
        <section className="border-y border-[color:var(--gb-border)] bg-[#6d6e71] px-4 py-16 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">{content.midCta.title}</h2>
            {content.midCta.description ? (
              <p className="mt-4 text-base leading-relaxed text-neutral-200">{content.midCta.description}</p>
            ) : null}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={content.midCta.primary.href}
                className="inline-flex min-h-[44px] min-w-[10rem] items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[color:var(--gb-accent-deep)]"
              >
                {content.midCta.primary.label}
              </Link>
              {content.midCta.secondary ? (
                <Link
                  href={content.midCta.secondary.href}
                  className="inline-flex min-h-[44px] min-w-[10rem] items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {content.midCta.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {content.faqSection ? (
        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <FaqAccordion
            id="home-faq-heading"
            title={content.faqSection.title}
            intro={
              <>
                {content.faqSection.intro}{" "}
                <Link
                  href="/faq/"
                  className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline"
                >
                  View all FAQs →
                </Link>
              </>
            }
            items={content.faqSection.items}
          />
        </section>
      ) : null}

      {content.ecosystemSection ? (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/50 p-8 sm:p-10 lg:p-12">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[color:var(--gb-text)] sm:text-3xl">
              {content.ecosystemSection.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--gb-text-muted)]">
              {content.ecosystemSection.description}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.ecosystemSection.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex h-full flex-col rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-5 shadow-sm transition hover:border-[color:var(--gb-accent)] hover:shadow-md"
                  >
                    <span className="text-sm font-bold text-[color:var(--gb-text)] group-hover:text-[color:var(--gb-accent-deep)]">
                      {link.label}
                    </span>
                    <span className="mt-2 flex-1 text-sm text-[color:var(--gb-text-muted)]">
                      {link.description}
                    </span>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wide text-[#e34d0c]">
                      Open →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
    "flex h-full flex-col rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-6 text-left shadow-sm transition hover:border-[color:var(--gb-accent)] hover:shadow-md";
  const inner = (
    <>
      <h3 className="text-lg font-bold text-[color:var(--gb-text)]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--gb-text-muted)]">
        {description}
      </p>
      <span className="mt-5 text-sm font-bold text-[color:var(--gb-accent-deep)]">
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
