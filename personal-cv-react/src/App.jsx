import Header from "./component/Header.jsx";             
import About from "./component/About.jsx";               
import Skills from "./component/Skills.jsx";            
import Education from "./component/Education.jsx";      
import Contact from "./component/Contact.jsx";           
import { useState } from "react";

function App() {
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
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;