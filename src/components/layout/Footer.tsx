import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="bg-primary w-full flex flex-col gap-12">
      <div className="flex gap-8 w-full">
        <div>
          <Image src={""} alt="" />
          <h4>Leading the Way in Medical Excellence, Trusted Care.</h4>
        </div>
        <div>
            <span></span>
            <ul>
                <li>
                    <Link href={''}></Link>
                </li>
                <li>
                    <Link href={''}></Link>
                </li>
                <li>
                    <Link href={''}></Link>
                </li>
                <li>
                    <Link href={''}></Link>
                </li>
            </ul>
        </div>
        <div>
            <span></span>
            <ul>
                <li>
                    <Link href={''}></Link>
                </li>
                <li>
                    <Link href={''}></Link>
                </li>
                <li>
                    <Link href={''}></Link>
                </li>
                <li>
                    <Link href={''}></Link>
                </li>
            </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
