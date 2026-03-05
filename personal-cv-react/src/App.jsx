import Header from "./component/Header.jsx";
import About from "./component/About.jsx";
import Skills from "./component/Skills.jsx";
import Education from "./component/Education.jsx";
import Contact from "./component/Contact.jsx";
import { useState } from "react";

function App() {
  const education = [
    {
      year: "2023",
      program: "BS Information Technology",
      school: "USTP CDO"
    },
    {
      year: "2019",
      program: "Senior High School",
      school: "ONSTS"
    },
    {
      year: "2024",
      program: "BS Information Technology",
      school: "COC"
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <h1>My Personal Online CV</h1>
      </header>

      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
    </div>
  );
}

export default App;