import type { FaqItem } from "@/components/FaqAccordion";

/**
 * FAQPage structured data — use only on pages whose primary content is Q&A (e.g. `/faq/`, `/green-built-homes/faq/`).
 */
export function FaqJsonLd({ items }: { items: readonly FaqItem[] }) {
  if (items.length === 0) return null;

  const graph = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
