import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  FileCheck,
} from "lucide-react";

import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-eyebrow">
            04 · Parcours professionnel
          </span>

          <h2>
            Mes
            <em> expériences</em>
          </h2>

          <p>
            Des expériences qui m'ont permis de renforcer mes compétences
            techniques et de travailler sur des projets concrets.
          </p>
        </div>

        <div className="experience__list">

          {experiences.map((experience, index) => (

            <motion.article
              className="experience-card"
              key={experience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="experience-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="experience-card__main">

                <span className="experience-card__type">
                  <BriefcaseBusiness size={15} />
                  {experience.type}
                </span>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <div className="experience-card__meta">

                  <span>{experience.period}</span>

                  {experience.location && (
                    <span>
                      <MapPin size={14} />
                      {experience.location}
                    </span>
                  )}

                </div>

                <p>{experience.description}</p>

              </div>

              <div className="experience-card__details">

                <h4>Missions principales</h4>

                <ul>
                  {experience.missions.map((mission) => (
                    <li key={mission}>
                      {mission}
                    </li>
                  ))}
                </ul>

                <div className="experience-card__tech">

                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                {experience.proofImage && (
                  <div className="experience-proof">

                    <div className="experience-proof__title">
                      <FileCheck size={17} />
                      <span>{experience.proofLabel}</span>
                    </div>

                    <img
                      src={experience.proofImage}
                      alt={`${experience.proofLabel} ${experience.company}`}
                      className="experience-proof__image"
                    />

                  </div>
                )}

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;