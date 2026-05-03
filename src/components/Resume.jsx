const education = [
  {
    date: "2022 - Present",
    title: "Diploma in Computer Engineering",
    place: "Your Polytechnic Institute",
    status: "Currently Studying",
    text: "Learning computer engineering subjects along with web development, programming, database, networking, and practical project building.",
  },
  {
    date: "2020 - 2022",
    title: "Secondary School Certificate",
    place: "Your School Name",
    status: "Completed",
    text: "Completed SSC with a strong foundation in science, ICT, mathematics, and problem-solving basics.",
  },
];

function Resume() {
  return (
    <section
      id="resume"
      className="mx-auto mb-8 w-[92%] max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 lg:p-8"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
        Resume
      </p>

      <h2 className="mb-8 text-3xl font-black text-[var(--text-main)]">
        Education & Journey
      </h2>

      <div className="relative grid gap-6">
        <div className="absolute left-5 top-2 hidden h-[85%] w-px bg-gradient-to-b from-fuchsia-500 to-blue-500 sm:block"></div>

        {education.map((item) => (
          <article
            key={item.title}
            className="relative rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-6 shadow-lg shadow-[var(--shadow)] sm:ml-14"
          >
            <div className="absolute -left-[54px] top-6 hidden h-10 w-10 place-items-center rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-500 sm:grid">
              ✦
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-xl font-black text-[var(--text-main)]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {item.place}
                </p>

                <p className="mt-4 text-sm font-bold text-fuchsia-500">
                  {item.date}
                </p>
              </div>

              <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-500">
                {item.status}
              </span>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-soft)]">
              {item.text}
            </p>
          </article>
        ))}
      </div>

      <a
        href="/resume.pdf"
        className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-6 py-3 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1"
      >
        Download Resume ↓
      </a>
    </section>
  );
}

export default Resume;