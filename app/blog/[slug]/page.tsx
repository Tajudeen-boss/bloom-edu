import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { blogPosts, getBlogPostBySlug } from "@/lib/content/siteContent";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(isoDate));
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found"
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <article className="section-padding page-hero">
        <div className="container blog-article-wrap">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="role">
            {post.author} • {formatDate(post.date)} • {post.readTime}
          </p>

          <Image src={post.coverImage} alt={post.title} width={1600} height={1000} className="cover-image" priority />

          <div className="blog-prose">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <aside className="takeaway-card">
            <h2>Key Takeaways</h2>
            <ul>
              {post.takeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </aside>

          <div className="section-cta">
            <Link href="/blog" className="btn btn-secondary">
              Back to Blog
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Book Consultation
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
