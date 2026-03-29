const pillars = [
  "Child-centered discovery and independent work cycles",
  "Prepared environments and premium didactic material quality",
  "Teacher mastery through structured, practical training pathways",
  "Integrated language, numeracy, sensorial, cultural, and world knowledge"
];

export function CompanyOverview() {
  return (
    <section className="container glass section" id="philosophy">
      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <article>
          <h2 style={{ marginTop: 0 }}>Our Montessori Philosophy</h2>
          <p style={{ color: "var(--muted)", marginBottom: "1rem" }}>
            We merge the Montessori method with modern digital delivery to provide schools, teachers, and parents a
            complete journey from training to classroom implementation.
          </p>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {pillars.map((pillar) => (
              <div className="card3d" key={pillar}>
                <p style={{ margin: 0 }}>{pillar}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="card3d" style={{ alignSelf: "start" }}>
          <h3 style={{ marginTop: 0 }}>Trusted Results</h3>
          <p style={{ marginBottom: "0.6rem" }}>
            <span className="kpi">1,200+</span>
            <br />
            Trained educators across Montessori environments.
          </p>
          <p style={{ marginBottom: "0.6rem" }}>
            <span className="kpi">98%</span>
            <br />
            Program completion and satisfaction feedback.
          </p>
          <p style={{ margin: 0 }}>
            <span className="kpi">25+</span>
            <br />
            Montessori textbook and material product lines.
          </p>
        </aside>
      </div>
    </section>
  );
}
