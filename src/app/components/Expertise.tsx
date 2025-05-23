// ExpertiseGrid.js
"use client";

import { useState } from "react";
import { expertiseData } from "./utils";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { getStrings } from "./strings";

interface AccordionProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}
const ExpertiseGrid = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index:any) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const strings = getStrings()

  const Accordion: React.FC<AccordionProps> = ({
    title,
    description,
    isOpen,
    onClick,
  }) => {
    return (
      <div className="overflow-hidden">
        <div
          className="p-4 cursor-pointer flex justify-between transition duration-300"
          onClick={onClick}
        >
          <p style={{ fontWeight: "bold" }}>{title}</p>
          <ArrowForwardIosOutlinedIcon />
        </div>
        {isOpen && (
          <div
          className={`p-4 bg-gray-100 ${
            isOpen ? "max-h-96 transition-all duration-300" : "max-h-0"
          }`}
        >
            <p style={{ fontWeight: "normal" }}>{description}</p>
          </div>
        )}
        <hr className="mx-4 my-2" />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1 md:col-span-1">
        <h2 className="font-bold text-3xl mb-4">{strings.ourExpertise}</h2>
      </div>
      <div className="col-span-1 md:col-span-1">
        <div className="space-y-4">
          {expertiseData?.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              description={item.description}
              isOpen={index === openIndex}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGrid;
