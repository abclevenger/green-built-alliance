import { FunnelLeadCapture } from "@/components/marketing/funnel/FunnelLeadCapture";
import { eventsIndexLeadCapture } from "@/content/site/events-hub";
import type { ReactNode } from "react";
import type { EventSummary } from "@/lib/event-types";
import { isNativeRoutableEventUrl, nativeEventPathFromPermalink } from "@/lib/event-links";
import Image from "next/image";
import Link from "next/link";

function formatWhen(ev: EventSummary): string {
  try {
    const start = new Date(ev.startAt);
    const opts: Intl.DateTimeFormatOptions = ev.allDay
      ? {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: "America/New_York",
        }
      : {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/New_York",
        };
    return new Intl.DateTimeFormat("en-US", opts).format(start);
  } catch {
    return ev.startAt;
  }
}

function EventCardLink({
  internal,
  href,
  className,
  children,
}: {
  internal: boolean;
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (internal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} rel="noopener noreferrer">
      {children}
    </a>
  );
}

function EventCard({ ev }: { ev: EventSummary }) {
  const href = nativeEventPathFromPermalink(ev.permalink);
  const internal = isNativeRoutableEventUrl(ev.permalink);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-[#96c11f]/60 hover:shadow-md">
      <EventCardLink internal={internal} href={href} className="relative block aspect-video bg-neutral-100">
        {ev.imageUrl ? (
          <Image
            src={ev.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-[#f8faf3] to-neutral-100 text-sm font-semibold text-[#5a7c00]">
            Green Built Alliance
          </div>
        )}
        {ev.featured ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#96c11f] px-2.5 py-0.5 text-xs font-bold text-white shadow">
            Featured
          </span>
        ) : null}
      </EventCardLink>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs font-semibold uppercase tracking-wide text-[#5a7c00]">
          {formatWhen(ev)}
        </time>
        <h2 className="mt-2 text-lg font-bold leading-snug text-neutral-900">
          <EventCardLink internal={internal} href={href} className="hover:text-[#5a7c00] hover:underline">
            {ev.title}
          </EventCardLink>
        </h2>
        {ev.excerpt ? <p className="mt-2 line-clamp-3 text-sm text-neutral-600">{ev.excerpt}</p> : null}
        {ev.venueLabel ? (
          <p className="mt-3 text-xs text-neutral-500">{ev.venueLabel}</p>
        ) : null}
        {ev.cost ? <p className="mt-1 text-xs font-medium text-neutral-700">{ev.cost}</p> : null}
        <div className="mt-4 flex flex-wrap gap-2">
          <EventCardLink
            internal={internal}
            href={href}
            className="inline-flex rounded-full bg-[#96c11f] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#5a7c00]"
          >
            View event
          </EventCardLink>
        </div>
      </div>
    </article>
  );
}

export function EventsIndexView({ events }: { events: EventSummary[] }) {
  const featured = events.filter((e) => e.featured);
  const primary = featured.length ? featured : events.slice(0, 3);
  const secondary = featured.length ? events.filter((e) => !e.featured) : events.slice(3);

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-linear-to-b from-[#f8faf3] to-white px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">Events</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            Workshops, CE &amp; Community Gatherings
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
            This is the native events hub for Green Built Alliance. Upcoming listings are loaded from our
            existing calendar (The Events Calendar).{" "}
            <strong className="font-semibold text-neutral-800">
              Open any event to register, RSVP, or buy tickets
            </strong>{" "}
            on the legacy event page—behavior there is unchanged.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/events/continuing-education-courses/"
              className="inline-flex items-center justify-center rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]"
            >
              Continuing education hub
            </Link>
            <a
              href="#events-alerts"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] transition hover:bg-[#96c11f]/10"
            >
              Get event alerts
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 rounded-2xl border border-[#96c11f]/35 bg-[#f8faf3] p-6 md:p-8">
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">Continuing education</h2>
            <p className="mt-3 max-w-3xl text-neutral-700">
              Licensed pros: use the CE hub for how credits work regionally, then browse the calendar
              below for dated sessions.
            </p>
            <Link
              href="/events/continuing-education-courses/"
              className="mt-5 inline-flex font-bold text-[#e34d0c] underline-offset-2 hover:underline"
            >
              Go to Continuing education courses →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900">
            {featured.length ? "Featured & upcoming" : "Upcoming on the calendar"}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            {/* TODO:WP_EVENTS — Swap `fetchUpcomingEventSummaries` source when events are native. */}
            Data source: Tribe REST (headless read). Links open legacy event URLs.
          </p>

          {primary.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12 text-center">
              <p className="text-lg font-semibold text-neutral-800">No upcoming events in this feed</p>
              <p className="mt-2 text-sm text-neutral-600">
                New dates will appear here after they are published. You can still explore continuing
                education resources or sign up for alerts.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/events/continuing-education-courses/"
                  className="inline-flex rounded-full bg-[#96c11f] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#5a7c00]"
                >
                  Continuing education
                </Link>
                <Link
                  href="/membership/"
                  className="inline-flex rounded-full border-2 border-neutral-300 px-5 py-2.5 text-sm font-bold text-neutral-800 hover:border-[#96c11f]"
                >
                  Membership
                </Link>
              </div>
            </div>
          ) : (
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {primary.map((ev) => (
                <li key={ev.id}>
                  <EventCard ev={ev} />
                </li>
              ))}
            </ul>
          )}

          {secondary.length > 0 ? (
            <>
              <h3 className="mt-16 text-xl font-bold text-neutral-900">More upcoming</h3>
              <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {secondary.map((ev) => (
                  <li key={ev.id}>
                    <EventCard ev={ev} />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </section>

      <div id="events-alerts">
        <FunnelLeadCapture block={eventsIndexLeadCapture} sectionId="events-alerts" />
      </div>

      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Support this programming</h2>
          <p className="mt-3 text-neutral-600">
            Donations and member dues keep classes and community events accessible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/support-our-work/"
              className="inline-flex rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white hover:bg-[#5a7c00]"
            >
              Support our work
            </Link>
            <Link
              href="/directory/"
              className="inline-flex rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 hover:border-[#96c11f]"
            >
              Find a professional
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
