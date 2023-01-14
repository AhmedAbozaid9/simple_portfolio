import React from 'react';
import Heading2 from "./Heading2.jsx";

const Contact = () => (
  <section className="flex flex-col items-start justify-center py-8 sm:py-16">
      <Heading2 text="Contact"/>
    <form method="POST" action="https://getform.io/f/cc8da9e3-82a6-40d2-89e2-6479c6fdb09a"
      className="pt-5 w-full flex flex-col items-center justify-center"
    >
      <div className="lg:w-[1000px] w-full flex flex-col items-center justify-center">
        <input required type="text" name="name" placeholder="Name" className="outline-0 w-full p-5 my-2 rounded-[10px] border-2 border-neutral-400 dark:border-white dark:bg-neutral-900"/>
        <input required type="email" name="email" placeholder="Email" className="outline-0 w-full p-5 my-2 rounded-[10px] border-2 border-neutral-400 dark:border-white dark:bg-neutral-900"/>
        <textarea required name="message" id="" cols="30" rows="10" className="outline-0 w-full  p-5 my-2 rounded-[10px] border-2 border-neutral-400 dark:border-white min-h-[100px] dark:bg-neutral-900" placeholder="Message"></textarea>
        <input type="submit" value="Contact Me" className="text-lg font-medium cursor-pointer py-4 px-8 rounded-[12px] text-white button-gradient self-start mt-8 drop-shadow-lg"/>
      </div>
    </form>
  </section>

);

export default Contact;