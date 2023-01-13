import React from 'react';
import styles from "../styles.js";
import Title from "./Title.jsx";
const Header = () => (
  <header className="flex items-center justify-center flex-col">
    <h1 className={`text-4xl sm:text-5xl font-bold ${styles.paddingY} tracking-wider`}>Abozaid</h1>
    <Title />
    <p className={`${styles.paddingY} text-dimBlack max-w-[480px] text-center`}>
      I'm a computer science student, but I've been learning how to code since 2018. I've been passionate about web technologies enough to teach it to others by hosting web workshops for beginners. My ultimate goal is to make an impact in this domain, and I started doing so by teaching others, and improving my skills to make bigger and better projects from zero.
    </p>
    <div className="relative">
      <a href="https://docs.google.com/document/d/1Yd8hDpZ_lxWr0cFKhBdCqIMOORh3FEKgoJzdE1n9_70/edit?usp=sharing" target="_blank">
        <button className="bg-white text-dimBlack font-medium px-8 rounded-[10px] py-3 text-lg">Resume</button>
      </a>
      <div className="absolute -z-10 inset-0 rounded-[10px] w-full h-full blue-pink-gradient blur-sm"></div>
    </div>
  </header>
);

export default Header;