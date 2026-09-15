export interface TimelineEvent {
  id: string;
  title: string;
  period: string;
  startDate: string;
  endDate?: string;
  location?: string;
  summary: string;
  description: string;
  details: string[];
}
