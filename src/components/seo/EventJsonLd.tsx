import { siteSettings } from "@/content/site/settings";
import type { EventDetail } from "@/lib/event-types";
import { SITE_URL } from "@/lib/env";
import { toAbsoluteSiteUrl } from "@/lib/seo";

/** Event structured data for native `/event/...` pages. */
export function EventJsonLd({ detail, path }: { detail: EventDetail; path: string }) {
  const base = SITE_URL.replace(/\/$/, "");
  const url = toAbsoluteSiteUrl(path);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: detail.title,
    description: detail.excerptPlain?.trim() || detail.title,
    startDate: detail.startAt,
    ...(detail.endAt ? { endDate: detail.endAt } : {}),
    eventAttendanceMode: detail.isVirtual
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    organizer: {
      "@type": "Organization",
      name: siteSettings.siteName,
      url: `${base}/`,
    },
    url,
  };

  if (detail.imageUrl) {
    const img = detail.imageUrl.startsWith("http") ? detail.imageUrl : toAbsoluteSiteUrl(detail.imageUrl);
    schema.image = [img];
  }

  if (!detail.isVirtual && detail.venue?.name) {
    schema.location = {
      "@type": "Place",
      name: detail.venue.name,
      address: {
        "@type": "PostalAddress",
        ...(detail.venue.address ? { streetAddress: detail.venue.address } : {}),
        ...(detail.venue.city ? { addressLocality: detail.venue.city } : {}),
        ...(detail.venue.province ? { addressRegion: detail.venue.province } : {}),
        ...(detail.venue.zip ? { postalCode: detail.venue.zip } : {}),
        addressCountry: "US",
      },
    };
  } else if (detail.isVirtual) {
    schema.location = {
      "@type": "VirtualLocation",
      url: detail.legacyRegistrationUrl || url,
    };
  } else if (detail.venueLabel) {
    schema.location = { "@type": "Place", name: detail.venueLabel };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
