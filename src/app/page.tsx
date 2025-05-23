import Image from "next/image";
import Cards from "./components/Cards";
import { PersonAddAlt1Outlined } from "@mui/icons-material";
import GenericListShipper from "./components/IndustriesList";
import { data } from "./components/utils";
import CarrierCentricComponent from "./components/CarrierCentric";
import ShipperChoiceComp from "./components/ShipperChoice";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import ExpertiseGrid from "./components/Expertise";
import Contact from "./contact/page";
import FeatureImage from '../../public/shipper.jpg'
import Link from "next/link";
import { getStrings } from "./components/strings";


export default function Home() {

  const strings = getStrings()

  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/HomePage1.jpg')]">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-3xl md:text-5xl text-secondary font-bold mb-2 md:mb-4">
                {strings.the}
              </h2>
              <h3 className="text-2xl md:text-4xl text-secondary font-bold mb-2 md:mb-4">
                {strings.emblem}
              </h3>
              <p className="text-3xl md:text-5xl font-mono text-secondary mb-6 md:mb-8">
                {strings.commitment}
              </p>
            </div>
            <div className="text-center md:text-left md:w-1/2">
              <p data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-lg md:text-xl text-secondary mb-6 md:mb-8">
               {strings.homeHeader}
              </p>
              <div data-aos="fade-up"
                data-aos-duration="3000" className="flex flex-col md:flex-row items-center">
                <Link href={"/shippers"}>
                  <button className="bg-primary text-secondary py-2 px-6 md:px-9 mb-4 md:mb-0 md:mr-4 rounded-md lg:w-auto md:w-auto w-full hover:bg-secondary hover:text-black transition ease-in-out delay-150">
                    {strings.shippersCaps}
                  </button>
                </Link>
                <Link href={"/carriers"}>
                  <button className="border-secondary border-2 text-secondary py-2 px-6 md:px-9 rounded-md lg:w-auto md:w-auto w-full hover:bg-secondary hover:text-black transition ease-in-out delay-150">
                    {strings.carriersCaps}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container relative mx-auto px-4 sm:px-8 mt-10 z-10 lg:-mt-10 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            strings.reliableService,
            strings.timelyPerformance,
            strings.communication,
            strings.costEffectiveSol,
          ].map((ele, index) => (
            <Cards key={index} Icon={index} Label={ele} />
          ))}
        </div>
      </div>

      <FeaturesSection image={FeatureImage} title={strings.notOnlyLoads} desc={strings.homeFeatureDesc} screenName="home" />
      <div className="bg-primary mt-[20px] py-10 relative">
        <div className="bg-[url('/dot.svg')] bg-[length:40px_40px] ml-14 bg-repeat w-1/2 h-[93%] absolute"></div>
        <div className="relative z-10"><ShipperChoiceComp /></div>
        <div className="relative z-10"><CarrierCentricComponent /></div>
      </div>
      <div className="mt-10 mb-10 ml-20 mr-20 relative">
        <div className="bg-[url('/dot.svg')] hidden lg:block  bg-[length:40px_40px] bg-repeat w-[30%] h-[60%] absolute bottom-0 top-30 left-0"></div>
        <div className="z-10 relative"><ExpertiseGrid /></div>
      </div>
      <div className="container mx-auto w-full">
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
      <div className=" bg-[url('/dot.svg')] bg-[length:40px_40px] bg-repeat-x w-full"></div>
      <Contact />
    </>
  );
}
