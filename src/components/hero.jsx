function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="hero-greeting">HELLO, I'M</p>

          <h1>
            Safal KC<span className="hero-dot"></span>
          </h1>

          <h2 className="hero-headline">
            <span>Building Intelligent Backends &amp; AI-Powered Solutions.</span>
          </h2>

          <p className="hero-description">
            I'm a Backend Developer and AI enthusiast focused on building scalable
            APIs, intelligent applications, and practical AI systems.
          </p>

          <p className="hero-description">
            I work with Python, FastAPI, REST APIs, and Retrieval-Augmented
            Generation (RAG), turning complex ideas into reliable, real-world
            software.
          </p>

          <ul className="hero-technologies" aria-label="Technology highlights">
            <li>Python</li>
            <li>FastAPI</li>
            <li>REST APIs</li>
            <li>RAG</li>
            <li>Artificial Intelligence</li>
          </ul>

          <div className="hero-buttons">
            <a href="#projects">Explore My Work</a>
            <a href="#contact">Let's Connect</a>
            <a href="/Safal-KC-CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="portrait-frame">
            <img src="/profile.jpg" alt="Safal KC" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
