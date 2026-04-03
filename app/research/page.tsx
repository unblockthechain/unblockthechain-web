import { getAllWeeklys } from "@/lib/weeklys";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Research | Unblock the Chain",
  description:
    "Weekly institutional-grade crypto research from Unblock the Chain.",
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
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/research/${post.slug}`}
                className="block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-card/80"
              >
                <time className="text-sm text-muted-foreground">
                  {new Date(post.date + "T00:00:00").toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
                <h2 className="mt-1 text-lg font-semibold text-foreground">
                  {post.title}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
