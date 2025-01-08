"use client";
import React from "react";
import Image from "next/image";
import Wrapper from "@/components/ui/Wrapper";
import { cards } from "@/data/hero";
import Button from "@/components/ui/Button";
import { Yeseva_One } from "next/font/google";
import { motion } from "framer-motion";

const Yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const HeroSection: React.FC = () => {
  const handleClick = () => {
    const productsSection = document.getElementById("our-services");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const text = "Leading the way in Medical Excellence".split(" ");

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Controls the sequence delay
      },
    },
  };

  const topTextVariant = {
    hidden: { opacity: 0, y: -50 }, // Starts above
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 1 },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 50 }, // Starts below
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 1 },
    },
  };

  return (
    <Wrapper
      //  style={{ backgroundImage: "url('/icons/herosection.svg')" }}
      className="flex flex-col relative w-full h-full bg-center bg-cover bg-no-repeat z-10
       bg-[url('/icons/hero-background-mobile.svg')] sm:bg-[url('/icons/herosection.jpg')] mt-[2rem] sm:mt-[5rem] lg:mt-[10rem]"
    >
      {/* <div className="absolute inset-0 bg-white opacity-30 sm:opacity-20 z-0"></div> */}

      {/* Animation container */}
      <motion.div
        className="sm:h-[80vh] h-[70vh] flex flex-col gap-8 justify-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Caring for life - Eases in from the top */}
        <motion.h4
          className="leading-loose text-lg text-secondary font-bold uppercase"
          variants={topTextVariant}
        >
          Caring for life
        </motion.h4>

        {/* Leading the way in Medical Excellence - Eases in normally */}
        <motion.h1
          className={`${Yeseva.className} text-4xl sm:text-5xl text-primary max-w-[520px]`}
        >
          {text.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }} // Slight fade and vertical motion
              animate={{ opacity: 1, y: 0 }} // Fully visible and aligned
              transition={{
                duration: 0.4, // Duration of each word animation
                delay: index * 0.1, // Sequential delay based on word index
              }}
              className="inline-block mx-1 text-center  " // Styling for spacing between words
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Button - Eases in from below */}
        <motion.div variants={buttonVariant}>
          <Button className="w-fit" onClick={handleClick}>
            Our services
          </Button>
        </motion.div>
      </motion.div>

      <div className="hidden -mt-8 lft-64 md:flex justify-center items-center gap-4 w-full relative">
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
