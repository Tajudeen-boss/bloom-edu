import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding page-hero">
        <div className="container section-head fade-up">
          <p className="eyebrow">Contact Bloom Edu-care</p>
          <h1>Book a Consultation and Let’s Plan Your School Growth.</h1>
          <p>
            Share your goals with us and our team will send a practical next-step plan for your training, classroom
            setup, books, and consultancy priorities.
          </p>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container contact-layout">
          <article className="surface-card fade-up">
            <h2>Send Us a Message</h2>
            <p>
              We usually respond within one business day. For urgent requests, include your preferred phone/WhatsApp
              contact.
            </p>
            <ContactForm />
          </article>

          <article className="surface-card fade-up">
            <h2>Our Office</h2>
            <p>BLOOM EDU-CARE CONSULT (MONTESSORI HUB)</p>
            <p>Victoria Island, Lagos, Nigeria</p>
            <p>Email: partnerships@bloomedu.co</p>
            <p>Phone: +234 (0) 813 000 2244</p>
            <div className="map-frame" aria-label="Bloom Edu-care office location map">
              <iframe
                title="Bloom Edu-care office map"
                src="https://www.google.com/maps?q=Victoria+Island+Lagos+Nigeria&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
