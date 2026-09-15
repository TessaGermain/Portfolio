export type UsefulLinkKind = 'github' | 'linkedin' | 'gmail' | 'cv';

export interface UsefulLink {
  id: UsefulLinkKind;
  label: string;
  description: string;
  url: string | null;
  order: number;
}
