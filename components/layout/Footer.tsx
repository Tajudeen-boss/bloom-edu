import Link from "next/link";
import { galleryPhotos } from "@/lib/content/siteContent";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.svg" alt="BLOOM EDU-CARE CONSULT (MONTESSORI HUB) logo" className="footer-logo" />
          <p className="footer-kicker">Bloom Edu-care</p>
          <h3>Top-tier consultancy for schools, educators, and families.</h3>
          <p>
            We partner with ambitious founders and school leaders to strengthen Montessori and non-Montessori learning
            environments with measurable classroom outcomes.
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
          <p>Email: partnerships@bloomedu.co</p>
          <p>Phone: +234 (0) 813 000 2244</p>
          <p>Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
        </div>

        <div>
          <h4>Image Credits</h4>
          <p>Classroom photos are sourced online from Pexels.</p>
          <ul>
            {galleryPhotos.slice(0, 3).map((photo) => (
              <li key={photo.src}>
                <a href={photo.sourceUrl} target="_blank" rel="noreferrer noopener">
                  {photo.photographer}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} Bloom Edu-care. All rights reserved.</p>
        <p>
          Built for premium educational institutions seeking stronger classroom outcomes and sustainable growth.
        </p>
      </div>
    </footer>
  );
}
