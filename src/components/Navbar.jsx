function Navbar() {
  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">A</span>
        <span>Eshtiak Dev</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-actions">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
          aria-label="GitHub"
        >
          GH
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
          aria-label="LinkedIn"
        >
          in
        </a>

        <button onClick={toggleTheme} className="theme-btn" type="button">
          🌙 / ☀️
        </button>
      </div>
    </header>
  );
}

export default Navbar;