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
  { path: 'schedule', component: ScheduleDaysComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
