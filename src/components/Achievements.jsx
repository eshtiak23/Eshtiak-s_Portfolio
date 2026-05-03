const achievements = [
  {
    number: "10+",
    title: "Projects Completed",
    text: "Built responsive and modern frontend projects.",
  },
  {
    number: "100+",
    title: "Hours of Coding",
    text: "Consistent coding and problem-solving practice.",
  },
  {
    number: "React",
    title: "React Journey",
    text: "Completed multiple React components and projects.",
  },
  {
    number: "Active",
    title: "GitHub Practice",
    text: "Regular commits and frontend improvement.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto mb-8 w-[92%] max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 lg:p-8"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
        Achievements
      </p>

      <h2 className="mb-8 text-3xl font-black text-[var(--text-main)]">
        Learning Achievements
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-6 text-center shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-fuchsia-500/50"
          >
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 text-xl font-black text-fuchsia-500">
              ✦
            </div>

            <h3 className="text-2xl font-black text-[var(--text-main)]">
              {item.number}
            </h3>

            <p className="mt-2 font-bold text-[var(--text-main)]">
              {item.title}
            </p>

            <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;