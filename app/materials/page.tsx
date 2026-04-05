import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { materialCollections } from "@/lib/content/catalogData";

export const metadata = {
  title: "Materials"
};

const materialsWorkflow = [
  {
    title: "Classroom Needs Audit",
    detail: "We assess your current shelf setup, missing learning materials, and stage-specific priorities."
  },
  {
    title: "Procurement Plan",
    detail: "You receive a practical purchase plan that aligns quality, budget, and curriculum sequencing."
  },
  {
    title: "Deployment & Setup",
    detail: "We support unpacking, shelf structuring, and environment readiness before school launch or transition."
  },
  {
    title: "Training Alignment",
    detail: "Guides are coached on presentation sequence and usage standards for each material set."
  }
];

export default function MaterialsPage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding page-hero">
        <div className="container two-column-split">
          <div className="fade-up">
            <p className="eyebrow">Materials Subdomain</p>
            <h1>Educational Materials Planning, Sourcing, and Setup in One Flow.</h1>
            <p>
              We help schools procure the right learning materials for each stage of classroom development without
              overspending or sacrificing quality.
            </p>
            <p>
              Our process combines procurement strategy, setup guidance, and training alignment so materials lead to
              real classroom gains across Montessori and broader learning programs.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start Materials Planning
            </Link>
          </div>

          <article className="hero-image-card fade-up">
            <Image
              src="https://images.pexels.com/photos/31864403/pexels-photo-31864403.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Children working with Montessori manipulatives in classroom"
              width={1200}
              height={900}
              className="cover-image"
            />
            <div className="hero-image-caption">
              <p>High-quality materials support deeper concentration and independence</p>
              <a
                href="https://www.pexels.com/photo/kids-learning-through-montessori-activities-31864403/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Source: Pexels
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Featured Collections</p>
            <h2>Material Bundles by Learning Area.</h2>
          </div>

          <div className="card-grid service-grid-xl">
            {materialCollections.map((collection) => (
              <article key={collection.title} className="surface-card fade-up">
                <h3>{collection.title}</h3>
                <p>{collection.detail}</p>
                <p>
                  <strong>Best for:</strong> {collection.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Delivery Workflow</p>
            <h2>How We Execute Materials Projects.</h2>
          </div>
          <div className="card-grid method-grid">
            {materialsWorkflow.map((step) => (
              <article key={step.title} className="surface-card fade-up">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container">
          <article className="cta-banner fade-up">
            <h2>Need a Full Classroom Materials Proposal?</h2>
            <p>
              We can produce a stage-by-stage classroom proposal with quantities, sequencing notes, and rollout timing
              recommendations.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request Proposal
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
