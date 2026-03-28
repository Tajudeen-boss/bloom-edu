const services = [
  {
    title: "Training Platform",
    description: "Program catalog, schedules, booking + payment, and trainee dashboard"
  },
  {
    title: "Materials Store",
    description: "Full e-commerce with variants, stock, orders, and fulfillment workflows"
  },
  {
    title: "Textbook Store",
    description: "Book categories and checkout flow for Montessori subjects"
  },
  {
    title: "Admin CMS",
    description: "Secure management for products, books, programs, orders, users, and notifications"
  }
];

export function ServiceCards() {
  return (
    <section className="container" style={{ paddingBottom: "4rem" }}>
      <h2>Platform Services</h2>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
        {services.map((service) => (
          <article className="card" key={service.title}>
            <h3 style={{ marginTop: 0 }}>{service.title}</h3>
            <p style={{ color: "var(--muted)", marginBottom: 0 }}>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
