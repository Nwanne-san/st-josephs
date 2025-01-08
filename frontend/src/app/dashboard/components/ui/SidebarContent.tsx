// SidebarContent.tsx
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { sideItems } from "@/data/sidebar"; // Ensure the correct path to your sidebar data
import { LogoMain } from "../../../../../public/icons";

interface SidebarContentProps {
  currentPath: string;
  isDashboard: boolean;
  onClose?: () => void; // Optional callback for closing the menu
}

const SidebarContent: FC<SidebarContentProps> = ({
  currentPath,
  isDashboard,
  onClose,
}) => {
  return (
    <>
      <Link href="/" onClick={onClose}>
        <Image src={LogoMain} alt="Logo" className="px-5 cursor-pointer" />
      </Link>
      <section className="flex flex-col gap-y-3 w-full">
        {sideItems.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            onClick={onClose} // Close the menu on click
            className={`${
              currentPath === item.id ||
              (isDashboard && item.id === "dashboard")
                ? "bg-active text-primary-2/80 bg-accent text-black rounded-lg"
                : "text-primary-2/50 hover:bg-gray-300"
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
      <section className="flex flex-col gap-y-3 w-full">
        {sideItems.slice(3).map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            onClick={onClose} // Close the menu on click
            className={`${
              currentPath === item.id ||
              (isDashboard && item.id === "dashboard")
                ? "text-primary-2/80 bg-accent rounded-lg"
                : "text-primary-2/50 hover:bg-gray-300"
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
    </>
  );
};

export default SidebarContent;
