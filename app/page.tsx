import Link from "next/link";

const texts = [
  "Welcome to the Docs!",
  "Dive into the art of Prompt Engineering and master the creation of effective prompts that maximize AI testing tools' potential.",
  "Explore our comprehensive Prompt Library for Testing Tasks, featuring pre-built prompts designed to address diverse testing scenarios.",
  "Learn how to seamlessly integrate generative AI into your existing testing workflow to elevate efficiency and accuracy.",
  "Let's get started!",
];

export default function Home() {
  return (
    <div className="p-4 flex-1 bg-[#F3F8F2] space-y-4 overflow-y-scroll h-full px-auto">
      <div className="space-y-6">
        <h1 className="font-bold text-4xl">Introduction</h1>
        <div className="space-y-4 mt-4">
          {texts.map((text, i) => (
            <p className="text-lg" key={i}>
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="p-4 rounded-md border-gray-300 border hover:border-[#001f3f] bg-[#F3F8F2] transition-all duration-300">
        <Link href="/agent" className="block">
          <p className="text-gray-500 font-semibold">Next</p>
          <p className="text-[#001f3f] font-bold">Agent Prompts</p>
        </Link>
      </div>
    </div>
  );
}
