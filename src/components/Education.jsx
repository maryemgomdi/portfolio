import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            08 · Formation
          </span>

          <h2>
            Parcours
            <em> académique</em>
          </h2>
        </div>

        <div className="education__grid">
          <motion.article
            className="education-card education-card--featured"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="education-card__icon">
              <GraduationCap size={28} />
            </div>

            <span>2024 — 2027</span>

            <h3>Licence en Informatique de Gestion</h3>

            <h4>Business Intelligence</h4>

            <p>FSEG Mahdia & ISIMA Mahdia</p>

            <div className="education-card__achievement">
              <Trophy size={18} />

              <div>
                <strong>Majore de promotion</strong>
                <span>Moyenne : 17,17 / 20</span>
              </div>
            </div>
            <div className="education-achievements">

  <div className="education-achievement-item">
    <span>Majore de promotion — 1ère année</span>

    <img
      src="/projects/certif/preuve de major 1 ere.jpg"
      alt="Majore de promotion première année"
    />
  </div>

  <div className="education-achievement-item">
    <span>Majore de promotion — 2ème année</span>

    <img
      src="/projects/certif/preuve de major 2.jpg"
      alt="Majore de promotion deuxième année"
    />
  </div>

  <div className="education-achievement-item">
    <span>Prix de lauréate — 2ème année</span>

    <img
      src="/projects/certif/prix 2.jpg"
      alt="Prix de lauréate deuxième année"
    />
  </div>

</div>
          </motion.article>

          <motion.article
            className="education-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="education-card__icon">
              <GraduationCap size={28} />
            </div>

            <span>2020 — 2024</span>

            <h3>Baccalauréat</h3>

            <h4>Économie</h4>

            <p>Lycée Secondaire Chraârda</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Education;