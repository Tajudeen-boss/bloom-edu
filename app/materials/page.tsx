export default function MaterialsPage() {
  return (
    <main className="container" style={{ padding: "2rem 0" }}>
      <h1>Montessori Materials Store</h1>
      <p style={{ color: "var(--muted)" }}>
        Premium learning materials with full catalog, variants, inventory, and checkout workflow.
      </p>
      <div className="card">
        <ul>
          <li>Category-based browsing and filtering.</li>
          <li>Variant handling (size, finish, bundle).</li>
          <li>Order placement, payment, and fulfillment tracking.</li>
        </ul>
      </div>
    </main>
  );
}
