import React from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <NavBar toggleDarkMode={toggleDarkMode} />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
