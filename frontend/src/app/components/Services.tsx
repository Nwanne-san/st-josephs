import React from "react";
import Image from "next/image";
import { services } from "@/data/services";
import Wrapper from "@/components/ui/Wrapper";
import { Yeseva_One } from "next/font/google";

const workSans = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const Services: React.FC = () => {

    
  return (
    <Wrapper className="py-10" id="our-services">
      <h2 className="text-center text-xl font-semibold text-secondary mb-2">
        ALWAYS CARING
      </h2>
      <h3
        className={`${workSans.className} text-center text-5xl font-bold text-primary mb-8`}
      >
        Our Specialties
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center px-4 py-6 border  shadow-sm cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white transition-all"
          >
            <Image
              src={service.icon}
              alt={`${service.name} Icon`}
              className="h-12 w-12 group-hover:hidden group-focus:hidden"
              width={30}
              height={30}
            />
            <Image
              src={service.focusIcon}
              alt={`${service.name} Focus Icon`}
              className="h-12 w-12 hidden group-hover:block group-focus:block"
              width={30}
              height={30}
            />
            <p className="mt-4 text-lg font-medium">{service.name}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;
