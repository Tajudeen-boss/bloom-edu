import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { galleryPhotos } from "@/lib/content/siteContent";

const whatsappNumber = "2348130002244";
const whatsappLink =
  `https://wa.me/${whatsappNumber}` +
  "?text=Hello%20Bloomeducare,%20I%20want%20to%20transform%20my%20school%20or%20classroom.";

const services = [
  {
    title: "Teacher Training & Professional Development",
    intro:
      "We equip your teachers with the skills they need to confidently manage classrooms and deliver meaningful learning.",
    points: [
      "Montessori approach in everyday teaching",
      "Classroom management strategies",
      "Child behaviour understanding",
      "Practical teaching techniques"
    ],
    outcome: "More confident, effective, and professional teachers."
  },
  {
    title: "School Growth & Support",
    intro: "We help you build a school system that stands out and delivers results.",
    points: [
      "Montessori integration (regardless of your current setup)",
      "Curriculum structuring",
      "Classroom environment setup",
      "Staff training systems",
      "School growth strategies"
    ],
    outcome: "A structured, reputable, and thriving school."
  },
  {
    title: "Parent Coaching",
    intro: "We support parents in raising balanced, disciplined, and confident children.",
    points: [
      "Understanding child development",
      "Managing behaviour at home",
      "Raising independent and responsible children",
      "Building strong routines"
    ],
    outcome: "Peaceful homes and well-guided children."
  },
  {
    title: "Educational Resources",
    intro: "Access practical tools that support effective teaching and learning.",
    points: [
      "Montessori materials",
      "Early learning resources",
      "Character-building tools",
      "Books and affirmation cards"
    ],
    outcome: "Better learning experiences with the right materials."
  }
];

const signaturePrograms = [
  {
    title: "Grace Before Grades (GBG)",
    intro:
      "A transformational program designed to help schools raise children with strong character alongside academic excellence.",
    points: [
      "Builds discipline, respect, and responsibility",
      "Easy to integrate into your school timetable",
      "Practical and classroom-friendly"
    ],
    footer: "Perfect for: Schools that want more than just academic results."
  },
  {
    title: "Teacher Transformation Training",
    intro: "A hands-on training that shifts your teachers from basic teaching to impactful, professional delivery.",
    points: [
      "Classroom control without shouting",
      "Engaging children meaningfully",
      "Understanding learning differences"
    ],
    footer: "Focus Areas designed for real classroom outcomes."
  },
  {
    title: "School Setup & Montessori Infusion",
    intro:
      "Starting a school or improving your current system? We guide you step-by-step to build a functional, child-centered learning environment, even with limited resources.",
    points: [],
    footer: "Built for schools that want structure, quality, and steady growth."
  }
];

const reasonsSchoolsChooseBloomeducare = [
  "Practical, not theoretical",
  "Rooted in real classroom experience",
  "Adaptable to Nigerian school systems",
  "Focused on both character and academics",
  "Proven strategies that deliver visible results"
];

const clientResults = [
  "Improved teacher performance",
  "Better classroom management",
  "Increased parent satisfaction",
  "Noticeable child development",
  "Stronger school structure and reputation"
];

const insightTopics = [
  "Montessori in real classrooms",
  "Handling children's behaviour",
  "Building strong school systems",
  "Raising readers and independent children"
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" }
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero-section section-padding">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <p className="eyebrow">Bloomeducare</p>
            <h1>Raise Children Who Excel in Character and Academics</h1>
            <p>
              We help school owners, educators, and parents build effective early years systems using practical
              Montessori and child-centered strategies.
            </p>
            <p>
              From teacher training to school growth and educational resources, Bloomeducare equips you with what
              truly works in today&apos;s classroom.
            </p>
            <div className="action-row">
              <Link href="/contact" className="btn btn-primary">
                Book a Training
              </Link>
              <Link href="/books" className="btn btn-secondary">
                Explore Resources
              </Link>
              <a href={whatsappLink} className="btn btn-whatsapp" target="_blank" rel="noreferrer noopener">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <article className="hero-image-card fade-up">
            <Image
              src={galleryPhotos[0].src}
              alt="Bloomeducare training and classroom practice session"
              width={1200}
              height={900}
              priority
              className="cover-image"
            />
            <div className="hero-image-caption">
              <p>Transforming classrooms through practical, child-centered support.</p>
              <a href={galleryPhotos[0].sourceUrl} target="_blank" rel="noreferrer noopener">
                Photo source
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding section-compact">
        <div className="container">
          <div className="trust-banner fade-up">
            <p>Trusted by schools, educators, and parents across Nigeria.</p>
            <p>Transforming classrooms. Strengthening teachers. Raising holistic children.</p>
          </div>
        </div>
      </section>

      <section className="section-padding section-tint" id="about">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">About Bloomeducare</p>
            <h2>We Are Raising a New Standard for Early Years Education</h2>
          </div>
          <div className="about-copy fade-up">
            <p>
              Bloomeducare was born from real classroom experience and a deep understanding of what children truly
              need to thrive.
            </p>
            <p>
              Many schools struggle with outdated teaching methods, untrained educators, and systems that do not
              support the whole child. The result is children who may pass exams but lack confidence, discipline, and
              strong character.
            </p>
            <p>At Bloomeducare, we bridge that gap.</p>
            <p>
              We work with school owners, educators, and parents to implement practical, effective, and child-centered
              approaches rooted in Montessori principles and global best practices.
            </p>
            <p>
              With experience as classroom teachers, school leaders, and Montessori trainers, we do not just teach
              theory. We provide solutions that work in real classrooms.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" id="services">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">What We Do</p>
            <h2>How We Support You</h2>
          </div>

          <div className="card-grid service-grid-xl">
            {services.map((service) => (
              <article key={service.title} className="surface-card fade-up">
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="result-line">
                  <strong>Outcome:</strong> {service.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Signature Programs</p>
            <h2>Our Signature Solutions</h2>
          </div>

          <div className="card-grid program-grid">
            {signaturePrograms.map((program) => (
              <article key={program.title} className="surface-card fade-up">
                <h3>{program.title}</h3>
                <p>{program.intro}</p>
                {program.points.length > 0 ? (
                  <ul>
                    {program.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="result-line">{program.footer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Why Bloomeducare</p>
            <h2>Why Schools Choose Bloomeducare</h2>
          </div>
          <div className="card-grid value-grid">
            {reasonsSchoolsChooseBloomeducare.map((reason) => (
              <article key={reason} className="surface-card fade-up">
                <p>{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tint" id="testimonials">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Results</p>
            <h2>What Our Clients Experience</h2>
          </div>
          <article className="surface-card fade-up">
            <p>Our clients report:</p>
            <ul>
              {clientResults.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
            <p className="result-line">
              <em>Add real testimonials here as you gather them.</em>
            </p>
          </article>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Insights</p>
            <h2>Learn, Grow, and Lead Better</h2>
            <p>
              We share practical insights to help you become more effective in your role as a school owner, educator,
              or parent.
            </p>
          </div>
          <div className="card-grid value-grid">
            {insightTopics.map((topic) => (
              <article key={topic} className="surface-card fade-up">
                <p>{topic}</p>
              </article>
            ))}
          </div>
          <div className="section-cta fade-up">
            <Link href="/blog" className="btn btn-secondary">
              Explore Insights
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding section-tint">
        <div className="container">
          <article className="cta-banner fade-up">
            <h2>Ready to Transform Your School or Classroom?</h2>
            <p>Stop struggling with ineffective systems and untrained staff.</p>
            <p>
              Let us help you build a school that delivers both character and academic excellence.
            </p>
            <div className="action-row">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/training" className="btn btn-secondary">
                Join Our Next Training
              </Link>
              <Link href="/books" className="btn btn-secondary">
                Shop Resources
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding" id="contact">
        <div className="container">
          <div className="section-head fade-up">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s Work Together</h2>
            <p>
              Whether you are a school owner, educator, or parent, Bloomeducare is here to support your journey.
            </p>
          </div>
          <div className="card-grid value-grid">
            <article className="surface-card fade-up">
              <h3>Reach Us</h3>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href={whatsappLink} target="_blank" rel="noreferrer noopener">
                  +234 (0) 813 000 2244
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:partnerships@bloomedu.co">partnerships@bloomedu.co</a>
              </p>
              <p>
                <strong>Location:</strong> Victoria Island, Lagos, Nigeria
              </p>
              <div className="action-row">
                <a href={whatsappLink} className="btn btn-whatsapp" target="_blank" rel="noreferrer noopener">
                  Message Us on WhatsApp
                </a>
              </div>
            </article>

            <article className="surface-card fade-up">
              <h3>Social Media</h3>
              <p>Follow Bloomeducare for practical classroom tips, updates, and training announcements.</p>
              <ul>
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer noopener">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noreferrer noopener">
        WhatsApp Us
      </a>

      <Footer />
    </main>
  );
}
