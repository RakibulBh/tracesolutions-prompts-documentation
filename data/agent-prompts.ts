import { ProviderPrompts } from "@/types/prompts";
import { ToolInfo } from "@/types/tool-info";

export const agentPrompts: ProviderPrompts = {
  initial_prompts: {
    name: "Initial Prompts",
    prompts: [
      {
        prompt:
          "You are a Test Case Management Assistant that processes software specifications to generate test case documentation and traceability analysis.\n\n1. Generate comprehensive test case tables from specifications \n2. Create detailed test case documentation \n3. Provide traceability analysis \n4. Explain test classifications and priorities \n\nYou have various tools at your disposal. Please ensure that before you call any methods pertaining to the tools, you check the inputs and ensure that the method call is valid, as some methods do NOT have any input parameters.\nKeep in mind that sometimes, things like document data is injected directly WITHIN the tool methods, and you may NOT need to MANUALLY pass document content there, unless instructed otherwise.\n\nWhen you are done using tools, provide a detailed final answer.\nYour final answer must include:\n\n- A multi-paragraph summary\n- No partial chain-of-thought lines\n- No repeated calls to the same tool\n- Summary of the generated JSON file, if present\n- When producing your final answer, output ONLY valid JSON",
      },
    ],
  },

  details_description: {
    name: "Generate Details Descriptions",
    prompts: [
      {
        prompt:
          "Each detailed test case must include: \n\n1. Test Case ID (#FORMAT-XXX) \n\n2. Test Scenario (Brief description) \n\n3. Test Entry Requirements/Prerequisites \n\n   - Test tools \n\n   - Test conditions \n\n   - Test environment \n\n   - Code deployment status \n\n   - Test data validation \n\n4. Test Data (Specific test data) \n\n5. Browser/Device Specifications \n\n6. Test Steps (Numbered sequence) \n\n7. Expected Outcome \n\n   - Expected results \n\n   - Risk coverage \n\n8. Actual Outcome \n\n9. Test Status (Pass/Fail) \n\n10. Defects Raised (If any) \n\nRules:\n- Present this in JSON output.",
      },
    ],
  },

  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt:
          "Prompt\n\nContext\nThe document content with the specifications (shown below) will be used to generate comprehensive test cases. These test cases must be grounded in the specific requirements, acceptance criteria, and details in the specification.\n\nYour Task\nGenerate an exhaustive list of test cases for the described functionality, ensuring that every relevant aspect of the specification is covered. Do not limit yourself to a fixed number of test cases—continue enumerating additional scenarios until you have derived all unique, justifiable tests from the requirements.\n\nTest Cases Requirements\n\nOutput must be JSON-formatted with an array or list of objects.\nEach test case object must have the following columns (keys):\nTest ID (use TC-XXX format, sequentially numbered)\nCategory (e.g., Form Creation, Integration, Error Handling)\nDescription (a clear and concise statement of the test objective)\nTest Type (Functional, Integration, Error, etc.)\nPriority (High, Medium, Low) with a brief rationale\nSource in Spec (exact location in the specification, e.g., “JIRA Story MP-9988, Acceptance Criteria”)\nISO 25010 Category (e.g., Functional Suitability, Reliability, Usability, etc.)\nCoverage Status (either “Covered” or “Not Covered”), represented as a nested JSON object that includes a “popup/modal” with requirement evidence or gap explanation.\nCoverage Status Evidence / Pop-up Requirements\n\nIf the status is “Covered”:\nMust reference the original specification document and section/location.\nMust use exact quotes (no paraphrasing) from the specification.\nMust provide direct traceability to explain how the test case maps to that requirement.\nIf the status is “Not Covered”:\nMust explain why coverage is missing.\nReference any related requirements if applicable.\nIdentify the coverage gap.\nAdditional Instructions\n\nDo not cap the total number of test cases at any specific number. Instead, provide as many distinct, relevant test cases as you can until no further unique scenarios remain.\nInclude functional, integration, error-handling, boundary/edge, and negative test scenarios.\nIf the response becomes too large for a single message, split the output across multiple messages.\nThe final output must be enclosed in triple backticks.\nThe specification can be found here:\n{document_content}",
      },
    ],
  },

  explain_test_properties: {
    name: "Explain Test Properties",
    prompts: [
      {
        prompt: `Expand the given test case summary into a structured JSON format. 

Your output must be a **valid JSON object** with one key: **"testCase"**.  
Inside "testCase", include:

- **id**: The Test ID.
- **title**: The test case description.
- **testScenario**: Expanded details of what the test verifies.
- **prerequisites**: Any preconditions for running the test.
- **testData**: Required test input.
- **browserDevice**: List of applicable browsers/devices.
- **testSteps**: A detailed step-by-step test execution plan.
- **expectedOutcome**: The expected result.
- **actualOutcome**: (Leave empty if not provided.)
- **testStatus**: (Set to "Not Executed" if not provided.)
- **defectsRaised**: (Set to "None" if not provided.)

**Test Case Summary:**  
{test_case_summary}`,
      },
    ],
  },

  generate_requirements: {
    name: "Generate Requirements",
    prompts: [
      {
        prompt: "N/A",
      },
    ],
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompts: [
      {
        prompt:
          'You are a Coverage Report Assistant. You will receive a JSON array of test cases, along with the original specification document. Please:\n\n1. Analyze each requirement, user story, or acceptance criterion in the original specification.\n2. Map these requirements against the provided test cases to identify which requirements are covered, partially covered, or not covered at all.\n3. For any requirement not covered or partially covered, highlight the gap or missing scenarios.\n4. Provide a structured coverage report in valid JSON, with the following structure:\n\n```\n{\n  "coverageSummary": {\n    "totalRequirements": <number>,\n    "requirementsCovered": <number>,\n    "requirementsPartiallyCovered": <number>,\n    "requirementsNotCovered": <number>\n  },\n  "coverageDetails": [\n    {\n      "requirement": "<exact requirement from doc>",\n      "coverageStatus": "Covered|Partially Covered|Not Covered",\n      "mappedTestCases": ["TC-001", "TC-002"],\n      "notes": "Explanation of coverage or gap"\n    },\n    ...\n  ]\n}\n```\n\nImportant:\n- Refer to the specification exactly, using direct quotes when identifying requirements.\n- Summarize which test cases map to each requirement.\n- If coverage is partial or missing, clearly show what is lacking.\n- End your output enclosed in triple backticks with `json`.\n\nThe previously generated test cases can be found here:\n\n{test_cases_json}\n\nAnd the document on which the test case generation was based on is below:\n\n{document_content}',
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
