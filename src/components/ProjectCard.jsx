import React from 'react';

import Prop from "./Prop.jsx";

const ProjectCard = ({id,name, props, img, link}) => {
  return (
    <a href={link} target="_blank" >
    <div className="w-[250px] h-[200px] sm:w-[300px] sm:h-[240px] border-2 border-neutral-400 dark:border-dimWhite overflow-hidden rounded-[10px]">
      <img src={img} alt={name} className="w-full h-[120px] object-top object-cover" draggable="false"/>
      <div className="mx-2 flex flex-col justify-center sm:h-[100px]">
        <h3 className="text-[18px] font-medium my-2">{name}</h3>
        <div>
          {props.map((prop,idx) => <Prop key={prop+id} text={prop} style={idx === props.length - 1 ? "mr-0":"mr-2"}/>)}
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;