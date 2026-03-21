import type { LeadCaptureBlock } from "@/lib/content-types";

/** When a post omits `footerLeadCapture`, we still capture high-intent readers. */
export function defaultPostFooterLeadCapture(postPath: string, postSlug: string): LeadCaptureBlock {
  return {
    headline: "Get matched with a green professional",
    subheadline:
      "Tell us how to reach you—we’ll help you find the right member or program next step in WNC.",
    fieldLabel: "Email",
    submitLabel: "Get started",
    trustText: "Unsubscribe anytime. We never sell your address.",
    sourceSlug: `native-post-${postSlug}`,
    page: postPath,
    formName: "native-post-footer-match",
    intent: `post-footer-${postSlug}`,
  };
}
