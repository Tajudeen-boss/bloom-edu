import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { blogPosts } from "@/lib/content/siteContent";

export const metadata = {
  title: "Blog"
};

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(isoDate));
}

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding page-hero">
        <div className="container section-head fade-up">
          <p className="eyebrow">Bloom Edu-care Blog</p>
          <h1>Practical Insights for School and Learning Leaders.</h1>
          <p>
            Explore implementation guides, training insights, and operations playbooks designed for schools that want
            measurable, long-term classroom excellence.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container card-grid blog-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="surface-card fade-up">
              <Image src={post.coverImage} alt={post.title} width={1200} height={800} className="cover-image" />
              <div className="meta-row">
                <span>{post.category}</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <p className="role">
                {post.author} • {post.readTime}
              </p>
              <Link href={`/blog/${post.slug}` as Route} className="text-link">
                Read full post
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
