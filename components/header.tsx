"use client";

import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUDIT_FORM_HREF, externalLinkProps } from "@/lib/urls";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-50 flex justify-between items-center p-4 md:px-20 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <a href="/" className="flex items-center gap-2">
        <ShieldCheck className="h-8 w-8 text-primary" aria-hidden />
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
