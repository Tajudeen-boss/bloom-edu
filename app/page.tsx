import Link from "next/link";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";

export default function HomePage() {
  return (
    <main style={{ paddingBottom: "2rem" }}>
      <header className="container glass nav">
        <strong>Bloom Edu Montessori</strong>
        <nav className="nav-links">
          <Link className="nav-chip" href="#philosophy">
            Philosophy
          </Link>
          <Link className="nav-chip" href="#services">
            Services
          </Link>
          <a className="nav-chip" href="https://training.example.com">
            Training
          </a>
          <a className="nav-chip" href="https://materials.example.com">
            Materials
          </a>
          <a className="nav-chip" href="https://books.example.com">
            Books
          </a>
        </nav>
      </header>

      <Hero />
      <CompanyOverview />
      <ServiceCards />
    </main>
  );
}
