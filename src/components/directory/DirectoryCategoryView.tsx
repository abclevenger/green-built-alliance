import { FunnelLeadCapture } from "@/components/marketing/funnel/FunnelLeadCapture";
import { listNativeDirectoryCategories } from "@/content/directory/categories";
import { suggestedIntentForDirectorySlug } from "@/lib/matchmaking";
import type { LeadCaptureBlock, NativeDirectoryCategory, NativePost } from "@/lib/content-types";
import Link from "next/link";

export function DirectoryCategoryView({
  category,
  relatedPosts,
}: {
  category: NativeDirectoryCategory;
  relatedPosts: NativePost[];
}) {
  const siblings = listNativeDirectoryCategories().filter((c) => c.slug !== category.slug);
  const matchIntent = suggestedIntentForDirectorySlug(category.slug);
  const matchHref = `/find-a-pro/?intent=${encodeURIComponent(matchIntent)}`;
  const spotlightRows = [...category.spotlightListings].sort((a, b) => {
    if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
    if (Boolean(a.recommended) !== Boolean(b.recommended)) return a.recommended ? -1 : 1;
    const pa = a.listingPriority ?? 999;
    const pb = b.listingPriority ?? 999;
    return pa - pb;
  });
  const categoryLeadBlock: LeadCaptureBlock = {
    headline: "Get matched with a green professional",
    subheadline: `Tell us about your project—we’ll suggest ${category.title.toLowerCase()} and related directory paths, and follow up by email.`,
    fieldLabel: "Email",
    submitLabel: "Request a match",
    trustText: "No spam. Unsubscribe anytime.",
    sourceSlug: `directory-category-${category.slug}`,
    page: category.path,
    formName: `directory-category-${category.slug}`,
    intent: `directory-category-${category.slug}-intro`,
  };

  return (
    <div className="bg-[color:var(--gb-surface)] text-[color:var(--gb-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--gb-border)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#f4f8ea_0%,#fff_45%,#fafaf9_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-14 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--gb-text-muted)]" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#5a7c00] hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/directory/" className="hover:text-[#5a7c00] hover:underline">
                  Directory
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-neutral-800">{category.title}</li>
            </ol>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gb-accent-deep)]">
            {category.heroEyebrow} · Member platform
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl font-semibold tracking-tight text-[color:var(--gb-text)] md:text-[2.35rem] md:leading-tight">
            {category.heroHeadline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--gb-text-muted)]">{category.heroIntro}</p>
          <ul className="mt-8 max-w-3xl list-disc space-y-2 pl-5 text-[color:var(--gb-text)] marker:text-[color:var(--gb-accent)]">
            {category.valueBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-[color:var(--gb-accent)]/35 bg-[#f8faf3]/90 px-5 py-5 shadow-sm md:px-6 md:py-6">
            <p className="text-sm font-bold text-[color:var(--gb-text)]">Not sure who to call first?</p>
            <p className="mt-2 max-w-2xl text-sm text-[color:var(--gb-text-muted)]">
              Answer a few questions — we’ll suggest this category, related directory paths, and spotlights that fit
              your goal.
            </p>
            <Link
              href={matchHref}
              className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[color:var(--gb-accent-deep)]"
            >
              Run guided match
            </Link>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#member-spotlights"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[color:var(--gb-accent-deep)]"
            >
              Jump to spotlights
            </a>
            <Link
              href="/green-built-homes/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-accent)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-accent-deep)] transition hover:bg-[#96c11f]/10"
            >
              Green Built Homes
            </Link>
            <Link
              href="/membership/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)]"
            >
              Join the directory
            </Link>
            <Link
              href="/events/continuing-education-courses/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)]"
            >
              Continuing education
            </Link>
            <Link
              href="/support-our-work/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-6 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)]"
            >
              Support our work
            </Link>
          </div>
        </div>
      </section>

      <section id="member-spotlights" className="scroll-mt-24 px-4 py-14 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-[color:var(--gb-text)] md:text-3xl">
              Member spotlights
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--gb-text-muted)]">
              {/* TODO:DIR_API — Replace static spotlight roster with live directory data + pagination. */}
              Sample of members in this category. Open a profile for full legacy details (contact, logos, and longer
              bios) until native profiles ship.
            </p>
          </div>
          {spotlightRows.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12 text-center text-neutral-700">
              Listings will appear here after the directory API is connected.
            </div>
          ) : (
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {spotlightRows.map((listing) => (
                <li key={listing.href + listing.name}>
                  <article
                    className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:border-[#96c11f]/50 ${
                      listing.featured ? "border-[#96c11f]/60 ring-1 ring-[#96c11f]/25" : "border-neutral-200"
                    }`}
                  >
                    <div className="absolute right-4 top-4 flex flex-col items-end gap-1">
                      {listing.featured ? (
                        <p className="rounded-full bg-[#5a7c00] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          Featured
                        </p>
                      ) : null}
                      {listing.recommended ? (
                        <p className="rounded-full border border-[#96c11f]/60 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#5a7c00]">
                          Recommended
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pr-16">
                      {(listing.badges ?? []).map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-[#96c11f]/40 bg-[#f8faf3] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#5a7c00]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-neutral-900">
                      <Link href={listing.href} className="hover:text-[#5a7c00] hover:underline">
                        {listing.name}
                      </Link>
                    </h3>
                    {listing.organization ? (
                      <p className="mt-1 text-sm font-medium text-neutral-600">{listing.organization}</p>
                    ) : null}
                    {listing.locationHint ? (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#5a7c00]">
                        {listing.locationHint}
                      </p>
                    ) : null}
                    {listing.summary ? (
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{listing.summary}</p>
                    ) : null}
                    <Link
                      href={listing.href}
                      className="mt-5 inline-flex w-fit rounded-full bg-[color:var(--gb-accent)] px-4 py-2 text-xs font-bold text-white transition hover:bg-[color:var(--gb-accent-deep)]"
                    >
                      Open full profile
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <FunnelLeadCapture block={categoryLeadBlock} sectionId={`directory-category-${category.slug}-lead`} />

      {relatedPosts.length > 0 ? (
        <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-14 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-neutral-900">Related articles</h2>
            <p className="mt-2 text-sm text-neutral-600">Program context and building science from our native library.</p>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <li key={post.path}>
                  <article className="h-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-bold text-neutral-900">
                      <Link href={post.path} className="hover:text-[#5a7c00] hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-neutral-600">{post.excerpt}</p>
                    <Link
                      href={post.path}
                      className="mt-4 inline-block text-sm font-bold text-[#e34d0c] underline-offset-2 hover:underline"
                    >
                      Read article →
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t border-neutral-200 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl font-bold text-neutral-900">Other directory categories</h2>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Directory categories">
            {siblings.map((c) => (
              <Link
                key={c.slug}
                href={c.path}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 transition hover:border-[#96c11f] hover:text-[#5a7c00]"
              >
                {c.title}
              </Link>
            ))}
            <Link
              href="/directory/"
              className="rounded-full border border-dashed border-neutral-300 bg-[#f8faf3] px-3 py-1.5 text-sm font-medium text-[#5a7c00] hover:border-[#96c11f]"
            >
              Directory home
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
