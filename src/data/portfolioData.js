
const BASE_URL = import.meta.env.BASE_URL;

export const personalInfo = {
  name: "Maryem Gomdi",
  firstName: "Maryem",
  role: "Business Intelligence | Full Stack | Backend | Java",
  shortRole: "Full-Stack & BI Developer",
  location: "Tunisia",
  email: "gomdimaryem45@gmail.com",
  phone: "+216 23 282 145",

  introduction:
    "Je conçois des applications web et des solutions data modernes, performantes et adaptées aux besoins utilisateurs.",

  description:
    "Étudiante en Informatique de Gestion, spécialisée en Business Intelligence et développement Full Stack, avec des compétences en Java, Python, PHP/Symfony, JavaScript/TypeScript, SQL et Data Engineering.",

  about:
    "Passionnée par le développement Full Stack, le Backend et la Business Intelligence, je développe des solutions web et data de bout en bout. Rigoureuse, organisée et orientée résultats, j’aime transformer les besoins fonctionnels en solutions concrètes et performantes.",

  availability: "Disponible pour un stage PFE et des opportunités professionnelles",

cvUrl: `${import.meta.env.BASE_URL}cv-maryem-gomdi.pdf`,
  socialLinks: {
    github: " https://github.com/maryemgomdi",
    linkedin: "https://www.linkedin.com/in/maryemgomdi",
    email: "mailto:gomdimaryem45@gmail.com",
  },
};

export const navigationLinks = [
  {
    id: "home",
    label: "Accueil",
  },
  {
    id: "about",
    label: "À propos",
  },
  {
    id: "skills",
    label: "Compétences",
  },
  {
    id: "experience",
    label: "Expériences",
  },
  {
    id: "projects",
    label: "Projets",
  },
  {
    id: "engagement",
    label: "Engagement",
  },
  {
    id: "certificates",
    label: "Certifications",
  },
  {
    id: "education",
    label: "Formation",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export const statistics = [
  {
    value: "15+",
    label: "Technologies & outils",
  },
  {
    value: "4+",
    label: "Projets réalisés",
  },
  {
    value: "3",
    label: "Expériences professionnelles",
  },
  {
    value: "17,17/20",
    label: "Moyenne académique",
  },
];
export const skills = [
  {
    category: "Frontend",
    description: "Création d’interfaces modernes, interactives et responsive.",
    technologies: [
      {
        name: "HTML5",
        level: 90,
      },
      {
        name: "CSS3",
        level: 88,
      },
      {
        name: "JavaScript",
        level: 85,
      },
      {
        name: "React.js",
        level: 82,
      },
      {
        name: "Redux Toolkit",
        level: 75,
      },
      {
        name: "Responsive Design",
        level: 88,
      },
    ],
  },
  {
    category: "Backend",
    description: "Développement d’API et gestion de la logique métier.",
    technologies: [
      {
        name: "Node.js",
        level: 75,
      },
      {
        name: "Express.js",
        level: 72,
      },
      {
        name: "REST API",
        level: 80,
      },
      {
        name: "Python",
        level: 70,
      },
      {
        name: "Authentication",
        level: 70,
      },
      {
        name: "API Integration",
        level: 82,
      },
    ],
  },
  {
    category: "Base de données",
    description: "Organisation, manipulation et exploitation des données.",
    technologies: [
      {
        name: "MySQL",
        level: 78,
      },
      {
        name: "PostgreSQL",
        level: 70,
      },
      {
        name: "MongoDB",
        level: 68,
      },
      {
        name: "Database Design",
        level: 72,
      },
    ],
  },
  {
    category: "Outils & méthodes",
    description: "Outils de développement, collaboration et gestion de projet.",
    technologies: [
      {
        name: "Git",
        level: 82,
      },
      {
        name: "GitHub",
        level: 82,
      },
      {
        name: "VS Code",
        level: 90,
      },
      {
        name: "Postman",
        level: 78,
      },
      {
        name: "Agile / Scrum",
        level: 72,
      },
      {
        name: "Figma",
        level: 65,
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Stagiaire Développeuse Frontend",
    company: "3LM Solutions",
    location: "Ariana, Tunisia",
    period: "25 juillet — 25 août 2026",
    type: "Stage d'été",

    description:
      "Participation au développement d’un CRM interne destiné aux agents commerciaux.",

    missions: [
      "Développement de l’interface frontend du CRM pour agent commercial",
      "Intégration du composant de coaching en direct",
      "Intégration des écrans de scoring et debriefing",
      "Documentation des flux d’événements WebSocket consommés côté frontend",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Git",
    ],

   proofImage: `${BASE_URL}projects/certif/certif 3lm.jpg`,
    proofLabel: "Attestation de stage",
  },

  {
    id: 2,
    role: "Stagiaire Développeuse Web",
    company: "Arzaak Data",
    location: "Remote / Tunisia",
    period: "05 juin — 05 juillet 2026",
    type: "Stage",

    description:
      "Participation au développement d’une plateforme d’études de marché et de data intelligence.",

    missions: [
      "Développement et amélioration de fonctionnalités frontend",
      "Intégration d’API REST",
      "Gestion des études et des utilisateurs",
      "Utilisation de Redux Toolkit et RTK Query",
      "Correction de bugs frontend et backend",
      "Collaboration avec l’équipe via Git et GitHub",
    ],

    technologies: [
      "React",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
    ],
proofImage: `${BASE_URL}projects/certif/datacertif.jpg`,
    proofLabel: "Attestation de stage",
  },

  {
    id: 3,
    role: "Stagiaire Développeuse Web",
    company: "Telnet Holding",
    location: "Tunis, Tunisia",
    period: "Juin — Août 2025",
    type: "Stage",

    description:
      "Développement d’un module de gestion des ressources internes avec interface responsive et intégration backend.",

    missions: [
      "Développement d’interfaces web responsive",
      "Développement et intégration d’API REST",
      "Gestion de la base de données",
      "Tests unitaires",
      "Documentation technique",
    ],

    technologies: [
      "PHP",
      "Symfony",
      "MySQL",
      "Git",
      "Docker",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "PepSmart",
    category: "Aide à la décision agricole",

    description:
      "Application d’aide à la décision destinée aux agriculteurs.",

    longDescription:
      "Application d’aide à la décision destinée aux agriculteurs : exploitation des caractéristiques du sol pour identifier les cultures adaptées et proposer des recommandations personnalisées.",

    technologies: [
      "Java",
      "JDBC",
      "SQL",
      "Figma",
    ],

    features: [
      "Analyse des caractéristiques du sol",
      "Identification des cultures adaptées",
      "Recommandations personnalisées",
      "Aide à la décision agricole",
    ],

  image: `${BASE_URL}projects/certif/pepsmart.png`,

    demo: "",
  },

  {
    id: 2,
    title: "EduForm",
    category: "Plateforme de gestion pédagogique",

    description:
      "Plateforme web de gestion pédagogique destinée aux étudiants et enseignants.",

    longDescription:
      "Plateforme Web de gestion pédagogique destinée aux étudiants et enseignants : gestion des exercices, absences, paiements et contenus pédagogiques.",

    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
    ],

    features: [
      "Gestion des exercices",
      "Gestion des absences",
      "Gestion des paiements",
      "Gestion des contenus pédagogiques",
    ],

  image: `${BASE_URL}projects/certif/edufrom.png`,
    demo: "",
  },

  {
  id: 3,
  title: "Insurly",
  category: "Plateforme d’assurance étudiante",

  description:
    "Plateforme web dédiée aux besoins d’assurance des étudiants.",

  longDescription:
    "Plateforme web destinée aux étudiants permettant de découvrir et comparer différentes offres d’assurance, notamment pour la santé, le dentaire, les accidents et le matériel étudiant.",

  technologies: [
    "React",
    "Vite",
    "JavaScript",
  ],

  features: [
    "Consultation des offres d’assurance",
    "Comparaison des assurances",
    "Gestion des catégories",
    "Interface responsive",
  ],
image: `${BASE_URL}projects/certif/insurly.png`,

  demo: "",
},

  {
    id: 4,
    title: "CareCompass",
    category: "MutualHack 3.0 · Sousse · 2026",

    description:
      "Projet réalisé dans le cadre du hackathon MutualHack 3.0.",

    longDescription:
      "Projet réalisé dans le cadre du hackathon MutualHack 3.0 à Sousse en 2026. Participation à la conception et au développement du projet CareCompass.",

    technologies: [],

    features: [
      "Participation à MutualHack 3.0",
      "Conception du projet",
      "Développement du projet",
      "Travail en équipe",
    ],

    demo: "",
  },
];

export const education = [
  {
    id: 1,
    degree: "Licence en Informatique de Gestion",
    school: "Institut Supérieur d’Informatique de Mahdia",
    location: "Mahdia, Tunisia",
    period: "2023 — 2026",
    description:
      "Formation en développement logiciel, systèmes d’information, bases de données, gestion de projet et technologies web.",
    subjects: [
      "Développement web",
      "Programmation",
      "Bases de données",
      "Systèmes d’information",
      "Génie logiciel",
      "Intelligence artificielle",
    ],
  },
  {
    id: 2,
    degree: "Baccalauréat",
    school: "Tunisia",
    location: "Tunisia",
    period: "2023",
    description:
      "Obtention du baccalauréat et poursuite des études supérieures dans le domaine de l’informatique.",
    subjects: [],
  },
];

export const certificates = [
  {
    id: 1,
    title: "Machine Learning appliqué à la finance",
    organization: "Formation professionnelle",
    date: "2026",
    credentialUrl: "",
  },
  {
    id: 2,
    title: "Développement Web",
    organization: "Formation professionnelle",
    date: "2025",
    credentialUrl: "",
  },
  {
    id: 3,
    title: "Git et GitHub",
    organization: "Formation professionnelle",
    date: "2025",
    credentialUrl: "",
  },
  {
    id: 4,
    title: "API REST et intégration frontend",
    organization: "Formation pratique",
    date: "2026",
    credentialUrl: "",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Lauréate académique",
    date: "2025",
    description:
      "Récompensée pour mes excellents résultats académiques et mon engagement durant mon parcours universitaire.",
  },
  {
    id: 2,
    title: "Excellence universitaire",
    date: "2024",
    description:
      "Reconnaissance obtenue grâce à mes performances et à mon sérieux dans mes études.",
  },
];

export const services = [
  {
    id: 1,
    title: "Développement frontend",
    description:
      "Création d’interfaces web modernes, rapides, responsive et accessibles avec React.",
    features: [
      "Interfaces React",
      "Responsive design",
      "Animations modernes",
      "Optimisation de l’expérience utilisateur",
    ],
  },
  {
    id: 2,
    title: "Développement full-stack",
    description:
      "Développement d’applications complètes avec frontend, backend, API et base de données.",
    features: [
      "API REST",
      "Authentification",
      "Gestion des données",
      "Intégration frontend/backend",
    ],
  },
  {
    id: 3,
    title: "Conception UI/UX",
    description:
      "Conception de solutions élégantes, simples à utiliser et adaptées à tous les appareils.",
    features: [
      "Maquettes modernes",
      "Design cohérent",
      "Navigation intuitive",
      "Mobile first",
    ],
  },
  {
    id: 4,
    title: "Correction et amélioration",
    description:
      "Analyse, correction et amélioration des performances d’applications web existantes.",
    features: [
      "Correction de bugs",
      "Refactorisation",
      "Optimisation des performances",
      "Amélioration de la qualité du code",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Responsable de projet",
    role: "Encadrement professionnel",
    content:
      "Samia est sérieuse, motivée et possède une excellente capacité d’apprentissage. Elle s’implique pleinement dans les tâches qui lui sont confiées.",
  },
  {
    id: 2,
    name: "Collaborateur",
    role: "Développeur",
    content:
      "Une personne attentive, organisée et capable de comprendre rapidement les besoins techniques d’un projet.",
  },
];

export const contactInfo = {
  title: "Construisons quelque chose d’exceptionnel",
  description:
    "Vous avez un projet, une opportunité de stage ou une proposition de collaboration ? N’hésitez pas à me contacter.",
  email: "votre-email@gmail.com",
  phone: "+216 XX XXX XXX",
  location: "Tunisia",
};