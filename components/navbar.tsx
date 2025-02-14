import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 border-b-2 border-b-gray-500 shadow-md bg-white p-4 items-center justify-between flex">
      <div className="flex gap-2">
        <Image alt="BTM-LOGO" src={"/btm_logo.jpg"} width={200} height={200} />
        <p className="font-bold text-xl">Test Cases Prompt Docs</p>
      </div>
    </div>
  );
};

export default Navbar;
