"use client";
import { usePathname } from "next/navigation";
import { useState, FC } from "react";
import SidebarContent from "../ui/SidebarContent";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface Iproperties {
  className?: string;
}

const SettingsSidebar: FC<Iproperties> = ({ className }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentPath =
    pathname?.split("/").length === 2 ? "dashboard" : pathname?.split("/")[2];
  const organizationPath = pathname?.split("/")[2];
  const isDashboard =
    currentPath === "dashboard" && organizationPath === undefined;

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-5 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar for Desktop */}
      <div
        className={` ${className} h-full hidden lg:flex flex-col gap-11 items-center justify-center bg-white-200 pt-6 lg:w-[230px] xl:w-[270px] md:justify-start `}
      >
        <SidebarContent currentPath={currentPath} isDashboard={isDashboard} />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 z-30 w-4/6 sm:w-2/5 h-full pt-20 bg-white shadow-lg flex gap-8 flex-col p-4"
            >
              <SidebarContent
                currentPath={currentPath}
                isDashboard={isDashboard}
                onClose={handleCloseMenu}
              />
            </motion.div>

            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
              onClick={handleCloseMenu} // Close sidebar when overlay is clicked
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsSidebar;
