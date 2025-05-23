import { Card } from "@mui/material";
import Image from "next/image";
import React from "react";
import Reliable from "../../../public/reliable-service.svg";
import CostEffective from "../../../public/cost-effective.svg";
import TimelyPerformance from "../../../public/timely-performance.svg";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Cards = ({ Icon, Label }: { Icon: number; Label: string }) => {
  return (
    <Card
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
      className="rounded-md flex p-4 items-center"
    >
      <div className="mr-5 border-primary p-2 border-2 text-primary rounded-md hover:bg-primary group-hover:brightness-40">
        {Icon === 0 ? (
          <Image className="w-12 h-12 group-hover:brightness-40 filter-brightness-40" src={Reliable} alt={""} />
        ) : Icon === 1 ? (
          <Image className="w-12 h-12 group-hover:brightness-40 filter-brightness-40" src={TimelyPerformance} alt={""} />
        ) : Icon === 2 ? (
          <SupportAgentIcon className="w-12 h-12 hover:brightness-7 filter-brightness-40" />
        ) : (
          <Image className="w-14 h-14 hover:brightness-7 filter-brightness-40" src={CostEffective} alt={""} />
        )}
      </div>

      <p>{Label}</p>
    </Card>
  );
};

export default Cards;

// .hover\: bg - primary:hover img {
//   filter: brightness(7.1);
// }
