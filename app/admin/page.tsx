import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  bookCatalogByCategory,
  cmsPanels,
  materialCollections,
  trainingCohorts
} from "@/lib/content/catalogData";
import { blogPosts } from "@/lib/content/siteContent";

export const metadata = {
  title: "Admin"
};

export default function AdminPage() {
  const totalBooks = bookCatalogByCategory.reduce((sum, category) => sum + category.books.length, 0);

  return (
    <main>
      <Navbar />

      <section className="section-padding page-hero">
        <div className="container section-head fade-up">
          <p className="eyebrow">CMS and Operations</p>
          <h1>Bloom Edu-care Unified CMS Console</h1>
          <p>
            This admin surface now includes core management scopes for blog publishing, books categorization, training
            cohorts, and materials collections across your subdomain experiences.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request Admin Access Setup
          </Link>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container card-grid service-grid-xl">
          <article className="surface-card fade-up">
            <h3>Blog Entries</h3>
            <p>{blogPosts.length} published insights</p>
          </article>
          <article className="surface-card fade-up">
            <h3>Book Catalog</h3>
            <p>{totalBooks} uploaded titles grouped in 4 categories</p>
          </article>
          <article className="surface-card fade-up">
            <h3>Training Cohorts</h3>
            <p>{trainingCohorts.length} visible enrollment cohorts</p>
          </article>
          <article className="surface-card fade-up">
            <h3>Material Collections</h3>
            <p>{materialCollections.length} curated material bundles</p>
          </article>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">CMS Panels</p>
            <h2>What Can Be Managed From This Admin Scope.</h2>
          </div>

          <div className="card-grid service-grid-xl">
            {cmsPanels.map((panel) => (
              <article key={panel.title} className="surface-card fade-up">
                <h3>{panel.title}</h3>
                <p>{panel.summary}</p>
                <ul>
                  {panel.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container two-column-split">
          <article className="surface-card fade-up">
            <h2>Books Category Mapping</h2>
            <ul>
              {bookCatalogByCategory.map((category) => (
                <li key={category.key}>
                  {category.title}: {category.books.length} titles
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card fade-up">
            <h2>Connected API Endpoints</h2>
            <ul>
              <li>GET /api/blog</li>
              <li>POST /api/blog</li>
              <li>GET /api/books</li>
              <li>POST /api/books</li>
              <li>GET /api/training/programs</li>
              <li>POST /api/training/programs</li>
              <li>GET /api/store/products</li>
              <li>POST /api/store/products</li>
              <li>POST /api/contact</li>
              <li>POST /api/orders</li>
              <li>POST /api/training/bookings</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <article className="cta-banner fade-up">
            <h2>Blog and Catalog Updates Are Now Structured in CMS Panels.</h2>
            <p>
              Your admin surface is aligned for ongoing content updates across blog posts, books, training programs, and
              materials workflows.
            </p>
            <Link href="/blog" className="btn btn-secondary">
              Preview Blog
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
