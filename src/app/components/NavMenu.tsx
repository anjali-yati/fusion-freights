import Link from "next/link";
import React from "react";
import { getStrings } from "./strings";

const NavMenu = ({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean, setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const strings = getStrings();

  return (
    <nav
      className={`w-full md:w-2/4 mt-4 md:mt-0 md:ml-4 mr-10 ${isDrawerOpen ? "block" : "hidden"} md:block`}
    >
      <ul className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between md:items-center mt-6 md:mt-0">
        <li>
          <Link href={"/shippers"} onClick={() => setIsDrawerOpen(false)} className="text-secondary hover:text-primary hover:pl-3 md:hover:text-black md:hover:pl-0 transition-all duration-300 text-6xl md:text-black md:text-xl sm:text-lg md:text-base lg:text-xl xl:text-xl">
            {strings.shippersCaps}
          </Link>
        </li>
        <li>
          <Link href={"/carriers"} onClick={() => setIsDrawerOpen(false)} className="text-secondary hover:text-primary hover:pl-3 md:hover:text-black md:hover:pl-0 transition-all duration-300 text-6xl md:text-black md:text-xl sm:text-lg md:text-base lg:text-xl xl:text-xl">
            {strings.carriersCaps}
          </Link>
        </li>
        <li>
          <Link href={"/contact"} onClick={() => setIsDrawerOpen(false)} className="text-secondary hover:text-primary hover:pl-3 md:hover:text-black md:hover:pl-0 transition-all duration-300 text-6xl md:text-black md:text-xl sm:text-lg md:text-base lg:text-xl xl:text-xl">
            {strings.contactCaps}
          </Link>
        </li>
        <li>
          <Link href={"/about"} onClick={() => setIsDrawerOpen(false)} className="text-secondary hover:text-primary hover:pl-3 md:hover:text-black md:hover:pl-0 transition-all duration-300 text-6xl md:text-black md:text-xl sm:text-lg md:text-base lg:text-xl xl:text-xl">
            {strings.aboutCaps}
          </Link>
        </li>
        {/* <li>
          <Link href={"/blog"} onClick={() => setIsDrawerOpen(false)} className="text-secondary hover:text-primary hover:pl-3 md:hover:text-black md:hover:pl-0 transition-all duration-300 text-6xl md:text-black md:text-xl sm:text-lg md:text-base lg:text-xl xl:text-xl">
            {strings.blogCaps}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavMenu;
