function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>

          <h1>Safal KC</h1>

          <h2>Backend & AI Developer</h2>

          <p className="hero-description">
            I build web applications and AI-powered systems
            using Python, FastAPI, React and RAG.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button>View My Projects</button>
            </a>

            <a href="#contact">
              <button>Contact Me</button>
            </a>

            <a href="/SafalKC(CV_).pdf" download>
              <button>Download CV</button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/profile.jpg"
            alt="Safal KC"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;