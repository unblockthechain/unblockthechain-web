"use client";

import { Button } from "@/components/ui/button";
import { AUDIT_FORM_HREF, externalLinkProps } from "@/lib/urls";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-50 flex justify-between items-center p-4 md:px-20 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <a
        href="/"
        className="flex items-center gap-2"
        aria-label="Unblock the Chain — Home"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ubc-logo.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9"
          aria-hidden
        />
        <span className="text-xl font-semibold text-foreground">
          Unblock the Chain
        </span>
      </a>
      <nav className="flex items-center gap-4">
        <a
          href="/research"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Research
        </a>
        <Button asChild size="default" className="shrink-0">
          <a href={AUDIT_FORM_HREF} {...externalLinkProps(AUDIT_FORM_HREF)}>
            Request Audit
          </a>
        </Button>
      </nav>
    </header>
  );
}
