import Image from "next/image";
import React from "react";
import { Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <div className="h-20 border-b-2 border-b-gray-200 p-4 items-center justify-between flex bg-[#F3F8F2]">
      <div className="flex gap-4 items-center">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-200 rounded-full"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Image
          className="rounded-full"
          alt="BTM-LOGO"
          src="/btm_logo.jpeg"
          width={40}
          height={20}
        />
        <p className="font-bold text-lg">
          Test Cases Prompt Docs{" "}
          <span className="text-sm text-gray-600 hidden sm:inline">
            (For Trace Solutions)
          </span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
