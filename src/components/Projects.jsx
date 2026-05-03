const projects = [
  {
    title: "TaskFlow",
    text: "A task management app to organize work and boost productivity.",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
  },
  {
    title: "Shoply",
    text: "An ecommerce website with modern UI and smooth experience.",
    tags: ["React", "API", "Stripe"],
  },
  {
    title: "Weather App",
    text: "A weather app that shows real-time weather updates.",
    tags: ["React", "API", "CSS3"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto mb-8 w-[92%] max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 lg:p-8"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
            Projects
          </p>

          <h2 className="text-3xl font-black text-[var(--text-main)]">
            My Recent Projects
          </h2>
        </div>

        <a
          href="#contact"
          className="w-fit rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-5 py-3 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1"
        >
          View All Projects →
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-fuchsia-500/50"
          >
            <div className="h-44 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.45),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.45),transparent_35%),linear-gradient(135deg,#0f172a,#020617)] p-5">
              <div className="flex h-full items-end rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-white">
                  0{index + 1}
                </p>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-black text-[var(--text-main)]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                {project.text}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-3 py-1 text-xs text-[var(--text-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 text-sm font-bold text-[var(--text-main)]">
                <a href="#" className="transition hover:text-fuchsia-500">
                  Live Demo
                </a>

                <a href="#" className="transition hover:text-fuchsia-500">
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;