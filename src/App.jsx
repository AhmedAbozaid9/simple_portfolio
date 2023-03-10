import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import ToggleTheme from "./components/ToggleTheme.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [theme,setTheme] = useState(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex flex-col justify-center items-center">
      <ToggleTheme theme={theme === "dark"} setTheme={setTheme}/>
      <div className="xl:max-w-[1400px] w-full px-4">
        <Header />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
