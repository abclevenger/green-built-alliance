import { listNativeDirectoryCategories } from "@/content/directory/categories";
import type { NativeDirectoryCategory, NativePost } from "@/lib/content-types";
import Link from "next/link";

export function DirectoryCategoryView({
  category,
  relatedPosts,
}: {
  category: NativeDirectoryCategory;
  relatedPosts: NativePost[];
}) {
  const siblings = listNativeDirectoryCategories().filter((c) => c.slug !== category.slug);

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-linear-to-b from-[#f8faf3] to-white px-4 py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
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
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">
            {category.heroEyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            {category.heroHeadline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">{category.heroIntro}</p>
          <ul className="mt-8 max-w-3xl list-disc space-y-2 pl-5 text-neutral-700">
            {category.valueBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/membership/"
              className="inline-flex items-center justify-center rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]"
            >
              Join the directory
            </Link>
            <Link
              href="/events/continuing-education-courses/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] transition hover:bg-[#96c11f]/10"
            >
              Continuing education
            </Link>
            <Link
              href="/support-our-work/"
              className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f]"
            >
              Support our work
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-neutral-900">Member spotlights</h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-600">
            {/* TODO:DIR_API — Replace static spotlight roster with live directory data + pagination. */}
            Sample of members in this category. Open a profile for full legacy details (contact, logos, and
            longer bios) until native profiles ship.
          </p>
          {category.spotlightListings.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12 text-center text-neutral-700">
              Listings will appear here after the directory API is connected.
            </div>
          ) : (
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.spotlightListings.map((listing) => (
                <li key={listing.href + listing.name}>
                  <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-[#96c11f]/50">
                    <h3 className="text-lg font-bold text-neutral-900">
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
                      className="mt-5 inline-flex w-fit rounded-full bg-[#96c11f] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#5a7c00]"
                    >
                      View profile
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

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
