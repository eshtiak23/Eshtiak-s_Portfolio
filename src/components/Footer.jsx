function Footer() {
  return (
    <footer className="mx-auto w-[92%] max-w-7xl pb-8 pt-4">
      <div className="grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-black text-[var(--text-main)]">
            <span className="bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              E
            </span>
            shtiak
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--text-soft)]">
            Frontend Developer building modern and responsive web experiences
            with passion.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[var(--text-main)]">Quick Links</h3>

          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[var(--text-soft)]">
            <a href="#home" className="transition hover:text-fuchsia-500">
              Home
            </a>
            <a href="#skills" className="transition hover:text-fuchsia-500">
              Skills
            </a>
            <a href="#about" className="transition hover:text-fuchsia-500">
              About
            </a>
            <a href="#projects" className="transition hover:text-fuchsia-500">
              Projects
            </a>
            <a href="#services" className="transition hover:text-fuchsia-500">
              Services
            </a>
            <a href="#contact" className="transition hover:text-fuchsia-500">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[var(--text-main)]">
            Connect With Me
          </h3>

          <div className="mt-4 flex gap-3">
            {["GH", "in", "X", "IG"].map((item) => (
              <a
                key={item}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1 hover:text-fuchsia-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} Eshtiak. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;