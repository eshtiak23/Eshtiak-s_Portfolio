const skills = [
  {
    name: "HTML",
    level: "95%",
    description: "Semantic structure and clean page layout.",
    icon: "/images/html.png",
  },
  {
    name: "CSS",
    level: "90%",
    description: "Modern styling, layouts, and animations.",
    icon: "/images/css.png",
  },
  {
    name: "JavaScript",
    level: "75%",
    description: "DOM, events, functions, and logic building.",
    icon: "/images/javascript.png",
  },
  {
    name: "React",
    level: "70%",
    description: "Components, props, state, and basic hooks.",
    icon: "/images/react.png",
  },
  {
    name: "Responsive Design",
    level: "85%",
    description: "Mobile-first layouts for all screen sizes.",
    icon: "/images/responsive.png",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto mb-8 w-[92%] max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Skills
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Technologies I am learning and using.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          These are the core frontend skills I use to build responsive and
          modern websites. The percentages show my current learning confidence,
          not expert-level mastery.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-slate-950/60">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="h-8 w-8 object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <p className="mt-1 text-sm text-slate-400">
                  {skill.description}
                </p>
              </div>
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">
                Confidence
              </span>
              <span className="text-sm font-bold text-violet-400">
                {skill.level}
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-950/70">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;