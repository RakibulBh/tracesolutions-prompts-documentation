import { ProviderPrompts } from "@/types/prompts";
import { ToolInfo } from "@/types/tool-info";

export const GPTPrompts: ProviderPrompts = {
  initial_prompts: {
    name: "Initial Prompts",
    prompts: [
      {
        prompt: `N/A (initial prompt is baked in.)`,
      },
    ],
  },
  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt: `Generate a comprehensive test case table based on the provided specification. Ensure that all functional, negative, edge, and integration scenarios are covered. Use ISO 25010 categories, appropriate test types, and priority levels. Follow the exact format from Test-Case-Table.html.`,
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
        prompt: `Generate a detailed test case description for test case TC-001, including test data, browser compatibility, and expected vs. actual results.`,
      },
    ],
  },

  explain_test_properties: {
    name: "Explain Test Properties",
    prompts: [
      {
        prompt: `Explain how test priorities are determined based on business impact and severity.`,
      },
      {
        prompt: `Why is TC-001 a high priority?`,
      },
      {
        prompt: `Provide an overview of the different test case types`,
      },
    ],
  },

  generate_requirements: {
    name: "Generate Requirements",
    prompts: [
      {
        prompt: `Identify missing or ambiguous requirements that could lead to coverage gaps in testing.`,
      },
      {
        prompt: `Extract all functional and non-functional requirements from the provided documentation.`,
      },
    ],
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompts: [
      {
        prompt: `Generate a test coverage report analysing how well the test cases cover the provided requirements.`,
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
  ],
  tips: [
    "if the model gives a response which is not exactly what you requested, respond with a message pointing out the error and model will immediately correct itself, no need to restart/regenerate the conversation.",
  ],
  limits: [
    "currently the model is unable to perform requirements analysis or extraction due to lacking the required knowledge/documentation",
    "it is important to double check the coverage reports produced by the model as these have a similar issue of lacking documentation that the model can use for training.",
  ],
};
