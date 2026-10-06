function Projects() {
  const project = {
    title: "AI-Powered RAG Chatbot",

    description:
      "A full-stack AI chatbot built with React and FastAPI. It uses Gemini for AI responses and RAG with FAISS to retrieve relevant information from a knowledge base.",

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Gemini",
      "RAG",
      "FAISS",
    ],

    github: "https://github.com/safal010/ai-chatbot",

    image: "/ai-chatbot.png",
  };

  return (
    <section className="projects" id="projects">
      <h2>My Project</h2>

      <div className="projects-container">
        <div className="project-card">

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="technology-list">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub</button>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Projects;