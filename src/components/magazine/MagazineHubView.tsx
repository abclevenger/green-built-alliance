import type { MagazineHubContent } from "@/content/site/magazine-hub";
import { USE_LOCAL_SITE_MEDIA } from "@/lib/native-media";
import Image from "next/image";
import Link from "next/link";

export function MagazineHubView({ content }: { content: MagazineHubContent }) {
  const current = content.editions.find((e) => e.isCurrent) ?? content.editions[0];
  const archivedEditions = current ? content.editions.filter((e) => e !== current) : content.editions;

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-linear-to-b from-[#f0f4e8] to-white px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#5a7c00] hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-neutral-800">Magazine</li>
            </ol>
          </nav>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">
            {content.heroEyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">{content.heroSubtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {current ? (
              <a
                href={current.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]"
              >
                Download current PDF
              </a>
            ) : null}
            <Link
              href="/directory/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] transition hover:bg-[#96c11f]/10"
            >
              Browse the directory
            </Link>
            <Link
              href="/membership/"
              className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f]"
            >
              Get listed as a member
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white px-4 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {content.distributionStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#96c11f]/25 bg-[#f8faf3] px-6 py-5 text-center"
            >
              <p className="text-2xl font-extrabold text-[#5a7c00]">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-neutral-700">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {current ? (
        <section className="px-4 py-14 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#e34d0c]">Current edition</p>
            <h2 className="mt-2 text-2xl font-bold text-neutral-900 md:text-3xl">
              {current.label} — {current.season}
            </h2>
            <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
              <a
                href={current.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md transition hover:border-[#96c11f]/60"
              >
                <Image
                  src={current.coverImageUrl}
                  alt={current.coverAlt}
                  width={576}
                  height={711}
                  className="h-auto w-full object-cover transition group-hover:opacity-95"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  unoptimized={USE_LOCAL_SITE_MEDIA}
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-[#96c11f] px-4 py-2 text-xs font-bold text-white shadow">
                  Open PDF
                </span>
              </a>
              <div>
                <p className="text-neutral-700">
                  The annual guide combines editorial features with the print member directory. Use the PDF for
                  the full layout, ads, and listings as they appeared in publication.
                </p>
                <p className="mt-4 text-sm text-neutral-500">
                  {/* TODO:MAG_ASSETS — Self-host PDFs and covers for offline WP shutdown. */}
                  Digital file opens in a new tab (hosted on legacy media URLs until migrated).
                </p>
                <a
                  href={current.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white hover:bg-[#5a7c00]"
                >
                  Download {current.label} PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">{content.productKicker}</p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 md:text-3xl">{content.productTitle}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">{content.productBody}</p>
          <h3 className="mt-12 text-lg font-bold text-neutral-900">What to expect inside</h3>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-neutral-700">
            {content.whatToExpect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">{content.historyHeading}</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-neutral-600">
            {content.historyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#f8faf3] px-4 py-12 md:py-14">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#96c11f]/30 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">{content.contribute.title}</h2>
          <p className="mt-4 text-neutral-600">{content.contribute.body}</p>
          <Link
            href={content.contribute.cta.href}
            className="mt-8 inline-flex rounded-full bg-[#e34d0c] px-6 py-3 text-sm font-bold text-white hover:bg-[#c43d00]"
          >
            {content.contribute.cta.label}
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">{content.archivesHeading}</h2>
          <p className="mt-4 max-w-3xl text-neutral-600">{content.archivesIntro}</p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {archivedEditions.map((ed) => (
              <li key={ed.label}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-[#96c11f]/50">
                  <a
                    href={ed.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-4/5 bg-neutral-100"
                  >
                    <Image
                      src={ed.coverImageUrl}
                      alt={ed.coverAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      unoptimized={USE_LOCAL_SITE_MEDIA}
                    />
                  </a>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-neutral-900">{ed.label}</h3>
                    <p className="text-sm text-neutral-500">{ed.season}</p>
                    <a
                      href={ed.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit rounded-full bg-[#96c11f] px-4 py-2 text-xs font-bold text-white hover:bg-[#5a7c00]"
                    >
                      Download PDF
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-neutral-900">Explore related programs</h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-600">
            Articles and blog posts live on{" "}
            <Link href="/green-building-news/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
              Green Building News
            </Link>{" "}
            and{" "}
            <Link href="/news/" className="font-semibold text-[#e34d0c] underline-offset-2 hover:underline">
              News
            </Link>
            —this page is the annual directory product, not the rolling article archive.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-[#96c11f]"
                >
                  <span className="text-base font-bold text-neutral-900">{link.label}</span>
                  <span className="mt-2 text-sm text-neutral-600">{link.description}</span>
                  <span className="mt-4 text-sm font-bold text-[#e34d0c]">Go →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
