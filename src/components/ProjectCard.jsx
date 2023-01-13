import React from 'react';

import Prop from "./Prop.jsx";

const ProjectCard = ({id,name, props, img, link}) => {
  return (
    <a href={link} target="_blank" >
    <div className="w-[250px] h-[200px] sm:w-[300px] sm:h-[240px] border-2 border-black dark:border-white overflow-hidden rounded-[10px]">
      <img src={img} alt={name} className="w-full h-[120px] object-top object-cover"/>
      <div className="mx-2 flex flex-col justify-center">
        <h3 className="text-[18px] font-medium my-2">{name}</h3>
        <div>
          {props.map(prop => <Prop key={prop+id} text={prop}/>)}
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;