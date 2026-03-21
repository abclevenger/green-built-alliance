import { EventsIndexView } from "@/components/events/EventsIndexView";
import { eventsIndexSeo } from "@/content/site/events-hub";
import { pageMetadata } from "@/lib/seo";
import { fetchUpcomingEventSummaries } from "@/lib/tribe-events";
import type { Metadata } from "next";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(eventsIndexSeo, { path: "/events/" });
}

/** Native events hub — data via Tribe REST adapter; `/event/...` singles stay on catch-all. */
export default async function EventsIndexPage() {
  const events = await fetchUpcomingEventSummaries(12);
  return <EventsIndexView events={events} />;
}
