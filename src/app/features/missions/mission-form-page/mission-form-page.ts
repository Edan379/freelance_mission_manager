import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MissionService } from '../../../core/services/mission';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionStatus } from '../../../core/models/mission.model';

@Component({
  selector: 'app-mission-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './mission-form-page.html',
  styleUrl: './mission-form-page.css',
})
export class MissionFormPageComponent {
  private fb = inject(FormBuilder);
  private missionService = inject(MissionService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  missionId = Number(this.route.snapshot.paramMap.get('id'));
  isEditMode = !Number.isNaN(this.missionId) && this.missionId > 0;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    client: ['', [Validators.required]],
    status: ['draft', [Validators.required]],
    dailyRate: [100, [Validators.required, Validators.min(100)]],
    startDate: ['', [Validators.required]],
  });

  constructor() {
    if (this.isEditMode) {
      const mission = this.missionService.getMissionById(this.missionId);

      if (mission) {
        this.form.patchValue({
          title: mission.title,
          client: mission.client,
          status: mission.status,
          dailyRate: mission.dailyRate,
          startDate: mission.startDate,
        });
      }
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const missionData = {
      title: this.form.value.title ?? '',
      client: this.form.value.client ?? '',
      status: this.form.value.status as MissionStatus,
      dailyRate: Number(this.form.value.dailyRate),
      startDate: this.form.value.startDate ?? '',
    };

    if (this.isEditMode) {
      this.missionService.updateMission(this.missionId, missionData);
    } else {
      this.missionService.addMission(missionData);
    }

    this.router.navigate(['/missions']);
  }
}
