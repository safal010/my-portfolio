
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
  const skillGroups = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "REST API", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Git & GitHub", icon: <FaGitAlt /> },
      ],
    },
    {
      title: "AI & Retrieval",
      skills: [
        { name: "RAG", icon: <FaDatabase /> },
        { name: "FAISS", icon: <FaDatabase /> },
        { name: "Gemini", icon: <SiGoogle /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <p className="skills-intro">
        Technologies and tools I use to build web applications
        and AI-powered systems.
      </p>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skills-container">
              {group.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
