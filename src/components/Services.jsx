const services = [
  {
    title: "Frontend Development",
    description:
      "I build clean and responsive website interfaces using HTML, CSS, JavaScript, and React.",
    icon: "/images/service-frontend.png",
  },
  {
    title: "UI Implementation",
    description:
      "I convert simple designs and ideas into polished web sections with clean layout and spacing.",
    icon: "/images/service-ui.png",
  },
  {
    title: "Responsive Design",
    description:
      "I make websites look good on mobile, tablet, and desktop using flexible layouts.",
    icon: "/images/service-responsive.png",
  },
  {
    title: "Performance Focused",
    description:
      "I write simple, organized code and avoid unnecessary complexity for better loading speed.",
    icon: "/images/service-performance.png",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="mx-auto mb-8 w-[92%] max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Services
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          What I can help you build.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          As a beginner frontend developer, I focus on practical, clean, and
          responsive web interfaces that are easy to use and easy to maintain.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-slate-950/60">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="h-9 w-9 object-contain"
              />
            </div>

            <h3 className="text-2xl font-black text-white">{service.title}</h3>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;