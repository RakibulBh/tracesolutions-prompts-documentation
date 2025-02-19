import { ProviderPrompts } from "@/types/prompts";
import { ToolInfo } from "@/types/tool-info";

export const agentPrompts: ProviderPrompts = {
  details_description: {
    name: "Generate Details Descriptions",
    prompts: [
      {
        prompt:
          "Produce a fully elaborate detailed test case report for test case TC-001.",
      },
      {
        prompt:
          "Could you explain why the severity of test case TC-001 is 'Critical'?",
      },
      {
        prompt:
          "Could you please elaborate on your choice of the ISO25010 classification for TC-002?",
      },
    ],
  },

  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt:
          "Please generate a set of comprehensive test cases based on the provided specification. Cover all features, edge cases, and error handling scenarios. Make sure each test is uniquely identifiable and references the requirement in the spec.",
      },
    ],
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompts: [
      {
        prompt:
          "Provide a coverage report that indicates how thoroughly the current test suite addresses each requirement in the specification. Include a summary of what is covered, what is partially covered, and what is missing, with direct references to the specification.",
      },
    ],
  },

  traceability_analysis: {
    name: "Traceability Analysis",
    prompts: [
      {
        prompt:
          "Show how each requirement in the specification is covered by the existing test cases. Quote the relevant sections of the specification and map them to the tests, highlighting any gaps or areas that need additional coverage.",
      },
    ],
  },

  validate: {
    name: "Validate Test Cases",
    prompts: [
      {
        prompt:
          "Can you please validate the generated test cases, ensuring adequate granularity, correctness of ISO-25010 classifications, severity classifications, and correctness of other parameters?",
      },
    ],
  },
};

export const agentInfo: ToolInfo = {
  documents: ["specificiations"],
  prerequisites: [
    "OpenAI API Key & Anthropic API Key Needed.",
    "Python 3.12 code interpreter & executor",
    "pip for simplified package dependency installation",
  ],
  limits: [
    "inconsistent with its output, causing parsing issues on LangChain's end - specifically within `test_case_generation_tool`",
    "The tool could also potentially utilize retrieval-augmented generation in the future",
  ],
};
