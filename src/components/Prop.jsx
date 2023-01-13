import React from 'react';

const Prop = ({text}) => {
  return (
    <span className="px-2 mr-2 border-2 text-sm border-black dark:border-white rounded-[5px]">
      {text}
    </span>
  );
};

export default Prop;