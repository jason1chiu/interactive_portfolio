import React from 'react';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact'

const HomePage = () => {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;