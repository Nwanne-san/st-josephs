"use client";
import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { contacts } from "@/data/contact";
import Image from "next/image";
import { Yeseva_One } from "next/font/google";
import { motion } from "framer-motion";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const variants = {
  hidden: { opacity: 0, y: 50 }, // Start below and invisible
  visible: {
    opacity: 1,
    y: 0, // Move to the original position
    transition: { duration: 0.8, ease: "easeOut" }, // Smooth animation
  },
};

const Contact: React.FC = () => {
  return (
    <Wrapper className=" w-full py-16">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible" // Triggers animation when in view
        viewport={{ amount: 0.15 }} // Trigger when 30% of the section is in view
        className="flex flex-col gap-7 lg:gap-16"
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-lg text-secondary uppercase font-bold">
            Get in touch
          </h1>
          <h1
            className={`${yeseva.className} text-4xl sm:text-5xl text-primary`}
          >
            Contact
          </h1>
        </div>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {contacts.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3.5 px-3 sm:px-7 py-9 sm:py-12 ${item.bgColor} rounded-lg w-full md:text-wrap`}
            >
              <Image src={item.src} alt="" />
              <p className={`${item.color} uppercase font-bold sm:text-lg`}>
                {item.name}
              </p>
              <div className="flex flex-col text-sm sm:text-base">
                <span className={`${item.color} `}>{item.text}</span>
                <span className={`${item.color} `}>{item?.text2}</span>
              </div>
            </div>
          ))}
        </section>
      </motion.div>
    </Wrapper>
  );
};

export default Contact;
