import type { Metadata } from "next";
import { getAllWeeklys } from "@/lib/weeklys";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const title = `Research | ${SITE_NAME}`;
const description =
  "Weekly institutional-grade crypto research from Unblock the Chain.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/research" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/research`,
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { title, description, images: [DEFAULT_OG_IMAGE] },
};

export default function ResearchPage() {
  const posts = getAllWeeklys();

  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-16 md:px-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">Research</h1>
          <p className="mb-12 text-muted-foreground">
            Weekly institutional-grade crypto market research.
          </p>

          <div className="space-y-4">
            {posts.map((post) => {
              const formatted = new Date(
                post.date + "T00:00:00"
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return (
                <a
                  key={post.slug}
                  href={`/research/${post.slug}`}
                  className="group block"
                >
                  <Card className="h-full border-border bg-card transition-colors hover:border-primary/40 hover:bg-card/90">
                    <CardContent className="p-6">
                      <Badge
                        variant="secondary"
                        className="mb-3 font-normal text-muted-foreground"
                      >
                        {formatted}
                      </Badge>
                      <h2 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary">
                        {post.title}
                      </h2>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
