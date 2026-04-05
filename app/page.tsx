import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  blogPosts,
  credibilityPoints,
  faqItems,
  galleryPhotos,
  heroStats,
  methodSteps,
  programs,
  serviceCards,
  testimonials
} from "@/lib/content/siteContent";

const featuredPosts = blogPosts.slice(0, 3);

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(isoDate));
}

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero-section section-padding">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <p className="eyebrow">Top-Tier Educational Consultancy Agency</p>
            <h1>We Build High-Performing Schools and Learning Programs With Real Results.</h1>
            <p>
              Bloom Edu-care partners with founders, school leaders, and educator teams across Montessori and
              non-Montessori settings. From classroom setup to training, leadership coaching, and family partnership,
              we help you build a trusted educational brand.
            </p>
            <div className="action-row">
              <Link href="/contact" className="btn btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Explore Our Approach
              </Link>
            </div>
            <div className="stats-grid" role="list" aria-label="Bloom Edu-care impact metrics">
              {heroStats.map((stat) => (
                <article key={stat.label} className="stat-card" role="listitem">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <article className="hero-image-card fade-up">
            <Image
              src={galleryPhotos[0].src}
              alt={galleryPhotos[0].alt}
              width={1200}
              height={900}
              priority
              className="cover-image"
            />
            <div className="hero-image-caption">
              <p>Active classroom learning in action</p>
              <a href={galleryPhotos[0].sourceUrl} target="_blank" rel="noreferrer noopener">
                Source: {galleryPhotos[0].sourceLabel}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding section-compact">
        <div className="container">
          <div className="trust-banner fade-up">
            {credibilityPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" id="services">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Core Services</p>
            <h2>Everything You Need to Launch, Strengthen, and Scale.</h2>
            <p>
              Our consultancy supports each stage of your school journey with practical systems, not just theory. We
              combine strategic planning with implementation support your team can sustain.
            </p>
          </div>

          <div className="card-grid service-grid-xl">
            {serviceCards.map((service) => (
              <article key={service.title} className="surface-card fade-up">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.href as Route} className="text-link">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tint" id="about">
        <div className="container two-column-split">
          <div className="fade-up">
            <p className="eyebrow">Why Schools Choose Bloom Edu-care</p>
            <h2>Consultancy Built for Leaders Who Care About Learning Quality Across Models.</h2>
            <p>
              We are not a slide-deck consultancy. We work alongside your team in the realities of school operations:
              timetables, classrooms, staffing constraints, parent expectations, and measurable outcomes.
            </p>
            <p>
              Our clients come to us for long-term excellence, not quick fixes. We help build environments where
              children concentrate deeply, teachers teach confidently, and leadership can scale without losing quality.
            </p>
            <Link href="/about" className="btn btn-secondary">
              Read Our Story
            </Link>
          </div>
          <article className="image-stack fade-up">
            <Image
              src={galleryPhotos[3].src}
              alt={galleryPhotos[3].alt}
              width={1200}
              height={900}
              className="cover-image"
            />
            <Image
              src={galleryPhotos[1].src}
              alt={galleryPhotos[1].alt}
              width={1200}
              height={900}
              className="cover-image floating-image"
            />
          </article>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Our Method</p>
            <h2>A Structured Delivery Model That Keeps Progress Visible.</h2>
          </div>
          <div className="card-grid method-grid">
            {methodSteps.map((step) => (
              <article key={step.title} className="surface-card fade-up">
                <p className="step-pill">{step.title}</p>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Programs</p>
            <h2>Signature Learning Pathways for Teachers and Leaders.</h2>
          </div>
          <div className="card-grid program-grid">
            {programs.map((program) => (
              <article key={program.title} className="surface-card fade-up">
                <h3>{program.title}</h3>
                <p>
                  <strong>Audience:</strong> {program.audience}
                </p>
                <p>
                  <strong>Format:</strong> {program.format}
                </p>
                <p>
                  <strong>Duration:</strong> {program.duration}
                </p>
                <p>
                  <strong>Outcome:</strong> {program.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Classroom Gallery</p>
            <h2 id="gallery-title">Teachers and Children Learning Through Hands-On Materials.</h2>
            <p>
              A visual look at guided independence and teacher-supported learning routines across early years classroom
              settings.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryPhotos.map((photo) => (
              <figure key={photo.src} className="gallery-item fade-up">
                <Image src={photo.src} alt={photo.alt} width={1200} height={900} className="cover-image" />
                <figcaption>
                  <span>{photo.caption}</span>
                  <a href={photo.sourceUrl} target="_blank" rel="noreferrer noopener">
                    {photo.photographer} via {photo.sourceLabel}
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tint" id="testimonials">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Testimonials</p>
            <h2>Leaders Trust Us to Deliver Classroom Transformation.</h2>
          </div>
          <div className="card-grid testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="surface-card fade-up">
                <p className="quote">“{testimonial.quote}”</p>
                <p className="author">{testimonial.author}</p>
                <p className="role">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">From Our Blog</p>
            <h2>Ideas, Playbooks, and Practical Advice for School Improvement.</h2>
          </div>
          <div className="card-grid blog-grid">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="surface-card fade-up">
                <Image src={post.coverImage} alt={post.title} width={1200} height={800} className="cover-image" />
                <div className="meta-row">
                  <span>{post.category}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}` as Route} className="text-link">
                  Read article
                </Link>
              </article>
            ))}
          </div>
          <div className="section-cta fade-up">
            <Link href="/blog" className="btn btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container faq-wrap">
          <div className="section-head fade-up">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2>Everything You Need Before Partnering With Us.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item fade-up">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <article className="cta-banner fade-up">
            <h2>Ready to Build a Top-Tier School Experience?</h2>
            <p>
              Book a strategy call with our consultancy team and get a practical roadmap for your classrooms,
              leadership systems, and teacher development plan.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
