import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <motion.div
          className="contact__box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            09 · Contact
          </span>

          <h2>
            Construisons quelque chose
            <em> ensemble.</em>
          </h2>

          <p className="contact__intro">
            Je suis disponible pour un stage PFE et pour des opportunités
            en Full Stack, Backend, Java, Business Intelligence ou Data.
          </p>

          <div className="contact__details">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail size={19} />

              <div>
                <span>Email</span>
                <strong>{personalInfo.email}</strong>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`}>
              <Phone size={19} />

              <div>
                <span>Téléphone</span>
                <strong>{personalInfo.phone}</strong>
              </div>
            </a>

            <div className="contact__item">
              <MapPin size={19} />

              <div>
                <span>Localisation</span>
                <strong>Tunisie</strong>
              </div>
            </div>
          </div>

          <div className="contact__social">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
              <ArrowUpRight size={16} />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;