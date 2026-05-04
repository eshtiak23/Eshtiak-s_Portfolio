function About() {
  return (
    <section
      id="about"
      className="mx-auto mb-8 grid w-[92%] max-w-7xl gap-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 sm:p-6 lg:grid-cols-[1fr_0.9fr] lg:p-8"
    >
      <div className="min-w-0">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-500 sm:text-xs sm:tracking-[0.25em]">
          About Me
        </p>

        <h2 className="text-2xl font-black leading-tight text-[var(--text-main)] sm:text-3xl">
          Get to know me
        </h2>

        <p className="mt-4 max-w-2xl break-words text-sm leading-7 text-[var(--text-soft)] sm:mt-5 sm:text-base">
          I’m a frontend developer who loves creating modern, responsive, and
          user-friendly web experiences. My focus is on clean code, polished UI
          design, smooth interactions, and continuous improvement—turning simple
          ideas into practical, visually appealing digital products.
        </p>

        <ul className="mt-6 grid gap-3 text-sm text-[var(--text-soft)]">
          <li className="flex items-start gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            <span className="break-words">Clean and modern code</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            <span className="break-words">
              Responsive and mobile-first layout
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            <span className="break-words">
              Good performance and smooth UI
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            <span className="break-words">Always learning new things</span>
          </li>
        </ul>

        <a
          href="#contact"
          className="mt-7 inline-flex max-w-full items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-5 py-3 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1 sm:px-6"
        >
          <span>More About Me</span>
          <span>→</span>
        </a>
      </div>

      <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-4 shadow-lg shadow-[var(--shadow)] sm:p-5">
        <div className="mb-5 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-400"></span>
        </div>

        <div className="max-w-full overflow-x-auto rounded-xl">
          <pre className="w-max min-w-full text-[11px] leading-6 text-[var(--text-soft)] sm:text-sm sm:leading-7">
{`const developer = {
  name: "Eshtiak",
  role: "Frontend Developer",
  passion: "Building beautiful web experiences",
  skills: ["React", "JavaScript", "Tailwind CSS", "HTML"],
  focus: "Clean UI and performance"
};

console.log(developer);`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default About;