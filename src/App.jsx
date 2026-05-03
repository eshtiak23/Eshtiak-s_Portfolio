import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_top_left,rgba(124,58,237,0.10),transparent_28%)] py-6 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.28),transparent_32%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_28%)] dark:text-white">
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;