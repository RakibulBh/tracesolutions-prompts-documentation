import { navlinks } from "@/constants/navlinks";
import React from "react";
import Navlink from "./navlink";

const Sidebar = () => {
  return (
    <div className="w-80 h-screen border-r border-r-gray-100 p-2">
      <div className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-100 ease-in-out">
        <p className="text-gray-600 font-semibold">General</p>
      </div>
      {navlinks.map((navlink) => (
        <Navlink key={navlink.name} href={navlink.href} text={navlink.name} />
      ))}
    </div>
  );
};

export default Sidebar;
