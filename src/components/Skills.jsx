import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">03 · Expertise</span>

          <h2>
            Mes
            <em> compétences</em>
          </h2>

          <p>
            Un ensemble de technologies couvrant le développement web,
            le backend, les bases de données et la Business Intelligence.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <motion.article
              className="skill-card"
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="skill-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{skill.category}</h3>

              <p>{skill.description}</p>

              <div className="skill-card__technologies">
                {skill.technologies.map((technology) => (
                  <span key={technology.name}>
                    {technology.name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;