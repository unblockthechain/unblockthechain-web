"use client";

import * as Sentry from "@sentry/react";
import { useEffect } from "react";

let sentryInitialized = false;

/**
 * Browser-only Sentry (fits Next static export: no @sentry/nextjs server SDK).
 * Set NEXT_PUBLIC_SENTRY_DSN in production; omit locally if you prefer quiet dev.
 */
export function SentryInit() {
  useEffect(() => {
    if (sentryInitialized) return;
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN?.trim();
    if (!dsn) return;

    sentryInitialized = true;
    Sentry.init({
      dsn,
      environment: process.env.NODE_ENV,
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
    });
  }, []);

  return null;
}
