function Navbar({ isDark, setIsDark }) {
  return (
    <header className="sticky top-4 z-50 mx-auto mb-8 flex w-[92%] max-w-6xl items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white/80 px-6 py-4 text-slate-950 shadow-2xl shadow-blue-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:text-white dark:shadow-violet-500/20">
      <a href="#home" className="flex items-center gap-3 text-lg font-bold">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30">
          E
        </span>
        <span>Eshtiak Dev</span>
      </a>

      <nav className="hidden items-center gap-8 text-sm text-slate-600 dark:text-slate-300 md:flex">
        <a className="transition hover:text-slate-950 dark:hover:text-white" href="#home">
          Home
        </a>
        <a className="transition hover:text-slate-950 dark:hover:text-white" href="#about">
          About
        </a>
        <a className="transition hover:text-slate-950 dark:hover:text-white" href="#skills">
          Skills
        </a>
        <a className="transition hover:text-slate-950 dark:hover:text-white" href="#projects">
          Projects
        </a>
        <a className="transition hover:text-slate-950 dark:hover:text-white" href="#services">
          Services
        </a>
        <a className="transition hover:text-slate-950 dark:hover:text-white" href="#contact">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="grid h-10 min-w-10 place-items-center rounded-full border border-slate-200 bg-slate-100 px-3 text-sm transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
          GH
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="grid h-10 min-w-10 place-items-center rounded-full border border-slate-200 bg-slate-100 px-3 text-sm transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
          in
        </a>

        <button
          onClick={() => setIsDark(!isDark)}
          type="button"
          className="h-10 rounded-full border border-slate-200 bg-slate-100 px-4 text-sm font-semibold transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;