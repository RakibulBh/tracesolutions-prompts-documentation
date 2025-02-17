import { ProviderPrompts } from "@/types";

export const claudePrompts: ProviderPrompts = {
  initial_prompts: {
    name: "Initial Prompts",
    prompts: [
      {
        prompt: `Analyse the provided requirements and extract all necessary test cases, including edge cases and error handling scenarios.  
          Start by listing all the identified **requirements** and then generate an **HTML Test Case Table** containing:  
          - Extracted test cases  
          - Coverage status modals  
          - Priority levels  
          - Test types  
          - ISO 25010 category mappings  

          The priority, test type, and ISO category values must be determined based on the knowledge base.  

          Use the **test-1.html** file as a reference for the correct HTML table format.`,
      },
    ],
  },

  details_description: {
    name: "Generate Details Descriptions",
    prompts: [
      {
        prompt: `Provide a **detailed test case description** for **TC-XXX**.  
                Your description should include:  
                - Prerequisites  
                - Test steps  
                - Expected outcome  
                - Validation criteria  
                Ensure clarity and completeness in the description.`,
      },
    ],
  },

  generate_test_cases: {
    name: "Generate Test Cases",
    prompts: [
      {
        prompt: `Analyse the provided requirements and extract all necessary **test cases**, including edge cases and error handling scenarios.  
                Then, generate an **HTML Test Case Table** that includes:  
                - Extracted test cases  
                - Coverage status modals  
                - Priority levels  
                - Test types  
                - ISO 25010 category mappings  

                Determine priority, test type, and ISO category values using the knowledge base.  

                Reference the **test-1.html** file for the correct table format.`,
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
        prompt: `Extract and define all testable **requirements** from the provided documentation.  
        Then, generate an **HTML Test Case Table** that includes:  
        - Extracted test cases  
        - Coverage status modals  
        - Priority levels  
        - Test types  
        - ISO 25010 category mappings  

        Ensure all identified requirements are **clear, measurable, and well-structured**.  

        Use the **test-1.html** file as a reference for formatting.`,
      },
    ],
  },

  generate_coverage_report: {
    name: "Generate Coverage Report",
    prompts: [
      {
        prompt: `Using your knowledge base, generate a **Test Case Coverage Report** based on the test cases from the **HTML Test Case Table**.  
        Your response must detail:  
        1. **Coverage Analysis**: How well do the test cases cover the requirements?  
        2. **Traceability Mapping**: Exact references linking each test case to its related requirement.  
        3. **Gap Identification**: Highlight any missing test cases or areas lacking sufficient coverage.  
        4. **Derivation Steps**: Explain the step-by-step process used to generate the coverage report.  

        Ensure the response is **comprehensive and well-structured**.`,
      },
    ],
  },
};
