/**
 * Sanity Studio — client UI lives in Studio.tsx so this file can stay a Server
 * Component and export generateStaticParams (required for output: "export").
 */

import type { Metadata } from "next";
import Studio from "./Studio";

export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

/** Pre-render /studio for static export */
export function generateStaticParams() {
  return [{ index: [] as string[] }];
}

export default function StudioPage() {
  return <Studio />;
}
