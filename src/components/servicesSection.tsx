"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

type ServiceSectionDetails = {
  serviceName: string;
  serviceDescription: string;
  serviceImage?: string;
  color?: string;
};

const serviceDetails: ServiceSectionDetails[] = [
  {
    serviceName: "PHOTO MODEL",
    serviceDescription: "We offer photo model servicees",
    serviceImage:
      "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e",
    color: "bg-blue-400",
  },
  {
    serviceName: "WEDDING PHOTO",
    serviceDescription: "We offer photo model servicees",
    serviceImage:
      "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e",
    color: "bg-red-400",
  },
  {
    serviceName: "PROFESSIONAL PORTRAIT",
    serviceDescription: "We offer photo model servicees",
    serviceImage:
      "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e",
    color: "bg-orange-400",
  },
  {
    serviceName: "HUMAN INTEREST",
    serviceDescription: "We offer photo model servicees",
    serviceImage:
      "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e",
    color: "bg-green-400",
  },
];
export default function ServiceSection() {
  const [selectedService, setSelectedService] = useState<ServiceSectionDetails>(
    serviceDetails[0]
  );

  const handleClick = (service: ServiceSectionDetails) => {
    setSelectedService(service);
    // Save to local storage
  };

  return (
    <div className="grid grid-cols-2 w-full">
      <div className="flex items-center justify-center lg:h-[50rem] h-[30rem]">
        <div className="flex flex-col justify-between text-white lg:text-4xl md:text-xl text-md ">
          {serviceDetails.map((service, index) => (
            <button
              key={service.serviceName}
              onClick={() => handleClick(service)}
              className={cn(
                "flex flex-row lg:py-20 py-7",
                selectedService.serviceName === service.serviceName
                  ? "text-gray-900"
                  : "text-gray-400"
              )}
            >
              <div className="lg:px-10 px-5 text-center">
                <span>0{index + 1}</span>
              </div>
              <h1>{service.serviceName}</h1>
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex lg:h-[50rem] h-[30rem] items-center justify-center">
        <div className="absolute lg:aspect-[5/6] lg:w-3/5 w-4/5 h-3/5 bg-slate-400 rounded-2xl lg:rotate-6 rotate-3 border-2 top-0 bottom-0 left-0 right-0 m-auto lg:translate-x-14 translate-x-7"></div>
        <div
          className={cn(
            "absolute lg:aspect-[5/6] lg:w-3/5 w-4/5 h-3/5 rounded-2xl -rotate-6 border-2 top-0 bottom-0 left-0 right-0 m-auto translate-x-2",
            selectedService.color
          )}
        ></div>
      </div>
    </div>
  );
}
