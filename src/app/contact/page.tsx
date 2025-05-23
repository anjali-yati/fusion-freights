"use client"
import React from "react";
import { getStrings } from "../components/strings";

const Contact = () => {
  const strings = getStrings()
  return (
    <section className="py-12 px-4 md:px-0 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto md:flex md:items-center md:space-x-8">
        {/* Left Grid */}
        <div className="md:w-1/2 md:pr-8 md:pl-8">
          <div className="text-center md:text-left">
            <h2 className="text-lg  font-bold text-gray-800">{strings.getInTouchCaps}</h2>
            <p className="mt-4 text-5xl mb-6 text-gray-600">{strings.contactUs}</p>
            <p className="mb-4 text-lg ">
              {strings.inquiries}
            </p>
            <p className="mb-4 text-lg text-gray-700">
             {strings.contactNum}
            </p>
            <p style={{fontWeight:'bold',color:'#000',fontFamily:'Poppins-Bold'}} className="mb-4 font-extrabold text-xl text-gray-700">{strings.email}</p>
            {/* <p style={{fontWeight:'bold',color:'#000',fontFamily:'Poppins-Bold'}} className="text-xl">{strings.tel}</p>
            <p style={{fontWeight:'bold',color:'#000',fontFamily:'Poppins-Bold'}} className="text-xl">{strings.Fax}</p> */}
          </div>
        </div>

        {/* Right Grid */}
        <div data-aos="flip-right" className="mt-8 md:mt-0 md:w-1/2">
          <div className="bg-white p-12 shadow-md rounded-lg">
            <form>
              <div className="mb-6">
                <input
                  style={{ borderBottomColor: '#eeeeee' }}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border-b-2 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <input
                  style={{ borderBottomColor: '#eeeeee' }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border-b-2 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <textarea
                  style={{ borderBottomColor: '#eeeeee' }}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border-b-2 focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  style={{ background: "#dd5745", color: 'white' }}
                  type="submit"
                  className="w-full py-3 mt-6 md:mt-10 rounded-lg focus:outline-none hover:bg-primary"
                >
                 {strings.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
