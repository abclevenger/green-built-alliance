import { FunnelLeadCapture } from "@/components/marketing/funnel/FunnelLeadCapture";
import { NativePostGrid } from "@/components/posts/NativePostListing";
import type { LeadCaptureBlock } from "@/lib/content-types";
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
}: EditorialHubViewProps) {
  const { featured, byCategory, topicAnchors } = model;

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-linear-to-b from-[#f8faf3] to-white px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">{intro}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/find-a-pro/"
              className="inline-flex items-center justify-center rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]"
            >
              Get matched with a pro
            </Link>
            <Link
              href="/directory/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] transition hover:bg-[#96c11f]/10"
            >
              Browse the directory
            </Link>
            <Link
              href="/events/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] transition hover:bg-[#96c11f]/10"
            >
              Upcoming events
            </Link>
            <Link
              href="/green-built-homes/"
              className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f]"
            >
              Green Built Homes
            </Link>
            <Link
              href="/membership/"
              className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f]"
            >
              Membership
            </Link>
          </div>
          {footnote ? <div className="mt-8 max-w-3xl text-sm text-neutral-500">{footnote}</div> : null}
        </div>
      </section>

      {featured.length > 0 ? (
        <section className="px-4 py-14 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-neutral-900">{featuredSectionTitle}</h2>
            <p className="mt-2 text-sm text-neutral-500">{featuredSectionSubtitle}</p>
            <NativePostGrid posts={featured} variant="featured" className="mt-10" />
          </div>
        </section>
      ) : null}

      {topicAnchors.length > 1 ? (
        <section className="border-t border-neutral-100 bg-neutral-50/80 px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-700">Browse by topic</h2>
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
            className="scroll-mt-24 border-t border-neutral-200 px-4 py-12 md:py-14"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">{category}</h2>
              <NativePostGrid posts={posts} variant="compact" className="mt-8" />
            </div>
          </section>
        );
      })}

      <div id={leadSectionId}>
        <FunnelLeadCapture block={leadCapture} sectionId={leadSectionId} />
      </div>

      <section className="border-t border-neutral-200 px-4 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Get involved</h2>
          <p className="mt-3 text-neutral-600">
            Classes, directory listings, and member benefits help grow high-performance building in the region.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/find-a-pro/?intent=new-home"
              className="inline-flex rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white hover:bg-[#5a7c00]"
            >
              Find a builder near you
            </Link>
            <Link
              href="/events/continuing-education-courses/"
              className="inline-flex rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] hover:bg-[#96c11f]/10"
            >
              Continuing education
            </Link>
            <Link
              href="/directory/"
              className="inline-flex rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 hover:border-[#96c11f]"
            >
              Professional directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
