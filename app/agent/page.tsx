import ToolInfoSection from "@/components/render-tool-info";
import renderPrompts from "@/components/renderPrompts";
import TableOfContents from "@/components/table-of-contents";
import { agentInfo, agentPrompts } from "@/data/agent-prompts";
import { AlertTriangle } from "lucide-react";
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
      <ToolInfoSection data={agentInfo} />
      <p className="text-4xl font-bold">Prompts</p>
      <li className="flex items-center gap-3 bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-3">
        <AlertTriangle className="w-10 h-10" />
        <p className="text-[#001f3f] font-semibold">
          Generic prompting is supported. The prompts do not exactly have to
          match the following prompt templates.
        </p>
      </li>
      <div className="space-y-6">{renderPrompts(agentPrompts)}</div>
    </div>
  );
};

export default Page;
