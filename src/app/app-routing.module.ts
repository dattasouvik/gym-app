import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAttendenceModule } from './user-attendence/user-attendence.module';
import { AttendenceListComponent } from './user-attendence/attendence-list/attendence-list.component';
import { ScheduleDaysComponent } from './user-attendence/schedule-days/schedule-days.component';


const routes: Routes = [
  { path: 'registration', loadChildren: './registration-form/registration-form.module#RegistrationFormModule' },
  { path: 'users', loadChildren: './user-data/user-data.module#UserDataModule' },
  // { path: 'attendence',loadChildren:'./user-attendence/user-attendence.module#UserAttendenceModule'}
  { path: 'attendence', component: AttendenceListComponent },
  { path: 'schedule', component: ScheduleDaysComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
