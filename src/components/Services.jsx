import React from "react";

import Heading2 from "./Heading2.jsx";
import services from "../constants/services.js";
import ServiceCard from "./ServiceCard.jsx";

const Services = () => (
  <section className="flex flex-col items-start justify-center py-8 sm:py-16">
    <Heading2 text={"Services"} />
    <div className="w-full flex items-center justify-between flex-col md:flex-row gap-8 mt-8">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  </section>
);

export default Services;
