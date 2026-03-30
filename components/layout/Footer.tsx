export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h3>Bloom Edu Montessori</h3>
          <p>Consultancy, educator training, premium materials, and textbooks in one platform.</p>
        </div>
        <div>
          <h4>Subdomains</h4>
          <ul>
            <li>training.example.com</li>
            <li>materials.example.com</li>
            <li>books.example.com</li>
            <li>admin.example.com</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: hello@bloomedu.example</p>
          <p>WhatsApp: +1 (000) 000-0000</p>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Bloom Edu. All rights reserved.</div>
    </footer>
  );
}
