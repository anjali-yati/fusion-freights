"use client";
import React from "react";
import FeaturesSection from "../components/FeaturesSection";
import { data } from "../components/utils";
import GenericListShipper from "../components/IndustriesList";
import Image from "next/image";
import FeatureImage from "../../../public/shipper.jpg";
import Loads from "../../../public/loads.jpg";
import { getStrings } from "../components/strings";


const Shipper = () => {
  const strings = getStrings()
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/shipper-bg.jpg')]">
        <div className="container w-3/4 mx-auto px-4 py-12 md:py-24">
          <div className="md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-5xl text-secondary font-bold mb-2 md:mb-4">
              The
            </h2>
            <h3 className="text-2xl md:text-4xl text-secondary font-bold mb-2 md:mb-4">
              Emblem of
            </h3>
            <p
              style={{ color: "#F4CE14", fontStyle: "italic" }}
              className="text-3xl md:text-5xl font-mono  mb-6 md:mb-8"
            >
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

      <section
        style={{ background: "#f5f6f3", fontWeight: "500" }}
        className="py-10"
      >
        <div className="container mx-auto w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-sm uppercase mb-10 font-bold">
              {strings.ourCarriersSuccessCaps}
            </p>
            <p className="text-4xl font-bold">{strings.isOurSuccess}</p>
          </div>
          <div>
            <p data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="mb-4">
              {strings.carrierPageDesc}
            </p>
            <p data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className="mt-4">
               {strings.carrierPageDesc2}
            </p>
          </div>
        </div>
      </section>

      <section className={`py-16 bg-gray-100 w-full`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div  data-aos="zoom-in" className={`w-full md:w-1/2 mx-auto mb-8 lg:mb-0 mt-10 md:mt-0 lg:mr-4 order-2 md:px-6`}>
              <h2 className="text-3xl font-bold mb-4">{strings.supportive}</h2>
              <p className="text-lg mb-4">
                {
                  strings.supportiveDesc
                }
              </p>
            </div>
            {/* Right Side */}
            <div  data-aos="zoom-in" className="md:w-1/2">
              <Image
                src={FeatureImage}
                alt="Feature Image"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection
        image={Loads}
        screenName={"carriers1"}
        title={strings.dependable}
        desc={
          strings.dependableDesc
        }
      />
    </>
  );
};

export default Shipper;
