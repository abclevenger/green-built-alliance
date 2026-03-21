"use client";

import { FunnelLeadCapture } from "@/components/marketing/funnel/FunnelLeadCapture";
import type { LeadCaptureBlock } from "@/lib/content-types";
import {
  MATCH_INTENT_OPTIONS,
  type MatchIntentId,
  type MatchmakingMemberCard,
  getCategoryLinksForIntent,
  getProgramCtasForIntent,
  getRecommendedMembersForIntent,
  isMatchIntentId,
  toMatchmakingMemberCard,
} from "@/lib/matchmaking";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

type Step = 1 | 2 | 3;

const introLeadBlock: LeadCaptureBlock = {
  headline: "Request an introduction",
  subheadline:
    "Share your email—we’ll route you to the right program staff or member follow-up. No obligation.",
  fieldLabel: "Email",
  submitLabel: "Request introduction",
  trustText: "We never sell your address.",
  sourceSlug: "find-a-pro-intro",
  page: "/find-a-pro/",
  formName: "find-a-pro-introduction",
  intent: "matchmaking-intro-request",
};

export function MatchmakingWizard() {
  const searchParams = useSearchParams();
  const initialIntent = useMemo(() => {
    const raw = searchParams.get("intent");
    return isMatchIntentId(raw) ? raw : null;
  }, [searchParams]);

  const [step, setStep] = useState<Step>(initialIntent ? 2 : 1);
  const [intent, setIntent] = useState<MatchIntentId>(initialIntent ?? "not-sure");
  const [locationHint, setLocationHint] = useState("");
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");

  const recommended = useMemo(() => getRecommendedMembersForIntent(intent).map(toMatchmakingMemberCard), [intent]);
  const categories = useMemo(() => getCategoryLinksForIntent(intent), [intent]);
  const programs = useMemo(() => getProgramCtasForIntent(intent), [intent]);

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-gradient-to-b from-[#f8faf3] to-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">Guided match</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            Find the right green building professional
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Answer a few questions—we’ll suggest member profiles and categories that fit. You stay in control of who
            you contact.
          </p>
          <div className="mt-6 flex justify-center gap-2 text-xs font-semibold text-neutral-500">
            <span className={step >= 1 ? "text-[#5a7c00]" : ""}>1. Goal</span>
            <span aria-hidden>→</span>
            <span className={step >= 2 ? "text-[#5a7c00]" : ""}>2. Details</span>
            <span aria-hidden>→</span>
            <span className={step >= 3 ? "text-[#5a7c00]" : ""}>3. Matches</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        {step === 1 ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">What are you trying to do?</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {MATCH_INTENT_OPTIONS.map((opt) => (
                <li key={opt.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setIntent(opt.id);
                      setStep(2);
                    }}
                    className="flex h-full w-full flex-col rounded-2xl border-2 border-neutral-200 bg-white p-4 text-left transition hover:border-[#96c11f] hover:shadow-sm"
                  >
                    <span className="font-bold text-neutral-900">{opt.title}</span>
                    <span className="mt-2 text-sm text-neutral-600">{opt.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-8">
            <div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm font-semibold text-[#5a7c00] hover:underline"
              >
                ← Change goal
              </button>
              <h2 className="mt-4 text-xl font-bold text-neutral-900">A few details (optional)</h2>
              <p className="mt-2 text-sm text-neutral-600">
                We don’t route by ZIP yet—this helps you remember what to mention when you reach out.
              </p>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-neutral-800">Town or county (optional)</span>
              <input
                type="text"
                value={locationHint}
                onChange={(e) => setLocationHint(e.target.value)}
                placeholder="e.g. Asheville, Buncombe County"
                className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 shadow-sm outline-none focus:border-[#96c11f] focus:ring-2 focus:ring-[#96c11f]/30"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-neutral-800">Rough budget (optional)</span>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none focus:border-[#96c11f]"
              >
                <option value="">Prefer not to say</option>
                <option value="under-50k">Under $50k project scope</option>
                <option value="50-150k">$50k – $150k</option>
                <option value="150-400k">$150k – $400k</option>
                <option value="400k-plus">$400k+</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-neutral-800">Timeline (optional)</span>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none focus:border-[#96c11f]"
              >
                <option value="">Flexible</option>
                <option value="0-6">Next 6 months</option>
                <option value="6-12">6–12 months</option>
                <option value="12-plus">12+ months / planning only</option>
              </select>
            </label>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="w-full rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00] sm:w-auto"
            >
              See my matches
            </button>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-12">
            <div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-sm font-semibold text-[#5a7c00] hover:underline"
              >
                ← Edit details
              </button>
              <h2 className="mt-4 text-xl font-bold text-neutral-900">Recommended professionals</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Native member profiles in our network—open a profile to call, email, or visit their site. Mention your
                goal
                {locationHint ? ` (${locationHint})` : ""} when you reach out.
              </p>
            </div>

            {recommended.length === 0 ? (
              <p className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-8 text-center text-neutral-600">
                No spotlight profiles are wired for this path yet.{" "}
                <Link href="/directory/" className="font-semibold text-[#5a7c00] underline">
                  Browse the full directory
                </Link>
                .
              </p>
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2">
                {recommended.map((m) => (
                  <MemberResultCard key={m.legacyMemberId} member={m} />
                ))}
              </ul>
            )}

            <div>
              <h3 className="text-lg font-bold text-neutral-900">Browse by category</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={c.path}
                      className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-[#96c11f] hover:text-[#5a7c00]"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#96c11f]/40 bg-gradient-to-br from-[#f4f8ea] to-white p-8">
              <h3 className="text-lg font-bold text-neutral-900">Programs & next steps</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {programs.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="inline-flex rounded-full bg-[#96c11f] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#5a7c00]"
                  >
                    {p.label}
                  </Link>
                ))}
                <Link
                  href="/find-a-pro/"
                  className="inline-flex rounded-full border-2 border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold text-neutral-800 hover:border-[#96c11f]"
                >
                  Start over
                </Link>
              </div>
            </div>

            <FunnelLeadCapture block={introLeadBlock} sectionId="find-a-pro-intro" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MemberResultCard({ member }: { member: MatchmakingMemberCard }) {
  return (
    <li>
      <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-[#96c11f]/50">
        <div className="flex flex-wrap items-center gap-2">
          {member.featured ? (
            <span className="rounded-full bg-[#e34d0c]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#c4410a]">
              Recommended
            </span>
          ) : null}
          {member.badges?.map((b) => (
            <span
              key={b}
              className="rounded-full bg-[#f8faf3] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#5a7c00]"
            >
              {b}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-bold text-neutral-900">
          <Link href={member.path} className="hover:text-[#5a7c00] hover:underline">
            {member.organizationName}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-[#5a7c00]">{member.roleLabel}</p>
        {member.location ? <p className="mt-2 text-xs text-neutral-500">{member.location}</p> : null}
        <Link
          href={member.path}
          className="mt-4 inline-flex w-fit rounded-full bg-[#96c11f] px-4 py-2 text-xs font-bold text-white hover:bg-[#5a7c00]"
        >
          View profile
        </Link>
      </article>
    </li>
  );
}
