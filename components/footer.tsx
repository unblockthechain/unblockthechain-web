"use client";

import { Linkedin, Mail, Github } from "lucide-react";

const ADDRESS = "1007 N Orange St. 4th Floor, 2360, Wilmington, DE 19801, New Castle, US";
const EMAIL = "contact@unblockthechain.com";
const LINKEDIN_URL = "https://linkedin.com/company/unblock-the-chain";
const GITHUB_URL = "https://github.com/unblockthechain";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ubc-logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0"
              aria-hidden
            />
            <span className="text-lg font-semibold text-foreground">
              Unblock the Chain
            </span>
          </div>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p className="max-w-xs font-medium text-foreground">Address</p>
            <address className="not-italic">
              {ADDRESS}
            </address>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-foreground"
            >
              {EMAIL}
            </a>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Security%20and%20privacy`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Security &amp; privacy
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Unblock the Chain. Blockchain security for
        enterprises.
      </p>
    </footer>
  );
}
