import {
  FaPython,
  FaReact,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaDocker,
  FaMicrophone,
  FaRobot,
  FaBrain,
  FaServer,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiFastapi,
  SiStreamlit,
  SiPostgresql,
  SiSqlite,
  SiGoogle,
  SiScikitlearn,
  SiPandas,
  SiVercel,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Web & Real-Time",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <FaReact /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "REST API", icon: <FaServer /> },
        { name: "LiveKit", icon: <FaMicrophone /> },
        { name: "Streamlit", icon: <SiStreamlit /> },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Gemini", icon: <SiGoogle /> },
        { name: "RAG", icon: <FaDatabase /> },
        { name: "FAISS", icon: <FaDatabase /> },
        { name: "LiveKit Agents", icon: <FaRobot /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Machine Learning", icon: <FaBrain /> },
      ],
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "Vercel", icon: <SiVercel /> },
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