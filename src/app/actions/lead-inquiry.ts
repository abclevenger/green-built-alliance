"use server";

import { LEAD_WEBHOOK_URL } from "@/lib/env";

export type LeadInquiryState = { ok: boolean; message: string };

const initial: LeadInquiryState = { ok: false, message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SOURCE = 200;
const MAX_PAGE = 256;
const MAX_FORM_NAME = 120;

function sanitizePage(raw: string): string | null {
  const t = raw.trim();
  if (!t) return "/";
  if (t.length > MAX_PAGE || /[\r\n<>]/.test(t)) return null;
  if (!t.startsWith("/")) return null;
  return t;
}

function sanitizeFormName(raw: string): string | null {
  const t = raw.trim();
  if (!t) return "native-funnel-lead";
  if (t.length > MAX_FORM_NAME) return null;
  return t;
}

/**
 * Validates email, then POSTs JSON to GoHighLevel / LeadConnector (`LEAD_WEBHOOK_URL`).
 *
 * Env: set `LEAD_WEBHOOK_URL` to your inbound workflow trigger URL (server-only, not `NEXT_PUBLIC_*`).
 */
export async function submitLeadInquiryPlaceholder(
  _prev: LeadInquiryState | undefined,
  formData: FormData
): Promise<LeadInquiryState> {
  const email = formData.get("email");
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const sourceRaw = formData.get("source");
  if (typeof sourceRaw === "string" && sourceRaw.length > MAX_SOURCE) {
    return { ok: false, message: "Invalid submission." };
  }

  const pageRaw = formData.get("page");
  if (typeof pageRaw !== "string") {
    return { ok: false, message: "Invalid submission." };
  }
  const page = sanitizePage(pageRaw);
  if (page === null) {
    return { ok: false, message: "Invalid submission." };
  }

  const formNameRaw = formData.get("formName");
  if (typeof formNameRaw !== "string") {
    return { ok: false, message: "Invalid submission." };
  }
  const formName = sanitizeFormName(formNameRaw);
  if (formName === null) {
    return { ok: false, message: "Invalid submission." };
  }

  const trimmed = email.trim();
  const source = typeof sourceRaw === "string" ? sourceRaw.trim() : "";
  const sourceValue = source || "website";

  if (!LEAD_WEBHOOK_URL) {
    console.warn(
      "[lead-inquiry] LEAD_WEBHOOK_URL is not set — configure inbound webhook URL in environment."
    );
    return {
      ok: false,
      message: "Something went wrong. Please try again in a moment.",
    };
  }

  const payload = {
    email: trimmed,
    source: sourceValue,
    page,
    formName,
  };

  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000),
    });

    if (!res.ok) {
      const snippet = (await res.text()).slice(0, 500);
      console.error("[lead-inquiry] Webhook non-2xx", {
        status: res.status,
        statusText: res.statusText,
        bodySnippet: snippet,
      });
      return {
        ok: false,
        message: "Something went wrong. Please try again in a moment.",
      };
    }
  } catch (e) {
    console.error("[lead-inquiry] Webhook request failed", e);
    return {
      ok: false,
      message: "We couldn’t reach our signup service. Please try again shortly.",
    };
  }

  return { ok: true, message: "Thanks—we received your request and will follow up soon." };
}

export const leadInquiryInitialState: LeadInquiryState = initial;
