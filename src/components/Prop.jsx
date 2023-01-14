import React from 'react';
import colors from "../constants/colors.js";

const Prop = ({text,style}) => {

  let primaryColor = colors[text] && colors[text][0]
  let secondaryColor = colors[text] && colors[text][1]

  return (
    <span className={`px-2 py-0.5 ${style}  text-sm border-2 border-black dark:border-white rounded-[5px]`} style={
      {
        color:primaryColor,
        borderColor:primaryColor,
        backgroundColor:secondaryColor,
      }
    }>
      {text}
    </span>
  );
};

export default Prop;