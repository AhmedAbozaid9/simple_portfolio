import React from 'react';
import {BsGithub} from "react-icons/bs"
import {GrLinkedin} from "react-icons/gr"
import {BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="pb-8 pt-4 flex flex-col justify-center items-center">
      <ul className="flex mb-4">
        <li className="mr-12 text-3xl sm:text-4xl"><a href="https://github.com/AhmedAbozaid9" target="_blank"><BsGithub/></a></li>
        <li className="mr-12 text-3xl sm:text-4xl"><a href="https://www.linkedin.com/in/ahmed-abo-zaid-ab008217b/"><GrLinkedin /></a></li>
        <li className="text-3xl sm:text-4xl"><a href=" https://twitter.com/SirenSera_22"><BsTwitter/></a></li>
      </ul>
      <p className="mt-4">	&copy; Ahmed Abozaid. All rights reserved.</p>
    </footer>
  );
};

export default Footer;