/** Site FAQ — English only (Unblock the Chain). Not loaded from CMS. */

export interface FaqItem {
  id: string;
  title: string;
  description: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "audit-scope",
    title: "What does a smart contract audit include?",
    description:
      "We review your contracts for vulnerabilities, logic errors, and gas optimization. You receive a detailed report with findings, risk levels, and remediation guidance.",
  },
  {
    id: "rwa-tokenization",
    title: "Do you support RWA and tokenization projects?",
    description:
      "Yes. We provide security and compliance-oriented reviews for real-world asset tokenization, including architecture, access control, and regulatory considerations.",
  },
  {
    id: "get-started",
    title: "How do we get started?",
    description:
      "Use the Request audit link to open our intake form, or email us. We’ll align on scope, timeline, and deliverables for your protocol or tokenization project.",
  },
  {
    id: "methodology",
    title: "What is your audit methodology?",
    description:
      "We combine automated analysis with manual review, threat modeling, and industry best practices. Findings are prioritized by severity so your team can remediate effectively.",
  },
  {
    id: "after-audit",
    title: "Do you help after the audit report?",
    description:
      "Yes. We can support remediation review and follow-up checks so fixes are implemented correctly before you go to production.",
  },
];
