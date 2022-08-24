import { useState } from "react";
import About from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className=" bg-orange-50">
      <Navbar />
      <About />
      <hr className="border-black border-2 m-2" />
      <Experience />
      <hr className="border-black border-2 m-2" />
      <Projects />
      <hr className="border-black border-2 m-2" />
      <Education />
      <hr className="border-black border-2 m-2" />
      <Skills />
    </div>
  );
}

export default App;
