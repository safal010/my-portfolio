
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
  const project = {
    title: "AI-Powered RAG Chatbot",
    category: "AI APPLICATION • FULL STACK",
    description:
      "A full-stack AI chatbot built with React and FastAPI. It uses Gemini to generate responses and Retrieval-Augmented Generation (RAG) with FAISS to retrieve relevant information from a knowledge base. It also stores chat history using SQLite.",
    technologies: [
      "Python",
      "React",
      "FastAPI",
      "Gemini",
      "RAG",
      "FAISS",
      "SQLite",
    ],
    github: "https://github.com/safal010/ai-chatbot",
    image: "/ai-chatbot.png",
  };

  return (
    <section className="projects" id="projects">
      <span className="projects-label">MY WORK</span>
      <h2>Featured Project</h2>

      <p className="projects-intro">
        Here is one of my projects where I apply web development
        and AI technologies to solve practical problems.
      </p>

      <div className="projects-container">
        <article className="project-card">
          <div className="project-image-wrapper">
            <img
              src={project.image}
              alt="Preview of the AI-powered RAG chatbot"
              className="project-image"
              loading="lazy"
            />
          </div>

          <div className="project-content">
            <span className="project-category">{project.category}</span>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              View Source Code
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
