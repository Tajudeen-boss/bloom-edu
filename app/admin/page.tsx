export default function AdminPage() {
  return (
    <main className="container" style={{ padding: "1rem 0 2rem" }}>
      <section className="glass hero">
        <span className="badge">Admin Subdomain</span>
        <h1 className="title" style={{ fontSize: "clamp(1.8rem,4vw,2.7rem)" }}>
          Platform Operations & CMS
        </h1>
        <p className="subtitle">Manage products, books, orders, training, bookings, and user data from one secure hub.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: "1rem" }}>
          <article className="card3d"><h3>Full CRUD</h3><p>Training programs, products, books, categories.</p></article>
          <article className="card3d"><h3>Lifecycle Controls</h3><p>Update booking and order statuses instantly.</p></article>
          <article className="card3d"><h3>Notifications</h3><p>Postmark emails and WhatsApp alert workflows.</p></article>
        </div>
      </section>
    </main>
  );
}
