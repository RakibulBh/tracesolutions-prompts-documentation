export type ToolInfo = {
  documents?: string[];
  setup_steps?: string[];
  prerequisites?: string[];
  IO_sample?: {
    input: string;
    output: string;
  };
  tips?: string[];
  limits?: string[];
};
