import { Injectable } from '@angular/core';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missions: Mission[] = [
    {
      id: 1,
      title: 'Dashboard Angular',
      client: 'Astek',
      status: 'sent',
      dailyRate: 600,
      startDate: '2026-05-10',
    },
    {
      id: 2,
      title: 'API NestJS',
      client: 'Finance Corp',
      status: 'accepted',
      dailyRate: 700,
      startDate: '2026-05-20',
    },
    {
      id: 3,
      title: 'Refonte front-end',
      client: 'Startup Montréal',
      status: 'draft',
      dailyRate: 550,
      startDate: '2026-06-01',
    },
    {
      id: 4,
      title: 'Développeur Angular - Opportunité Astek',
      client: 'Astek',
      status: 'draft',
      dailyRate: 650,
      startDate: '2026-06-15',
    },
  ];

  getMissions(): Mission[] {
    return this.missions;
  }

  addMission(mission: Omit<Mission, 'id'>): void {
    const newMission: Mission = {
      id: this.missions.length + 1,
      ...mission,
    };

    this.missions.push(newMission);
  }

  getMissionById(id: number): Mission | undefined {
    return this.missions.find(m => m.id === id);
  }
}