export type MissionStatus = 'draft' | 'sent' | 'accepted' | 'rejected';

export interface Mission {
  id: number;
  title: string;
  client: string;
  status: MissionStatus;
  dailyRate: number;
  startDate: string;
}