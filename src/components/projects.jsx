import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
  const projects = [
    {
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
    },
    {
      title: "Nepal Heavy Rainfall Prediction",
      category: "MACHINE LEARNING • DATA SCIENCE",
      description:
        "A machine learning application that predicts rainfall amounts and identifies heavy-rainfall risk across six locations in Nepal. Built with Python, Pandas, Scikit-learn, Streamlit, and the Open-Meteo API.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Streamlit",
        "Open-Meteo API",
        "Machine Learning",
      ],
      github: "https://github.com/safal010/nepal-heavy-rainfall-prediction",
      demo:
        "https://nepal-heavy-rainfall-prediction-5tpm8lakdcsdqmlh469zpn.streamlit.app/",
      image: "/rainfall-prediction.png",
    },
  ];

  return (
    <section className="projects" id="projects">
      <span className="projects-label">MY WORK</span>
      <h2>Featured Projects</h2>

      <p className="projects-intro">
        Explore my projects in AI, machine learning, and full-stack
        development, built to solve practical problems.
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={`Preview of ${project.title}`}
                className="project-image"
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
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

                {project.demo && (
                  <a
                    className="project-link"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaArrowUpRightFromSquare />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;