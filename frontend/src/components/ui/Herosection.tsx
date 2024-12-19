"use client";
import React from "react";
import Wrapper from "./Wrapper";

interface HeroSectionProps {
  backgroundImage: string;
  breadcrumbs?: string;
  heading?: string;
  showOverlay?: boolean; // Optional: Determines if overlay is displayed
  overlayColor?: string; // Optional: Overlay color
  overlayOpacity?: number; // Optional: Overlay opacity (0 to 1)
}

const Hero: React.FC<HeroSectionProps> = ({
  backgroundImage,
  breadcrumbs,
  heading,
  showOverlay = true, // Default: Overlay is visible
  overlayColor = "white", // Default overlay color
  overlayOpacity = 0.6, // Default overlay opacity
}) => {
  return (
    <div>
      <Wrapper
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="relative bg-cover bg-center w-full h-64 flex items-center"
      >
        {/* Overlay */}
        {showOverlay && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
        )}

        <div className="relative z-10 flex flex-col">
          <p className="text-sm text-gray-700">{breadcrumbs}</p>
          <h1 className="text-3xl font-bold text-primary mt-2">{heading}</h1>
        </div>
      </Wrapper>
      <div className="flex w-full bottom-0">
        <span className="w-2/6 bg-accent h-2.5"></span>
        <span className="w-4/6 bg-primary h-2.5"></span>
        <span className="w-1/6 bg-secondary h-2.5"></span>
      </div>
    </div>
  );
};

export default Hero;
