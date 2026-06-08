import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { blogContent, type BlogPost, type HeroContent } from "@/data/site";
import type { Locale } from "@/lib/locales";

const blogPosts = blogContent.posts;

type PageProps = { params: Promise<{ locale: string; slug: string }> };

function heroFromPostTitle(title: string, fallback: string): HeroContent {
  return { title: title.trim() || fallback };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug) as BlogPost | undefined;
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug) as BlogPost | undefined;

  if (!post) notFound();

  return (
    <>
      <PageHero
        locale={locale as Locale}
        content={heroFromPostTitle(post.title, post.description ?? post.title)}
      />

      <article className="aj-section">
        <div className="aj-container" style={{ maxWidth: "48rem" }}>
          <Link
            href={`/${locale}/blog`}
            className="text-sm hover:underline"
            style={{ color: "var(--aj-accent)" }}
          >
            ← Back to Blog
          </Link>
          <p
            className="mt-6 text-sm font-semibold uppercase tracking-wide"
            style={{ color: "var(--aj-accent)" }}
          >
            {post.status}
          </p>
          {post.title ? (
            <h2 className="aj-section-title mt-4">{post.title}</h2>
          ) : null}
          <div className="mt-8 overflow-hidden rounded">
            <img
              src={post.image.src}
              alt={post.image.alt}
              className="w-full object-cover"
            />
          </div>
          {post.description ? (
            <p className="aj-body-text mt-6 text-lg">{post.description}</p>
          ) : null}
        </div>
      </article>
    </>
  );
}
