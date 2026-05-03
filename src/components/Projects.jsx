const projects = [
  {
    title: "TaskFlow",
    category: "React Project",
    description:
      "A clean task management app where users can add, complete, and remove daily tasks.",
    image: "/images/project-taskflow.png",
    tags: ["React", "CSS", "LocalStorage"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Shoply",
    category: "Frontend UI",
    description:
      "A modern ecommerce landing page with product cards, clean layout, and responsive design.",
    image: "/images/project-shoply.png",
    tags: ["React", "JavaScript", "Responsive"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Weather App",
    category: "API Project",
    description:
      "A simple weather application that shows real-time weather data using an API.",
    image: "/images/project-weather.png",
    tags: ["JavaScript", "API", "CSS"],
    liveLink: "#",
    codeLink: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto mb-8 w-[92%] max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
    >
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Projects
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Featured work I have built.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            These projects show my frontend learning progress, UI sense, and
            basic React/JavaScript implementation skills.
          </p>
        </div>

        <a
          href="#contact"
          className="w-fit rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
        >
          Hire Me →
        </a>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.06] md:grid-cols-[0.9fr_1.1fr] md:p-6"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold text-violet-400">
                {project.category}
              </p>

              <h3 className="text-3xl font-black text-white">
                {project.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  className="rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-violet-500/25 transition hover:-translate-y-1"
                >
                  Live Demo →
                </a>

                <a
                  href={project.codeLink}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Source Code
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