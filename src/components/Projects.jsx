import React, {useState} from 'react';
import {motion} from "framer-motion";

import projects from "../constants/projects.js";

import Heading2 from "./Heading2.jsx";
import SelectType from "./SelectType.jsx";
import ProjectCard from "./ProjectCard.jsx";
const Projects = () => {
  let projectsCopy = projects
  const[type, setType] = useState("All")
  if(type === "Websites") {
    projectsCopy = projects.filter(project => project.type !== "app")
  }
  if(type === "Small apps") {
    projectsCopy = projects.filter(project => project.type !== "website")
  }
  return (
    <section className="flex flex-col items-start justify-center py-8 sm:py-16">
      <Heading2 text="Projects"/>
      <SelectType type={type} setType={setType} types={["All","Websites","Small apps"]}/>
     <motion.div key={type} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
       <div className="flex items-center sm:justify-start justify-center gap-8 flex-wrap mt-5">
         {projectsCopy.map(project => <ProjectCard key={project.id} {...project} />)}
       </div>
     </motion.div>
    </section>
  )
}
export default Projects;