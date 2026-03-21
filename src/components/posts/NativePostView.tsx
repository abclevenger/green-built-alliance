import { FunnelLeadCapture } from "@/components/marketing/funnel/FunnelLeadCapture";
import type { NativePost, NativePostBlock } from "@/lib/content-types";
import Link from "next/link";

function formatPostDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function sameCalendarDay(a: string, b: string): boolean {
  try {
    const da = new Date(a);
    const db = new Date(b);
    return (
      da.getUTCFullYear() === db.getUTCFullYear() &&
      da.getUTCMonth() === db.getUTCMonth() &&
      da.getUTCDate() === db.getUTCDate()
    );
  } catch {
    return a === b;
  }
}

export function NativePostView({ post }: { post: NativePost }) {
  const showUpdated =
    post.updatedAt &&
    post.publishedAt &&
    !sameCalendarDay(post.publishedAt, post.updatedAt);

  return (
    <article className="native-post-article bg-white">
      <header className="border-b border-neutral-100 bg-gradient-to-b from-[#f8faf3] to-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {post.categories?.length ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5a7c00]">
              {post.categories.join(" · ")}
            </p>
          ) : null}
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-[2.35rem] md:leading-[1.15]">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            <span className="text-neutral-400">Published </span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            {showUpdated ? (
              <>
                <span className="text-neutral-400"> · Updated </span>
                <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt!)}</time>
              </>
            ) : null}
            {post.author ? (
              <>
                {" · "}
                {post.author.url ? (
                  <a href={post.author.url} className="text-[#5a7c00] underline-offset-2 hover:underline">
                    {post.author.name}
                  </a>
                ) : (
                  <span>{post.author.name}</span>
                )}
              </>
            ) : null}
          </p>
          <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-700 md:text-xl md:leading-relaxed">
            {post.excerpt}
          </p>
          {post.tags?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics">
              {post.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        {post.introLeadCapture ? (
          <div className="mb-14">
            <FunnelLeadCapture block={post.introLeadCapture} sectionId="post-intro-lead" />
          </div>
        ) : null}

        <div className="prose-post space-y-12">
          {post.blocks.map((block, i) => (
            <PostBlock key={i} block={block} />
          ))}
        </div>

        {post.footerLeadCapture ? (
          <div className="mt-16">
            <FunnelLeadCapture block={post.footerLeadCapture} sectionId="post-footer-lead" />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function PostBlock({ block }: { block: NativePostBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <section className="space-y-4">
          {block.heading ? (
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">{block.heading}</h2>
          ) : null}
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-[1.0625rem] leading-[1.75] text-neutral-700">
              {p}
            </p>
          ))}
        </section>
      );
    case "heading": {
      const Tag = block.level === 2 ? "h2" : block.level === 3 ? "h3" : "h4";
      const cls =
        block.level === 2
          ? "text-2xl font-bold tracking-tight text-neutral-900 md:text-[1.75rem]"
          : block.level === 3
            ? "text-xl font-bold tracking-tight text-neutral-900"
            : "text-lg font-bold text-neutral-900";
      return <Tag className={cls}>{block.text}</Tag>;
    }
    case "bulletList":
      return (
        <section>
          {block.title ? (
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900">{block.title}</h2>
          ) : null}
          <ul className="list-disc space-y-2 pl-6 text-[1.0625rem] leading-relaxed text-neutral-700 marker:text-[#96c11f]">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      );
    case "callout": {
      const border =
        block.variant === "tip"
          ? "border-[#96c11f]/50 bg-[#f8faf3]"
          : "border-neutral-200 bg-neutral-50";
      return (
        <aside className={`rounded-2xl border p-6 ${border}`}>
          {block.title ? (
            <p className="text-sm font-bold uppercase tracking-wide text-[#5a7c00]">{block.title}</p>
          ) : null}
          <p className="mt-2 text-[1.0625rem] leading-relaxed text-neutral-700">{block.body}</p>
        </aside>
      );
    }
    case "cta":
      return (
        <section className="rounded-2xl border border-[#96c11f]/40 bg-gradient-to-br from-[#f4f8ea] to-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">{block.title}</h2>
          {block.body ? <p className="mt-3 text-neutral-600">{block.body}</p> : null}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={block.primary.href}
              className="inline-flex rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]"
            >
              {block.primary.label}
            </Link>
            {block.secondary ? (
              <Link
                href={block.secondary.href}
                className="inline-flex rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 transition hover:border-[#96c11f] hover:text-[#5a7c00]"
              >
                {block.secondary.label}
              </Link>
            ) : null}
          </div>
        </section>
      );
  }
}
