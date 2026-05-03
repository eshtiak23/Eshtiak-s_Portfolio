const education = [
  {
    year: "2022 - Present",
    title: "Diploma in Computer Engineering",
    institute: "Your Polytechnic Institute",
    status: "Currently Studying",
    description:
      "Focused on programming fundamentals, web development, database, networking, and computer engineering core subjects.",
    highlights: ["Web Development", "Programming", "Database", "Networking"],
  },
  {
    year: "2020 - 2022",
    title: "Secondary School Certificate",
    institute: "Your School Name",
    status: "Completed",
    description:
      "Built strong academic fundamentals and started developing interest in computer technology and digital skills.",
    highlights: ["Science", "ICT", "Mathematics", "Problem Solving"],
  },
];

function Education() {
  return (
    <section
      id="education"
      className="mx-auto mb-8 w-[92%] max-w-6xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 md:p-12"
    >
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500 dark:text-violet-400">
          Education
        </p>

        <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">
          My academic journey.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          A clear overview of my education, technical learning path, and the
          subjects that support my frontend development journey.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent md:block"></div>

        <div className="grid gap-6">
          {education.map((item, index) => (
            <article
              key={item.title}
              className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-blue-500/5 transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:hover:bg-white/[0.06] md:ml-14"
            >
              <div className="absolute -left-[59px] top-8 hidden h-10 w-10 rounded-full border border-white/20 bg-gradient-to-br from-violet-500 to-blue-500 shadow-xl shadow-violet-500/30 md:grid md:place-items-center">
                <span className="h-3 w-3 rounded-full bg-white"></span>
              </div>

              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-bold text-violet-600 dark:text-violet-300">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-black text-slate-950 dark:text-white md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base font-semibold text-slate-600 dark:text-slate-300">
                    {item.institute}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-md shadow-blue-500/5 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300 dark:shadow-none">
                  {item.status}
                </span>
              </div>

              <p className="max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-950/70">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                  style={{ width: index === 0 ? "75%" : "100%" }}
                ></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;