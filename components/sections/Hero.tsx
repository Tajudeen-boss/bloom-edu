import Image from "next/image";

export function Hero() {
  return (
    <section className="hero-full">
      <Image
        src="/images/hero-montessori.svg"
        alt="Montessori digital campus"
        fill
        priority
        className="hero-bg"
      />

      <div className="container hero-content">
        <span className="badge">Premium Montessori Experience</span>
        <h1 className="title">A Modern Montessori Platform That Feels Like a Real Brand</h1>
        <p className="subtitle">
          Training, e-commerce materials, textbook publishing, and admin operations — all beautifully unified with
          responsive pages and dedicated subdomains.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <a href="https://training.example.com" className="btn btn-primary">
            Start Training
          </a>
          <a href="https://materials.example.com" className="btn btn-secondary">
            Explore Materials
          </a>
        </div>
      </div>
    </section>
  );
}
