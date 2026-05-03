function Hero() {
  return (
    <section
      id="home"
      className="mx-auto mb-8 grid min-h-[620px] w-[92%] max-w-6xl items-center gap-12 overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 md:grid-cols-[1.1fr_0.9fr] md:p-12"
    >
      <div>
        <div className="mb-6 flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_16px_#22c55e]"></span>
          Available for opportunities
        </div>

        <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            Eshtiak
          </span>{" "}
          —
          <br />
          Beginner Frontend Developer
        </h1>

        <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
          I build responsive, user-friendly websites with clean code and modern
          technologies. I am passionate about turning ideas into beautiful web
          experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-violet-500/25 transition hover:-translate-y-1"
          >
            View Projects →
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-slate-200 bg-slate-100 px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="border-l border-slate-200 pl-4 dark:border-white/10">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              0+
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Years Learning
            </p>
          </div>

          <div className="border-l border-slate-200 pl-4 dark:border-white/10">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              10+
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Projects Built
            </p>
          </div>

          <div className="border-l border-slate-200 pl-4 dark:border-white/10">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              100+
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Hours of Code
            </p>
          </div>

          <div className="border-l border-slate-200 pl-4 dark:border-white/10">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              Always
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Learning
            </p>
          </div>
        </div>
      </div>

      <div className="relative grid min-h-[420px] place-items-center">
        <div className="absolute h-80 w-80 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/30"></div>
        <div className="absolute h-64 w-64 rounded-full border border-violet-400/30"></div>

        <img
          src="/images/avatar.png"
          alt="Eshtiak frontend developer avatar"
          className="relative z-10 w-[78%] max-w-sm drop-shadow-2xl"
        />

        <img
          src="/images/react.png"
          alt="React"
          className="absolute left-4 top-14 z-20 h-14 w-14 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
        />

        <img
          src="/images/css.png"
          alt="CSS"
          className="absolute bottom-24 left-0 z-20 h-14 w-14 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
        />

        <img
          src="/images/html.png"
          alt="HTML"
          className="absolute right-4 top-28 z-20 h-14 w-14 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
        />

        <img
          src="/images/javascript.png"
          alt="JavaScript"
          className="absolute bottom-16 right-14 z-20 h-14 w-14 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
        />
      </div>
    </section>
  );
}

export default Hero;