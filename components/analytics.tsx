import Script from "next/script";

/**
 * Site measurement via env (static export: only public vars).
 *
 * - GA4: set NEXT_PUBLIC_GA_MEASUREMENT_ID (G-xxxxxxxx) for Google Analytics 4 / Ads data.
 * - Plausible / Umami: optional privacy-first alternatives.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  const plausibleSrc =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC?.trim() ||
    "https://plausible.io/js/script.js";

  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim();
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL?.trim();

  const gaInline = gaId
    ? `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(gaId)});
`.trim()
    : null;

  return (
    <>
      {gaId && gaInline ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-gtag" strategy="afterInteractive">
            {gaInline}
          </Script>
        </>
      ) : null}
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
