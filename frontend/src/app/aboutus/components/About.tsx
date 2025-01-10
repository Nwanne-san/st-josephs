import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import Image from "next/image";
import { AboutImage } from "../../../../public/icons";
import { Yeseva_One } from "next/font/google";
import { about_services } from "@/data/about";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  return (
    <Wrapper className="flex items-center lg:items-start gap-5 py-16">
      <Image src={AboutImage} alt="" className="w-[200px] h-[240px] lg:w-auto lg:h-auto" />
      <div className="flex flex-col h-full gap-7 max-w-[580px]">
        <div>
          <h2 className=" text-xl uppercase font-semibold text-secondary mb-2">
            Welcome to Meddical
          </h2>
          <h3
            className={`${yeseva.className}  text-5xl font-bold text-primary `}
          >
            Best Care for Your Good Health
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {about_services.map((item, index) => (
            <div key={index} className="flex gap-2.5 items-center ">
              <span className="w-4 h-4 rounded-full bg-secondary"></span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Consequat faucibus porttitor enim et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
