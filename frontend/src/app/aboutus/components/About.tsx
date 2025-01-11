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
      <Image
        src={AboutImage}
        alt=""
        className="w-[200px] h-[240px] lg:w-auto lg:h-auto"
      />
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
            Welcome to St Joseph&apos;s, a private healthcare facility offering
            personalized and compassionate care in a calm, welcoming
            environment. With a dedicated resident doctor and skilled nurses, we
            deliver exceptional medical services tailored to each patient&apos;s
            needs. Our modern admission rooms prioritize privacy and comfort,
            ensuring attentive, one-on-one care for a seamless healthcare
            experience.
          </p>
          <p>
            From routine checkups to urgent care, we combine expertise with a
            personal touch to make sure you feel cared for every step of the
            way. At St Joseph&apos;s, your health and comfort are always our top
            priorities, and we are committed to being a trusted partner on your
            journey to better health.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
