import React from "react";
import { Yeseva_One } from "next/font/google";
import { schedule } from "@/data/schedule";
const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });
import { Emergency2 } from "../../../../public/icons";
import Image from "next/image";

const Schedule = ({ className }: { className?: string }) => {
  return (
    <div
      className={` ${className} flex flex-col bg-primary text-white justify-center w-full h-fit lg:mt-1 py-12 gap-7 rounded-md`}
    >
      <h1
        className={`${yeseva.className} text-3xl sm:text-5xl text-center text-accent`}
      >
        Schedule hours
      </h1>
      <div className="bg-transparent text-white px-12 w-full flex flex-col gap-5 justify-center items-center">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`flex justify-around w-full items-center sm:px-4 text-center text-base sm:text-lg text-nowrap`}
          >
            <span className="flex justify-start">{item.day}</span>
            <span className="">--</span>
            <span className="text-base">{item.time}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex gap-2 justify-center">
        <Image src={Emergency2} alt="Emergency call icon" />
        <div className="flex flex-col font-medium text-base">
          <p className="text-2xl">Emergency</p>
          <span className="text-accent text-2xl">(237) 681-812-255</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
