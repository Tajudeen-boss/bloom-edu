import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { methodSteps, teamMembers } from "@/lib/content/siteContent";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding page-hero">
        <div className="container two-column-split">
          <div className="fade-up">
            <p className="eyebrow">About Bloom Edu-care</p>
            <h1>We Help Schools and Learning Organizations Move From Vision to Excellence.</h1>
            <p>
              Bloom Edu-care is a specialist educational consultancy agency serving Montessori and non-Montessori
              schools, learning centers, and educational groups. We support teams that want stronger classroom
              delivery, better teacher performance, and sustainable institutional growth.
            </p>
            <p>
              Our team blends strategy with implementation support, so your school gets practical systems your people
              can actually run every day.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Talk to Our Team
            </Link>
          </div>

          <article className="hero-image-card fade-up">
            <Image
              src="https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Teacher leading children in a collaborative learning activity"
              width={1200}
              height={900}
              className="cover-image"
            />
            <div className="hero-image-caption">
              <p>Learning environments built for concentration and joy</p>
              <a
                href="https://www.pexels.com/photo/children-and-teacher-painting-in-classroom-8535198/"
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
        <div className="container card-grid value-grid">
          <article className="surface-card fade-up">
            <p className="eyebrow">Mission</p>
            <h2>Raise the quality bar for education delivery.</h2>
            <p>
              We exist to help institutions create calm, beautiful, academically strong environments where learners
              build confidence, independence, and strong thinking habits.
            </p>
          </article>

          <article className="surface-card fade-up">
            <p className="eyebrow">Vision</p>
            <h2>Become the most trusted education growth partner.</h2>
            <p>
              We are building a future where schools and learning organizations can access world-class consultancy and
              practical support without guesswork or disconnected training.
            </p>
          </article>

          <article className="surface-card fade-up">
            <p className="eyebrow">Values</p>
            <h2>Clarity. Quality. Partnership.</h2>
            <p>
              We believe progress happens when teams are clear on expectations, supported by quality systems, and
              treated as long-term partners.
            </p>
          </article>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">How We Work</p>
            <h2>A Practical Advisory Rhythm for Real School Operations.</h2>
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
            <p className="eyebrow">Leadership Team</p>
            <h2>Experienced Professionals Focused on Classroom Impact.</h2>
          </div>
          <div className="card-grid service-grid-xl">
            {teamMembers.map((member) => (
              <article key={member.name} className="surface-card fade-up">
                <h3>{member.name}</h3>
                <p className="author">{member.role}</p>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <article className="cta-banner fade-up">
            <h2>Let’s Build Your Next Stage of School Growth.</h2>
            <p>
              Whether you are launching a new campus or strengthening existing classrooms, we can help you design a
              clear roadmap with measurable milestones.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
