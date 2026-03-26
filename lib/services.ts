import { AUDIT_FORM_HREF } from "@/lib/urls";

export interface Service {
  id: string;
  name: string;
  description: string;
  href: string;
  icon?: string;
}

export const SERVICES: Service[] = [
  {
    id: "smart-contract-audit",
    name: "Smart Contract Audits",
    description:
      "Comprehensive security reviews of smart contracts and protocols. Identify vulnerabilities before deployment.",
    href: AUDIT_FORM_HREF,
  },
  {
    id: "rwa-tokenization",
    name: "RWA & Tokenization",
    description:
      "Security and compliance for real-world asset tokenization. Architecture review and risk assessment.",
    href: AUDIT_FORM_HREF,
  },
  {
    id: "web3-security",
    name: "Web3 Security",
    description:
      "End-to-end blockchain security: protocol design, key management, and incident response for Web3 teams.",
    href: AUDIT_FORM_HREF,
  },
];
