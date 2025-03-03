"use client";
import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { Yeseva_One } from "next/font/google";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import { motion } from "framer-motion";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

interface AppointmentProps {
  className?: string;
}
const variants = {
  hidden: { opacity: 0, y: 50 }, // Start below and invisible
  visible: {
    opacity: 1,
    y: 0, // Move to the original position
    transition: { duration: 0.8, ease: "easeOut" }, // Smooth animation
  },
};
const BookAppointment: React.FC<AppointmentProps> = ({ className }) => {
  return (
    <Wrapper
      style={{ backgroundImage: "url('/icons/appointment-bg.svg')" }}
      className={`flex sm:flex-row flex-col gap-4 bg-center bg-cover sm:gap-0 justify-between items-center pt-6 sm:py-16 w-full relative ${
        className || ""
      }`}
    >
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible" // Triggers animation when in view
        viewport={{ amount: 0.2 }} // Trigger when 30% of the section is in view
        className={`flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between items-center w-full relative ${
          className || ""
        }`}
      >
        <div className="flex flex-col gap-4 w-full relative">
          <h2 className={`${yeseva.className} text-secondary text-4xl`}>
            Book an Appointment
          </h2>
          <p className="max-w-96">
            Experience convenient and personalized care by scheduling your
            appointment today. Whether it&apos;s for a consultation or
            follow-up, we&apos;re here to make your healthcare journey seamless
            and stress-free.
          </p>
        </div>
        <form className="rounded-lg w-full relative bg-primary text-white ">
          <div className="grid grid-cols-2 ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-3 placeholder:text-white bg-transparent border-b border-gray-300"
            />
            <Dropdown
              name="gender"
              options={["Male", "Female", "Other"]}
              placeholder="Gender"
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
              selectedOption={""}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-3 placeholder:text-white bg-transparent border-b borde-r border-accent"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="px-4 py-3 placeholder:text-white bg-transparent border-b border-l border-accent"
            />
            <input
              type="date"
              name="doB"
              className="px-4 py-3 placeholder:text-white bg-transparent border-b border-l border-accent"
              placeholder="Date"
            />
            <Dropdown
              name="time"
              options={["10:00 AM", "2:00 PM"]}
              placeholder="Time"
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
              selectedOption={""}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="px-4 py-3 w-full h-28 bg-transparent focus:outline-none resize-none"
          ></textarea>
          <Button className="uppercase w-full  !rounded-none">submit</Button>
        </form>
      </motion.div>
    </Wrapper>
  );
};

export default BookAppointment;
