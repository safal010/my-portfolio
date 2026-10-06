import {
  FaPython,
  FaReact,
  FaJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
  SiSqlite,
  SiGoogle,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "REST API", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "RAG", icon: <FaDatabase /> },
    { name: "FAISS", icon: <FaDatabase /> },
    { name: "Gemini", icon: <SiGoogle /> },
  ];

  return (
    <section className="skills" id="skills">
     <h2>My Skills</h2>

<p className="skills-intro">
  Technologies and tools I use to build web applications
  and AI-powered systems.
</p>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;