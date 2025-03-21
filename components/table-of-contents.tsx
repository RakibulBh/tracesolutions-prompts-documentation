import { claudePrompts } from "@/data/claude-prompts";
import Link from "next/link";
import React from "react";

const TableOfContents = () => {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold">Table of Contents:</p>
      <ul className="ml-5 list-disc">
        {Object.entries(claudePrompts).map(([key, promptData]) => (
          <Link
            className="underline underline-offset-2"
            key={key}
            href={"#" + promptData.name.toLowerCase().replaceAll(" ", "_")}
          >
            <li className="p-1">
              <p className="text-blue-950">{promptData.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
