
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      name: "Email",
      detail: "kcsafal481@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:kcsafal481@gmail.com",
    },
    {
      name: "GitHub",
      detail: "Explore my projects",
      icon: <FaGithub />,
      link: "https://github.com/safal010",
    },
    {
      name: "LinkedIn",
      detail: "Connect professionally",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/safal-kc-7ba497321/",
    },
  ];

  return (
    <section className="contact" id="contact">
      <span className="contact-label">GET IN TOUCH</span>

      <h2>Let's Connect</h2>

      <p className="contact-intro">
        I'm always open to connecting with developers, learning
        from others, and exploring opportunities to contribute
        to backend development and AI projects.
      </p>

      <div className="contact-links">
        {contacts.map((contact) => (
          <a
            className="contact-card"
            href={contact.link}
            key={contact.name}
            target={contact.name === "Email" ? undefined : "_blank"}
            rel={contact.name === "Email" ? undefined : "noopener noreferrer"}
          >
            <span className="contact-icon">{contact.icon}</span>

            <span className="contact-card-text">
              <strong>{contact.name}</strong>
              <span>{contact.detail}</span>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
