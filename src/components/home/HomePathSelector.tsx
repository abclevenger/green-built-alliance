"use client";

import type { HomePillar } from "@/lib/content-types";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export function HomePathSelector({ pillars }: { pillars: HomePillar[] }) {
  const [active, setActive] = useState(0);
  const [pathAnnouncement, setPathAnnouncement] = useState("");
  const skipAnnounceRef = useRef(true);
  const baseId = useId();
  const n = pillars.length;
  const current = pillars[active];

  useEffect(() => {
    const p = pillars[active];
    if (!p) return;
    if (skipAnnounceRef.current) {
      skipAnnounceRef.current = false;
      return;
    }
    const label = p.audienceLabel ?? p.title;
    setPathAnnouncement(`Showing path: ${label}. ${p.title}.`);
  }, [active, pillars]);

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActive((index + 1) % n);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActive((index - 1 + n) % n);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(n - 1);
      }
    },
    [n]
  );

  if (!current) return null;

  return (
    <div className="mt-10">
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {pathAnnouncement}
      </p>
      <div
        role="tablist"
        aria-label="Audience paths"
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3"
      >
        {pillars.map((pillar, index) => {
          const selected = index === active;
          const tabLabel = pillar.audienceLabel ?? pillar.title;
          return (
            <button
              key={pillar.href}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(e) => onTabKeyDown(e, index)}
              className={
                selected
                  ? "min-h-12 rounded-xl border-2 border-[color:var(--gb-accent)] bg-[#f4f8ea] px-4 py-3 text-left text-sm font-bold text-[color:var(--gb-text)] shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)] sm:min-w-[11rem] sm:text-center"
                  : "min-h-12 rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-4 py-3 text-left text-sm font-semibold text-[color:var(--gb-text-muted)] transition hover:border-[color:var(--gb-accent)]/60 hover:text-[color:var(--gb-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)] sm:min-w-[11rem] sm:text-center"
              }
            >
              {tabLabel}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="mt-6 rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-6 shadow-sm motion-safe:transition-[box-shadow,transform] motion-safe:duration-200 sm:p-8"
      >
        <h3 className="font-serif text-xl font-semibold text-[color:var(--gb-text)] sm:text-2xl">{current.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-[color:var(--gb-text-muted)]">{current.description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={current.href}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[color:var(--gb-accent-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]"
          >
            {current.ctaLabel ?? "Continue →"}
          </Link>
          {current.relatedLinks?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-5 py-3 text-sm font-bold text-[color:var(--gb-text)] transition hover:border-[color:var(--gb-accent)] hover:text-[color:var(--gb-accent-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-[color:var(--gb-text-muted)]">
          <Link
            href={current.href}
            className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline"
          >
            Open the full page for this path
          </Link>{" "}
          — schedules, FAQs, and extra context live there.
        </p>
      </div>
    </div>
  );
}
