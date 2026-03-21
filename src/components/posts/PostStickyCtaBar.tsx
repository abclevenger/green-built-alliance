"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Mobile-first sticky CTA after scroll — keeps high-intent action one tap away on long articles.
 */
export function PostStickyCtaBar({
  href,
  label,
  secondaryHref,
  secondaryLabel,
}: {
  href: string;
  label: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#96c11f]/40 bg-white/95 px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-center justify-center gap-2">
        <Link
          href={href}
          className="min-h-[44px] flex-1 rounded-full bg-[#96c11f] px-4 py-3 text-center text-sm font-bold text-white shadow-sm"
        >
          {label}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className="min-h-[44px] flex-1 rounded-full border-2 border-neutral-300 px-3 py-3 text-center text-xs font-bold text-neutral-800"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
