import Link from "next/link";

/** Mid-article conversion strip — inserted algorithmically for long posts. */
export function PostMidActionStrip() {
  return (
    <aside className="rounded-2xl border border-[#96c11f]/35 bg-gradient-to-r from-[#f4f8ea] to-white px-6 py-8 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-[#5a7c00]">Next step</p>
      <h2 className="mt-2 text-xl font-bold text-neutral-900">Ready to talk to someone who does this every week?</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Use our guided match to see suggested member profiles and categories—or jump straight to the directory.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/find-a-pro/"
          className="inline-flex rounded-full bg-[#96c11f] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#5a7c00]"
        >
          Get matched with a pro
        </Link>
        <Link
          href="/directory/"
          className="inline-flex rounded-full border-2 border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold text-neutral-800 hover:border-[#96c11f]"
        >
          Browse directory
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
