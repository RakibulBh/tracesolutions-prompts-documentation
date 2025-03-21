import { ProviderPrompts } from "@/types/prompts";
import { ToolInfo } from "@/types/tool-info";

export const GPTPrompts: ProviderPrompts = {
  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt: `Generate a comprehensive HTML test case table based on the provided specification. Ensure that all functional, negative, edge, and integration scenarios are covered. Use ISO 25010 categories and priority levels. Follow the exact format from Test-Case-Table.html.`,
      },
    ],
  },

  details_description: {
    name: "Generate Details Descriptions",
    prompts: [
      {
        prompt: `Provide detailed descriptions for all test cases in the existing test case table. Ensure each description includes prerequisites, test steps, expected outcomes, and validation criteria. Follow the format in Detailed-Descriptions.html.`,
      },
      {
        prompt: `Generate a detailed test case description for test case TC-XXX, including test data, browser compatibility, and expected vs. actual results.`,
      },
    ],
  },

  explain_test_properties: {
    name: "Explain Test Properties",
    prompts: [
      {
        prompt: `Why is TC-XXX considered XXX priority? Explain how based on the Priority ISO Categories document`,
      },
    ],
  },

  generate_requirements: {
    name: "Generate Requirements",
    prompts: [
      {
        prompt: `Extract all functional and non-functional requirements from the provided specification and supporting documentation.`,
      },
    ],
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompts: [
      {
        prompt: `Generate a test coverage report analysing how well the test cases cover the provided requirements, refer to your knowledge base for example documentation.`,
      },
      {
        prompt: `Identify gaps in coverage and suggest additional test cases to improve specification and requirement validation.`,
      },
      {
        prompt: `Summarise the test case coverage and list any critical missing test cases and how they could be addressed.`,
      },
    ],
  },
};

export const GPTInfo: ToolInfo = {
  documents: ["Specification"],
  setup_steps: [
    "Head to https://chatgpt.com/g/g-67a5139a09cc819180fa6db4e9890502-test-case-generator",
    "The model does not require any configuration or setup, all required documentation and instructions are already contained within the model's knowledge base."
  ],
  tips: [
    "If the model gives a response which is not exactly what you requested, respond with a message pointing out the error and model will immediately correct itself, no need to restart/regenerate the conversation.",
    "Currently Custom GPT models are based solely on ChatGPT 4o and as a result have limited analysation capabilities.",
  ],
  limits: [
    "This Custom GPT model is highly experimental and requires further instructional tuning in order to improve results. ",
    "The Custom GPT framework is currently unstable, this is unfortunately a problem with Custom GPT's as a whole, and not unique to this particular model."
  ],
};
