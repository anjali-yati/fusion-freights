"use client"
import React, { useEffect } from "react";
import Shipper from '../../../public/HomePage3.jpg';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getStrings } from "./strings";
const ShipperChoiceComp = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const strings = getStrings()

  return (
    <div className="container mx-auto p-4 rounded-3xl">
      <div className="flex flex-col sm:flex-row items-stretch">
        {/* Image Section */}
        <div data-aos="zoom-in-down" className="w-full sm:w-2/4 flex justify-center sm:justify-end sm:order-2 mb-4 sm:mb-0 overflow-hidden">
          <Image
            src={Shipper}
            alt="Carrier Image"
            className="h-auto max-h-80 sm:max-h-full rounded-l sm:rounded-l-none transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        {/* Text Section */}
        <div data-aos="zoom-in-down"
          className="w-full sm:w-2/4 flex flex-col justify-center p-20 bg-secondary rounded-r sm:order-2">
          <h2 className="text-3xl font-extrabold mb-10">{strings.shipperHomeTitle}</h2>
          <p className="text-gray-700">
            {strings.shipperHomeDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShipperChoiceComp;
