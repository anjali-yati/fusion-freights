"use client";
import React from "react";
import FeaturesSection from "../components/FeaturesSection";
import { data } from "../components/utils";
import GenericListShipper from "../components/IndustriesList";
import Contact from "../contact/page";
import FeatureImage from '../../../public/HomePage2.jpg'
import { getStrings } from "../components/strings";

const Shipper = () => {
  const strings = getStrings()
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/Shipper-1.jpg')]">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-5xl text-secondary font-bold mb-2 md:mb-4">
              The
            </h2>
            <h3 className="text-2xl md:text-4xl text-secondary font-bold mb-2 md:mb-4">
              Emblem of
            </h3>
            <p className="text-3xl md:text-5xl font-mono text-secondary mb-6 md:mb-8">
              Commitment
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <button className="bg-primary text-secondary py-2 px-6 md:px-20 mb-4 md:mb-0 md:mr-4 rounded-md lg:w-auto md:w-auto w-full hover:bg-secondary hover:text-black transition ease-in-out delay-150">
              {strings.getAQuote}
            </button>
          </div>
        </div>
      </section>
      <FeaturesSection
        screenName={"shipper"}
        image={FeatureImage}
        title={strings.shipperPageTitle}
        desc={
          strings.shipperPageDesc
        }
      />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <GenericListShipper
              key={index}
              image={item.image}
              desc={item.description}
              title={item?.title}
            />
          ))}
        </div>
      </div>
      <Contact/>
    </>
  );
};

export default Shipper;
