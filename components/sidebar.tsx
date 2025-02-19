import { navlinks } from "@/constants/navlinks";
import React from "react";
import Navlink from "./navlink";

const Sidebar = () => {
  return (
    <div className="w-80 border-r-2 border-r-gray-200 p-2 bg-[#F3F8F2]">
      {navlinks.map((navlink) => (
        <Navlink key={navlink.name} href={navlink.href} text={navlink.name} />
      ))}
    </div>
  );
};

export default Sidebar;
