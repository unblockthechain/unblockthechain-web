import { AUDIT_FORM_URL_FROM_REPO } from "@/lib/audit-form-url";

/**
 * Audit intake URL (opens in a new tab when http(s)).
 * Priority: committed URL from `npm run create:audit-form` → env → #contact
 */
export const AUDIT_FORM_HREF =
  AUDIT_FORM_URL_FROM_REPO.trim() ||
  process.env.NEXT_PUBLIC_AUDIT_FORM_URL?.trim() ||
  "#contact";

export function externalLinkProps(href: string): {
  target?: string;
  rel?: string;
} {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}
