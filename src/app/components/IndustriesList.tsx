import Image from "next/image";
import React, { FC } from "react";
import { IndustriesData } from "./utils";

const GenericListShipper: React.FC<IndustriesData> = ({
  title,
  desc,
  image,
}) => {
  return (
    <div data-aos="zoom-out" className="p-4 rounded-lg shadow-lg ">
      <div  className="flex items-center justify-center bg-secondary rounded shadow-md w-16 h-16  mb-4">
        <Image src={image} alt="Icon" className="w-10 h-10" />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
};

export default GenericListShipper;
