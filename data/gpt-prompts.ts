import { ProviderPrompts } from "@/types";

export const GPTPrompts: ProviderPrompts = {
  initial_prompts: {
    name: "Initial Prompts",
    prompts: [
      {
        prompt: `N/A (initial prompt is baked in.)`,
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

  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt: `Generate a comprehensive test case table based on the provided specification. Ensure that all functional, negative, edge, and integration scenarios are covered. Use ISO 25010 categories, appropriate test types, and priority levels. Follow the exact format from Test-Case-Table.html.`,
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
