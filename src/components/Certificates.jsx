import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Java Programming",
    organization: "Certification Java",
    year: "2026",
  },

  {
    id: 2,
    title: "Fundamentals of Accelerated Data Science",
    organization: "NVIDIA",
    year: "2026",
  },

  {
    id: 3,
    title: "JavaScript",
    organization: "Certificate",
    year: "2026",
  },

  {
    id: 4,
    title: "E-commerce and Online Business",
    organization: "Market Pro Club — FSEG Mahdia",
    year: "11 février 2026",
  image: `${import.meta.env.BASE_URL}projects/certif/e commerce.jpg`,
  },
];

function Certificates() {
  return (
    <section className="certificates section" id="certificates">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            07 · Certifications
          </span>

          <h2>
            Formation
            <em> continue</em>
          </h2>

          <p>
            Certifications et programmes complétant mon parcours académique
            et professionnel.
          </p>
        </div>

        <div className="certificates__grid">
          {certificates.map((certificate, index) => (
            <motion.article
              className="certificate-card"
              key={certificate.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="certificate-card__icon">
                <Award size={26} />
              </div>

              <span className="certificate-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>

              <div className="certificate-card__bottom">
                <BadgeCheck size={17} />
                <span>{certificate.year}</span>
              </div>
              {certificate.image && (
  <div className="certificate-proof">
    <img
      src={certificate.image}
      alt={certificate.title}
      className="certificate-proof__image"
    />
  </div>
)}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;