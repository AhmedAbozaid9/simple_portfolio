import React from 'react';

const ServiceCard = ({title, content, img}) => (
  <div className="flex flex-col items-center justify-center">
    <img src={img} alt={title} className="w-[240px] h-[190px]" draggable={"false"}/>
    <h2 className="py-8 text-2xl font-semibold">{title}</h2>
    <p className="text-dimBlack dark:text-dimWhite max-w-[340px] text-center">{content}</p>
  </div>
);

export default ServiceCard;