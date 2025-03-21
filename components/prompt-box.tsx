"use client";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

const PromptBox = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="rounded-lg bg-[#E8F0E5] border border-[#B8C8B9] w-full relative p-4 overflow-x-auto">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-[#A7C4BC] hover:bg-[#8FAFAA] hover:cursor-pointer rounded-md p-2 transition-colors duration-200"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check color="#F3F8F2" size={15} />
        ) : (
          <Copy color="#F3F8F2" size={15} />
        )}
      </button>
      <p
        style={{ whiteSpace: "pre-line" }}
        className="text-[#001f3f] font-mono text-sm sm:text-md break-words"
      >
        {text}
      </p>
    </div>
  );
};

export default PromptBox;
