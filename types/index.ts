export type Prompt = {
  name: string;
  prompt: string;
};

export type ProviderPrompts = {
  initial_prompts: Prompt;
  generate_test_cases: Prompt;
  details_description: Prompt;
  explain_test_properties: Prompt;
  generate_requirements: Prompt;
  generate_coverage_report: Prompt;
};
