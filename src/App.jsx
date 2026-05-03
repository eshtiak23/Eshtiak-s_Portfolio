import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text-main)] transition-colors duration-300">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(124,58,237,0.10),transparent_35%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(124,58,237,0.14),transparent_35%)]"></div>

      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main className="pt-28">
        <Hero />
        <About />
        <Services />
        <Resume />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;