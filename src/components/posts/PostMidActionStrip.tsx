import Link from "next/link";

/** Mid-article conversion strip — inserted algorithmically for long posts. */
export function PostMidActionStrip() {
  return (
    <aside className="rounded-2xl border border-[#96c11f]/35 bg-gradient-to-r from-[#f4f8ea] to-white px-6 py-8 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--gb-accent-deep)]">Keep momentum</p>
      <h2 className="mt-2 text-xl font-bold text-[color:var(--gb-text)]">Want a practitioner on this topic?</h2>
      <p className="mt-2 text-sm text-[color:var(--gb-text-muted)]">
        Run a short guided match for suggested categories and member spotlights — or go straight to verified directory
        profiles.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/find-a-pro/"
          className="inline-flex rounded-full bg-[color:var(--gb-accent)] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[color:var(--gb-accent-deep)]"
        >
          Run guided match
        </Link>
        <Link
          href="/directory/"
          className="inline-flex rounded-full border-2 border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] px-5 py-2.5 text-sm font-bold text-[color:var(--gb-text)] hover:border-[color:var(--gb-accent)]"
        >
          Open directory
        </Link>
        <Link
          href="/green-built-homes/"
          className="inline-flex rounded-full border-2 border-transparent px-5 py-2.5 text-sm font-bold text-[#5a7c00] underline-offset-2 hover:underline"
        >
          Green Built Homes
        </Link>
      </div>
    </aside>
  );
}
