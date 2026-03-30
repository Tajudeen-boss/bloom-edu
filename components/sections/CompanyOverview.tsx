import Image from "next/image";

export function CompanyOverview() {
  return (
    <section className="container section-panels" id="about">
      <article className="glass panel panel-wide">
        <div>
          <h2>Montessori Consultancy with Real Classroom Impact</h2>
          <p>
            We support institutions and individuals with evidence-based Montessori implementation, teacher coaching,
            and practical pathways for curriculum success.
          </p>
          <ul>
            <li>Teacher upskilling and certification pathways.</li>
            <li>Prepared environment design and material planning.</li>
            <li>Age-appropriate progression across key learning areas.</li>
          </ul>
        </div>
        <div className="panel-image-wrap">
          <Image src="/images/training.svg" alt="Montessori training visual" fill className="panel-image" />
        </div>
      </article>

      <article className="glass panel">
        <h3>Trusted by Educators</h3>
        <p>
          "Our team transformed lesson delivery quality in one term. The dashboard, resources, and support system are
          exceptional." — Montessori School Director
        </p>
      </article>
    </section>
  );
}
