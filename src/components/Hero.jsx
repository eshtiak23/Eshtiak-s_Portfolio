function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <div className="availability">
          <span></span>
          Available for opportunities
        </div>

        <h1>
          Hi, I'm <span>Eshtiak</span> —
          <br />
          Beginner Frontend Developer
        </h1>

        <p>
          I build responsive, user-friendly websites with clean code and modern
          technologies. I am passionate about turning ideas into beautiful web
          experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects →
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>0+</strong>
            <p>Years Learning</p>
          </div>

          <div>
            <strong>10+</strong>
            <p>Projects Built</p>
          </div>

          <div>
            <strong>100+</strong>
            <p>Hours of Code</p>
          </div>

          <div>
            <strong>Always</strong>
            <p>Learning</p>
          </div>
        </div>
      </div>

      <div className="hero-image-box">
        <div className="glow-circle"></div>

        <img
          src="/images/avatar.png"
          alt="Eshtiak frontend developer avatar"
          className="hero-avatar"
        />

        <img src="/images/react.png" alt="React" className="floating-icon icon-react" />
        <img src="/images/html.png" alt="HTML" className="floating-icon icon-html" />
        <img src="/images/css.png" alt="CSS" className="floating-icon icon-css" />
        <img
          src="/images/javascript.png"
          alt="JavaScript"
          className="floating-icon icon-js"
        />
      </div>
    </section>
  );
}

export default Hero;