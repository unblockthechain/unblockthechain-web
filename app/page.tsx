import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";
import SimpleSlider from "@/components/ui/carousel";
import { SERVICES } from "@/lib/services";
import { FAQ_ITEMS } from "@/lib/faq";
import { AUDIT_FORM_HREF, externalLinkProps } from "@/lib/urls";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/40 px-4 pb-16 pt-8 md:px-20 md:pb-24 md:pt-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:max-w-xl">
                Web3 security audits that protect your protocol
              </h1>
              <p className="mb-8 max-w-lg text-lg text-muted-foreground md:text-xl">
                Unblock the Chain provides enterprise-grade blockchain security:
                smart contract audits, RWA tokenization assurance, and Web3
                security for teams that can’t afford to ship vulnerable code.
              </p>
              <div className="hero-cta-row flex flex-wrap gap-4">
                <a
                  href={AUDIT_FORM_HREF}
                  {...externalLinkProps(AUDIT_FORM_HREF)}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Request Audit
                </a>
                <a
                  href="#services"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="hero-services-mobile lg:hidden w-full">
              <SimpleSlider items={SERVICES} />
            </div>
            <div className="hero-services-desktop hidden lg:grid lg:max-w-2xl lg:grid-cols-1 lg:gap-4 xl:grid-cols-3">
              {SERVICES.map((service) => (
                <Card
                  key={service.id}
                  className="flex flex-col justify-between border-border/50 bg-card/80 transition-colors hover:border-primary/50"
                >
                  <a
                    href={service.href}
                    {...externalLinkProps(service.href)}
                    className="flex h-full flex-col"
                  >
                    <CardHeader className="gap-3">
                      <CardTitle className="text-foreground">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <span className="text-primary hover:underline">
                        Learn more →
                      </span>
                    </CardFooter>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="services"
          className="border-b border-border/40 px-4 py-16 md:px-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
              How we work
            </h2>
            <ul className="mx-auto flex max-w-2xl flex-col gap-10 md:gap-12">
              <li className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                  1
                </span>
                <div>
                  <p className="text-lg font-medium text-foreground">
                    Scope &amp; engagement
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We define scope, timeline, and deliverables for your smart
                    contracts, RWA setup, or Web3 stack.
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                  2
                </span>
                <div>
                  <p className="text-lg font-medium text-foreground">
                    Security review
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our team performs a thorough audit and documents
                    vulnerabilities, risks, and recommendations.
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                  3
                </span>
                <div>
                  <p className="text-lg font-medium text-foreground">
                    Report &amp; follow-up
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You receive a clear report and optional remediation support
                    so you can ship with confidence.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-16 md:px-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="border-t border-border/40 px-4 py-16 md:px-20 md:py-24"
        >
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card/50 p-8 text-center md:p-12">
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              Ready to secure your protocol?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Tell us about your project in the form below. We’ll get back with
              scope and timeline.
            </p>
            <a
              href={AUDIT_FORM_HREF}
              {...externalLinkProps(AUDIT_FORM_HREF)}
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Request audit
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Prefer email?{" "}
              <a
                href="mailto:contact@unblockthechain.com"
                className="text-primary underline underline-offset-4 hover:text-primary/90"
              >
                contact@unblockthechain.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
