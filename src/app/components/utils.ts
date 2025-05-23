
import TeamOfExperts from '../../../public/team-of-experts.png'
import FrozenFoods from '../../../public/frozen-food.png'
import Produce from '../../../public/produce.png'
import HeavyMachinery from '../../../public/heavy machinery.png'
import Wholesale from '../../../public/wholesale.png'
import DistributionCenters from '../../../public/distribution centers.png'
import Pharmaceuticals from '../../../public/pharmaceutical.png'




export interface IndustriesData {
    image: any,
    title: string,
    desc: string
}
export interface ExpertiseData {
    title: string,
    desc: string
}
interface ICultAndValue {
    image: string;
    title: string;
    desc: string;
}


export const data = [
    {
        image: Produce,
        title: "Produce",
        description: "We specialize in getting your fresh produce from farm to market quickly and efficiently, so you can be confident that your goods arrive in excellent condition."
    },
    {
        image: FrozenFoods,
        title: "Frozen foods",
        description: "Since every cargo is unique, we offer customised logistics solutions that are tailored to your specific requirements and tastes. No matter the size of your shipment, we can meet your needs by providing flexible routing, timing, and delivery options."
    },
    {
        image: Wholesale,
        title: "Wholesale",
        description: "Our shipping solutions are designed with the particular requirements of wholesale companies in mind, emphasising efficiency, dependability, and speed."
    },
    {
        image: DistributionCenters,
        title: "Distribution centers",
        description: "Our state-of-the-art distribution centers are equipped with modern facilities and advanced technology to provide secure storage for your goods. Whether you need short-term storage or long-term warehousing solutions, we have the capabilities to accommodate your needs."
    },
    {
        image: HeavyMachinery,
        title: "Heavy machinery",
        description: "With years of experience in the heavy machinery transportation industry, we have the knowledge, skills, and expertise to handle even the most complex transportation projects."
    },
    {
        image: Pharmaceuticals,
        title: "Pharmaceutical",
        description: "You can trust us to deliver your pharmaceutical products safely and on time, every time. We prioritize reliability and professionalism in all our operations to exceed your expectations."
    }
];

export const expertiseData = [
    {
        title: "DRAYAGE",
        description: "Searching for port-to-port or port-to-door shipping for regular or reefer cargo? The knowledgeable staff at Fusion Freights can simplify and streamline the drayage delivery procedure."
    },
    {
        title: "PROJECT CARGO LOGISTICS",
        description: "Our strengths include the ability to carefully and precisely transfer your valuable assets, including industrial machinery and construction equipment. Our team is capable of handling complex logistics for major projects, organizing transportation and guaranteeing the prompt arrival of every component."
    },
    {
        title: "TRUCKLOADS",
        description: "We provide you with individualised services for both short- and long-haul transportation, regardless of the kind or volume of your cargo. Fusion Freights' team of professionals is renowned for their advanced understanding of stepdecks, flatbeds, reefers, vented vans and dry vans for easy shipment transportation."
    },
    {
        title: "LTL/LCL",
        description: "Regardless of the kind or volume of your goods, we provide you with individualised services for both short- and long-term transportation."
    },
    {
        title: "WAREHOUSING AND DISTRIBUTION",
        description: "Our effective order fulfilment services enable you to promptly and precisely satisfy the demands of customers. We take great care and precision in handling each step of the fulfilment process, from order processing and picking to packaging and shipping. Fusion Freights' representative will find it simple to handle your storage and distribution needs thanks to their exclusive partnerships with warehouses and distribution hubs."
    },
    {
        title: "DEDICATED/ EXPEDITED",
        description: "We provide secure and convenient dedicated services in North America & Canada to ship the goods on a regular basis. Seeking workable schedules for emergency and accelerated cargoes! We are prepared to deliver any type of load, wherever it may be."
    },
    {
        title: "IMPORT/EXPORT",
        description: "With their vast knowledge and expertise negotiating the intricacies of international trade, our team of import and export specialists guarantees seamless and effective transactions. Our skilled customs brokers manage every facet of customs clearance, guaranteeing adherence to guidelines and reducing the possibility of delays or fines."
    }
];

export const cultAndValueData:ICultAndValue[] = [
    {
        image: "",
        title: "Transparency",
        desc: "We are committed to being transparent and unambiguous so that you can feel secure in your decision. Transparency is ingrained in everything we produce. Our goal is to deliver a dependable measurement and unambiguous expectations in every encounter, along with features like real-time pricing and facility analytics."
    },
    {
        image: "",
        title: "Visibility",
        desc: "We are committed to being transparent and unambiguous so that you can feel secure in your decision. Transparency is ingrained in everything we produce. Our goal is to deliver a dependable measurement and unambiguous expectations in every encounter, along with features like real-time pricing and facility analytics."

    },
    {
        image: "",
        title: "Impact",
        desc: "We are committed to being transparent and unambiguous so that you can feel secure in your decision. Transparency is ingrained in everything we produce. Our goal is to deliver a dependable measurement and unambiguous expectations in every encounter, along with features like real-time pricing and facility analytics."

    },
    {
        image: "",
        title: "Transparency",
        desc: "We are committed to being transparent and unambiguous so that you can feel secure in your decision. Transparency is ingrained in everything we produce. Our goal is to deliver a dependable measurement and unambiguous expectations in every encounter, along with features like real-time pricing and facility analytics."

    },
    {
        image: "",
        title: "Transparency",
        desc: "We are committed to being transparent and unambiguous so that you can feel secure in your decision. Transparency is ingrained in everything we produce. Our goal is to deliver a dependable measurement and unambiguous expectations in every encounter, along with features like real-time pricing and facility analytics."

    },
    {
        image: "",
        title: "Transparency",
        desc: "We are committed to being transparent and unambiguous so that you can feel secure in your decision. Transparency is ingrained in everything we produce. Our goal is to deliver a dependable measurement and unambiguous expectations in every encounter, along with features like real-time pricing and facility analytics."

    }
]

