"use client"
import { createRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Logo from '../../../public/logo-without-bg.png'
import { Close, CloseOutlined, Menu } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// Wrap the navigation menu with dynamic import
const DynamicNavMenu = dynamic(() => import('./NavMenu'), { ssr: false });

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [opacity, setOpacity] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const didScrollPage = () => {
      setOpacity(window.scrollY !== 0);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("scroll", didScrollPage);
    };
  }, []);

  return (
    <header
      id="content"
      className={`flex justify-between items-center my-0 w-full fixed top-0 z-[20] bg-secondary ${opacity ? 'bg-opacity-85' : 'bg-opacity-100'
        } py-5 md:py-8 lg:py-10 xl:py-12`}
      style={{ transition: 'all 0.4s', transitionTimingFunction: 'ease-in-out' }}
    >
      <div className="ml-4 md:ml-8">
        <Link href="/">
          <Image src={Logo} alt="logo" width={208} height={52} />
        </Link>
      </div>

      {/* Render hamburger menu button only for small screens */}
      <button className="md:hidden" onClick={toggleDrawer}>
        {isDrawerOpen ? 'Close' : <Menu />}
      </button>

      {/* Render dynamic navigation menu for medium and larger screens */}
      {!isDrawerOpen && <DynamicNavMenu setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />}
      
      {/* Drawer component for small screens */}
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="right"
        sx={{ '.MuiPaper-root': { width: '100%', background: '#DD5746' } }}
      >
        <CloseOutlined
          onClick={() => setIsDrawerOpen(false)}
          className="hover:cursor-pointer text-secondary absolute right-5 top-5"
        />
        <div className="mt-16">
          <DynamicNavMenu setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col items-start mt-10 ml-5">
          {/* Social Media Icons */}
          <div className="flex mb-4">
            <div className="mr-4 mb-2 bg-secondary hover:bg-secondary-dark rounded-full p-2 transition-all duration-300">
              <TwitterIcon className="h-8 w-8" />
            </div>
            <div className="mr-4 mb-2 bg-secondary hover:bg-secondary-dark rounded-full p-2 transition-all duration-300">
              <FacebookIcon className="h-8 w-8" />
            </div>
            <div className="mr-4 mb-2 bg-secondary hover:bg-secondary-dark rounded-full p-2 transition-all duration-300">
              <LinkedInIcon className="h-8 w-8" />
            </div>
            <div className="mr-4 mb-2 bg-secondary hover:bg-secondary-dark rounded-full p-2 transition-all duration-300">
              <WhatsAppIcon className="h-8 w-8" />
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
};



export default Header;