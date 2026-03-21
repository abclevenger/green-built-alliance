"use client";

import type { LeadCaptureBlock } from "@/lib/content-types";
import {
  leadInquiryInitialState,
  submitLeadInquiryPlaceholder,
} from "@/app/actions/lead-inquiry";
import { useActionState } from "react";

function defaultPageFromSlug(sourceSlug: string | undefined): string {
  if (!sourceSlug?.trim()) return "/";
  const s = sourceSlug.replace(/^\/+|\/+$/g, "");
  return s ? `/${s}/` : "/";
}

function defaultFormName(block: LeadCaptureBlock): string {
  return block.formName?.trim() || block.sourceSlug?.trim() || "native-funnel-lead";
}

export function FunnelLeadCapture({
  block,
  sectionId = "lead",
}: {
  block: LeadCaptureBlock;
  /** Unique id when multiple capture sections exist on one page (e.g. native posts). */
  sectionId?: string;
}) {
  const [state, formAction, isPending] = useActionState(
    submitLeadInquiryPlaceholder,
    leadInquiryInitialState
  );

  const page = block.page?.trim() || defaultPageFromSlug(block.sourceSlug);
  const formName = defaultFormName(block);

  return (
    <section
      id={sectionId}
      className="border-y border-[#96c11f]/30 bg-[#f8faf3] px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-extrabold text-neutral-900 md:text-3xl">{block.headline}</h2>
        {block.subheadline ? (
          <p className="mt-4 text-neutral-600">{block.subheadline}</p>
        ) : null}

        {state?.ok ? (
          <p className="mt-10 rounded-xl border border-[#96c11f]/40 bg-white px-6 py-8 text-lg font-medium text-[#5a7c00]">
            {state.message}
          </p>
        ) : (
          <form action={formAction} className="mt-10 text-left">
            <input type="hidden" name="source" value={block.sourceSlug ?? ""} />
            <input type="hidden" name="page" value={page} />
            <input type="hidden" name="formName" value={formName} />
            {block.intent?.trim() ? (
              <input type="hidden" name="intent" value={block.intent.trim()} />
            ) : null}
            <label className="block">
              <span className="text-sm font-semibold text-neutral-800">{block.fieldLabel}</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={block.fieldPlaceholder ?? "you@example.com"}
                disabled={isPending}
                className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none ring-[#96c11f] focus:border-[#96c11f] focus:ring-2 disabled:opacity-60"
              />
            </label>
            {state?.message && !state.ok ? (
              <p className="mt-3 text-sm font-medium text-red-700" role="alert">
                {state.message}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isPending}
              className="mt-6 w-full rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00] disabled:opacity-60 sm:w-auto"
            >
              {isPending ? "Sending…" : block.submitLabel}
            </button>
            {block.trustText ? (
              <p className="mt-4 text-center text-xs text-neutral-500">{block.trustText}</p>
            ) : null}
            {block.integrationNote ? (
              <p className="mt-6 border-t border-neutral-200 pt-4 text-center text-[10px] text-neutral-400">
                {block.integrationNote}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
