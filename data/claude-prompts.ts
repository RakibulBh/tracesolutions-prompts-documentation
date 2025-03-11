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
  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt: `Follow the instructions and use your knowledge base to analyse and extract all the required test cases from requirements, including edge cases and error handling. The priority, and ISO category values should come from the knowledge base. An example of the HTML test case table format has been provided in test-case-table.html file. Only generate the HTML TEST CASE TABLE with all the extracted test cases, including the coverage status modals.`,
      },
      {
        prompt: "Generate more test cases",
      },
    ],
  },

   details_description: {
    name: "Generate Details Descriptions",
    prompts: [
      {
        prompt: `Generate detailed test case description for TC-XXX using the structure in tc-001-details.html.`,
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
        prompt: `Generate a requirements table based on the provided specification document. 
        Follow the exact format shown in REQUIREMENTS_TABLE.html in your project knowledge. 
        Only include requirements explicitly stated in the document with their exact text quotes. 
        Do not invent or extrapolate requirements.`,
      },
    ],
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompts: [
      {
        prompt: `Use the requirements table to check if all the requirements are covered and show Requirements-to-Test Case Traceability Matrix. 
        To be covered both the requirement and the test case should be traced to the same text in the specification document use coverage-report.html in your project knowledge as a template. 
        Do not include any additional opinions or extraneous information beyond what is present in the HTML table and your knowledge base.`,
      },
    ],
  },
 generate_traceability_matrix: {
    name: "Generate Traceability Matrix",
    prompts: [
      {
        prompt: `Give me only the Requirement-to-Test Case Traceability Matrix. Use SIMPLE_TRACEABILITY_MATRIX.html as a template. `,
      },
    ],
  },

  generate_gap_analysis: {
    name: "Generate Gap Analysis",
    prompts: [
      {
        prompt: `Perform a gap analysis to identify any high priority test cases that are potentially not covered. 
        Use the gap-analysis.html from the project knowledge as an example. `,
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
      name: "Priority ISO categories document",
      path: "/docs/priority_iso_categories_test_types.docx",
    },
    {
      name: "Detailed test case documentation Prompt document",
      path: "/docs/Detailed test case documentation.docx",
    },
    {
      name: "Table example document",
      path: "/docs/test-case-table.html",
    },
    {name: "Detailed description example document", 
     path: "/docs/tc-001-details.html",
    },
    {name: "Requirements table template", 
     path: "/docs/requirements-table.html",
    },
    {name: "Coverage report template", 
     path: "/docs/coverage-report.html",
    },
    {name: "Traceability matrix template", 
     path: "/docs/simple-traceability-matrix.html",
    },
    {name: "Gap analysis template", 
     path: "/docs/gap-analysis.html",
    },
  ],
  setup_steps: [
    "Head to https://claude.ai/projects",
    'Click on "Create Project"',
    "Upload the relevant documents listed above.",
    "Begin chatting!",
  ],
  IO_sample: {
    input:
      "Follow the instructions and use your knowledge base to analyse and extract all the required test cases from requirements, including edge cases and error handling. The priority, and ISO category values should come from the knowledge base. An example of the HTML test case table format has been provided in test-case-table.html file. Only generate the HTML TEST CASE TABLE with all the extracted test cases, including the coverage status modals.",
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
    "If you think the number of extracted test cases is low, then use the prompt **Generate more test cases**.",
    "In the rare case that the modals do not work when generating the HTML test case table, then use the prompt **Update the table so the coverage modals work** to correct the coverage modals.",
    "In the rare case that the coverage report is in markdown format, then use the prompt **Generate the coverage report in HTML format** to output the response in the correct format."
  ]
};
