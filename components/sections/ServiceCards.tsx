import Image from "next/image";

const services = [
  {
    title: "Training",
    description: "Programs, schedules, secure bookings, and trainee dashboards.",
    image: "/images/training.svg",
    href: "https://training.example.com"
  },
  {
    title: "Materials",
    description: "Premium Montessori materials with variants, inventory, and full checkout.",
    image: "/images/materials.svg",
    href: "https://materials.example.com"
  },
  {
    title: "Books",
    description: "CEO-authored Montessori books for language, numeracy, and more.",
    image: "/images/books.svg",
    href: "https://books.example.com"
  }
];

export function ServiceCards() {
  return (
    <section className="container" id="services" style={{ paddingBottom: "2.5rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Service Highlights</h2>
      <div className="service-grid">
        {services.map((service) => (
          <a href={service.href} key={service.title} className="glass service-card">
            <div className="service-image-wrap">
              <Image src={service.image} alt={service.title} fill className="panel-image" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
