"use client";
import { BookOpen, Bot, ChevronRight, Cog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface navlinkProps {
  text: string;
  href: string;
}

const Navlink = ({ text, href }: navlinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const renderIcon = () => {
    switch (text) {
      case "Claude":
        return <Cog color="#001f3f" className="group-hover:text-white" />;
      case "GPT":
        return <BookOpen color="#001f3f" className="group-hover:text-white" />;
      case "Agent":
        return <Bot color="#001f3f" className="group-hover:text-white" />;
      default:
      // code block
    }
  };

  return (
    <Link href={href}>
      <div
        style={{ backgroundColor: isActive ? "#E9F2EC" : "rgba(0,0,0,0)" }}
        className="flex group items-center gap-2 justify-between p-2 w-full  hover:bg-[#F2D1C9] rounded-lg transition-colors duration-300 ease-in-out"
      >
        <div className="flex items-center gap-2">
          {renderIcon()}
          <p
            style={{ color: "#001f3f" }}
            className="font-semibold text-md group-hover:text-white "
          >
            {text}
          </p>
        </div>
        <ChevronRight color="#4b5563" />
      </div>
    </Link>
  );
};

export default Navlink;
