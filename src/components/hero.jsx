function Hero() {
return ( <section className="hero" id="home"> <div className="hero-content"> <div className="hero-text"> <p className="hero-greeting">HELLO, I'M</p>

      <h1>
        Safal KC<span className="hero-dot"></span>
      </h1>

      <h2>Backend Developer & AI Enthusiast</h2>

      <p className="hero-description">
        I build backend applications and AI-powered systems
        using Python, FastAPI, REST APIs, and Retrieval-Augmented
        Generation (RAG). I'm passionate about solving problems
        and turning ideas into useful software.
      </p>

      <div className="hero-buttons">
        <a href="#projects">
          <button type="button">Explore My Projects</button>
        </a>

        <a href="#contact">
          <button type="button">Contact Me</button>
        </a>

        <a href="/Safal-KC-CV.pdf" download>
          <button type="button">Download CV</button>
        </a>
      </div>
    </div>

    <div className="hero-image">
      <img src="/profile.jpg" alt="Safal KC" />
    </div>
  </div>
</section>

);
}

export default Hero;
