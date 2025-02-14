import { Copy } from "lucide-react";
import React from "react";

const PromptBox = () => {
  return (
    <div className="rouneded-lg bg-[#E8F0E5] border borde-[#B8C8B9] w-full h-64 relative p-4">
      <div className="absolute top-2 right-2 bg-[#A7C4BC] hover:bg-[#8FAFAA] hover:cursor-pointer rounded-md p-2">
        <Copy color="#F3F8F2" />
      </div>
      <p className="text-[#4A4E69]">This is the text!</p>
    </div>
  );
};

export default PromptBox;
