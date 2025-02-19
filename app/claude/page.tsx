import ToolInfoSection from "@/components/render-tool-info";
import renderPrompts from "@/components/renderPrompts";
import TableOfContents from "@/components/table-of-contents";
import { claudeInfo, claudePrompts } from "@/data/claude-prompts";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 flex-1 bg-[#F3F8F2] space-y-4 overflow-y-scroll h-full">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold text-[#4A4E69]">
          🤖 Prompt Library for Claude Project
        </h1>
        <p className="text-gray-500 text-lg">Built by Johann</p>
      </div>
      <TableOfContents />
      <ToolInfoSection data={claudeInfo} />
      <p className="text-4xl font-bold">Prompts</p>
      <div className="space-y-6">{renderPrompts(claudePrompts)}</div>
    </div>
  );
};

export default Page;
