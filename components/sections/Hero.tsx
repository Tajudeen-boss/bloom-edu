import Link from "next/link";

const links = [
  { title: "Training", href: "https://training.example.com" },
  { title: "Materials", href: "https://materials.example.com" },
  { title: "Books", href: "https://books.example.com" },
  { title: "Admin Portal", href: "https://admin.example.com" }
];

export function Hero() {
  return (
    <section className="container" style={{ padding: "4rem 0 2rem" }}>
      <span className="badge">Montessori. Prepared Environment. Lifelong Learning.</span>
      <h1 style={{ fontSize: "2.5rem", margin: "1rem 0" }}>
        Bloom Edu Montessori Consultancy & Edu-care Platform
      </h1>
      <p style={{ color: "var(--muted)", maxWidth: 760 }}>
        We train Montessori educators, supply premium classroom materials, and publish curriculum-aligned books
        authored by our CEO for language, numeracy, sensorial, culture, and world knowledge.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", marginTop: "1.5rem" }}>
        {links.map((item) => (
          <Link className="card" key={item.title} href={item.href}>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p style={{ color: "var(--muted)", marginBottom: 0 }}>Open dedicated subdomain</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
