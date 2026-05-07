import Link from "next/link";

const currentYear = new Date().getFullYear();
const whatsappLink =
  "https://wa.me/2348130002244?text=Hello%20Bloomeducare,%20I%20would%20like%20to%20make%20an%20enquiry.";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.svg" alt="BLOOM EDU-CARE CONSULT (MONTESSORI HUB) logo" className="footer-logo" />
          <p className="footer-kicker">Bloomeducare</p>
          <h3>Raise children who excel in character and academics.</h3>
          <p>
            We support school owners, educators, and parents with practical systems that improve teaching quality and
            child outcomes.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/training">Training Programs</Link>
            </li>
            <li>
              <Link href="/materials">Materials Advisory</Link>
            </li>
            <li>
              <Link href="/blog">Insights Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Page</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            WhatsApp:{" "}
            <a href={whatsappLink} target="_blank" rel="noreferrer noopener">
              +234 (0) 813 000 2244
            </a>
          </p>
          <p>
            Email: <a href="mailto:partnerships@bloomedu.co">partnerships@bloomedu.co</a>
          </p>
          <p>Location: Victoria Island, Lagos, Nigeria</p>
        </div>

        <div>
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} Bloom Edu-care. All rights reserved.</p>
        <p>Raising holistic children through intentional education.</p>
      </div>
    </footer>
  );
}
