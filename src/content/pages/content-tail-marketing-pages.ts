import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativeMarketingPage } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroReadyLogo");

/**
 * Utility / feedback pages that were standalone WordPress routes — native shell without embedded legacy forms.
 */
export const clientSatisfactionSurveyPage: NativeMarketingPage = {
  kind: "sections",
  path: "/client-satisfaction-survey/",
  seo: {
    title: "Client Satisfaction & Feedback | Green Built Alliance",
    description:
      "Share feedback on Green Built Alliance programs and services—we use responses to improve education, certification support, and member experience in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Feedback",
      title: "We value your input",
      subtitle:
        "Your experience with our programs, events, and staff helps us prioritize improvements as we refresh how we collect feedback online.",
    },
    {
      type: "prose",
      heading: "How to reach us",
      paragraphs: [
        "If you were directed here after a class, certification project, or member service, thank you for taking time to respond. Dedicated survey links are sometimes shared by email or event follow-up when a formal instrument is active.",
        "For general questions, partnership ideas, or issues that need a person rather than a form, use the contact pathways on our About page or connect through membership and event staff you already work with.",
      ],
    },
    {
      type: "bulletList",
      title: "What helps most",
      items: [
        "Which program or event you participated in (and approximate date)",
        "What worked well—and what felt confusing or hard to use",
        "Whether you would recommend the experience to a colleague or neighbor",
      ],
    },
    {
      type: "cta",
      title: "Connect",
      body: "Staff monitor messages through standard organizational channels.",
      primary: { href: "/about-green-built-alliance/", label: "About & contact" },
      secondary: { href: "/membership/", label: "Membership" },
    },
  ],
};

export const contentTailMarketingPages: NativeMarketingPage[] = [clientSatisfactionSurveyPage];
