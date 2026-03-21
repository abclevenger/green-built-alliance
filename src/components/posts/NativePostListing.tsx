import type { NativePost } from "@/lib/content-types";
import Link from "next/link";

function formatPublished(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function NativePostCard({
  post,
  variant,
}: {
  post: NativePost;
  variant: "featured" | "compact";
}) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={
        isFeatured
          ? "flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] shadow-sm ring-1 ring-black/[0.03] transition hover:border-[color:var(--gb-accent)]/70 hover:shadow-md"
          : "flex h-full flex-col rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-5 shadow-sm transition hover:border-[color:var(--gb-accent)]/50"
      }
    >
      <div className={isFeatured ? "flex flex-1 flex-col p-6 md:p-8" : "flex flex-1 flex-col"}>
        <time className="text-xs font-semibold uppercase tracking-wide text-[#5a7c00]">
          {formatPublished(post.publishedAt)}
        </time>
        {post.categories?.length ? (
          <p className="mt-2 flex flex-wrap gap-1.5">
            {post.categories.slice(0, 3).map((c) => (
              <span
                key={c}
                className="rounded-full bg-[#f8faf3] px-2.5 py-0.5 text-[11px] font-semibold text-[#5a7c00]"
              >
                {c}
              </span>
            ))}
          </p>
        ) : null}
        <h2
          className={
            isFeatured
              ? "mt-4 font-serif text-xl font-semibold leading-snug text-[color:var(--gb-text)] md:text-2xl"
              : "mt-3 text-lg font-bold leading-snug text-[color:var(--gb-text)]"
          }
        >
          <Link href={post.path} className="hover:text-[color:var(--gb-accent-deep)] hover:underline">
            {post.title}
          </Link>
        </h2>
        <p
          className={
            isFeatured
              ? "mt-3 line-clamp-4 text-base leading-relaxed text-[color:var(--gb-text-muted)]"
              : "mt-2 line-clamp-3 text-sm text-[color:var(--gb-text-muted)]"
          }
        >
          {post.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Link
            href={post.path}
            className="inline-flex rounded-full bg-[color:var(--gb-accent)] px-4 py-2 text-xs font-bold text-white transition hover:bg-[color:var(--gb-accent-deep)]"
          >
            Read the story
          </Link>
          {isFeatured ? (
            <Link
              href="/find-a-pro/"
              className="inline-flex rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-4 py-2 text-xs font-bold text-[color:var(--gb-accent-deep)] transition hover:border-[color:var(--gb-accent)]"
            >
              Get project help
            </Link>
          ) : (
            <Link
              href="/find-a-pro/"
              className="text-xs font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline"
            >
              Need a pro for this?
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function NativePostGrid({
  posts,
  variant,
  className = "",
}: {
  posts: NativePost[];
  variant: "featured" | "compact";
  className?: string;
}) {
  if (posts.length === 0) return null;

  const grid =
    variant === "featured"
      ? "grid gap-8 sm:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={`${grid} ${className}`.trim()}>
      {posts.map((post) => (
        <li key={post.path}>
          <NativePostCard post={post} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
