import React from "react";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const HomePage = () => {
  return (
    <div>
      <div className="my-5">
        <About />
      </div>
      <div className="my-5">
        <Skills />
      </div>
      <div className="my-5">
        <Projects />
      </div>
      <div className="my-5">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
