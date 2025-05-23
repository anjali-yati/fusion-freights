import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo-without-bg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex flex-col items-start">
            {/* Logo */}
            <div className="mb-4">
              <Image src={Logo} alt="Logo" className="h-12 w-auto" />
            </div>
            {/* Social Media Icons */}
            <div className="flex flex-wrap mb-4">
              <div
                style={{ borderRadius: "50%", padding: 5 }}
                className="mr-4 mb-2 bg-secondary"
              >
                <TwitterIcon className="h-6 w-6 " />
              </div>
              <div
                style={{ borderRadius: "50%", padding: 5 }}
                className="mr-4 mb-2 bg-secondary "
              >
                <FacebookIcon className="h-6 w-6 " />
              </div>
              <div
                style={{ borderRadius: "50%", padding: 5 }}
                className="mr-4 mb-2 bg-secondary "
              >
                <LinkedInIcon className="h-6 w-6 " />
              </div>
              <div
                style={{ borderRadius: "50%", padding: 5 }}
                className="mr-4 mb-2 bg-secondary "
              >
                <WhatsAppIcon className="h-6 w-6 " />
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center text-secondary md:text-left">
              &copy; {new Date().getFullYear()} Fusion Freights. All rights
              reserved.
            </div>
          </div>
        </div>
        {/* Center Section */}
        <div className="flex">
          <div className="flex flex-col">
            <nav className="flex col-span-1 items-center">
              <a href="/" className="mx-3 my-3 text-secondary">
                Home
              </a>
            </nav>
            <nav className="flex col-span-1 items-center">
              <a href="/shippers" className="mx-3  my-3 text-secondary">
                Shippers
              </a>
            </nav>
            <nav className="flex col-span-1 items-center">
              <a href="/carriers" className="mx-3  my-3 text-secondary">
                Carriers
              </a>
            </nav>
          </div>
          <div className="flex flex-col">
          <nav className="flex mx-20">
            <a href="/contact" className="mx-3  my-3 text-secondary">
              Contact Us
            </a>
          </nav>
          <nav className="flex mx-20">
            <a href="/about" className="mx-3  my-3 text-secondary">
             About
            </a>
          </nav>
          <nav className="flex mx-20">
            <a href="/blog" className="mx-3  my-3 text-secondary">
             Blog
            </a>
          </nav>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="col-span-1 md:col-span-1 flex justify-center">
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-white hover:text-gray-300 text-secondary"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
