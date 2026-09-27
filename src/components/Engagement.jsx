import { motion } from "framer-motion";
import {
  Users,
  Award,
  Handshake,
} from "lucide-react";

const engagements = [
  {
    id: 1,
    period: "2025 — 2026",
    role: "Vice-Présidente Ressources Humaines",
    organization: "Tunivisions",
    icon: Users,

    description:
      "Responsable de la gestion des membres et de la cohésion interne du club.",

    missions: [
      "Recrutement, intégration et suivi des membres",
      "Organisation d'activités de team building",
      "Évaluation et motivation des équipes",
      "Contribution à la cohésion interne du club",
    ],
  },

  {
    id: 2,
    period: "2024 — 2025",
    role: "Membre",
    organization: "TPL",
    icon: Handshake,

    description:
      "Participation aux activités, initiatives et événements organisés par le club.",

    missions: [
      "Participation aux activités du club",
      "Travail en équipe",
      "Contribution à l'organisation des événements",
    ],

   image: `${import.meta.env.BASE_URL}projects/certif/tpl.jpg`,
    imageLabel: "Participation TPL",
  },

  {
    id: 3,
    period: "2026",
    role: "Participante — Company Program",
    organization: "INJAZ Tunisia",
    icon: Award,

    description:
      "Participation avec succès au Company Program d'INJAZ Tunisia avec l'équipe SunnyMove.",

    missions: [
      "Membre de l'équipe SunnyMove",
      "Projet de moto électrique solaire",
      "Travail au sein d'une équipe de 5 membres",
      "Présentation du projet devant un jury national",
    ],

  image: `${import.meta.env.BASE_URL}projects/certif/injaz.jpg`,
    imageLabel: "Certificat de participation",
  },
];

function Engagement() {
  return (
    <section
      className="engagement section"
      id="engagement"
    >
      <div className="section-container">

        {/* TITRE */}
        <div className="section-heading">
          <span className="section-eyebrow">
            06 · Engagement & Leadership
          </span>

          <h2>
            Au-delà du
            <em> développement</em>
          </h2>

          <p>
            Des expériences associatives qui développent mon leadership,
            ma communication et mon esprit d'équipe.
          </p>
        </div>

        {/* ENGAGEMENTS */}
        <div className="engagement__grid">

          {engagements.map((engagement, index) => {
            const Icon = engagement.icon;

            return (
              <motion.article
                className="engagement-card"
                key={engagement.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                {/* ICÔNE + ANNÉE */}
                <div className="engagement-card__top">
                  <Icon size={27} />

                  <span>
                    {engagement.period}
                  </span>
                </div>

                {/* POSTE */}
                <h3>
                  {engagement.role}
                </h3>

                {/* ORGANISATION */}
                <h4>
                  {engagement.organization}
                </h4>

                {/* DESCRIPTION */}
                <p>
                  {engagement.description}
                </p>

                {/* MISSIONS */}
                <ul>
                  {engagement.missions.map((mission) => (
                    <li key={mission}>
                      {mission}
                    </li>
                  ))}
                </ul>

                {/* PREUVE / CERTIFICAT */}
                {engagement.image && (
                  <div className="engagement-proof">

                    {engagement.imageLabel && (
                      <span className="engagement-proof__label">
                        {engagement.imageLabel}
                      </span>
                    )}

                    <img
                      src={engagement.image}
                      alt={`${engagement.imageLabel || "Participation"} - ${
                        engagement.organization
                      }`}
                      className="engagement-proof__image"
                      loading="lazy"
                    />

                  </div>
                )}

              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Engagement;