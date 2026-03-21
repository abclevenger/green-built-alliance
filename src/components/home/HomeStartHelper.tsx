"use client";

import Link from "next/link";
import { useId, useState } from "react";

type Goal = "home" | "bills" | "pro" | "support" | null;

const GOALS: {
  id: Goal;
  label: string;
  hint: string;
}[] = [
  {
    id: "home",
    label: "Build or buy a better home",
    hint: "Certification, builders, raters",
  },
  {
    id: "bills",
    label: "Lower energy bills or fix comfort",
    hint: "Upgrades, programs, trusted pros",
  },
  {
    id: "pro",
    label: "I work in design, build, or energy",
    hint: "CE, directory, membership",
  },
  {
    id: "support",
    label: "Donate, partner, or volunteer",
    hint: "Fund programs and outreach",
  },
];

function Result({ goal }: { goal: Goal }) {
  if (goal === "home") {
    return (
      <div className="mt-6 rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/50 p-5 text-left">
        <p className="text-sm font-bold text-[color:var(--gb-text)]">Suggested next steps</p>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--gb-text-muted)]">
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/find-a-pro/?intent=new-home">
              Get matched with a vetted pro
            </Link>{" "}
            — we narrow categories for your project.
          </li>
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/green-built-homes/">
              Read how Green Built Homes certification works
            </Link>
            .
          </li>
        </ul>
      </div>
    );
  }
  if (goal === "bills") {
    return (
      <div className="mt-6 rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/50 p-5 text-left">
        <p className="text-sm font-bold text-[color:var(--gb-text)]">Suggested next steps</p>
        <p className="mt-2 text-sm text-[color:var(--gb-text-muted)]">
          Savings depend on your home—we don’t quote dollar amounts here. Start with programs and pros who know
          WNC housing.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--gb-text-muted)]">
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/energysaversnetwork/">
              Energy Savers Network
            </Link>{" "}
            — regional guidance and partners.
          </li>
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/find-a-pro/?intent=save-energy">
              Guided match for efficiency upgrades
            </Link>
            .
          </li>
        </ul>
      </div>
    );
  }
  if (goal === "pro") {
    return (
      <div className="mt-6 rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/50 p-5 text-left">
        <p className="text-sm font-bold text-[color:var(--gb-text)]">Suggested next steps</p>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--gb-text-muted)]">
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/events/continuing-education-courses/">
              Continuing education &amp; workshops
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/membership/">
              Membership &amp; directory visibility
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/green-built-homes/">
              Green Built Homes program
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  if (goal === "support") {
    return (
      <div className="mt-6 rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/50 p-5 text-left">
        <p className="text-sm font-bold text-[color:var(--gb-text)]">Suggested next steps</p>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--gb-text-muted)]">
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/support-our-work/">
              Support our work
            </Link>{" "}
            — donate or stay in the loop.
          </li>
          <li>
            <Link className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline" href="/about-green-built-alliance/">
              About &amp; contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  return null;
}

export function HomeStartHelper({ title, intro }: { title: string; intro: string }) {
  const [goal, setGoal] = useState<Goal>(null);
  const headingId = useId();

  return (
    <section
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      aria-labelledby={headingId}
    >
      <div className="rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/40 p-6 sm:p-8">
        <h2 id={headingId} className="font-serif text-xl font-semibold text-[color:var(--gb-text)] sm:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--gb-text-muted)] sm:text-base">{intro}</p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {GOALS.map((g) => (
            <button
              key={g.id}
              type="button"
              aria-pressed={goal === g.id}
              onClick={() => setGoal(g.id)}
              className={
                goal === g.id
                  ? "min-h-[4.5rem] rounded-xl border-2 border-[color:var(--gb-accent)] bg-[#f4f8ea] p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]"
                  : "min-h-[4.5rem] rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-4 text-left transition hover:border-[color:var(--gb-accent)]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]"
              }
            >
              <span className="block text-sm font-bold text-[color:var(--gb-text)]">{g.label}</span>
              <span className="mt-1 block text-xs text-[color:var(--gb-text-muted)]">{g.hint}</span>
            </button>
          ))}
        </div>
        {goal ? (
          <>
            <Result goal={goal} />
            <button
              type="button"
              onClick={() => setGoal(null)}
              className="mt-4 text-sm font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline"
            >
              Clear choice
            </button>
          </>
        ) : null}

        <details className="mt-8 rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] p-4 text-left">
          <summary className="cursor-pointer text-sm font-bold text-[color:var(--gb-text)] marker:text-[color:var(--gb-accent-deep)]">
            Rough monthly electric bill—context only (no savings promise)
          </summary>
          <p className="mt-3 text-xs leading-relaxed text-[color:var(--gb-text-muted)]">
            We do not calculate or guarantee savings from a bill range. Use this only to think about where to focus:
            air sealing, insulation, HVAC sizing, and behavior all interact—especially in WNC humidity and mixed
            seasons.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-[color:var(--gb-text-muted)]">
            <li>Higher winter or summer spikes → ask pros about envelope leaks and duct leakage before replacing equipment.</li>
            <li>Steady year-round use → scheduling, thermostat habits, and right-sized systems often matter as much as new gear.</li>
          </ul>
          <p className="mt-3 text-xs">
            <Link href="/energysaversnetwork/" className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline">
              Energy Savers Network
            </Link>
            {" · "}
            <Link href="/find-a-pro/?intent=save-energy" className="font-semibold text-[color:var(--gb-accent-deep)] underline-offset-2 hover:underline">
              Guided match for upgrades
            </Link>
          </p>
        </details>
      </div>
    </section>
  );
}
