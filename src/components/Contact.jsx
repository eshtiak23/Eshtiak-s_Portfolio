const contactItems = [
  {
    label: "Email",
    value: "eshtiak@example.com",
    link: "mailto:eshtiak@example.com",
  },
  {
    label: "Location",
    value: "Bangladesh",
    link: "#",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    link: "https://linkedin.com/",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mb-8 w-[92%] max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Contact
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Let&apos;s build something great.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          Have a project idea, opportunity, or feedback? Send me a message and I
          will reply as soon as possible.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-2xl font-black text-white">Contact Info</h3>

          <div className="mt-6 grid gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <p className="text-sm font-semibold text-violet-400">
                  {item.label}
                </p>
                <p className="mt-2 break-words text-base font-bold text-white">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>

        <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Project discussion"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-violet-500/25 transition hover:-translate-y-1"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;