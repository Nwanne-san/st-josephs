"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo2, LogoMain } from "../../../public/icons";
import { details, links } from "@/data/navbar";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import Wrapper from "../ui/Wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    router.push("/appointment");
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`${className}  z-[999] `}>
      <motion.div
        className="flex lg:flex-col flex-col-reverse w-full relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* First Wrapper: Logo and Contact Details */}
        <Wrapper className="w-full hidden sm:flex justify-between py-1 sm:py-4 items-center backdrop-blur-sm ">
          <Link href={"/"} className="hidden lg:flex">
            <Image
              src={LogoMain}
              alt="Hospital Logo"
              className="w-[193px] h-[42px]"
              width={193}
              height={42}
            />
          </Link>
          <div>
            <ul className="flex gap-2 sm:gap-5">
              {details.map((item, index) => (
                <Link
                  href={item.href || "#"}
                  key={index}
                  className="flex gap-2 "
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="h-10 w-8 sm:h-auto sm:w-auto"
                  />
                  <div className="flex flex-col font-medium text-xs sm:text-sm xl:text-base">
                    <p className="uppercase text-primary">{item.message}</p>
                    <span className="text-secondary">{item.text}</span>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </Wrapper>

        {/* Second Wrapper: Links and Appointment Button */}
        <Wrapper className="w-full bg-primary sticky top-0 flex items-center justify-between py-4 z-[]">
          <div className="flex items-center justify-between w-full">
            {/* Hamburger Icon */}
            <Link href={"/"} className="lg:hidden">
              <Image
                src={Logo2}
                alt="Hospital Logo"
                className="w-[193px] h-[42px]"
              />
            </Link>
            <div className="lg:hidden">
              <button
                className="text-white focus:outline-none relative z-[60]" // Ensure it's above everything
                onClick={handleHamburgerClick}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex gap-5">
              {links.map((item, index) => (
                <Link
                  href={item.route || "#"}
                  key={index}
                  className="flex gap-2"
                >
                  <p className="hover:text-accent text-white duration-200">
                    {item.name}
                  </p>
                </Link>
              ))}
            </ul>

            {/* Appointment Button */}
            <Button onClick={handleButtonClick} className="hidden lg:block">
              Appointment
            </Button>
          </div>
        </Wrapper>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <Wrapper>
              <motion.div
                className="absolute top-0 px-3 xl:px-28 sm:px-14 left-0 w-full bg-primary backdrop-blur-lg flex flex-col gap-5 text-center items-center py-4 text-white z-[50]" // Adjusted z-index
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.6 }}
          
              >
                <div className="flex w-full justify-between">
                  <Link href={"/"}>
                    <Image
                      src={Logo2}
                      alt="Hospital Logo"
                      className="w-[193px] h-[42px]"
                      width={193}
                      height={42}
                    />
                  </Link>
                  <button
                    className="text-white focus:outline-none relative z-[60]" // Ensure it's above everything
                    onClick={handleHamburgerClick}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <ul className="flex flex-col gap-5">
                  {links.map((item, index) => (
                    <Link
                      href={item.route || "#"}
                      key={index}
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:text-accent text-white duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    handleButtonClick();
                    setIsMenuOpen(false);
                  }}
                  className="mt-5"
                >
                  Appointment
                </Button>
              </motion.div>
              {/* Overlay for Blurring the Underlying Page */}
                            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
              onClick={() => setIsMenuOpen(false)} // Close sidebar when overlay is clicked
            />
            </Wrapper>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
