import { mediaUrl } from "@/content/assets/native-media-catalog";
import type { NativeMarketingPage } from "@/lib/content-types";

const og = mediaUrl("ogGbhNetZeroLogo");

/**
 * Legal and lightweight utility pages (no WordPress HTML).
 * TODO:LEGAL — Have counsel review privacy/terms copy before treating as authoritative.
 */
export const privacyPolicyPage: NativeMarketingPage = {
  kind: "sections",
  path: "/privacy-policy/",
  seo: {
    title: "Privacy Policy | Green Built Alliance",
    description:
      "How Green Built Alliance handles information when you use our website, forms, and programs in Western North Carolina.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Legal",
      title: "Privacy policy",
      subtitle:
        "We respect your privacy. This page explains, in plain language, what we collect through this site and how we use it.",
    },
    {
      type: "prose",
      heading: "Who we are",
      paragraphs: [
        "Green Built Alliance is a nonprofit organization based in Western North Carolina. This policy applies to information collected through greenbuilt.org and related digital tools we operate.",
        "If you have questions about this policy or your data, contact us using the email or phone listed on our contact channels.",
      ],
    },
    {
      type: "prose",
      heading: "Information we may collect",
      paragraphs: [
        "Depending on how you interact with us, we may collect information you choose to provide—such as name, email address, phone number, organization, or project details—when you sign up for updates, register for events, submit forms, or become a member.",
        "Like most websites, our servers and analytics tools may automatically log technical data such as browser type, device type, approximate location, referring URLs, and pages viewed. We use this information to understand how people use the site and to improve content and performance.",
      ],
    },
    {
      type: "bulletList",
      title: "How we use information",
      items: [
        "Respond to inquiries and provide program, membership, or event support",
        "Send newsletters or updates when you have opted in",
        "Process donations, memberships, or registrations where applicable",
        "Improve site security, accessibility, and usability",
        "Comply with law or protect the rights and safety of our community",
      ],
    },
    {
      type: "prose",
      heading: "Cookies and similar technologies",
      paragraphs: [
        "We may use cookies or similar technologies to remember preferences, measure traffic, or support embedded tools from trusted vendors. You can control cookies through your browser settings; disabling cookies may limit some features.",
      ],
    },
    {
      type: "prose",
      heading: "Sharing",
      paragraphs: [
        "We do not sell your personal information. We may share data with service providers who help us host the site, send email, process payments, or run programs—under agreements that limit use to providing those services.",
        "We may disclose information if required by law or to protect Green Built Alliance, our members, or the public.",
      ],
    },
    {
      type: "prose",
      heading: "Retention",
      paragraphs: [
        "We keep information only as long as needed for the purposes above, unless a longer period is required for legal, accounting, or operational reasons.",
      ],
    },
    {
      type: "prose",
      heading: "Your choices",
      paragraphs: [
        "You may unsubscribe from marketing emails using the link in those messages. You may also contact us to ask about access, correction, or deletion of personal information, subject to applicable law and legitimate business needs.",
      ],
    },
    {
      type: "prose",
      heading: "Children’s privacy",
      paragraphs: [
        "Our site is not directed to children under 13, and we do not knowingly collect personal information from them.",
      ],
    },
    {
      type: "prose",
      heading: "Updates",
      paragraphs: [
        "We may update this policy from time to time. The “last updated” note in our site footer or this page should reflect substantive changes when we make them.",
      ],
    },
    {
      type: "cta",
      title: "Questions?",
      body: "Reach out through our about page or main contact channels.",
      primary: { href: "/about-green-built-alliance/", label: "About us" },
      secondary: { href: "/", label: "Home" },
    },
  ],
};

export const termsOfServicePage: NativeMarketingPage = {
  kind: "sections",
  path: "/terms-of-service/",
  seo: {
    title: "Terms of Service | Green Built Alliance",
    description:
      "Terms governing use of the Green Built Alliance website and published materials—nonprofit education and community programs in WNC.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Legal",
      title: "Terms of service",
      subtitle:
        "By using this website, you agree to these terms. They are written to be readable; please read them carefully.",
    },
    {
      type: "prose",
      heading: "Use of the site",
      paragraphs: [
        "Green Built Alliance provides this site for information about our mission, programs, events, and community. You agree to use the site lawfully and not to interfere with its operation or other users’ access.",
        "Content on this site (text, graphics, logos, and downloads) is owned by Green Built Alliance or used with permission. You may link to public pages and share materials for noncommercial educational purposes unless otherwise noted; commercial reuse requires written permission.",
      ],
    },
    {
      type: "prose",
      heading: "Not professional advice",
      paragraphs: [
        "Articles, guides, and resources are for general education. They are not a substitute for advice from a qualified architect, engineer, attorney, accountant, or tradesperson for your specific project.",
      ],
    },
    {
      type: "prose",
      heading: "Third-party tools",
      paragraphs: [
        "We may link to or embed tools operated by other organizations (for example event registration, maps, or payment processors). Those services have their own terms and privacy practices.",
      ],
    },
    {
      type: "prose",
      heading: "Disclaimer of warranties",
      paragraphs: [
        "We work hard to keep information accurate and up to date, but the site is provided “as is.” To the fullest extent permitted by law, Green Built Alliance disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      ],
    },
    {
      type: "prose",
      heading: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, Green Built Alliance and its directors, staff, volunteers, and partners are not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the site or reliance on its content.",
      ],
    },
    {
      type: "prose",
      heading: "Changes",
      paragraphs: [
        "We may update these terms periodically. Continued use of the site after changes constitutes acceptance of the revised terms.",
      ],
    },
    {
      type: "cta",
      title: "Privacy",
      body: "See how we handle personal information collected through this site.",
      primary: { href: "/privacy-policy/", label: "Privacy policy" },
      secondary: { href: "/about-green-built-alliance/", label: "About us" },
    },
  ],
};

export const thankYouPage: NativeMarketingPage = {
  kind: "sections",
  path: "/thank-you/",
  seo: {
    title: "Thank You | Green Built Alliance",
    description: "Your submission was received. Thank you for connecting with Green Built Alliance.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Confirmation",
      title: "Thank you",
      subtitle:
        "We received your submission. If you requested a follow-up, our team will respond as soon as we can.",
    },
    {
      type: "prose",
      paragraphs: [
        "While you are here, explore Green Built Homes, upcoming events, and ways to support climate-smart building in Western North Carolina.",
      ],
    },
    {
      type: "cta",
      title: "Keep exploring",
      primary: { href: "/events/", label: "Events" },
      secondary: { href: "/green-built-homes/", label: "Green Built Homes" },
    },
  ],
};

export const thankYouContactPage: NativeMarketingPage = {
  kind: "sections",
  path: "/thank-you-contact/",
  seo: {
    title: "Thank You — We Received Your Message | Green Built Alliance",
    description:
      "Thanks for contacting Green Built Alliance. We’ll get back to you as soon as possible.",
    ogImage: og,
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Confirmation",
      title: "Message received",
      subtitle: "Thank you for reaching out. A staff member will review your note and reply when appropriate.",
    },
    {
      type: "prose",
      paragraphs: [
        "If your question is time-sensitive, you can also call the main office number listed on our about page or check the events calendar for program-specific contacts.",
      ],
    },
    {
      type: "cta",
      title: "Next steps",
      primary: { href: "/about-green-built-alliance/", label: "About & contact" },
      secondary: { href: "/news/", label: "News" },
    },
  ],
};

export const legalUtilityPages: NativeMarketingPage[] = [
  privacyPolicyPage,
  termsOfServicePage,
  thankYouPage,
  thankYouContactPage,
];
