import { BookOpen, Bot, ChevronRight, Cog } from "lucide-react";
import React from "react";

interface navlinkProps {
  text: string;
  href: string;
}

const Navlink = ({ text }: navlinkProps) => {
  const renderIcon = () => {
    switch (text) {
      case "claude":
        return <Cog color="#4b5563" />;
      case "gpt":
        return <BookOpen color="#4b5563" />;
      case "agent":
        return <Bot color="#4b5563" />;
      default:
      // code block
    }
  };

  return (
    <div className="flex items-center gap-2 justify-between p-2 w-full  hover:bg-gray-100 rounded-lg transition-colors duration-100 ease-in-out">
      <div className="flex items-center gap-2">
        {renderIcon()}
        <p className="text-gray-600 font-semibold text-md">{text}</p>
      </div>
      <ChevronRight color="#4b5563" />
    </div>
  );
};

export default Navlink;
