import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const ToggleTheme = ({ theme, setTheme }) => {
  const [toggle, setToggle] = useState(theme);
  const toggleClass = " transform translate-x-5 sm:translate-x-6";

  const icon = toggle ? (
    <BsSunFill size={16} color={"#FFC93C"} />
  ) : (
    <BsFillMoonFill size={16} color={"#3D1766"} />
  );

  return (
    <div
      className={`${
        toggle ? "bg-neonBlue" : "bg-neonPink"
      } sm:w-14 sm:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer fixed top-5 right-5 z-50`}
      onClick={() => {
        setToggle(!toggle);
        setTheme(toggle ? "dark" : "light");
      }}
    >
      {/* Switch */}
      <div
        className={`bg-white sm:w-6 sm:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${
          toggle ? null : toggleClass
        } flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
  );
};
export default ToggleTheme;
