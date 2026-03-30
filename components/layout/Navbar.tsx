import Link from "next/link";

export function Navbar() {
  return (
    <header className="topbar glass">
      <div className="container topbar-inner">
        <Link href="/" className="brand">
          Bloom Edu
        </Link>

        <nav className="menu">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="https://training.example.com" className="btn btn-primary">
          Enroll Now
        </a>
      </div>
    </header>
  );
}
