import { Component, inject } from '@angular/core';
import { MissionService } from '../../../core/services/mission';
import { Mission } from '../../../core/models/mission.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mission-list-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './mission-list-page.html',
  styleUrl: './mission-list-page.css',
})
export class MissionListPageComponent {
  private missionService = inject(MissionService);

  missions: Mission[] = this.missionService.getMissions();

  selectedStatus: 'all' | 'draft' | 'sent' | 'accepted' | 'rejected' = 'all';

  get filteredMissions(): Mission[] {
    if (this.selectedStatus === 'all') {
      return this.missions;
    }

    return this.missions.filter(
      mission => mission.status === this.selectedStatus
    );
  }

  deleteMission(id: number): void {
    const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cette mission ?');

    if (!confirmed) {
      return;
    }
    
    const index = this.missions.findIndex(m => m.id === id);

    if (index !== -1) {
      this.missions.splice(index, 1);
    }
  }
}

