import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/login-page/login-page';
import { MissionListPageComponent } from './features/missions/mission-list-page/mission-list-page';
import { DashboardPageComponent } from './features/dashboard/dashboard-page/dashboard-page';
import { MissionFormPageComponent } from './features/missions/mission-form-page/mission-form-page';
import { MissionDetailPageComponent } from './features/missions/mission-detail-page/mission-detail-page';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [guestGuard]
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'missions',
    component: MissionListPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'missions/new',
    component: MissionFormPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'missions/:id/edit',
    component: MissionFormPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'missions/:id',
    component: MissionDetailPageComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];