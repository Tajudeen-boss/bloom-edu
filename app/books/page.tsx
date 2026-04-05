import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { bookCatalogByCategory } from "@/lib/content/catalogData";

export const metadata = {
  title: "Books"
};

export default function BooksPage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding page-hero">
        <div className="container two-column-split">
          <div className="fade-up">
            <p className="eyebrow">Books Subdomain</p>
            <h1>Bloom Edu-care Books Grouped by Subject and Classroom Need.</h1>
            <p>
              We organized your uploaded catalog into Language, Mathematics, Sensorial and Colouring, and Cultural and
              Knowledge of the World so schools can buy by teaching objective.
            </p>
            <p>
              Each title supports structured lesson flow and can be ordered by institutions, classroom teams, and
              families.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request School Price List
            </Link>
          </div>

          <article className="hero-image-card fade-up">
            <Image
              src="/books/catalog/language-for-toddlers.jpeg"
              alt="Bloom Montessori Language for Toddlers book"
              width={1200}
              height={900}
              className="cover-image"
              priority
            />
            <div className="hero-image-caption">
              <p>Curriculum-ready resources for classrooms and learning centers</p>
              <span>Books Catalog</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container category-chip-row fade-up">
          {bookCatalogByCategory.map((category) => (
            <a key={category.key} href={`#${category.key}`} className="chip-link">
              {category.title}
            </a>
          ))}
        </div>
      </section>

      {bookCatalogByCategory.map((category) => (
        <section key={category.key} id={category.key} className="section-padding">
          <div className="container">
            <div className="section-head fade-up">
              <p className="eyebrow">{category.title}</p>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>

            <div className="book-grid">
              {category.books.map((book) => (
                <article key={book.slug} className="surface-card fade-up book-card">
                  <Image src={book.image} alt={book.title} width={900} height={1200} className="cover-image" />
                  <div className="book-meta">
                    <h3>{book.title}</h3>
                    <p>
                      <strong>Level:</strong> {book.level}
                    </p>
                    <p>
                      <strong>Subject:</strong> {book.subject}
                    </p>
                    <p>
                      <strong>Price:</strong> {book.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding section-tint">
        <div className="container">
          <article className="cta-banner fade-up">
            <h2>Need Bulk Orders for a School or Campus Group?</h2>
            <p>
              We support institutional ordering, curriculum guidance, and title recommendations based on classroom
              level.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Books Team
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
