"use client";
import React from "react";
import Wrapper from "@/components/ui/Wrapper";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Yeseva_One } from "next/font/google";
import Link from "next/link";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const Welcome: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start below and invisible
    visible: {
      opacity: 1,
      y: 0, // Move to the original position
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth animation
    },
  };
  return (
    <Wrapper className="text-center flex flex-col items-center justify-center">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible" // Triggers animation when in view
        viewport={{ amount: 0.3 }} // Trigger when 30% of the section is in view
      >
        <div className="flex flex-col items-center">
          <h2 className="text-center text-xl uppercase font-semibold text-secondary mb-2">
            Welcome to Meddical
          </h2>
          <h3
            className={`${yeseva.className} text-center text-4xl sm:text-5xl font-bold text-primary mb-8`}
          >
            A Great Place to Serve Medical Care
          </h3>
          <p className="max-w-[600px]">
            St Joseph&apos;s is a private healthcare facility dedicated to
            providing quality medical services in a comfortable and modern
            environment. We prioritize patient care and well-being, offering
            accommodating admission rooms and a personalized experience to
            ensure every visit is seamless and stress-free. 
          </p>
        </div>
        <Link
          href={`/aboutus`}
          className="flex gap-4 items-center justify-center text-secondary drop-shadow-2xl text-center"
        >
          Learn More
          <ArrowRight className="text-black" />
        </Link>
      </motion.div>
    </Wrapper>
  );
};

export default Welcome;
