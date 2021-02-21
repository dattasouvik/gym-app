import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAttendenceModule } from './user-attendence/user-attendence.module';
import { AttendenceListComponent } from './user-attendence/attendence-list/attendence-list.component';
import { ScheduleDaysComponent } from './user-attendence/schedule-days/schedule-days.component';
import { LoginGuard } from 'src/app/guards/login.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CanLoadAuthGuard } from 'src/app/guards/can-load-auth.guard';
import { NotFoundComponent } from 'src/app/modules/core/components/not-found/not-found.component';


const routes: Routes = [
  // { path: 'attendence',loadChildren:'./user-attendence/user-attendence.module#UserAttendenceModule'}
  // { path: 'attendence', component: AttendenceListComponent },
  // { path: 'schedule', component: ScheduleDaysComponent },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/user-profile/user-profile.module')
    .then(m => m.UserProfileModule),
    canActivate: [AuthGuard],
    canLoad: [CanLoadAuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module')
    .then(m => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/user-registration/user-registration.module')
    .then(m => m.UserRegistrationModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./modules/forgot-password/forgot-password.module')
    .then(m => m.ForgotPasswordModule),
    canActivate: [LoginGuard]
  },
  { path: 'reset-password',
    loadChildren: () => import('./modules/reset-password/reset-password.module')
    .then(m => m.ResetPasswordModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'trainers',
    loadChildren: () => import('./modules/trainers/trainers.module')
    .then(m => m.TrainersModule),
    canLoad: [CanLoadAuthGuard]
  },
  {
    path: 'trainees',
    loadChildren: () => import('./modules/trainees/trainees.module')
    .then(m => m.TraineesModule),
    canLoad: [CanLoadAuthGuard]
  },
  {
    path: 'health-status', //To be moved to trainees module later
    loadChildren: () => import('./modules/health-card/health-card.module')
    .then(m => m.HealthCardModule),
    canLoad: [CanLoadAuthGuard]
  },
  {
    path: 'view',
    loadChildren: () => import('./modules/trainee-reports/trainee-reports.module')
    .then(m => m.TraineeReportsModule),
    canLoad: [CanLoadAuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration:'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
