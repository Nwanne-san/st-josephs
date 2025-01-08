import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { Yeseva_One } from "next/font/google";
import Image from "next/image";
import { contacts } from "@/data/contact";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });
const ContactUs: React.FC = () => {
  return (
    <>
      <Wrapper className="flex sm:flex-row flex-col gap-5 py-4 sm:py-16">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2 h-">
            <h1 className="text-lg text-secondary uppercase font-bold">
              Get in touch
            </h1>
            <h1 className={`${yeseva.className} text-5xl text-primary`}>
              Contact
            </h1>
          </div>
          <form className="flex flex-col bg-primary rounded-md h-full text-white">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-3 placeholder:text-white bg-transparent border-b border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-3 placeholder:text-white bg-transparent border-b borde-r border-accent"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="px-4 py-3 w-full h-full bg-transparent placeholder:text-white focus:outline-none resize-none"
            ></textarea>
            <button
              key={1}
              className="uppercase w-full px-6 py-[11px] bg-secondary hover:bg-secondary-hover text-white text-base font-semibold duration-150 disabled:bg-gray-400 !rounded-none"
            >
              submit
            </button>
          </form>
        </div>
        <section className="grid grid-cols-2 gap-4 w-full">
          {contacts.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3.5  px-3 sm:px-7 py-9 sm:py-12 ${item.bgColor} rounded-lg w-full md:text-wrap`}
            >
              <Image src={item.src} alt="" />
              <p className={`${item.color} uppercase font-bold text-lg`}>
                {item.name}
              </p>
              <div className="flex flex-col text-sm sm:text-base">
                <span className={`${item.color} `}>{item.text}</span>
                <span className={`${item.color} `}>{item?.text2}</span>
              </div>
            </div>
          ))}
        </section>
      </Wrapper>
    </>
  );
};
export default ContactUs;
