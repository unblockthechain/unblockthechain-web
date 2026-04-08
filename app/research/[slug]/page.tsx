import type { Metadata } from "next";
import { getAllWeeklys, getWeeklyBySlug } from "@/lib/weeklys";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { markdownExcerpt } from "@/lib/markdown-excerpt";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllWeeklys().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getWeeklyBySlug(params.slug);
  if (!post) return {};
  const title = `${post.title} | ${SITE_NAME}`;
  const excerpt = markdownExcerpt(post.content);
  const description =
    excerpt ||
    `Weekly crypto research from ${SITE_NAME} — report for ${post.date}.`;
  const path = `/research/${post.slug}`;
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: `${post.date}T12:00:00.000Z`,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { title, description, images: [DEFAULT_OG_IMAGE] },
  };
}

export default function WeeklyPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getWeeklyBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-16 md:px-20">
        <div className="mx-auto max-w-4xl">
          <a
            href="/research"
            className="mb-6 inline-block text-sm text-muted-foreground hover:text-primary"
          >
            &larr; Back to Research
          </a>
          <Separator className="mb-8" />
          <Card className="border-border/80 bg-card/40 shadow-sm">
            <CardContent className="p-6 pt-8 md:p-10 md:pt-10">
              <article className="prose-weekly">
                <MarkdownRenderer content={post.content} />
              </article>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
