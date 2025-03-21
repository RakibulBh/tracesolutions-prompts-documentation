import { navlinks } from "@/constants/navlinks";
import React from "react";
import Navlink from "./navlink";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 w-80 border-r-2 border-r-gray-200 p-2 bg-[#F3F8F2] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex justify-end lg:hidden">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {navlinks.map((navlink) => (
          <Navlink key={navlink.name} href={navlink.href} text={navlink.name} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
