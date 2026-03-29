export default function TrainingPage() {
  return (
    <main className="container" style={{ padding: "1rem 0 2rem" }}>
      <section className="glass hero">
        <span className="badge">Training Subdomain</span>
        <h1 className="title" style={{ fontSize: "clamp(1.8rem,4vw,2.7rem)" }}>
          Montessori Training Programs
        </h1>
        <p className="subtitle">View upcoming cohorts, reserve seats, and pay securely online.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: "1rem" }}>
          <article className="card3d"><h3>Program Catalog</h3><p>Assistant, Lead, and Leadership tracks.</p></article>
          <article className="card3d"><h3>Live Schedule</h3><p>Intake dates, seats, and calendar visibility.</p></article>
          <article className="card3d"><h3>Trainee Dashboard</h3><p>Bookings, receipts, progress, certificates.</p></article>
        </div>
      </section>
    </main>
  );
}
