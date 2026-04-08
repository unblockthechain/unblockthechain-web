/** Canonical site origin — set NEXT_PUBLIC_SITE_URL for preview/staging builds. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://unblockthechain.com"
).replace(/\/$/, "");

export const SITE_NAME = "Unblock the Chain";

/** Static asset; used with `output: "export"` (no dynamic OG routes). */
export const DEFAULT_OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Web3 security audits`,
} as const;

export const DEFAULT_DESCRIPTION =
  "Enterprise blockchain security. Smart contract audits, RWA tokenization, and Web3 security for protocols and institutions.";
