import { ProviderPrompts } from "@/types";

export const agentPrompts: ProviderPrompts = {
  initial_prompts: {
    name: "Initial Prompts",
    prompt: `You are an expert test case generator. Your goal is to generate well-structured test cases based on a given requirements specification. Ensure that each test case follows best practices, includes detailed steps, expected outcomes, and prioritization based on risk and business impact.`,
  },

  details_description: {
    name: "Generate Details Descriptions",
    prompt: `Provide a clear, structured breakdown of the system requirements and their expected behaviors. Include edge cases, boundary values, and dependencies. The description should be concise yet comprehensive, ensuring all necessary details are covered for generating test cases.`,
  },

  generate_test_cases: {
    name: "Generate Test Cases",
    prompt: `Based on the given requirements, generate a set of high-quality test cases in a structured format. Each test case should include:
    - **Test Case ID**: A unique identifier
    - **Title**: A concise summary of the test
    - **Description**: A detailed explanation of what the test covers
    - **Preconditions**: Any setup required before executing the test
    - **Steps**: Step-by-step instructions to execute the test
    - **Expected Outcome**: The expected result of the test
    - **Priority**: Categorized as High, Medium, or Low
    - **Test Type**: Functional, Non-Functional, Regression, etc.
    Ensure the test cases cover positive, negative, and edge scenarios.`,
  },

  explain_test_properties: {
    name: "Explain Test Properties",
    prompt: `Explain the key properties of the generated test cases, including priority levels, dependencies, and test coverage. Justify why certain tests are marked as high priority and how they align with the system’s risk factors. Ensure clarity and depth in the explanation.`,
  },

  generate_requirements: {
    name: "Generate Requirements",
    prompt: `Based on the provided system description, extract and generate well-defined requirements. Each requirement should be clear, measurable, and testable, following best practices for writing software requirements.`,
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompt: `Analyze the generated test cases and provide a coverage report. Indicate which requirements are fully covered, partially covered, or missing test coverage. The report should include a summary table with:
    - **Requirement ID**  
    - **Coverage Status** (Full, Partial, None)  
    - **Gaps Identified** (if any)  
    Suggest additional test cases if coverage is insufficient.`,
  },
};
