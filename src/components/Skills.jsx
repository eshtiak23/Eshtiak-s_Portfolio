import { useEffect, useMemo, useState } from "react";

const skills = [
  {
    name: "HTML5",
    icon: "/skills/html.png",
  },
  {
    name: "CSS3",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.gif",
  },
  {
    name: "React",
    icon: "/skills/react.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Git & GitHub",
    icon: "/skills/github.png",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
  {
    name: "Figma",
    icon: "/skills/figma.png",
  },
];

function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillSlides = useMemo(() => {
    const slides = [];

    for (let i = 0; i < skills.length; i += 4) {
      slides.push(skills.slice(i, i + 4));
    }

    return slides;
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === skillSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(slideTimer);
  }, [skillSlides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? skillSlides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === skillSlides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section
      id="skills"
      className="mx-auto mb-8 w-[92%] max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-300 lg:p-8"
    >
      <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500">
        Skills
      </p>

      <h2 className="mb-8 text-center text-3xl font-black text-[var(--text-main)] sm:text-left">
        My Technical Skills
      </h2>

      {/* Mobile Slider */}
      <div className="relative sm:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {skillSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid min-w-full grid-cols-2 gap-4"
              >
                {slide.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-5 text-center shadow-lg shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/60"
                  >
                    <div className="mb-4 grid h-16 w-16 place-items-center rounded-xl bg-white p-2 transition duration-300 group-hover:scale-110">
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-lg font-black text-slate-900">
                          {skill.name.slice(0, 2)}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-bold text-[var(--text-main)]">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Left Button */}
        <button
          type="button"
          onClick={goToPreviousSlide}
          aria-label="Previous skills"
          className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-x-4 -translate-y-1/2 place-items-center rounded-full text-4xl font-light text-fuchsia-500 transition hover:scale-110 hover:text-fuchsia-400"
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          type="button"
          onClick={goToNextSlide}
          aria-label="Next skills"
          className="absolute right-0 top-1/2 z-10 grid h-11 w-11 translate-x-4 -translate-y-1/2 place-items-center rounded-full text-4xl font-light text-fuchsia-500 transition hover:scale-110 hover:text-fuchsia-400"
        >
          ›
        </button>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-2">
          {skillSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to skill slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-7 bg-fuchsia-500"
                  : "w-2.5 bg-fuchsia-500/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop / Tablet Grid */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--card-soft)] p-6 text-center shadow-lg shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl"
          >
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-xl bg-white p-2 transition duration-300 group-hover:scale-110">
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-xl font-black text-slate-900">
                  {skill.name.slice(0, 2)}
                </span>
              )}
            </div>

            <p className="text-sm font-bold text-[var(--text-main)]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm text-[var(--text-soft)]">
          <span>Learning Progress</span>
          <span>85%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;