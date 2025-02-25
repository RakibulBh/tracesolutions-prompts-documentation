import { ProviderPrompts } from "@/types/prompts";
import { ToolInfo } from "@/types/tool-info";

export const claudePrompts: ProviderPrompts = {
  initial_prompts: {
    name: "Initial Prompts",
    prompts: [
      {
        prompt: `Project Initialisation Prompt Template from knowledge base`,
      },
    ],
  },

  details_description: {
    name: "Generate Details Descriptions",
    prompts: [
      {
        prompt: `Generate detailed test case description for TC-XXX.`,
      },
    ],
  },

  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt: `Follow the instructions and use your knowledge base to analyse and extract all the required test cases from requirements, including edge cases and error handling. The priority, test type, and ISO category values should come from the knowledge base. An example of the HTML test case table format has been provided in test-case-table.html file. Only generate the HTML TEST CASE TABLE with all the extracted test cases, including the coverage status modals.`,
      },
      {
        prompt: "Generate more test cases",
      },
    ],
  },

  explain_test_properties: {
    name: "Explain Test Properties",
    prompts: [
      {
        prompt: `Explain why **TC-XXX** is classified as **High Priority** according to the knowledge base.  
          Your explanation should be based on:  
          - Business impact  
          - Risk analysis  
          - Complexity  
          - Potential failure consequences`,
      },
    ],
  },

  generate_requirements: {
    name: "Generate Requirements",
    prompts: [
      {
        prompt: `Extract and define all testable requirements from the generated HTML test case table. 
        
                Ensure all identified requirements are clear, measurable, and well-structured.
        
                Use the test-case-table.html file as a reference for formatting.`,
      },
    ],
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompts: [
      {
        prompt: `Using only the information from the generated HTML test case table and your internal knowledge base, generate an HTML file that serves as a test case coverage report. The report must include a detailed, step-by-step explanation of how each element is derived directly from the test cases. Do not include any additional opinions or extraneous information beyond what is present in the HTML table and your knowledge base. Ensure the HTML output is comprehensive, well-structured, and valid.`,
      },
    ],
  },
};

export const claudeInfo: ToolInfo = {
  documents: [
    "Specification", // No need for path as it is dynamic
    {
      name: "Project Initialization Prompt document",
      path: "/docs/ProjectInitialPrompt.docx",
    },
    {
      name: "Priority test types document",
      path: "/docs/priority_iso_categories_test_types.docx",
    },
    {
      name: "Detailed test case documentation Promp document",
      path: "/docs/Detailed test case documentation.docx",
    },
    {
      name: "Table example document",
      path: "/docs/test-case-table.html",
    },
    {name: "Detailed description example document", path: "/docs/tc-001-details.html"},
  ],
  setup_steps: [
    "Head to https://claude.ai/projects",
    'Click on "Create Project"',
    "Upload the relevant documents listed above.",
    "Begin chatting!",
  ],
  IO_sample: {
    input:
      "Follow the instructions and use your knowledge base to analyse and extract all the required test cases from requirements, including edge cases and error handling. The priority, test type, and ISO category values should come from the knowledge base. An example of the HTML test case table format has been provided in test-case-table.html file. Only generate the HTML TEST CASE TABLE with all the extracted test cases, including the coverage status modals.",
    output: "Extracted test cases in a HTML formatted table with coverage modals.",
  },
  tips: [
    "Be very specific during the prompts.",
    "Mentioning knowledge base is useful, so the LLM does not give extra explanations.",
  ],
  limits: [
    "The number of test cases can vary but the LLM will generate more if you ask it to produce more test cases.",
    "When it comes to evaluating test cases that were generated, the model will update its response and use more granular test cases for the requirements.",
  ],
  troubleshooting: [
    "If the maximum number of tokens is reached, type Continue so the LLM completes the response.",
    "If you think the number of extracted test cases is low, then use the prompt **Generate more test case**.",
    "In the rare case that the modals do not work when generating the HTML test case table, then use the prompt **Update the table so the coverage modals work** to correct the coverage modals.",
    "In the rare case that the coverage report is in markdown format, then use the prompt **Generate the coverage report in HTML format** to output the response in the correct format."
  ]
};
