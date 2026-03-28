export default function BooksPage() {
  return (
    <main className="container" style={{ padding: "2rem 0" }}>
      <h1>Montessori Textbooks</h1>
      <p style={{ color: "var(--muted)" }}>
        CEO-authored textbooks across language, numeracy, sensorial, cultural studies, and knowledge of the world.
      </p>
      <div className="card">
        <ul>
          <li>Subject-based book discovery and recommendations.</li>
          <li>Retail checkout and institutional bulk ordering.</li>
          <li>Future-ready digital bundle support.</li>
        </ul>
      </div>
    </main>
  );
}
