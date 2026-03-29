export default function MaterialsPage() {
  return (
    <main className="container" style={{ padding: "1rem 0 2rem" }}>
      <section className="glass hero">
        <span className="badge">Materials Commerce</span>
        <h1 className="title" style={{ fontSize: "clamp(1.8rem,4vw,2.7rem)" }}>
          Premium Montessori Materials Store
        </h1>
        <p className="subtitle">Explore beautifully crafted classroom materials with smooth checkout.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: "1rem" }}>
          <article className="card3d"><h3>Variant Catalog</h3><p>Size, finish, bundle and stock visibility.</p></article>
          <article className="card3d"><h3>Secure Checkout</h3><p>Cart, address, payment, and confirmation.</p></article>
          <article className="card3d"><h3>Order Tracking</h3><p>Status updates from paid to delivered.</p></article>
        </div>
      </section>
    </main>
  );
}
