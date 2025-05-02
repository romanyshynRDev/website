import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/roman-romanyshyn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/romanyshyn001"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a href="mailto:roman1romanyshyn@gmail.com" aria-label="Email">
          <FaEnvelope size={24} />
        </a>
      </div>
      <div className={styles.additionalLinks}>
        <a href="/privacy-policy">Privacy Policy & </a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Roman Romanyshyn. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
