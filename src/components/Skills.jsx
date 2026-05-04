const skills = [
  {
    name: "HTML5",
    icon: "/skills/html.png",
  },
  {
    name: "CSS3",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.gif",
  },
  {
    name: "React",
    icon: "/skills/react.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Git & GitHub",
    icon: "/skills/github.png",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
  {
    name: "Figma",
    icon: "/skills/figma.png",
  },
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

      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 md:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group w-[calc((100%-36px)/4)] shrink-0 snap-start rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-3 text-center shadow-lg shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl sm:w-auto sm:p-6"
          >
            <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 transition duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14">
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="h-7 w-7 object-contain sm:h-9 sm:w-9"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm font-black text-[var(--text-main)] sm:text-xl">
                  {skill.name.slice(0, 2)}
                </span>
              )}
            </div>

            <p className="line-clamp-2 text-[10px] font-bold text-[var(--text-main)] sm:text-sm">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-[var(--text-soft)] sm:hidden">
        Swipe to see more skills →
      </p>

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