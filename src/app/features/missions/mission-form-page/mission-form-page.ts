import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MissionService } from '../../../core/services/mission';

@Component({
  selector: 'app-mission-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './mission-form-page.html',
  styleUrl: './mission-form-page.css',
})
export class MissionFormPageComponent {
  private fb = inject(FormBuilder);
  private missionService = inject(MissionService);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    client: ['', [Validators.required]],
    status: ['draft', [Validators.required]],
    dailyRate: [100, [Validators.required, Validators.min(100)]],
    startDate: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.missionService.addMission({
      title: this.form.value.title ?? '',
      client: this.form.value.client ?? '',
      status: this.form.value.status as 'draft' | 'sent' | 'accepted' | 'rejected',
      dailyRate: Number(this.form.value.dailyRate),
      startDate: this.form.value.startDate ?? '',
    });

    console.log('Mission créée', this.form.value);

    this.form.reset({
      title: '',
      client: '',
      status: 'draft',
      dailyRate: 0,
      startDate: '',
    });
  }
}
