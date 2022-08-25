import { useContext, useEffect, useState } from "react";
import About from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  description,
  experience,
  education,
  projects,
  skills,
} from "./content";
import { DarkModeContext } from "./context/DarkMode";

const SectionLine = () => (
  <hr className="border-black border-t-4 m-2 dark:border-white" />
);

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="dark:bg-black dark:text-white bg-orange-50">
      <Navbar />
      <div data-aos="fade-up">
        <About description={description} />
        <SectionLine />
      </div>

      <div data-aos="fade-up">
        <Experience experiences={experience} />
        <SectionLine />
      </div>

      <div data-aos="fade-up">
        <Projects projects={projects} />
        <SectionLine />
      </div>
      <div data-aos="fade-up">
        <Education education={education} />
        <SectionLine />
      </div>

      <div data-aos="fade-up">
        <Skills skills={skills} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
