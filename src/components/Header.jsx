import React from "react";
import Title from "./Title.jsx";
const Header = () => (
  <header className="flex items-center justify-center flex-col py-16 ">
    <h1 className="text-4xl sm:text-5xl font-bold pb-16 tracking-wider dark:text-white">
      Abozaid
    </h1>
    <Title />
    <p
      className={
        "py-16 text-dimBlack dark:text-dimWhite max-w-[500px] text-center tracking-wide"
      }
    >
      I'm a computer science student, but I've been learning how to code since
      2018. I've been passionate about web technologies enough to teach it to
      others by hosting web workshops for beginners. My ultimate goal is to make
      an impact in this domain, and I started doing so by teaching others, and
      improving my skills to make bigger and better projects from zero.
    </p>
    <div className="relative">
      <a
        href="https://docs.google.com/document/d/1oocoKZhMlnFYEu9XsonOByzPAajaC1odQv7eAsfaAvQ/edit?usp=sharing"
        target="_blank"
      >
        <button className="bg-white text-dimBlack font-medium px-8 rounded-[10px] py-3 text-lg">
          Resume
        </button>
      </a>
      <div className="absolute -z-10 inset-0 rounded-[10px] w-full h-full button-gradient blur-[7px] dark:blur-lg"></div>
    </div>
  </header>
);

export default Header;
