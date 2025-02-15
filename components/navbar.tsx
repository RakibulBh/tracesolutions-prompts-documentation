import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 border-b-2 border-b-gray-200 p-4 items-center justify-between flex bg-[#F3F8F2]">
      <div className="flex gap-4 items-center">
        <Image
          className="rounded-full"
          alt="BTM-LOGO"
          src="/btm_logo.jpeg"
          width={40}
          height={20}
        />
        <p className="font-bold text-lg">
          Test Cases Prompt Docs{" "}
          <span className="text-sm text-gray-600">(For Trace Solutions)</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
