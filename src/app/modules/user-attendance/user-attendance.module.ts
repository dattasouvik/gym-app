import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { ViewUserAttendanceComponent } from './components/view-user-attendance/view-user-attendance.component';
import { FullCalendarModule }
from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { AttendanceDateFilterComponent } from './components/attendance-date-filter/attendance-date-filter.component'; // a plugin
import { UserAttendanceStore } from 'src/app/modules/user-attendance/services/user-attendance.store';
import { AddUserAttendanceComponent } from './components/add-user-attendance/add-user-attendance.component';
import { UserAttendanceValidator } from 'src/app/modules/user-attendance/validators/user-attendance.validator';

// register FullCalendar plugins
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    ViewUserAttendanceComponent,
    AttendanceDateFilterComponent,
    AddUserAttendanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MaterialDesignModule
  ],
  exports:[
    ViewUserAttendanceComponent,
    AttendanceDateFilterComponent
  ],
  providers:[
    UserAttendanceStore,
    UserAttendanceValidator
  ],
  entryComponents: [
    AddUserAttendanceComponent
  ]
})
export class UserAttendanceModule { }
