"use client";
import React from "react";
import Wrapper from "./Wrapper";

interface HeroSectionProps {
  backgroundImage: string;
  breadcrumbs: string;
  heading: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  breadcrumbs,
  heading,
}) => {
  return (
    <div>
      <Wrapper
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="relative bg-cover bg-center w-full h-64 flex items-center "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

        <div className="relative z-10 flex flex-col">
          <p className="text-sm text-gray-700">{breadcrumbs}</p>
          <h1 className="text-3xl font-bold text-primary mt-2">{heading}</h1>
        </div>
      </Wrapper>
      <div className="flex w-full  bottom-0">
        <span className="w-2/6 bg-accent h-2.5"></span>
        <span className="w-4/6 bg-primary h-2.5"></span>
        <span className="w-1/6 bg-secondary h-2.5"></span>
      </div>
    </div>
  );
};

export default HeroSection;
