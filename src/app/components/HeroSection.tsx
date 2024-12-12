"use client";
import React from "react";
import Image from "next/image";
import Wrapper from "@/components/ui/Wrapper";
import { cards } from "@/data/hero";
import Button from "@/components/ui/Button";
import { Yeseva_One } from "next/font/google";

const Yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const HeroSection: React.FC = () => {
  const handleClick = () => {
    const productsSection = document.getElementById("our-services");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Wrapper
      style={{ backgroundImage: "url('/icons/herosection.jpg')" }}
      className="flex flex-col relative w-full h-full bg-center bg-cover bg-no-repeat"
    >
      <div className="h-screen  flex flex-col gap-8 justify-center">
        <div>
          <h4 className="leading-loose text-lg text-secondary font-bold uppercase">
            Caring for life
          </h4>
          <h1
            className={`${Yeseva.className} text-5xl text-primary max-w-[520px]`}
          >
            Leading the way in Medical Excellence
          </h1>
        </div>
        <Button className="w-fit" onClick={handleClick}>
          Our services
        </Button>
      </div>
      <div className=" -mt-8 left-64 flex justify-center items-center gap-4 w-full">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`flex gap-14 px-3 py-7 items-center w-fit ${item.bgColor}`}
          >
            <p className={`${item.color}`}>{item.text}</p>
            <Image alt="" src={item.src} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default HeroSection;
