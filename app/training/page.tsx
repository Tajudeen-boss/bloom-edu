import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { trainingCohorts, trainingHighlights } from "@/lib/content/catalogData";
import { programs } from "@/lib/content/siteContent";

export const metadata = {
  title: "Training"
};

export default function TrainingPage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding page-hero">
        <div className="container two-column-split">
          <div className="fade-up">
            <p className="eyebrow">Training Subdomain</p>
            <h1>Teacher Training Programs Built for Classroom Results.</h1>
            <p>
              We provide structured professional development for assistants, lead educators, and school leaders through
              mentor-led pathways, real classroom demonstrations, and coaching accountability.
            </p>
            <p>
              Your team can enroll in open cohorts or private school-based cohorts with customized implementation
              support.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book Training Consultation
            </Link>
          </div>

          <article className="hero-image-card fade-up">
            <Image
              src="https://images.pexels.com/photos/8535165/pexels-photo-8535165.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Teacher guiding a group of children in classroom activity"
              width={1200}
              height={900}
              className="cover-image"
            />
            <div className="hero-image-caption">
              <p>Coaching-focused training for lasting quality improvement</p>
              <a
                href="https://www.pexels.com/photo/teacher-and-children-doing-craft-activity-8535165/"
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
            <p className="eyebrow">Training Benefits</p>
            <h2>Relevant Support Beyond Workshop Sessions.</h2>
          </div>
          <div className="card-grid service-grid-xl">
            {trainingHighlights.map((highlight) => (
              <article key={highlight.title} className="surface-card fade-up">
                <h3>{highlight.title}</h3>
                <p>{highlight.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Program Tracks</p>
            <h2>Choose the Right Pathway for Your Team Stage.</h2>
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

      <section className="section-padding section-tint">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Upcoming Cohorts</p>
            <h2>Current Enrollment Calendar</h2>
          </div>

          <div className="card-grid service-grid-xl">
            {trainingCohorts.map((cohort) => (
              <article key={`${cohort.program}-${cohort.nextStart}`} className="surface-card fade-up">
                <h3>{cohort.program}</h3>
                <p>
                  <strong>Next Start:</strong> {cohort.nextStart}
                </p>
                <p>
                  <strong>Duration:</strong> {cohort.duration}
                </p>
                <p>
                  <strong>Format:</strong> {cohort.format}
                </p>
                <p>
                  <strong>Status:</strong> {cohort.status}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <article className="cta-banner fade-up">
            <h2>Need an In-House Training Cohort for Your School?</h2>
            <p>
              We run private cohorts for schools and education groups with aligned coaching plans, leadership reporting,
              and classroom follow-through support.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request Private Cohort
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
