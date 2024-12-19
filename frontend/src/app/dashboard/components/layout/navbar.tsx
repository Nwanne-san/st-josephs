"use client";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import { sideItems } from "@/data/sidebar";

const NavbarDashboard: React.FC = () => {
  const pathname = usePathname();

  // Extract the current route identifier
  const currentPath = pathname?.split("/")[2];

  // const username = localStorage.getItem('username')

  const currentRoute =
    sideItems.find((item) => item.id === currentPath)?.name || "Dashboard";

  return (
    <nav
      className="bg-white px-[24px] py-4 xl:py-6 w-full rounded-xl border-primary-2/20 shadow-md"
      role="navbar"
    >
      <div className="flex items-center justify-between w-full gap-2">
        {/* Header dynamically updates */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl xl:text-3xl font-bold uppercase pr-2 border-r">
            {currentRoute}
          </h1>
          <p className="text-sm font-extralight">Super Admin</p>
        </div>

        <div className="flex gap-2 w">
          <div className="flex flex-col items-center px-4 border-l-[0.2px]  border-primary-2/20">
            <p className="text-base text-black font-bold  uppercase">
              {/* {username} */}
            </p>
            <span className="text-xs">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
