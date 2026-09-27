import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <strong>Maryem Gomdi</strong>

          <p>
            Business Intelligence · Full Stack · Backend · Java
          </p>
        </div>

        <p>
          © 2026 Maryem Gomdi · Portfolio
        </p>

        <a href="#home" aria-label="Retour en haut">
          <ArrowUp size={19} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;