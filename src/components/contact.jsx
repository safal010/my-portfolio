import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        I'm always interested in learning, building projects,
        and connecting with other developers.
      </p>

      <div className="contact-links">

        <a href="mailto:kcsafal481@gmail.com">
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/safal010"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/safal-kc-7ba497321/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;