const projects = [
  {
    title: "Department Management System",
    text: "A department management app to organize students & teachers and boost productivity.",
    thumbnail: "projects/department.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Supabase"],
    live: "https://eshtiak23.github.io/RPI-Computer-Department-Management-System-/",
    code: "https://github.com/eshtiak23/RPI-Computer-Department-Management-System-",
  },
  {
    title: "AKATSUKI Bounty Hunter",
    text: "A theme based website where users can browse and submit bounty requests & see profiles of Naruto characters.",
    thumbnail: "projects/akatsuki.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
  {
    title: "Digital Clock Weather App",
    text: "A digital clock and weather app that shows real-time weather updates.",
    thumbnail: "projects/weather-clock.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto mb-8 w-[92%] max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 sm:p-6 lg:p-8"
    >
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
            Projects
          </p>

          <h2 className="text-2xl font-black text-[var(--text-main)] sm:text-3xl">
            My Recent Projects
          </h2>
        </div>

        <a
          href="#contact"
          className="w-fit rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-4 py-2.5 text-xs font-bold text-[var(--text-main)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/50 sm:px-5 sm:py-3 sm:text-sm"
        >
          View All Projects →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-soft)] shadow-lg shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/50 sm:rounded-2xl"
          >
            <div className="relative h-36 overflow-hidden bg-slate-950 sm:h-44">
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                0{index + 1}
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <p className="line-clamp-1 text-sm font-black text-white sm:text-base">
                  {project.title}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="text-lg font-black text-[var(--text-main)] sm:text-xl">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-xs leading-6 text-[var(--text-soft)] sm:mt-3 sm:text-sm sm:leading-7">
                {project.text}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-2.5 py-1 text-[10px] font-medium text-[var(--text-soft)] sm:px-3 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 text-xs font-bold text-[var(--text-main)] sm:text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-fuchsia-500"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-fuchsia-500"
                >
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