import { FunnelLeadCapture } from "@/components/marketing/funnel/FunnelLeadCapture";
import { ImpactStatStrip } from "@/components/trust/ImpactStatStrip";
import { NativePostGrid } from "@/components/posts/NativePostListing";
import type { HomeStat, LeadCaptureBlock } from "@/lib/content-types";
import type { NativePostHubModel } from "@/content/site/native-post-hub-model";
import type { ReactNode } from "react";
import Link from "next/link";

export type EditorialHubViewProps = {
  model: NativePostHubModel;
  leadCapture: LeadCaptureBlock;
  /** DOM id for the lead section anchor */
  leadSectionId: string;
  eyebrow: string;
  headline: string;
  intro: string;
  /** Optional note under primary CTAs (links, magazine context, etc.) */
  footnote?: ReactNode;
  /** Section title above featured grid */
  featuredSectionTitle?: string;
  featuredSectionSubtitle?: string;
  /** Optional impact row under hero (shared editorial credibility) */
  impactStrip?: HomeStat[];
  impactStripEyebrow?: string;
};

export function EditorialHubView({
  model,
  leadCapture,
  leadSectionId,
  eyebrow,
  headline,
  intro,
  footnote,
  featuredSectionTitle = "Featured",
  featuredSectionSubtitle = "Curated picks from the native article set.",
  impactStrip,
  impactStripEyebrow = "Why this library matters",
}: EditorialHubViewProps) {
  const { featured, byCategory, topicAnchors } = model;

  return (
    <div className="bg-[color:var(--gb-surface)] text-[color:var(--gb-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--gb-border)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#f4f8ea_0%,#fff_50%,#fafaf9_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-accent-deep)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl font-semibold tracking-tight text-[color:var(--gb-text)] md:text-[2.35rem] md:leading-tight">
            {headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--gb-text-muted)]">{intro}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/find-a-pro/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[color:var(--gb-accent-deep)]"
            >
              Start a guided match
            </Link>
            <Link
              href="/directory/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-accent)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-accent-deep)] transition hover:bg-[#96c11f]/10"
            >
              Find a verified pro
            </Link>
            <Link
              href="/events/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)]"
            >
              See events & CE
            </Link>
            <Link
              href="/green-built-homes/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)]"
            >
              Green Built Homes
            </Link>
            <Link
              href="/membership/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)]"
            >
              Membership & visibility
            </Link>
          </div>
          {footnote ? (
            <div className="mt-10 max-w-3xl border-l-4 border-[color:var(--gb-accent)]/50 pl-5 text-sm text-[color:var(--gb-text-muted)]">
              {footnote}
            </div>
          ) : null}
        </div>
      </section>

      {impactStrip && impactStrip.length > 0 ? (
        <ImpactStatStrip stats={impactStrip} eyebrow={impactStripEyebrow} />
      ) : null}

      {featured.length > 0 ? (
        <section className="px-4 py-14 md:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-[color:var(--gb-text)] md:text-3xl">
                {featuredSectionTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--gb-text-muted)]">
                {featuredSectionSubtitle}
              </p>
            </div>
            <NativePostGrid posts={featured} variant="featured" className="mt-10" />
          </div>
        </section>
      ) : null}

      {topicAnchors.length > 1 ? (
        <section className="border-t border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/80 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--gb-text-muted)]">
              Browse by topic
            </h2>
            <nav className="mt-4 flex flex-wrap gap-2" aria-label="Article topics">
              {topicAnchors.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 transition hover:border-[#96c11f] hover:text-[#5a7c00]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>
      ) : null}

      {byCategory.map(({ category, posts }) => {
        const anchor = topicAnchors.find((t) => t.label === category)?.id ?? `topic-${category}`;
        return (
          <section
            key={category}
            id={anchor}
            className="scroll-mt-24 border-t border-[color:var(--gb-border)] px-4 py-12 md:py-14 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="border-l-4 border-[color:var(--gb-accent)] pl-4 font-serif text-xl font-semibold text-[color:var(--gb-text)] md:text-2xl">
                {category}
              </h2>
              <NativePostGrid posts={posts} variant="compact" className="mt-8" />
            </div>
          </section>
        );
      })}

      <section className="border-t border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/40 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-2xl font-semibold text-[color:var(--gb-text)]">
            After you read — take the next step
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[color:var(--gb-text-muted)]">
            Articles are entry points. Use matches, directory categories, and programs to keep momentum.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/find-a-pro/", label: "Guided match", sub: "Project intent → suggested pros" },
              { href: "/directory/", label: "Directory", sub: "Browse by trade & specialty" },
              { href: "/energysaversnetwork/", label: "Energy Savers", sub: "Lower bills, better buildings" },
              { href: "/support-our-work/", label: "Support", sub: "Fund the mission" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-5 shadow-sm transition hover:border-[color:var(--gb-accent)] hover:shadow-md"
                >
                  <span className="text-sm font-bold text-[color:var(--gb-text)]">{item.label}</span>
                  <span className="mt-1 flex-1 text-xs text-[color:var(--gb-text-muted)]">{item.sub}</span>
                  <span className="mt-4 text-xs font-bold uppercase tracking-wide text-[#e34d0c]">Go →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div id={leadSectionId}>
        <FunnelLeadCapture block={leadCapture} sectionId={leadSectionId} />
      </div>

      <section className="border-t border-[color:var(--gb-border)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-[color:var(--gb-text)]">Train, list, or partner</h2>
          <p className="mt-3 text-[color:var(--gb-text-muted)]">
            Continuing education, directory visibility, and sponsorships keep the regional network strong.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/find-a-pro/?intent=new-home"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white hover:bg-[color:var(--gb-accent-deep)]"
            >
              Match me with a builder
            </Link>
            <Link
              href="/events/continuing-education-courses/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-accent)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-accent-deep)] hover:bg-[#96c11f]/10"
            >
              Book continuing education
            </Link>
            <Link
              href="/directory/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] hover:border-[color:var(--gb-accent)]"
            >
              Explore the directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
