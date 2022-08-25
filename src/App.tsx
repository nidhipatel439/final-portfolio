import { useEffect, useState } from "react";
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
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" bg-orange-50">
      <Navbar />
      <div data-aos="fade-up">
        <About description={description} />
        <hr className="border-black border-t-4 m-2" />
      </div>

      <div data-aos="fade-up">
        <Experience experiences={experience} />
        <hr className="border-black border-t-4 m-2" />
      </div>

      <div data-aos="fade-up">
        <Projects projects={projects} />
        <hr className="border-black border-t-4 m-2" />
      </div>
      <div data-aos="fade-up">
        <Education education={education} />
        <hr className="border-black border-t-4 m-2" />
      </div>

      <div data-aos="fade-up">
        <Skills skills={skills} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
