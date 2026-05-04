function About() {
  return (
    <section
      id="about"
      className="mx-auto mb-8 grid w-[92%] max-w-7xl gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 lg:grid-cols-[1fr_0.9fr] lg:p-8"
    >
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
          About Me
        </p>

        <h2 className="text-3xl font-black text-[var(--text-main)]">
          Get to know me
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-soft)] sm:text-base">
         I’m a frontend developer who loves creating modern, responsive, and user-friendly web experiences. My focus is on clean code, polished UI design, smooth interactions, and continuous improvement—turning simple ideas into practical, visually appealing digital products.
        </p>

        <ul className="mt-6 grid gap-3 text-sm text-[var(--text-soft)]">
          <li className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            Clean and modern code
          </li>

          <li className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            Responsive and mobile-first layout
          </li>

          <li className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            Good performance and smooth UI
          </li>

          <li className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
              ✓
            </span>
            Always learning new things
          </li>
        </ul>

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-6 py-3 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1"
        >
          More About Me →
        </a>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-5 shadow-lg shadow-[var(--shadow)]">
        <div className="mb-5 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-400"></span>
        </div>

        <pre className="overflow-x-auto text-xs leading-7 text-[var(--text-soft)] sm:text-sm">
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
    </section>
  );
}

export default About;