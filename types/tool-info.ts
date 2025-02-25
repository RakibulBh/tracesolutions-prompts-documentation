export type DocumentInfo = {
  name: string;
  path: string;
};

export type DocumentItem = DocumentInfo | string;

export type ToolInfo = {
  documents?: DocumentItem[];
  setup_steps?: string[];
  prerequisites?: string[];
  IO_sample?: {
    input: string;
    output: string;
  };
  tips?: string[];
  limits?: string[];
  troubleshooting?: string[];
};
