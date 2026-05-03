const services = [
  {
    icon: "</>",
    title: "Frontend Development",
    text: "Building modern, responsive, and high-performance web applications.",
  },
  {
    icon: "✦",
    title: "UI/UX Design",
    text: "Creating clean, attractive, and user-friendly interface designs.",
  },
  {
    icon: "▣",
    title: "Responsive Design",
    text: "Making websites look perfect on mobile, tablet, and desktop screens.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    text: "Improving speed, SEO, accessibility, and overall user experience.",
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto mb-8 w-[92%] max-w-7xl">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
        Services
      </p>

      <h2 className="mb-6 text-3xl font-black text-[var(--text-main)]">
        What I do
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-xl shadow-[var(--shadow)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-fuchsia-500/50"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 text-xl font-black text-fuchsia-500">
              {service.icon}
            </div>

            <h3 className="text-lg font-black text-[var(--text-main)]">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              {service.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;