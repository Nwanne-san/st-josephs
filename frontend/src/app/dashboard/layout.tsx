"use client";
import { Suspense } from "react";

import NavbarDashboard from "./components/layout/navbar";
import SettingsSidebar from "./components/layout/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen p-5 bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-1 gap-4">
        <div className="sticky top-20 z-20 ">
          <SettingsSidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 ">
          {/* Add border and styling to this wrapper */}
          <div className="flex flex-col gap-5 w-full h-full  rounded-xl">
            {/* Navbar with border */}
            <div className="">
              <NavbarDashboard />
            </div>

            {/* Suspense to load children */}
            <div className="p-4 bg-white h-full shadow-xl rounded-xl">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
