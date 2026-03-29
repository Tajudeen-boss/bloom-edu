const services = [
  {
    title: "Training Platform",
    description: "Detailed programs, live schedules, secure booking + payment, and trainee progress dashboard.",
    href: "https://training.example.com"
  },
  {
    title: "Materials Store",
    description: "High-end Montessori materials with variants, inventory-aware checkout, and order tracking.",
    href: "https://materials.example.com"
  },
  {
    title: "Books Store",
    description: "CEO-authored Montessori textbooks categorized by learning domain and developmental stage.",
    href: "https://books.example.com"
  },
  {
    title: "Admin CMS",
    description: "Role-based control over products, books, programs, bookings, orders, and communication events.",
    href: "https://admin.example.com"
  }
];

export function ServiceCards() {
  return (
    <section className="container glass section" id="services" style={{ marginBottom: "2rem" }}>
      <h2 style={{ marginTop: 0 }}>Explore Every Service</h2>
      <p style={{ color: "var(--muted)", marginTop: 0 }}>
        Each service runs on its own subdomain while sharing one scalable backend architecture.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}>
        {services.map((service) => (
          <a className="card3d" key={service.title} href={service.href}>
            <h3 style={{ marginTop: 0 }}>{service.title}</h3>
            <p style={{ color: "var(--muted)", marginBottom: 0 }}>{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
