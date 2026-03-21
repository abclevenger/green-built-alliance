#!/usr/bin/env node
/**
 * POST a sample lead payload (matches submitLeadInquiryPlaceholder body).
 *
 * Usage:
 *   node scripts/send-lead-webhook-sample.mjs
 *   node scripts/send-lead-webhook-sample.mjs "https://services.leadconnectorhq.com/hooks/.../webhook-trigger/..."
 *
 * If no URL arg, uses process.env.LEAD_WEBHOOK_URL
 * (e.g. `node --env-file=.env.local scripts/send-lead-webhook-sample.mjs`).
 */

const url = process.argv[2]?.trim() || process.env.LEAD_WEBHOOK_URL?.trim();

if (!url) {
  console.error("Missing webhook URL. Pass as first argument or set LEAD_WEBHOOK_URL.");
  process.exit(1);
}

const body = {
  email: "sample-lead@example.com",
  source: "script-sample",
  page: "/energysaversnetwork/",
  formName: "sample-webhook-test",
};

const res = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log("Status:", res.status, res.statusText);
console.log("Body:", text);
process.exit(res.ok ? 0 : 1);
