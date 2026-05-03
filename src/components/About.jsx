function About() {
  return (
    <section
      id="about"
      className="mx-auto mb-8 w-[92%] max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          About Me
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          I turn ideas into clean web experiences.
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <p className="max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
          I am a beginner frontend developer focused on building responsive,
          modern, and user-friendly websites. I enjoy working with HTML, CSS,
          JavaScript, and React to create real projects that improve my skills
          step by step.
        </p>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
          My current goal is to become confident in React, improve my design
          sense, and build a professional portfolio that shows my learning,
          projects, and frontend development ability.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <h3 className="text-xl font-bold text-white">Frontend</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              HTML, CSS, JavaScript, React
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <h3 className="text-xl font-bold text-white">Focus</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Clean UI and responsive design
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <h3 className="text-xl font-bold text-white">Learning</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              React components, hooks, and projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <h3 className="text-xl font-bold text-white">Goal</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Become a strong frontend developer
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-violet-500/25 transition hover:-translate-y-1"
          >
            See My Projects
          </a>

          <a
            href="/resume.pdf"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;