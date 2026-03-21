import Link from "next/link";

type WpKind = "page" | "post";

function pathHints(pathname: string): {
  energy: boolean;
  buildCert: boolean;
  education: boolean;
  member: boolean;
} {
  const p = pathname.toLowerCase();
  return {
    energy:
      p.includes("energy") ||
      p.includes("solar") ||
      p.includes("bill") ||
      p.includes("net-zero") ||
      p.includes("netzero") ||
      p.includes("hers") ||
      p.includes("insulation") ||
      p.includes("air-seal"),
    buildCert:
      p.includes("green-built") ||
      p.includes("greenbuilt") ||
      p.includes("certif") ||
      p.includes("home-cert") ||
      p.includes("leed") ||
      p.includes("energy-star"),
    education:
      p.includes("event") ||
      p.includes("class") ||
      p.includes("course") ||
      p.includes("workshop"),
    member: p.includes("member") || p.includes("directory") || p.includes("magazine"),
  };
}

/**
 * Lightweight conversion strips for legacy WordPress HTML — no heavy chrome.
 * TODO:WP_FALLBACK — remove when this URL is served as a native post or marketing page.
 */
export function LegacyWpPostConversion({
  phase,
  pathname,
  kind,
}: {
  phase: "pre" | "post";
  pathname: string;
  kind: WpKind;
}) {
  const h = pathHints(pathname);

  if (phase === "pre") {
    const lead =
      kind === "page"
        ? "Looking for programs or trusted pros?"
        : "Exploring green homes or upgrades?";
    return (
      <aside
        className="mx-auto mb-6 max-w-[1240px] px-4 lg:px-6"
        aria-label="Suggested next steps"
      >
        <div className="rounded-xl border border-[#96c11f]/40 bg-[#f8faf3] px-4 py-3 text-sm leading-snug text-neutral-700">
          <span className="font-semibold text-[#5a7c00]">{lead}</span>{" "}
          <Link
            href="/green-built-homes/"
            className="font-semibold text-[#e34d0c] underline underline-offset-2 hover:text-[#5a7c00]"
          >
            Green Built Homes
          </Link>
          {" · "}
          <Link
            href="/energysaversnetwork/"
            className="font-semibold text-[#e34d0c] underline underline-offset-2 hover:text-[#5a7c00]"
          >
            Energy Savers Network
          </Link>
          {h.education ? (
            <>
              {" · "}
              <Link
                href="/events/continuing-education-courses/"
                className="font-semibold text-[#e34d0c] underline underline-offset-2 hover:text-[#5a7c00]"
              >
                Continuing education
              </Link>
            </>
          ) : null}
        </div>
        {h.energy || h.buildCert || h.member ? (
          <p className="mt-2 px-1 text-xs text-neutral-500">
            {h.energy ? (
              <>
                <span className="text-neutral-600">Bill or retrofit questions?</span>{" "}
                <Link href="/energysaversnetwork/" className="font-medium text-[#5a7c00] hover:underline">
                  Energy Savers Network
                </Link>
              </>
            ) : h.buildCert ? (
              <>
                <span className="text-neutral-600">Certification &amp; new construction</span>{" "}
                <Link href="/green-built-homes/" className="font-medium text-[#5a7c00] hover:underline">
                  Green Built Homes
                </Link>
              </>
            ) : null}
            {h.member ? (
              <>
                {h.energy || h.buildCert ? <span aria-hidden="true"> · </span> : null}
                <Link href="/membership/" className="font-medium text-[#5a7c00] hover:underline">
                  Membership
                </Link>
              </>
            ) : null}
          </p>
        ) : null}
      </aside>
    );
  }

  return (
    <aside
      className="mx-auto mt-10 max-w-[1240px] border-t border-neutral-200 px-4 pt-8 lg:px-6"
      aria-label="Continue exploring"
    >
      <p className="text-center text-sm text-neutral-600">
        {h.education ? (
          <>
            <Link
              href="/events/continuing-education-courses/"
              className="font-semibold text-[#5a7c00] hover:text-[#e34d0c]"
            >
              Classes
            </Link>
            {" · "}
          </>
        ) : null}
        <Link href="/membership/" className="font-semibold text-[#5a7c00] hover:text-[#e34d0c]">
          Membership
        </Link>
        {" · "}
        <Link
          href="/support-our-work/"
          className="font-semibold text-[#5a7c00] hover:text-[#e34d0c]"
        >
          Support our work
        </Link>
        {" · "}
        <Link href="/directory/" className="font-semibold text-[#5a7c00] hover:text-[#e34d0c]">
          Directory
        </Link>
      </p>
      {h.energy ? (
        <p className="mt-3 text-center text-xs text-neutral-500">
          <Link href="/energysaversnetwork/" className="font-medium text-[#5a7c00] hover:underline">
            Energy Savers Network
          </Link>
          {" — free guidance for WNC residents."}
        </p>
      ) : null}
    </aside>
  );
}
