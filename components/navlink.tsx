import {
  BookOpen,
  Bot,
  ChevronRight,
  Cog,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface navlinkProps {
  text: string;
  href: string;
}

const Navlink = ({ text, href }: navlinkProps) => {
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
    <Link href={href}>
      <div className="flex items-center gap-2 justify-between p-2 w-full  hover:bg-gray-100 rounded-lg transition-colors duration-100 ease-in-out">
        <div className="flex items-center gap-2">
          {renderIcon()}
          <p className="text-gray-600 font-semibold text-md">{text}</p>
        </div>
        <ChevronRight color="#4b5563" />
      </div>
    </Link>
  );
};

export default Navlink;
