"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PersonAddAlt1Outlined } from "@mui/icons-material";
import { getStrings } from './strings';

interface IFeatureSection {
  title: string,
  desc: string,
  screenName: string,
  image?: any
}
const FeaturesSection: React.FC<IFeatureSection> = ({ title, desc, screenName, image }) => {
  // State for counters
  const [counters, setCounters] = useState({
    chassis: 0,
    shipments: 0,
    carrierPartners: 0
  });

  const strings = getStrings()

  // Function to animate counters
  const animateCounters = () => {
    const targetCounters = {
      chassis: 350,
      shipments: 150,
      carrierPartners: 30
    };

    let start = 0;
    const duration = 2000;
    const step = 50;

    const timer = setInterval(() => {
      start += step;

      if (start >= duration) {
        clearInterval(timer);
      }

      setCounters(prevCounters => ({
        chassis: Math.min(targetCounters.chassis, Math.floor(start * (targetCounters.chassis / duration))),
        shipments: Math.min(targetCounters.shipments, Math.floor(start * (targetCounters.shipments / duration))),
        carrierPartners: Math.min(targetCounters.carrierPartners, Math.floor(start * (targetCounters.carrierPartners / duration)))
      }));
    }, step);
  };

  useEffect(() => {
    animateCounters();
  }, []); // Run once on component mount

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          <div data-aos="zoom-in" className={`md:w-1/2 mb-8 md:mb-0 md:mr-4 p-8 lg:p-12 ${screenName === "carriers2" ? 'order-2' : 'order-1'}`}>
            <h2 className="text-3xl font-bold mb-6 md:mb-8">{title}</h2>
            <p className="text-md mb-4">
              {desc}
            </p>
            {/* Counter section */}
            {screenName === "home" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12 justify-center md:justify-between">
                <div className="counter-item flex flex-col items-center mb-4">
                  <PersonAddAlt1Outlined className="text-4xl text-blue-500 mb-2" />
                  <div className="text-center">
                    <span className="text-lg">Chassis</span>
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-xl font-bold">{counters.chassis}+</span>
                  </div>
                </div>
                <div className="counter-item flex flex-col items-center mb-4">
                  <PersonAddAlt1Outlined className="text-4xl text-blue-500 mb-2" />
                  <div className="text-center">
                    <span className="text-lg">{strings.shipments}</span>
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-xl font-bold">{counters.shipments}k+</span>
                  </div>
                </div>
                <div className="counter-item flex flex-col items-center mb-4">
                  <PersonAddAlt1Outlined className="text-4xl text-blue-500 mb-2" />
                  <div className="text-center">
                    <span className="text-lg">{strings.carrierPartners}</span>
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-xl font-bold">{counters.carrierPartners}k+</span>
                  </div>
                </div>
              </div>
            )}

          </div>
          {/* Right Side */}
          <div className="md:w-1/2">
            <Image
              data-aos="zoom-in"
              src={image}
              alt="Feature Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;