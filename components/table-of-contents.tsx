"use client";
import { claudePrompts } from "@/data/claude-prompts";
import { GPTPrompts } from "@/data/gpt-prompts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const TableOfContents = () => {
  const pathname = usePathname();
  function getCurrentData() {
    if (pathname.endsWith("/gpt")) {
    return GPTPrompts;
    }
    else if (pathname.endsWith("/claude")) {
    return claudePrompts;
    }
    return claudePrompts;
  };
  const data = getCurrentData();
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold">Table of Contents:</p>
      <ul className="ml-5 list-disc">
        {Object.entries(data).map(([key, promptData]) => (
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
