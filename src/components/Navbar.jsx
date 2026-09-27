import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  personalInfo,
  navigationLinks,
} from "../data/portfolioData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <span className="navbar__initial">
          {personalInfo.firstName.charAt(0)}
        </span>

        <div>
          <h3>{personalInfo.firstName}</h3>
          <p>{personalInfo.shortRole}</p>
        </div>
      </div>

      <nav className={open ? "navbar__menu active" : "navbar__menu"}>
        {navigationLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar__social">
        <a
          href={personalInfo.socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href={personalInfo.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
  href={`mailto:${personalInfo.email}`}
  aria-label="Envoyer un e-mail"
>
          <Mail size={20} />
        </a>
      </div>

      <button
        type="button"
        className="navbar__toggle"
        aria-label="Ouvrir ou fermer le menu"
        onClick={() => setOpen((previousOpen) => !previousOpen)}
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}

export default Navbar;