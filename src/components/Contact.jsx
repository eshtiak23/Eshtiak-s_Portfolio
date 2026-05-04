const contactInfo = [
  {
    label: "Email",
    value: "eshtiak4099@gmail.com",
    href: "mailto:eshtiak4099@gmail.com",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "01989984061",
    href: "tel:01989984061",
    icon: "☎",
  },
  {
    label: "Location",
    value: "Rajshahi, Bangladesh",
    href: "https://www.google.com/maps?sca_esv=3952bdc93efbafc6&output=search&q=Rajshahi+Bangladesh%5C&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3j2nXl-YQ05KjnWz5SrU93HEjYyChsjChlPh8hoCFXOKGKdIkdWV9Y1jIT6MO4-1nGlfchNIc5D-klC_exTOWrKJUmfC5klXcK__73Ns0SCZhaIY93KBKk281c1P_LA7uUnNfbKk-DnhWx-72xx5AZRHqCEU&entry=mc&ved=1t:200715&ictx=111",
    icon: "⌖",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto mb-8 grid w-[92%] max-w-7xl gap-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 lg:grid-cols-[0.8fr_1.2fr] lg:p-10"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10">
        <div className="mb-5 flex w-fit items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-soft)]">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_16px_#22c55e]"></span>
          Open for freelance
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
          Contact
        </p>

        <h2 className="max-w-md text-4xl font-black leading-tight text-[var(--text-main)] sm:text-5xl">
          Let&apos;s Work{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-soft)] sm:text-base">
          Have a project idea, collaboration, or opportunity? Send me a message
          and I&apos;ll get back to you as soon as possible.
        </p>

        <div className="mt-8 grid gap-4">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-4 shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-fuchsia-500/50"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 text-xl text-fuchsia-500">
                  {item.icon}
                </span>

                <div>
                  <p className="text-sm font-bold text-[var(--text-main)]">
                    {item.label}
                  </p>
                  <p className="mt-1 break-all text-sm text-[var(--text-soft)]">
                    {item.value}
                  </p>
                </div>
              </div>

              <span className="text-[var(--text-muted)] transition group-hover:translate-x-1 group-hover:text-fuchsia-500">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-4 text-sm font-semibold text-[var(--text-soft)]">
            Let&apos;s connect
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/eshtiak23"
              className="rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-5 py-3 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1 hover:text-fuchsia-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/eshtiak23/"
              className="rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-5 py-3 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="mailto:eshtiak4099@gmail.com"
              className="rounded-xl border border-[var(--border)] bg-[var(--card-soft)] px-5 py-3 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1 hover:text-fuchsia-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>

      <form className="relative z-10 rounded-3xl border border-[var(--border)] bg-[var(--card-soft)] p-5 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl sm:p-6 lg:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[var(--text-main)]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--input-bg)] px-5 py-4 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)] transition focus:border-fuchsia-500 focus:shadow-[0_0_0_4px_rgba(217,70,239,0.12)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[var(--text-main)]">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--input-bg)] px-5 py-4 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)] transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[var(--text-main)]">
            Subject
          </label>
          <input
            type="text"
            placeholder="What's this about?"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--input-bg)] px-5 py-4 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)] transition focus:border-fuchsia-500 focus:shadow-[0_0_0_4px_rgba(217,70,239,0.12)]"
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[var(--text-main)]">
            Your Message
          </label>
          <textarea
            rows="7"
            placeholder="Write your message here..."
            className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--input-bg)] px-5 py-4 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)] transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-6 py-4 text-sm font-black text-white shadow-xl shadow-violet-500/25 transition hover:-translate-y-1 hover:shadow-blue-500/30"
        >
          Send Message →
        </button>

        <p className="mt-5 text-center text-xs text-[var(--text-muted)]">
          🔒 Your information is secure and protected.
        </p>
      </form>
    </section>
  );
}

export default Contact;