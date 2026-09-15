export type ProjectCategory = 'development' | 'design';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  date: string;
  duration: string;
  context: string;
  tools: string[];
  summary: string;
  description: string;
  tasks: string[];
  image?: string;
  links?: ProjectLink[];
  featured?: boolean;
}

export interface SkillCloudItem {
  label: string;
  count: number;
  weight: number;
}
