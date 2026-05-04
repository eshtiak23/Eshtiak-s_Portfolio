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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-1/2 top-4 z-50 w-[94%] max-w-7xl -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)] backdrop-blur-2xl transition-all duration-300 ${
          isScrolled ? "py-2.5" : "py-3"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-blue-500/10"></div>

        <div className="relative flex items-center justify-between gap-3 px-4 lg:px-5">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className="group flex shrink-0 items-center"
            aria-label="Go to home"
          >
            
            <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-blue-500/20 shadow-lg shadow-violet-500/30 transition duration-300 group-hover:scale-105 group-hover:rotate-3 sm:h-13 sm:w-13">
  <img
    src="/logo1.png"
    alt="Eshtiak logo"
    className="h-full w-full object-cover"
  />
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

          {/* Mobile Actions */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-lg text-[var(--text-main)] transition active:scale-95"
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Animated Hamburger */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative grid h-11 w-11 place-items-center rounded-xl border border-fuchsia-500/60 bg-[var(--card-bg)] transition active:scale-95"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-[var(--text-main)] transition-all duration-300 ${
                  isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
                }`}
              ></span>

              <span
                className={`absolute h-[2px] w-5 rounded-full bg-[var(--text-main)] transition-all duration-300 ${
                  isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              ></span>

              <span
                className={`absolute h-[2px] w-5 rounded-full bg-[var(--text-main)] transition-all duration-300 ${
                  isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Scroll Progress */}
        <div className="relative mt-3 h-[3px] w-full bg-transparent">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 shadow-[0_0_18px_rgba(168,85,247,0.8)] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <button
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-label="Close menu backdrop"
        type="button"
      ></button>

      {/* Mobile Side Menu */}
      <aside
        className={`fixed right-4 top-4 z-50 h-[calc(100vh-2rem)] w-[82%] max-w-[340px] rounded-3xl border border-fuchsia-500/40 bg-black/95 p-5 shadow-2xl shadow-fuchsia-500/20 backdrop-blur-2xl transition-all duration-500 ease-out lg:hidden ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-[115%] opacity-0"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-3"
          >
            <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-blue-500/20 shadow-lg shadow-violet-500/30 transition duration-300 group-hover:scale-105 group-hover:rotate-3 sm:h-13 sm:w-13">
  <img
    src="/logo1.png"
    alt="Eshtiak logo"
    className="h-full w-full object-cover"
  />
</div>

            <div>
              <h2 className="text-base font-black text-white">Eshtiak </h2>
              <p className="text-xs font-medium text-white/50">
                Frontend Developer
              </p>
            </div>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="relative grid h-11 w-11 place-items-center rounded-xl border border-fuchsia-500/70 text-white transition hover:bg-fuchsia-500/10 active:scale-95"
            type="button"
            aria-label="Close menu"
          >
            <span className="absolute h-[2px] w-6 rotate-45 rounded-full bg-white"></span>
            <span className="absolute h-[2px] w-6 -rotate-45 rounded-full bg-white"></span>
          </button>
        </div>

        <nav className="space-y-2">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.path}
                onClick={() => handleLinkClick(link.id)}
                className={`group flex items-center gap-4 rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white"
                      : "bg-fuchsia-500 opacity-0 group-hover:opacity-100"
                  }`}
                ></span>

                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          onClick={() => handleLinkClick("contact")}
          className="mt-8 block rounded-2xl bg-fuchsia-500 px-5 py-4 text-center text-base font-bold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-1 hover:bg-fuchsia-600 active:scale-95"
        >
          Hire Me
        </a>
      </aside>
    </>
  );
}

export default Navbar;