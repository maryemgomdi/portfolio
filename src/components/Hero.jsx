import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";
import heroImage from "../assets/maryem-photo.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background-text" aria-hidden="true">
        PORTFOLIO
      </div>

      <div className="hero__container">
        <motion.div
          className="hero__image-column"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero__image-frame">
            <img
              src={heroImage}
              alt={`Portrait professionnel de ${personalInfo.firstName}`}
              className="hero__image"
            />

            <div className="hero__image-overlay" />

            <div className="hero__image-label">
              <span>Portfolio</span>
              <strong>2026</strong>
            </div>

            <div className="hero__availability">
              <span className="hero__availability-dot" />

              <div>
                <strong>Disponible</strong>
                <small>Stage et collaboration</small>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero__top-line">
            <span>Business Intelligence · Full Stack · Backend</span>

            <div className="hero__location">
              <MapPin size={15} />
              <span>Tunisie</span>
            </div>
          </div>

          <h1 className="hero__title">
            <span>Maryem</span>
            <span className="hero__title-outline">Gomdi</span>
          </h1>

          <div className="hero__separator">
            <span />
            <p>01</p>
          </div>

         <p className="hero__description">
  Étudiante en Informatique de Gestion, spécialisée en Business Intelligence
  et développement Full Stack. Je développe des applications web et des
  solutions data modernes, performantes et adaptées aux besoins utilisateurs.
</p>
        <div className="hero__roles">
  <span>Full Stack Developer</span>
  <span>Backend Developer</span>
  <span>Java</span>
  <span>Business Intelligence</span>
</div>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#projects">
              Découvrir mes projets
              <ArrowDownRight size={18} />
            </a>

            <a
              className="hero__button hero__button--secondary"
              href={personalInfo.cvUrl}
              download
            >
              Télécharger mon CV
              <Download size={18} />
            </a>
          </div>

          <div className="hero__footer">
            <div>
              <span>Technologies principales</span>
             <strong>
  Java · React · JavaScript · TypeScript · PHP/Symfony · SQL · Python
</strong>
            </div>

            <a href="#projects" aria-label="Voir les projets">
              <ArrowUpRight size={23} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;