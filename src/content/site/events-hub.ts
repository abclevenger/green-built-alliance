import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { LeadCaptureBlock, SeoFields } from "@/lib/content-types";

/** Native `/events/` hub — static copy + SEO (no WordPress HTML). */
export const eventsIndexSeo: SeoFields = {
  title: "Events | Green Built Alliance",
  description:
    "Browse workshops, community gatherings, and continuing education from Green Built Alliance in Western North Carolina. See upcoming dates and register on each event page.",
  ogImage: mediaUrl("ogGbhNetZeroReadyLogo"),
};

export const eventsIndexLeadCapture: LeadCaptureBlock = {
  headline: "Event & class alerts",
  subheadline:
    "Get notified when we publish new trainings, community events, or CE dates—unsubscribe anytime.",
  fieldLabel: "Email",
  fieldPlaceholder: "you@example.com",
  fieldName: "email",
  submitLabel: "Notify me",
  trustText: "We respect your inbox. For CE-specific updates, also visit Continuing education.",
  sourceSlug: "native-events-index",
  page: "/events/",
  formName: "events-hub-alerts",
  intent: "events-hub-alerts",
};
