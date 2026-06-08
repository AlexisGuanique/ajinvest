import Image from "next/image";
import Link from "next/link";
import { blogContent, type BlogPost } from "@/data/site";
import type { Locale } from "@/lib/locales";

type BlogGridProps = {
  locale: Locale;
};

export function BlogGrid({ locale }: BlogGridProps) {
  const { sectionTitle, posts } = blogContent;
  const blogHref = `/${locale}/blog`;

  return (
    <section className="aj-section">
      <div className="aj-container">
        <h2 className="aj-section-title aj-section-title--center">{sectionTitle}</h2>
        <div className="aj-services-grid">
          {(posts as BlogPost[]).map((post) => {
            const caption = post.description?.trim() || post.title.trim();

            return (
              <article key={post.slug} className="aj-service-card">
                <div className="aj-service-card__image">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="aj-service-card__body">
                  {caption ? (
                    <p className="aj-service-card__title">{caption}</p>
                  ) : null}
                  <Link
                    href={`${blogHref}/${post.slug}`}
                    className="aj-btn aj-btn--outline aj-btn--sm"
                  >
                    {post.status}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
