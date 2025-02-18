import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Dreams from "./components/Dreams";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <hr className="sectionDivider" />
      <Projects />
      <hr className="sectionDivider" />
      <Dreams />
      <hr className="sectionDivider" />
      <Skills />
      <hr className="sectionDivider" />
      <Contact />
    </div>
  );
}

export default App;
