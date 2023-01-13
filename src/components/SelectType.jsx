import React, from 'react';

const SelectType = ({types,type:userType,setType}) => {
  const handleClick = (type) => {
    setType(type)
    console.log(userType)
  }
  return (
    <div>
      <ul className="flex pt-8 pb-2 px-1 relative">
        {types.map((type,idx) => <li key={idx} className={`${idx === types.length - 1 ? "" : "mr-5"} cursor-pointer dark:text-dimWhite text-dimBlack font-semibold ss:text-2xl text-xl ${type === userType && "text-black dark:text-gray-50"}`} onClick={() => handleClick(type)}>{type}</li>)}
      </ul>
      <div className="absolut w-full h-0.5 bottom-0 left-0 blue-pink-gradient"></div>
    </div>
  );
};

export default SelectType;