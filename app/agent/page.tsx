import PromptBox from "@/components/prompt-box";
import TableOfContents from "@/components/table-of-contents";
import { agentPrompts } from "@/data/agent-prompts";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 flex-1 bg-[#F3F8F2] space-y-4 overflow-y-scroll h-full">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold text-[#4A4E69]">
          🤖 Prompt Library for Custom Agent
        </h1>
        <p className="text-gray-500 text-lg">Built by Mikhail & Rakibul</p>
      </div>
      <TableOfContents />
      <p className="text-4xl font-bold">Prompts</p>
      <div className="space-y-6">
        {Object.entries(agentPrompts).map(([key, promptData]) => (
          <PromptBox
            key={key}
            title={promptData.name}
            text={promptData.prompt}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
