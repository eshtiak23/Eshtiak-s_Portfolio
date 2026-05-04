import { useEffect, useState } from "react";

const profession = "Frontend Developer";

function Hero() {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    let letterInterval;
    let restartTimeout;

    const animateText = () => {
      setVisibleLetters(0);
      let index = 0;

      letterInterval = setInterval(() => {
        index += 1;
        setVisibleLetters(index);

        if (index >= profession.length) {
          clearInterval(letterInterval);
          restartTimeout = setTimeout(animateText, 1400);
        }
      }, 70);
    };

    animateText();

    return () => {
      clearInterval(letterInterval);
      clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="mx-auto grid w-[92%] max-w-7xl items-center gap-12 pb-12 pt-8 lg:grid-cols-[1fr_0.9fr] lg:pb-20"
    >
      {/* Left Content */}
      <div className="animate-fade-up">
        <p className="mb-4 text-lg font-semibold text-fuchsia-500">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl font-black leading-tight tracking-tight text-[var(--text-main)] sm:text-6xl lg:text-7xl">
          Eshtiak Ahmed
        </h1>

        <h2 className="mt-4 flex min-h-[48px] flex-wrap gap-[2px] text-3xl font-black sm:text-4xl lg:text-5xl">
          {profession.split("").map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-500 ${
                index < visibleLetters
                  ? "translate-y-0 scale-100 opacity-100 blur-0"
                  : "translate-y-4 scale-95 opacity-0 blur-sm"
              } ${
                letter === " "
                  ? "w-3"
                  : "bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent"
              }`}
              style={{ transitionDelay: `${index * 15}ms` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}

          <span className="ml-1 h-10 w-[3px] animate-pulse rounded-full bg-fuchsia-500"></span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-soft)]">
          I build responsive, user-friendly, and modern websites with clean
          code, smooth UI, and strong attention to detail.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-violet-500/25 transition hover:-translate-y-1"
          >
            View Projects →
          </a>

          <a
            href="/resume.pdf"
            className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-6 py-4 text-sm font-bold text-[var(--text-main)] transition hover:-translate-y-1"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-2xl shadow-[var(--shadow)] sm:grid-cols-4">
          <Stat number="0+" label="Years Learning" />
          <Stat number="10+" label="Projects Built" />
          <Stat number="100+" label="Hours of Code" />
          <Stat number="Always" label="Learning" />
        </div>
      </div>

      {/* Right Premium Avatar */}

      <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[520px]">
        {/* Background glow */}

        <div className="absolute h-[280px] w-[280px] rounded-full bg-fuchsia-500/20 blur-3xl sm:h-[380px] sm:w-[380px]"></div>
        <div className="absolute right-8 top-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl"></div>
        <div className="absolute bottom-10 left-8 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl"></div>

        {/* Rotating orbit ring */}
        <div
          className="absolute h-[300px] w-[300px] rounded-full border border-blue-400/20 sm:h-[390px] sm:w-[390px]"
          style={{ animation: "rotateRing 18s linear infinite" }}
        ></div>

        {/* Premium card */}
        <div className="relative z-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card-bg)] p-4 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--card-soft)] p-5">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]"></div>

            {/* Avatar circle */}
            <div
              className="relative mx-auto flex h-[240px] w-[240px] items-end justify-center overflow-hidden rounded-full border border-fuchsia-500/30 bg-[radial-gradient(circle_at_top,#1e293b_0%,#0f172a_58%,#020617_100%)] shadow-[0_0_0_8px_rgba(255,255,255,0.035),0_0_65px_rgba(168,85,247,0.22)] sm:h-[310px] sm:w-[310px]"
              style={{ animation: "floatAvatar 6s ease-in-out infinite" }}
            >
              <div className="absolute inset-3 rounded-full border border-white/10"></div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020617]/80 to-transparent"></div>

              <img
                src="/images/avatar3.png"
                alt="Eshtiak Ahmed"
                className="relative z-10 h-[92%] w-auto object-contain drop-shadow-[0_26px_52px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* Info card */}

            <div className="relative mt-5 rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] px-5 py-4 shadow-xl shadow-[var(--shadow)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-base font-black text-[var(--text-main)]">
                    Eshtiak Ahmed
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-soft)]">
                    Frontend Developer
                  </p>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-500">
                  Available
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind", "HTML"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-3 py-1 text-xs font-semibold text-[var(--text-soft)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating mini badge */}
            
            <div className="absolute right-5 top-5 rounded-full border border-fuchsia-500/30 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-fuchsia-300 shadow-lg shadow-fuchsia-500/12 backdrop-blur-xl">
              &lt;/&gt; UI Builder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-xl font-black text-[var(--text-main)]">{number}</h3>
      <p className="mt-1 text-xs text-[var(--text-muted)]">{label}</p>
    </div>
  );
}

export default Hero;