import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import ToggleTheme from "./components/ToggleTheme.jsx";

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
      <div className="max-w[1200px] mx-5">
      <Header />
      </div>
    </div>
  )
}

export default App
