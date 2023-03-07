import React from "react";
import { HiCodeBracket } from "react-icons/hi2";

import Prop from "./Prop.jsx";

const ProjectCard = ({ id, name, props, img, code, link }) => {
  return (
    <div className="w-[250px] h-[225px] sm:w-[300px] sm:h-[265px] border-2 border-neutral-400 dark:border-dimWhite overflow-hidden rounded-[10px] flex flex-col justify-between">
      <a href={link} target="_blank">
        <div>
          <img
            src={img}
            alt={name}
            loading={"lazy"}
            className="w-full h-[120px] object-top object-cover"
            draggable="false"
          />
          <div className="mx-2 flex flex-col justify-center sm:h-[100px]">
            <h3 className="text-[18px] font-medium my-2">{name}</h3>
            <div>
              {props.map((prop, idx) => (
                <Prop
                  key={prop + id}
                  text={prop}
                  style={idx === props.length - 1 ? "mr-0" : "mr-2"}
                />
              ))}
            </div>
          </div>
        </div>
      </a>
      <a
        href={code}
        target="_blank"
        className="flex items-center justify-center text-black dark:text-white block border-t-[1px] border-dimBlack bg-neutral-50 dark:border-dimWhite dark:bg-neutral-900"
      >
        <HiCodeBracket size={23} />
      </a>
    </div>
  );
};

export default ProjectCard;
