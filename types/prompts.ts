export type Prompt = {
  name: string;
  prompts: {
    prompt: string;
  }[];
};

export type ProviderPrompts = {
  traceability_analysis?: Prompt;
  initial_prompts?: Prompt;
  generate_test_cases: Prompt;
  details_description: Prompt;
  explain_test_properties?: Prompt;
  generate_requirements?: Prompt;
  generate_coverage_report: Prompt;
  generate_traceability_matrix?: Prompt;
  generate_gap_analysis?: Prompt;
  validate?: Prompt;
};
