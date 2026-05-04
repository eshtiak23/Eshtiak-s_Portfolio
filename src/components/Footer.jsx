const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/eshtiak23",
    icon: "/social/github.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eshtiak23/",
    icon: "/social/linkedin.png",
  },
  {
    name: "Twitter",
    href: "https://x.com/your-username",
    icon: "/social/twitter.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/eshtiak23/",
    icon: "/social/instagram.gif",
  },
];

function Footer() {
  return (
    <footer className="mx-auto w-[92%] max-w-7xl pb-6 pt-6 sm:pb-8">
      <div className="grid gap-10 border-t border-[var(--border)] pt-8 sm:gap-8 md:grid-cols-3">
        {/* Brand Section */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            {/* Logo Option */}
            <img
              src="/images/avatar.png"
              alt="Eshtiak logo"
              className="h-11 w-11 rounded-xl object-cover"
            />

            <h2 className="text-2xl font-black text-[var(--text-main)] sm:text-3xl">
              <span className="bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                E
              </span>
              shtiak
            </h2>
          </div>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[var(--text-soft)] sm:mx-0">
            Frontend Developer building modern, responsive, and user-friendly
            web experiences with passion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-base font-bold text-[var(--text-main)]">
            Quick Links
          </h3>

          <div className="mx-auto mt-4 grid max-w-xs grid-cols-2 gap-x-6 gap-y-3 text-sm text-[var(--text-soft)] sm:mx-0">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg py-1 transition duration-300 hover:translate-x-1 hover:text-fuchsia-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-base font-bold text-[var(--text-main)]">
            Connect With Me
          </h3>

          <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="group grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-lg shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-5 w-5 object-contain transition duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[var(--border)] pt-5">
        <p className="text-center text-xs leading-6 text-[var(--text-muted)] sm:text-sm">
          © {new Date().getFullYear()} Eshtiak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;