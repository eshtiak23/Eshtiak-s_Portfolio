import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", path: "#home", id: "home" },
  { name: "About", path: "#about", id: "about" },
  { name: "Services", path: "#services", id: "services" },
  { name: "Resume", path: "#resume", id: "resume" },
  { name: "Skills", path: "#skills", id: "skills" },
  { name: "Projects", path: "#projects", id: "projects" },
  { name: "Achievements", path: "#achievements", id: "achievements" },
  { name: "Contact", path: "#contact", id: "contact" },
];

function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop - 140;
          if (window.scrollY >= sectionTop) {
            currentSection = link.id;
          }
        }
      });

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setActiveSection(currentSection);
      setIsScrolled(window.scrollY > 20);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[94%] max-w-7xl -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)] backdrop-blur-2xl transition-all duration-300 ${
        isScrolled ? "py-2.5" : "py-3"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-blue-500/10"></div>

      <div className="relative flex items-center justify-between gap-3 px-4 lg:px-5">
        {/* Premium Single Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("home")}
          className="group flex shrink-0 items-center"
          aria-label="Go to home"
        >
          <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 transition duration-300 group-hover:scale-105 group-hover:rotate-3">
            <span className="text-xl font-black tracking-tight">E</span>

            <span className="absolute -bottom-1 -right-1 rounded-full border border-white/15 bg-slate-950 px-1.5 py-[2px] text-[8px] font-bold leading-none text-fuchsia-300 shadow-md">
              &lt;/&gt;
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-1 lg:flex">
          <div className="flex flex-wrap items-center justify-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 xl:px-4 ${
                    isActive
                      ? "bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white shadow-lg shadow-violet-500/25"
                      : "text-[var(--text-soft)] hover:bg-black/5 hover:text-[var(--text-main)] dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button
            onClick={() => setIsDark(!isDark)}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-lg text-[var(--text-main)] transition hover:-translate-y-1"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <a
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition hover:-translate-y-1 hover:shadow-blue-500/30"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-lg text-[var(--text-main)]"
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-2xl font-bold text-[var(--text-main)]"
            type="button"
            aria-label="Toggle menu"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="relative mx-4 mt-4 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4 shadow-xl shadow-[var(--shadow)] lg:hidden">
          <nav className="grid gap-2 sm:grid-cols-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={() => handleLinkClick(link.id)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white"
                      : "text-[var(--text-soft)] hover:bg-black/5 hover:text-[var(--text-main)] dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className="mt-4 block rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-center text-sm font-bold text-white"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}

      {/* Scroll Progress */}
      <div className="relative mt-3 h-[3px] w-full bg-transparent">
        <div
          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 shadow-[0_0_18px_rgba(168,85,247,0.8)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;