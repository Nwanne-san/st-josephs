"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { LogoMain } from "../../../../../public/icons";
import Image from "next/image";
import { sideItems } from "@/data/sidebar";

interface Iproperties {
  sideNavitems?: {
    route: string;
    link: string;
    icon: string;
    id: string;
    name: string;
  }[];
  className?: string;
}

const SettingsSidebar: FC<Iproperties> = ({ className }) => {
  const pathname = usePathname();
  console.log(pathname);
  const currentPath =
    pathname?.split("/").length === 2 ? "dashboard" : pathname?.split("/")[2];
  const organizationPath = pathname?.split("/")[2];
  console.log(organizationPath);
  const isDashboard =
    currentPath === "dashboard" && organizationPath === undefined;

  // If user data is not yet loaded, show the skeleton loader
  // if (!user) {
  //   return (
  //     <div
  //       className={` ${className} h-full hidden lg:flex flex-col gap-11 items-center justify-center bg-white-200 pt-6  md:w-[220px] md:justify-start `}
  //     >
  //     </div>
  //   );
  // }

  return (
    <div
      className={` ${className} -5 pt-6 h-full hidden lg:flex flex-col gap-8 items-start justify-center bg-white w-full md:w-[270px] lg:w-[240px] md:justify-start drop-shadow-md`}
    >
      <Image src={LogoMain} alt="" className="px-5" />
      <section className=" flex flex-col gap-y-3 -5 w-full">
        {sideItems.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            className={`${
              currentPath === item.id ||
              (isDashboard && item.id === "dashboard")
                ? "bg-active text-primary-2/80 bg-accent text-white rounded-lg"
                : " text-primary-2/50 hover:bg-gray-300"
            } flex uppercase cursor-pointer items-start justify-start px-5 gap-2.5 rounded-lg py-3 text-lg transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-start md:rounded-sm`}
          >
            <Image
              src={item.icon}
              alt=""
              className="h-5 w-5"
              role="sidebar-icon"
            />
            <span className="text-nowrap text-base">{item.route}</span>
          </Link>
        ))}
      </section>
      <h4 className="px-5">Account</h4>
      <section className=" flex flex-col gap-y-3 w-full">
        {sideItems.slice(3).map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            className={`${
              currentPath === item.id ||
              (isDashboard && item.id === "dashboard")
                ? " text-primary-2/80 bg-accent rounded-lg"
                : " text-primary-2/50 hover:bg-gray-300"
            } flex uppercase cursor-pointer items-start justify-start gap-2.5 rounded-lg px-5 py-3 text-lg transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-start md:rounded-sm`}
          >
            <Image
              src={item.icon}
              alt=""
              className="h-5 w-5"
              role="sidebar-icon"
            />
            <span className="text-nowrap text-base">{item.route}</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default SettingsSidebar;
