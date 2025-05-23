"use client"
import React from "react";
import Carriers from "../../../public/carriers.jpg";
import Image from "next/image";
import { getStrings } from "./strings";

const CarrierCentricComponent = () => {

  const strings = getStrings()

  return (
    <div className="container mx-auto p-4 rounded-3xl">
      <div className="flex flex-col sm:flex-row items-stretch">
        {/* Image Section */}
        <div data-aos="zoom-in" className="w-full sm:w-2/4 flex justify-center sm:justify-end sm:order-2 mb-4 sm:mb-0 overflow-hidden">
          <Image
            src={Carriers}
            alt="Carrier Image"
            className="h-auto max-h-80 sm:max-h-full rounded-l sm:rounded-l-none transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        {/* Text Section */}
        <div data-aos="zoom-in" className="w-full sm:w-2/4 flex flex-col justify-center p-20 bg-secondary rounded-r sm:rounded-r-none sm:rounded-r-3xl sm:order-1">
          <h2 className="text-3xl font-extrabold mb-10">{strings.carrierHomeTitle}</h2>
          <p className="text-gray-700">
            <span className="font-bold">
              {strings.carrierHomeDesc1}
            </span>
            {strings.carrierHomeDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarrierCentricComponent;
