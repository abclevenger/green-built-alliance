"use client";

import type { DirectorySpotlightListing } from "@/lib/content-types";
import Link from "next/link";
import { useId, useMemo, useState } from "react";

type Props = {
  listings: DirectorySpotlightListing[];
  categorySlug: string;
};

function SpotlightCard({ listing }: { listing: DirectorySpotlightListing }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:border-[#96c11f]/50 ${
        listing.featured ? "border-[#96c11f]/60 ring-1 ring-[#96c11f]/25" : "border-neutral-200"
      }`}
    >
      <div className="absolute right-4 top-4 flex flex-col items-end gap-1">
        {listing.featured ? (
          <p className="rounded-full bg-[#5a7c00] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Featured
          </p>
        ) : null}
        {listing.recommended ? (
          <p className="rounded-full border border-[#96c11f]/60 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#5a7c00]">
            Recommended
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5 pr-16">
        {(listing.badges ?? []).map((b) => (
          <span
            key={b}
            className="rounded-full border border-[#96c11f]/40 bg-[#f8faf3] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#5a7c00]"
          >
            {b}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-lg font-bold text-neutral-900">
        <Link href={listing.href} className="hover:text-[#5a7c00] hover:underline">
          {listing.name}
        </Link>
      </h3>
      {listing.organization ? (
        <p className="mt-1 text-sm font-medium text-neutral-600">{listing.organization}</p>
      ) : null}
      {listing.locationHint ? (
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#5a7c00]">
          {listing.locationHint}
        </p>
      ) : null}
      {listing.summary ? (
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{listing.summary}</p>
      ) : null}
      <Link
        href={listing.href}
        className="mt-5 inline-flex w-fit rounded-full bg-[color:var(--gb-accent)] px-4 py-2 text-xs font-bold text-white transition hover:bg-[color:var(--gb-accent-deep)]"
      >
        Open full profile
      </Link>
    </article>
  );
}

export function DirectorySpotlightSection({ listings, categorySlug }: Props) {
  const [query, setQuery] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const filterId = useId();
  const toggleId = useId();
  const liveId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter((l) => {
      if (featuredOnly && !l.featured && !l.recommended) return false;
      if (!q) return true;
      const hay = [l.name, l.organization, l.summary, l.locationHint, ...(l.badges ?? [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [listings, query, featuredOnly]);

  if (listings.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <div className="min-w-0 flex-1 sm:max-w-md">
          <label htmlFor={filterId} className="text-sm font-semibold text-[color:var(--gb-text)]">
            Filter spotlights
          </label>
          <input
            id={filterId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Name, trade, or keyword"
            autoComplete="off"
            className="mt-2 min-h-11 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 shadow-sm outline-none focus:border-[color:var(--gb-accent)] focus:ring-2 focus:ring-[color:var(--gb-accent)]/25"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            id={toggleId}
            type="checkbox"
            checked={featuredOnly}
            onChange={(e) => setFeaturedOnly(e.target.checked)}
            className="size-4 rounded border-neutral-300 text-[color:var(--gb-accent)] focus:ring-[color:var(--gb-accent)]"
          />
          <label htmlFor={toggleId} className="text-sm text-[color:var(--gb-text-muted)]">
            Featured &amp; recommended only
          </label>
        </div>
      </div>
      <p id={liveId} className="sr-only" aria-live="polite" aria-atomic="true">
        {filtered.length === listings.length
          ? `${listings.length} spotlights in this category.`
          : `Showing ${filtered.length} of ${listings.length} spotlights.`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-10 text-center text-neutral-700">
          <p className="font-semibold text-neutral-800">No spotlights match your filter</p>
          <p className="mt-2 text-sm text-neutral-600">
            Clear the search or uncheck the box—or use{" "}
            <Link href="/find-a-pro/" className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline">
              guided match
            </Link>{" "}
            for a broader path.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFeaturedOnly(false);
            }}
            className="mt-4 text-sm font-bold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing) => (
            <li key={`${categorySlug}-${listing.href}-${listing.name}`}>
              <SpotlightCard listing={listing} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
