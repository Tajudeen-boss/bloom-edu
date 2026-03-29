export default function BooksPage() {
  return (
    <main className="container" style={{ padding: "1rem 0 2rem" }}>
      <section className="glass hero">
        <span className="badge">Books Commerce</span>
        <h1 className="title" style={{ fontSize: "clamp(1.8rem,4vw,2.7rem)" }}>
          Montessori Textbook Library & Store
        </h1>
        <p className="subtitle">
          Browse and purchase CEO-authored books for language, numeracy, sensorial, cultural, and world studies.
        </p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: "1rem" }}>
          <article className="card3d"><h3>Smart Categories</h3><p>Find books by domain and difficulty level.</p></article>
          <article className="card3d"><h3>Single/Bulk Orders</h3><p>Buy for individuals and institutions.</p></article>
          <article className="card3d"><h3>Future Digital Bundles</h3><p>Ready for hybrid print + digital offerings.</p></article>
        </div>
      </section>
    </main>
  );
}
