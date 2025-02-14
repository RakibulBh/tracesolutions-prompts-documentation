import PromptBox from "@/components/prompt-box";
import React from "react";

const Page = () => {
  return (
    <section className="p-4 flex-1 bg-[#F3F8F2] space-y-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold text-[#4A4E69]">
          🤖 Prompt Library for Custom Agent
        </h1>
        <p className="text-gray-500 text-lg">Built by Mikhail & Rakibul</p>
      </div>
      <p className="text-4xl font-bold">Prompts</p>
      <PromptBox />
    </section>
  );
};

export default Page;
