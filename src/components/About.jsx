import { motion } from "framer-motion";
import { ArrowUpRight, Database, Code2, BrainCircuit } from "lucide-react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">02 · À propos</span>

          <h2>
            Un profil entre
            <em> développement & data</em>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__description"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="about__lead">
              Étudiante en Informatique de Gestion, spécialisée en
              Business Intelligence et développement Full Stack.
            </p>

            <p>
              Je développe des applications web et des solutions data de bout
              en bout en combinant développement frontend, backend, bases de
              données et analyse de données.
            </p>

            <p>
              Mon parcours m'a permis de travailler avec Java, Python,
              PHP/Symfony, JavaScript, TypeScript, React, Next.js, SQL et
              différentes technologies liées à la Business Intelligence.
            </p>

            <a href="#contact" className="text-link">
              Travaillons ensemble
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="about__cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="about__card">
              <Code2 size={25} />
              <span>01</span>
              <h3>Full Stack</h3>
              <p>
                Interfaces modernes, API REST et développement d'applications
                web complètes.
              </p>
            </div>

            <div className="about__card">
              <Database size={25} />
              <span>02</span>
              <h3>Backend & Data</h3>
              <p>
                Conception des bases de données, SQL, API et traitement des
                données.
              </p>
            </div>

            <div className="about__card">
              <BrainCircuit size={25} />
              <span>03</span>
              <h3>Business Intelligence</h3>
              <p>
                Data Warehouse, OLAP, ETL, analyse et exploitation des données.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;