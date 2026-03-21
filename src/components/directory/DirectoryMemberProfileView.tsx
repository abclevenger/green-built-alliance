import { listNativeDirectoryCategories } from "@/content/directory/categories";
import type { NativeDirectoryMemberProfile, NativePost } from "@/lib/content-types";
import Link from "next/link";

export function DirectoryMemberProfileView({
  profile,
  relatedPosts,
}: {
  profile: NativeDirectoryMemberProfile;
  relatedPosts: NativePost[];
}) {
  const allCats = listNativeDirectoryCategories();
  const linkedCategories = profile.directoryCategorySlugs
    .map((slug) => allCats.find((c) => c.slug === slug))
    .filter((c): c is (typeof allCats)[number] => c != null);

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
              <li className="font-medium text-neutral-800">{profile.organizationName}</li>
            </ol>
          </nav>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">Member profile</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            {profile.organizationName}
          </h1>
          <p className="mt-2 text-lg font-semibold text-neutral-700">{profile.roleLabel}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {profile.featured ? (
              <span className="inline-flex rounded-full bg-[#5a7c00] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Featured
              </span>
            ) : null}
            {(profile.badges ?? []).map((b) => (
              <span
                key={b}
                className="inline-flex rounded-full border border-[#96c11f]/50 bg-[#f8faf3] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#5a7c00]"
              >
                {b}
              </span>
            ))}
            {profile.memberLevel ? (
              <span className="inline-flex rounded-full bg-[#f8faf3] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#5a7c00]">
                {profile.memberLevel}
              </span>
            ) : null}
          </div>
          {profile.location ? (
            <p className="mt-4 text-sm font-medium text-neutral-600">{profile.location}</p>
          ) : null}
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">{profile.summary}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {profile.phone ? (
              <a
                href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center justify-center rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]"
              >
                Call {profile.phone}
              </a>
            ) : null}
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] transition hover:bg-[#96c11f]/10"
              >
                Email
              </a>
            ) : null}
            {profile.website ? (
              <a
                href={profile.website.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f]"
              >
                Website{profile.website.label ? ` (${profile.website.label})` : ""}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">Services &amp; specialties</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.specialties.map((s) => (
              <li
                key={s}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {linkedCategories.length > 0 ? (
        <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-neutral-900">Related directory categories</h2>
            <nav className="mt-4 flex flex-wrap gap-2" aria-label="Directory categories">
              {linkedCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={c.path}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 transition hover:border-[#96c11f] hover:text-[#5a7c00]"
                >
                  {c.title}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      ) : null}

      {relatedPosts.length > 0 ? (
        <section className="border-t border-neutral-200 px-4 py-12 md:py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-neutral-900">Related articles &amp; programs</h2>
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
                      Read →
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t border-neutral-200 bg-[#f8faf3] px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-neutral-900">Grow with the Alliance</h2>
          <p className="mt-3 text-neutral-600">
            Members get directory placement, class pricing, and a regional network behind their work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/membership/"
              className="inline-flex rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white hover:bg-[#5a7c00]"
            >
              Membership
            </Link>
            <Link
              href="/events/continuing-education-courses/"
              className="inline-flex rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 hover:border-[#96c11f]"
            >
              Continuing education
            </Link>
            <Link
              href="/support-our-work/"
              className="inline-flex rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 hover:border-[#96c11f]"
            >
              Support our work
            </Link>
          </div>
          <p className="mt-8 text-xs text-neutral-500">
            {/* TODO:DIR_API — Full profile sync, logos, and extended bios from MemberPress. */}
            Profile data is maintained in the native migration registry; verify contact details before major decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
