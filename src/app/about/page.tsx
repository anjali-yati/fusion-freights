"use client"
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import ByTheNumbers from '../components/ByTheNumbers';
import { cultAndValueData } from '../components/utils';
import Wholesale from '../../../public/Hassle-Free.png'
import Image from 'next/image';
import { KeyboardArrowDown } from '@mui/icons-material';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getStrings } from '../components/strings';

const About = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const strings = getStrings()
    return (
        <>
            <section className="relative bg-cover bg-center mb-20 bg-no-repeat bg-[url('/about.jpg')]">
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
            <div className='mx-auto py w-full px-10 md:w-full md:px-20 sm:px-10'>
                <ByTheNumbers />
                <section className="grid-container rounded-lg mt-20 mb-20">
                    {/* Grid for large screens */}
                    <div className="grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 hidden md:grid">
                        {cultAndValueData.map((item, index) => (
                            <div
                                data-aos="zoom-in-down"
                                key={index}
                                className="grid-item relative border border-gray-200 rounded-lg p-4"
                                style={{ height: '290px', padding: '42px 50px 70px', backgroundColor: '#a1c39878', overflow: 'hidden' }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image
                                    className={`icon ${hoveredIndex === index ? 'hidden' : ''}`}
                                    src={Wholesale}
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <h3
                                    className={`title text-3xl mt-10 ${hoveredIndex === index ? 'hidden' : ''}`}
                                >
                                    {item.title}
                                </h3>
                                <p className={`description text-sm md:text-md ${hoveredIndex !== index ? 'hidden' : ''}`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Container for mobile and tablet screens */}
                    <div className="mobile-container md:hidden">
                        {cultAndValueData.map((item, index) => (
                            <div data-aos="zoom-in-up" key={index} className="mobile-item border-b border-gray-200 py-4 flex justify-between items-center">
                                <div className="title-container flex justify-between w-full">
                                    <h3 style={{ fontWeight: 'bold' }} className="title">{item.title}</h3>
                                    <KeyboardArrowDown className="arrow-icon ml-2 w-8 h-8" />
                                    {/* <Image className="arrow-icon ml-2 w-4 h-4" src={KeyboardArrowDown} alt="Down Arrow" /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='justify-center'>
                    <h2 className='text-center font-bold text-md lg:text-4xl md:text-3xl'>
                       {`Let's Get Social`}
                    </h2>
                    <div className="flex flex-col items-center  mt-10 w-full px-2">
                        {/* Social Media Icons */}
                        <div className="flex flex-wrap mb-4 gap-10 justify-center items-center">
                            <div
                                style={{ borderRadius: "50%", padding: 16 }}
                                className="mb-2 bg-secondary shadow-md"
                            >
                                <TwitterIcon className="h-8 w-8 " />
                            </div>
                            <div
                                style={{ borderRadius: "50%", padding: 16 }}
                                className="mb-2 bg-secondary shadow-md"
                            >
                                <FacebookIcon className="h-8 w-8 " />
                            </div>
                            <div
                                style={{ borderRadius: "50%", padding: 16 }}
                                className="mb-2 bg-secondary shadow-md"
                            >
                                <LinkedInIcon className="h-8 w-8 " />
                            </div>
                            <div
                                style={{ borderRadius: "50%", padding: 16 }}
                                className="mb-2 bg-secondary shadow-md"
                            >
                                <WhatsAppIcon className="h-8 w-8 " />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
