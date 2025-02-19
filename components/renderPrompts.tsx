import { ProviderPrompts } from "@/types/prompts";
import PromptBox from "./prompt-box";

const renderPrompts = (data: ProviderPrompts) => {
  return Object.entries(data).map(([key, promptData]) => (
    <div
      key={key}
      id={promptData.name.toLowerCase().replaceAll(" ", "_")}
      className="space-y-2"
    >
      <h2 className="font-semibold text-xl">⚙️ {promptData.name}</h2>
      {promptData.prompts.map((prompt) => (
        <PromptBox
          key={prompt.prompt}
          title={promptData.name}
          text={prompt.prompt}
        />
      ))}
    </div>
  ));
};

export default renderPrompts;
