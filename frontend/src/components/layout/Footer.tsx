import React from "react";
import Image from "next/image";
import Wrapper from "../ui/Wrapper";
import { Logo2, Send } from "../../../public/icons";
import { contact_links, links } from "@/data/footer";

const Footer: React.FC = () => {
  return (
    <Wrapper className="bg-primary w-full flex flex-col gap-12 text-white py-9">
      <div className="flex flex-wrap sm:flex-row lg:grid grid-cols-4 gap-2 sm:gap-10 lg:gap-8 justify-between w-full items-start">
        {/* First Div */}
        <div className="flex flex-col gap-6 flex-grow basis-64 lg:basis-1/4">
          <Image src={Logo2} alt="" width={193} height={42}/>
          <h4>Leading the Way in Medical Excellence, Trusted Care.</h4>
        </div>

        {/* Second Div */}
        <div className="flex flex-col gap-5 sm:gap-9 flex-grow basis-64 lg:basis-1/4">
          <span className="font-semibold text-lg md:text-nowrap">Important Links</span>
          <ul className="flex flex-col gap-2">
            {links.map((item, index) => (
              <a
                href={item.route || "#"}
                key={index}
                target="_blank"
                className="flex gap-2"
              >
                <p className="hover:text-accent text-white duration-200">
                  {item.name}
                </p>
              </a>
            ))}
          </ul>
        </div>

        {/* Third Div */}
        <div className="flex flex-col gap-5 sm:gap-9 flex-grow basis-64 lg:basis-1/4">
          <span className="font-semibold text-lg">Contact Us</span>
          <ul className="flex flex-col gap-2">
            {contact_links.map((item, index) => (
              <a
                href={item.route}
                key={index}
                target="_blank"
                className="flex gap-2 md:text-nowrap"
              >
                <p className="hover:text-accent text-white duration-200">
                  {item.name}
                </p>
              </a>
            ))}
          </ul>
        </div>

        {/* Fourth Div */}
        <div className="flex flex-col gap-5 sm:gap-9 flex-grow basis-full lg:basis-1/4">
          <span className="font-semibold text-lg">Newsletter</span>
          <div className="bg-accent rounded-lg flex gap-2 py-3.5 px-2.5">
            <input
              type="email"
              name="Email"
              id=""
              className="bg-accent rounded-lg placeholder:text-primary/50 text-primary w-full focus:outline-none"
              placeholder="Enter your email address"
            />
            <button>
              <Image src={Send} alt="message button" />
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="flex justify-between">
        <p>&copy; 2021 Hospital&apos;s name All Rights Reserved by PNTEC-LTD</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
