import type { ReactNode } from "react";

export interface NudaComponent {
  id: string;
  name: string;
  category: string;
  preview: ReactNode;
  code: { label: string; code: string; language: string }[];
  cssInline?: string;
}
