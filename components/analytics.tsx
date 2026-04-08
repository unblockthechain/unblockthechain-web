import Script from "next/script";

/**
 * Privacy-friendly, open-source analytics (pick one provider via env).
 *
 * Plausible: https://plausible.io (MIT, self-hostable) — closest GA replacement.
 * Umami: https://umami.is (MIT, self-hostable).
 */
export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  const plausibleSrc =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC?.trim() ||
    "https://plausible.io/js/script.js";

  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim();
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL?.trim();

  return (
    <>
      {plausibleDomain ? (
        <Script
          src={plausibleSrc}
          strategy="afterInteractive"
          data-domain={plausibleDomain}
        />
      ) : null}
      {umamiId && umamiSrc ? (
        <Script
          src={umamiSrc}
          strategy="afterInteractive"
          data-website-id={umamiId}
        />
      ) : null}
    </>
  );
}
