export function CompanyOverview() {
  return (
    <section className="container" style={{ padding: "1rem 0 2rem" }}>
      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <article className="card">
          <h2 style={{ marginTop: 0 }}>Our Montessori Approach</h2>
          <p>
            The organization blends teacher development, purpose-built materials, and curriculum publishing into one
            ecosystem. Our approach follows Montessori pillars: independence, movement, hands-on exploration, and
            respect for each child’s developmental rhythm.
          </p>
          <ul>
            <li>Certified training pathways for assistant, lead, and school leadership roles.</li>
            <li>Curated materials designed for sensorial sequencing and precision of movement.</li>
            <li>CEO-authored textbooks spanning language, math, cultural studies, and world knowledge.</li>
          </ul>
        </article>
        <aside className="card">
          <h3 style={{ marginTop: 0 }}>Testimonials</h3>
          <p>“Our guides became more confident within two terms.” — School Director</p>
          <p>“Material quality and lesson flow are exceptional.” — Montessori Lead Teacher</p>
        </aside>
      </div>
    </section>
  );
}
