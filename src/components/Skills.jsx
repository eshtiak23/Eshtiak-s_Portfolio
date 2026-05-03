const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
  "VS Code",
  "Figma",
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto mb-8 w-[92%] max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 lg:p-8"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
        Skills
      </p>

      <h2 className="mb-8 text-3xl font-black text-[var(--text-main)]">
        My Technical Skills
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-6 text-center shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-blue-500/50"
          >
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 text-xl font-black text-[var(--text-main)]">
              {skill.slice(0, 2)}
            </div>

            <p className="text-sm font-bold text-[var(--text-main)]">
              {skill}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm text-[var(--text-soft)]">
          <span>Learning Progress</span>
          <span>85%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;