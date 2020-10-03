import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { ScheduleDaysComponent } from './schedule-days/schedule-days.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SaveAttendenceComponent } from './save-attendence/save-attendence.component';


@NgModule({
  declarations: [AttendenceListComponent, ScheduleDaysComponent, SaveAttendenceComponent],
  entryComponents : [SaveAttendenceComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    MaterialImportsModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UserAttendenceModule { }
