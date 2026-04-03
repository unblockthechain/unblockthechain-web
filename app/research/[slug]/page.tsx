import { getAllWeeklys, getWeeklyBySlug } from "@/lib/weeklys";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllWeeklys().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getWeeklyBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Unblock the Chain`,
    description: `Weekly crypto research report for ${post.date}`,
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
            className="mb-8 inline-block text-sm text-muted-foreground hover:text-primary"
          >
            &larr; Back to Research
          </a>
          <article className="prose-weekly">
            <MarkdownRenderer content={post.content} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
