import type { EventDetail } from "@/lib/event-types";
import Image from "next/image";
import Link from "next/link";

function formatRange(detail: EventDetail): string {
  try {
    const start = new Date(detail.startAt);
    const end = detail.endAt ? new Date(detail.endAt) : null;
    const tz = detail.timezone || "America/New_York";
    const dateOpts: Intl.DateTimeFormatOptions = detail.allDay
      ? { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: tz }
      : {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          timeZone: tz,
        };
    const df = new Intl.DateTimeFormat("en-US", dateOpts);
    if (!end || detail.allDay) return df.format(start);
    const timeOpts: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      timeZone: tz,
    };
    const tf = new Intl.DateTimeFormat("en-US", timeOpts);
    return `${df.format(start)} · ${tf.format(start)} – ${tf.format(end)}`;
  } catch {
    return detail.startAt;
  }
}

export function EventDetailView({ detail }: { detail: EventDetail }) {
  return (
    <article className="native-event-detail bg-white">
      <header className="border-b border-neutral-100 bg-linear-to-b from-[#f8faf3] to-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {detail.categories.length ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5a7c00]">
              {detail.categories.join(" · ")}
            </p>
          ) : null}
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-[2.35rem] md:leading-[1.15]">
            {detail.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-neutral-600 md:text-base">
            <time dateTime={detail.startAt}>{formatRange(detail)}</time>
            {detail.timezone ? (
              <span className="text-neutral-400"> ({detail.timezone.replace(/_/g, " ")})</span>
            ) : null}
          </p>
          {detail.featured ? (
            <span className="mt-4 inline-block rounded-full bg-[#96c11f] px-3 py-1 text-xs font-bold text-white">
              Featured
            </span>
          ) : null}
          {detail.excerptPlain ? (
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-700 md:text-xl">
              {detail.excerptPlain}
            </p>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        {detail.imageUrl ? (
          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
            <Image
              src={detail.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 42rem"
              priority
            />
          </div>
        ) : null}

        <section className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 md:p-8" aria-label="Event details">
          <h2 className="text-lg font-bold text-neutral-900">When &amp; where</h2>
          {detail.isVirtual ? (
            <p className="mt-3 text-neutral-700">This event is hosted online (see registration page for access details).</p>
          ) : null}
          {detail.venueLabel || detail.venue ? (
            <div className="mt-3 text-neutral-700">
              {detail.venue?.name ? <p className="font-semibold text-neutral-900">{detail.venue.name}</p> : null}
              {detail.venue?.address ? <p>{detail.venue.address}</p> : null}
              {(detail.venue?.city || detail.venue?.province || detail.venue?.zip) && (
                <p>
                  {[detail.venue.city, detail.venue.province, detail.venue.zip].filter(Boolean).join(", ")}
                </p>
              )}
              {!detail.venue?.name && detail.venueLabel ? <p>{detail.venueLabel}</p> : null}
            </div>
          ) : !detail.isVirtual ? (
            <p className="mt-3 text-sm text-neutral-500">Venue to be announced — check the registration page.</p>
          ) : null}
          {detail.cost ? (
            <p className="mt-4 text-sm font-semibold text-neutral-800">Cost: {detail.cost}</p>
          ) : null}
          {detail.ticketed.length ? (
            <p className="mt-2 text-xs text-neutral-500">
              Registration type: {detail.ticketed.join(", ")}
            </p>
          ) : null}
        </section>

        <div className="mt-10 rounded-2xl border border-[#96c11f]/45 bg-linear-to-br from-[#f4f8ea] to-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">Register or get tickets</h2>
          <p className="mt-3 text-sm text-neutral-600">
            Complete registration, tickets, or donations on the full event page for this session—all
            in one place.
          </p>
          <a
            href={detail.legacyRegistrationUrl}
            className="mt-6 inline-flex rounded-full bg-[#96c11f] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]"
            rel="noopener noreferrer"
          >
            Open registration page
          </a>
        </div>

        {detail.descriptionHtml ? (
          <section className="event-detail-body prose-event mt-14" aria-label="About this event">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">About</h2>
            <div
              className="text-[1.0625rem] leading-relaxed text-neutral-700 [&_a]:font-semibold [&_a]:text-[#5a7c00] [&_a]:underline-offset-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: detail.descriptionHtml }}
            />
          </section>
        ) : null}

        <section className="mt-16 border-t border-neutral-200 pt-10">
          <h2 className="text-lg font-bold text-neutral-900">More from Green Built Alliance</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm font-semibold text-[#5a7c00] md:flex-row md:flex-wrap md:gap-x-6">
            <li>
              <Link href="/events/" className="hover:text-[#e34d0c] hover:underline">
                All events
              </Link>
            </li>
            <li>
              <Link href="/events/continuing-education-courses/" className="hover:text-[#e34d0c] hover:underline">
                Continuing education
              </Link>
            </li>
            <li>
              <Link href="/membership/" className="hover:text-[#e34d0c] hover:underline">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/directory/" className="hover:text-[#e34d0c] hover:underline">
                Directory
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
