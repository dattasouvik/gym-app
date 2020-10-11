import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAttendenceModule } from './user-attendence/user-attendence.module';
import { AttendenceListComponent } from './user-attendence/attendence-list/attendence-list.component';
import { ScheduleDaysComponent } from './user-attendence/schedule-days/schedule-days.component';


const routes: Routes = [
  { path: 'registration', loadChildren: () => import('./registration-form/registration-form.module').then(m => m.RegistrationFormModule) },
  { path: 'users', loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule) },
  // { path: 'attendence',loadChildren:'./user-attendence/user-attendence.module#UserAttendenceModule'}
  { path: 'attendence', component: AttendenceListComponent },
  { path: 'schedule', component: ScheduleDaysComponent },
  { path: 'profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/user-registration/user-registration.module').then(m => m.UserRegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
