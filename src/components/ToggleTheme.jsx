import React, {useState} from 'react';

const ToggleTheme = ({theme,setTheme}) => {
  const [toggle, setToggle] = useState(theme);
  const toggleClass = " transform translate-x-5 sm:translate-x-6";
  return (
    <div
      className={`${toggle ? "bg-neonBlue" : "bg-neonPink"} sm:w-14 sm:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer absolute top-5 right-5`}
      onClick={() => {
        setToggle(!toggle);
        setTheme(toggle ? "dark" : "light")
      }}
    >
      {/* Switch */}
      <div
        className={
          `bg-white sm:w-6 sm:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${toggle ? null : toggleClass}`
        }
      ></div>
    </div>
  );
}
export default ToggleTheme;