import type { MarketingSection, NativeMarketingPage } from "@/lib/content-types";
import { MarketingFunnelView } from "@/components/marketing/MarketingFunnelView";
import Link from "next/link";

export function NativeMarketingPageView({ page }: { page: NativeMarketingPage }) {
  if (page.kind === "conversion-funnel") {
    return <MarketingFunnelView blocks={page.blocks} />;
  }

  return (
    <div className="bg-white px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        {page.sections.map((s, i) => (
          <SectionBlock key={i} section={s} />
        ))}
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: MarketingSection }) {
  switch (section.type) {
    case "hero":
      return (
        <header className="mb-12 border-b border-neutral-100 pb-10">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">
              {section.eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            {section.title}
          </h1>
          {section.subtitle ? (
            <p className="mt-4 text-lg text-neutral-600">{section.subtitle}</p>
          ) : null}
        </header>
      );
    case "prose":
      return (
        <section className="mb-12">
          {section.heading ? (
            <h2 className="mb-4 text-2xl font-bold text-neutral-900">{section.heading}</h2>
          ) : null}
          <div className="space-y-4 text-neutral-700">
            {section.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>
      );
    case "bulletList":
      return (
        <section className="mb-12">
          {section.title ? (
            <h2 className="mb-4 text-2xl font-bold text-neutral-900">{section.title}</h2>
          ) : null}
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      );
    case "cta":
      return (
        <section className="mb-12 rounded-2xl bg-[#f8faf3] p-8 text-center">
          <h2 className="text-xl font-bold text-neutral-900">{section.title}</h2>
          {section.body ? <p className="mt-3 text-neutral-600">{section.body}</p> : null}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href={section.primary.href}
              className="inline-flex rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white hover:bg-[#5a7c00]"
            >
              {section.primary.label}
            </Link>
            {section.secondary ? (
              <Link
                href={section.secondary.href}
                className="inline-flex rounded-full border-2 border-[#96c11f] px-6 py-3 text-sm font-bold text-[#5a7c00] hover:bg-[#96c11f]/10"
              >
                {section.secondary.label}
              </Link>
            ) : null}
          </div>
        </section>
      );
    default:
      return null;
  }
}
