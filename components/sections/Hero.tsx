import Link from "next/link";

const links = [
  { title: "Training", href: "https://training.example.com", text: "Programs, schedule, booking" },
  { title: "Materials", href: "https://materials.example.com", text: "Premium Montessori materials" },
  { title: "Books", href: "https://books.example.com", text: "CEO-authored textbook store" },
  { title: "Admin Portal", href: "https://admin.example.com", text: "Operations, orders, and CMS" }
];

export function Hero() {
  return (
    <section className="container glass hero">
      <span className="badge">⭐ Montessori Edu-Care Ecosystem</span>
      <h1 className="title">A Premium Montessori Digital Campus for Training, Materials, and Books</h1>
      <p className="subtitle">
        Bloom Edu brings consultancy, educator training, premium classroom tools, and authored Montessori textbooks
        into one elegant platform with dedicated service subdomains.
      </p>

      <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1rem" }}>
        <Link href="https://training.example.com" className="btn btn-primary">
          Start Training Journey
        </Link>
        <Link href="https://materials.example.com" className="btn btn-secondary">
          Shop Montessori Materials
        </Link>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: "1.5rem" }}>
        {links.map((item) => (
          <Link className="card3d" key={item.title} href={item.href}>
            <h3 style={{ margin: "0 0 0.35rem" }}>{item.title}</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
