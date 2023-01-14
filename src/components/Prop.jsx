import React from 'react';
import colors from "../data/colors.js";

const Prop = ({text}) => {

  let primaryColor = colors[text] && colors[text][0]
  let secondaryColor = colors[text] && colors[text][1]
  console.log(primaryColor)

  return (
    <span className={`px-2 py-0.5 mr-2 text-sm border-2 rounded-[5px]`} style={
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