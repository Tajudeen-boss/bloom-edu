import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyOverview />
      <ServiceCards />

      <section className="container" id="testimonials" style={{ marginBottom: "2rem" }}>
        <div className="glass section-panels testimonials">
          <h2>What Families and Schools Say</h2>
          <div className="service-grid">
            <article className="service-card glass">
              <p>“A truly modern Montessori website experience — our parents love it.”</p>
              <strong>— School Founder</strong>
            </article>
            <article className="service-card glass">
              <p>“From booking training to buying materials, everything feels premium and easy.”</p>
              <strong>— Montessori Guide</strong>
            </article>
            <article className="service-card glass">
              <p>“The textbook store made curriculum planning much simpler for our team.”</p>
              <strong>— Academic Coordinator</strong>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
