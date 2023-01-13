import React from 'react';
import Heading2 from "./Heading2.jsx";
import SelectType from "./SelectType.jsx";
const Projects = () => {
  const showType = (type) => {
    console.log(type)
  }
  return (
    <section className="flex flex-col items-start justify-center py-16">
      <Heading2 text="Projects"/>
      <SelectType showType={showType} types={["All","Websites","Small apps"]}/>
    </section>
  )
}
export default Projects;