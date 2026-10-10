function Projects() {
const project = {
title: "AI-Powered RAG Chatbot",
category: "AI APPLICATION • FULL STACK",
description:
"An AI-powered chatbot that answers questions using a knowledge base. It combines retrieval-augmented generation (RAG) with Gemini to retrieve relevant information and generate contextual responses.",
technologies: [
"Python",
"FastAPI",
"React",
"Gemini",
"FAISS",
"SQLite",
],
github: "https://github.com/safal010/ai-chatbot",
image: "/ai-chatbot.png",
};

return ( <section className="projects" id="projects"> <h2>Featured Project</h2>

  <p className="projects-intro">
    A selection of my work in backend development and AI.
  </p>

  <div className="projects-container">
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <p className="project-category">{project.category}</p>

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
          View Source Code <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  </div>
</section>

);
}

export default Projects;
