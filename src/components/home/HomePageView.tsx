import { FaqAccordion } from "@/components/FaqAccordion";
import { HomePathSelector } from "@/components/home/HomePathSelector";
import { HomeStartHelper } from "@/components/home/HomeStartHelper";
import type { HomeContent } from "@/lib/content-types";
import type { ReactNode } from "react";
import { ImpactStatStrip } from "@/components/trust/ImpactStatStrip";
import { CollaboratorStrip } from "@/components/trust/CollaboratorStrip";
import { TestimonialSpotlight } from "@/components/trust/TestimonialSpotlight";
import Image from "next/image";
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
      <section
        className="relative overflow-hidden border-b border-[color:var(--gb-border)]"
        aria-label="Introduction"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#f4f8ea_0%,#fff_45%,#fafaf9_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-20 md:pt-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="mx-auto max-w-5xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-accent-deep)]">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-5 font-serif text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-[color:var(--gb-text)] sm:text-4xl md:text-[2.65rem]">
                {content.hero.title}
              </h1>
              {content.hero.valueLine ? (
                <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[color:var(--gb-text)] sm:text-lg lg:mx-0">
                  {content.hero.valueLine}
                </p>
              ) : null}
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--gb-text-muted)] lg:mx-0 lg:max-w-xl">
                {content.hero.description}
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
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
              <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 text-left text-sm text-[color:var(--gb-text-muted)] sm:mx-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:text-center lg:mx-0 lg:justify-start lg:text-left">
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
              {content.hero.belowCtaLink ? (
                <p className="mt-8">
                  <a href={content.hero.belowCtaLink.href} className={tertiaryLink}>
                    {content.hero.belowCtaLink.label}
                  </a>
                </p>
              ) : null}
            </div>
            {content.hero.heroImage ? (
              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-[color:var(--gb-border)] shadow-md lg:mx-0 lg:max-w-none">
                <Image
                  src={content.hero.heroImage.src}
                  alt={content.hero.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {content.startHelper ? (
        <div className="border-b border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/30 py-12 sm:py-14">
          <HomeStartHelper title={content.startHelper.title} intro={content.startHelper.intro} />
        </div>
      ) : null}

      {/* Pathways — interactive tabs + panel */}
      <section
        id="choose-path"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
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
        <HomePathSelector pillars={content.pillars} />
        <p className="mt-8 text-center text-sm text-[color:var(--gb-text-muted)]">
          <span className="font-semibold text-[color:var(--gb-text)]">Direct links:</span>{" "}
          {content.pillars.map((p, i) => (
            <span key={p.href}>
              {i > 0 ? " · " : null}
              <Link
                href={p.href}
                className="font-medium text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline"
              >
                {p.audienceLabel ?? p.title}
              </Link>
            </span>
          ))}
        </p>
      </section>

      {content.stats && content.stats.length > 0 ? (
        <ImpactStatStrip stats={content.stats} eyebrow={content.statsEyebrow} />
      ) : null}

      {content.credibilityBlock ? (
        <section
          className="mx-auto max-w-3xl border-t border-[color:var(--gb-border)] px-4 py-12 sm:px-6 lg:px-8"
          aria-labelledby="home-credibility-heading"
        >
          <h2
            id="home-credibility-heading"
            className="font-serif text-xl font-semibold text-[color:var(--gb-text)] sm:text-2xl"
          >
            {content.credibilityBlock.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--gb-text-muted)]">
            {content.credibilityBlock.body}
          </p>
        </section>
      ) : null}

      {content.testimonial ? (
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <TestimonialSpotlight testimonial={content.testimonial} />
        </section>
      ) : null}

      {content.communityImagery ? (
        <section
          className="border-t border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/30 px-4 py-14 sm:px-6 lg:px-8"
          aria-labelledby="home-community-imagery-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="home-community-imagery-heading"
              className="text-center font-serif text-2xl font-semibold text-[color:var(--gb-text)] sm:text-3xl"
            >
              {content.communityImagery.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[color:var(--gb-text-muted)]">
              {content.communityImagery.intro}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.communityImagery.photos.map((photo) => (
                <li key={photo.src} className="overflow-hidden rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] shadow-sm">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </li>
              ))}
            </ul>
            {content.communityImagery.memberPortraits?.length ? (
              <div className="mt-12 border-t border-[color:var(--gb-border)] pt-10">
                <p className="text-center text-sm font-semibold text-[color:var(--gb-text)]">
                  People in our network
                </p>
                <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-[color:var(--gb-text-muted)]">
                  Faces from member outreach and programs—find pros and stories in the{" "}
                  <Link href="/directory/" className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline">
                    directory
                  </Link>{" "}
                  and{" "}
                  <Link href="/find-a-pro/" className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline">
                    guided match
                  </Link>
                  .
                </p>
                <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-6 sm:max-w-none sm:gap-8">
                  {content.communityImagery.memberPortraits.map((p) => (
                    <li key={p.src}>
                      <div className="relative size-24 overflow-hidden rounded-full border-2 border-[color:var(--gb-border)] shadow-sm sm:size-28">
                        <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="112px" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {content.partnerStrip ? (
        <CollaboratorStrip
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
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-[color:var(--gb-text)] sm:text-3xl">
            {content.programsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--gb-text-muted)]">
            {content.programsSection.description}
          </p>
        </div>
        <div className="mt-14 grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
                className="inline-flex min-h-[44px] min-w-[10rem] items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[color:var(--gb-accent-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {content.midCta.primary.label}
              </Link>
              {content.midCta.secondary ? (
                <Link
                  href={content.midCta.secondary.href}
                  className="inline-flex min-h-[44px] min-w-[10rem] items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                  Full FAQ →
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
                    className="group flex h-full flex-col rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-5 shadow-sm transition hover:border-[color:var(--gb-accent)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]"
                  >
                    <span className="text-sm font-bold text-[color:var(--gb-text)] group-hover:text-[color:var(--gb-accent-deep)]">
                      {link.label}
                    </span>
                    <span className="mt-2 flex-1 text-sm text-[color:var(--gb-text-muted)]">
                      {link.description}
                    </span>
                    <span className="mt-4 text-sm font-bold text-[#e34d0c]">
                      {link.ctaLabel ?? "Continue →"}
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
  ctaLabel,
}: {
  href: string;
  title: string;
  description: string;
  external?: boolean;
  ctaLabel?: string;
}) {
  const className =
    "flex h-full flex-col rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-6 text-left shadow-sm transition hover:border-[color:var(--gb-accent)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]";
  const actionLabel =
    ctaLabel ?? (external ? "Visit site →" : "See details →");
  const inner = (
    <>
      <h3 className="text-lg font-bold text-[color:var(--gb-text)]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--gb-text-muted)]">
        {description}
      </p>
      <span className="mt-5 text-sm font-bold text-[color:var(--gb-accent-deep)]">{actionLabel}</span>
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        className={className}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`${title} (opens in new tab)`}
      >
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
