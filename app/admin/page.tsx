export default function AdminPage() {
  return (
    <main className="container" style={{ padding: "2rem 0" }}>
      <h1>Admin CMS</h1>
      <p style={{ color: "var(--muted)" }}>
        Secure operational dashboard for training, commerce, users, and messaging workflows.
      </p>
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Core admin capabilities</h3>
        <ul>
          <li>CRUD for training programs, products, and books.</li>
          <li>Order and booking lifecycle management.</li>
          <li>Operational notifications via email and WhatsApp integration.</li>
        </ul>
      </div>
    </main>
  );
}
