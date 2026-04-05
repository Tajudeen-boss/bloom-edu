import Link from "next/link";
import { navItems } from "@/lib/content/siteContent";

export function Navbar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand" aria-label="Bloom Edu-care home page">
          <img src="/images/logo.svg" alt="BLOOM EDU-CARE CONSULT (MONTESSORI HUB) logo" className="brand-logo" />
          <span className="brand-sub">BLOOM EDU-CARE CONSULT (MONTESSORI HUB)</span>
        </Link>

        <nav className="menu" aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} className="menu-link">
              {item.label}
            </a>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-primary">
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
