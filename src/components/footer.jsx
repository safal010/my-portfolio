import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h3>Safal KC</h3>
          <p>Backend & AI Developer</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/safal010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/safal-kc-7ba497321/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Safal KC. All rights reserved.</p>
        <p>Built with React & Vite</p>
      </div>
    </footer>
  );
}

export default Footer;