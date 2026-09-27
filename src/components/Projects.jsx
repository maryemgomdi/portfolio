import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">

        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="projects__eyebrow">
              Selected work · 2024—2026
            </span>

            <h2>
              Projets <em>sélectionnés</em>
            </h2>
          </div>

          <p>
            Une sélection de projets réalisés au cours de mon parcours,
            mettant en pratique mes compétences en développement,
            Business Intelligence et conception de solutions numériques.
          </p>
        </motion.div>

        <div className="projects__list">

          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.image
                  ? "project-card--with-image"
                  : "project-card--no-image"
              }`}
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >

              {/* INFORMATIONS */}
              <div className="project-card__information">

                <div className="project-card__number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-card__content">

                  <span className="project-card__category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.longDescription || project.description}
                  </p>

                </div>

                {/* TECHNOLOGIES */}
                {project.technologies?.length > 0 && (
                  <div className="project-card__technologies">

                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>
                )}

                {/* FONCTIONNALITÉS */}
                {project.features?.length > 0 && (
                  <div className="project-card__features">

                    {project.features.slice(0, 4).map((feature) => (
                      <div key={feature}>
                        <Code2 size={15} />
                        <span>
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>
                )}

                {/* LIEN PROJET */}
                {project.demo && (
                  <div className="project-card__links">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                      Voir le projet
                    </a>

                  </div>
                )}

              </div>

              {/* IMAGE DU PROJET */}
              {project.image && (
                <div className="project-card__visual">

                  <img
                    src={project.image}
                    alt={`Interface du projet ${project.title}`}
                    className="project-card__image"
                    loading="lazy"
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

export default Projects;