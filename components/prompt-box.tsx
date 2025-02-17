"use client";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

const PromptBox = ({ text, title }: { text: string; title: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="rounded-lg bg-[#E8F0E5] border border-[#B8C8B9] w-full relative p-4">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-[#A7C4BC] hover:bg-[#8FAFAA] hover:cursor-pointer rounded-md p-2"
      >
        {copied ? (
          <Check color="#F3F8F2" size={15} />
        ) : (
          <Copy color="#F3F8F2" size={15} />
        )}
      </button>
      <p className="text-[#001f3f] pr-20 font-mono text-md">{text}</p>
    </div>
  );
};

export default PromptBox;
