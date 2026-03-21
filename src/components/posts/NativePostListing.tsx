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
          ? "flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-[#96c11f]/60 hover:shadow-md"
          : "flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-[#96c11f]/50"
      }
    >
      <div className={isFeatured ? "flex flex-1 flex-col p-6 md:p-7" : "flex flex-1 flex-col"}>
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
              ? "mt-4 text-xl font-extrabold leading-snug text-neutral-900 md:text-2xl"
              : "mt-3 text-lg font-bold leading-snug text-neutral-900"
          }
        >
          <Link href={post.path} className="hover:text-[#5a7c00] hover:underline">
            {post.title}
          </Link>
        </h2>
        <p
          className={
            isFeatured
              ? "mt-3 line-clamp-4 text-base leading-relaxed text-neutral-600"
              : "mt-2 line-clamp-3 text-sm text-neutral-600"
          }
        >
          {post.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href={post.path}
            className="inline-flex rounded-full bg-[#96c11f] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#5a7c00]"
          >
            Read article
          </Link>
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
      ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
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
