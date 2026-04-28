import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MissionService } from '../../../core/services/mission';
import { Mission } from '../../../core/models/mission.model';

@Component({
  selector: 'app-mission-detail-page',
  imports: [RouterLink],
  templateUrl: './mission-detail-page.html',
  styleUrl: './mission-detail-page.css',
})
export class MissionDetailPageComponent {
  private route = inject(ActivatedRoute);
  private missionService = inject(MissionService);

  mission?: Mission;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mission = this.missionService.getMissionById(id);
  }
}
