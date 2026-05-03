function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-[92%] max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-slate-400">
          © {currentYear} Eshtiak Dev. All rights reserved.
        </p>

        <p className="text-sm text-slate-400">
          Built with React, Tailwind CSS, and dedication 🚀
        </p>

        <a
          href="#home"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;