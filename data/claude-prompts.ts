import { ProviderPrompts } from "@/types";

export const claudePrompts: ProviderPrompts = {
  initial_prompts: {
    name: "Initial Prompts",
    prompt: `Follow the instructions and use your knowledge base to analyse and extract all the required test cases from requirements, including edge cases and error handling. Start by listing all the requirements and then generate the HTML TEST CASE TABLE with all the extracted test cases including the coverage status modals. The priority, test type, and ISO category values should come from the knowledge base. An example of the HTML test case table format has been provided in test-1.html file.`,
  },

  details_description: {
    name: "Generate Details Descriptions",
    prompt: `Generate detailed test case description for TC-XXX`,
  },

  generate_test_cases: {
    name: "Generate Test Cases",
    prompt: `Follow the instructions and use your knowledge base to analyse and extract all the required test cases from requirements, including edge cases and error handling. Start by listing all the requirements and then generate the HTML TEST CASE TABLE with all the extracted test cases including the coverage status modals. The priority, test type, and ISO category values should come from the knowledge base. An example of the HTML test case table format has been provided in test-1.html file.`,
  },

  explain_test_properties: {
    name: "Explain Test Properties",
    prompt: `Provide a reason why TC-XXX is a High priority according to your knowledge base`,
  },

  generate_requirements: {
    name: "Generate Requirements",
    prompt: `Follow the instructions and use your knowledge base to analyse and extract all the required test cases from requirements, including edge cases and error handling. Start by listing all the requirements and then generate the HTML TEST CASE TABLE with all the extracted test cases including the coverage status modals. The priority, test type, and ISO category values should come from the knowledge base. An example of the HTML test case table format has been provided in test-1.html file.`,
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompt: `Using only your internal knowledge base and applying a chain-of-thought reasoning process, generate the test case coverage report based on the test cases produced in the HTML test case table. Please detail step-by-step how each element of the coverage report is derived from the test cases. Ensure your response is comprehensive and well-structured. (In progress)`,
  },
};
