"use client";
import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { Yeseva_One } from "next/font/google";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

interface AppointmentProps {
  className?: string;
}

const BookAppointment: React.FC<AppointmentProps> = ({ className }) => {
  return (
    <Wrapper
      style={{ backgroundImage: "url('/icons/appointment-bg.svg')" }}
      className={`flex justify-between items-center py-16 w-full relative ${
        className || ""
      }`}
    >
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <div className="flex flex-col gap-4 w-full relative">
        <h2 className={`${yeseva.className} text-secondary text-4xl`}>
          Book an Appointment
        </h2>
        <p className="max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
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
          <Dropdown
            name="date"
            options={["2024-12-11", "2024-12-12"]}
            placeholder="Date"
          />
          <Dropdown
            name="time"
            options={["10:00 AM", "2:00 PM"]}
            placeholder="Time"
          />
          <Dropdown
            name="doctor"
            options={["Dr. Smith", "Dr. Jane"]}
            placeholder="Doctor"
          />
          <Dropdown
            name="department"
            options={["Cardiology", "Neurology"]}
            placeholder="Department"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="px-4 py-3 w-full h-28 bg-transparent focus:outline-none resize-none"
        ></textarea>
        <Button className="uppercase w-full  !rounded-none">submit</Button>
      </form>
    </Wrapper>
  );
};

export default BookAppointment;
