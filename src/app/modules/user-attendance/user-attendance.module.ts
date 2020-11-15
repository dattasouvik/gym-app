import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { ViewUserAttendanceComponent } from './components/view-user-attendance/view-user-attendance.component';
import { FullCalendarModule }
from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { AttendanceDateFilterComponent } from './components/attendance-date-filter/attendance-date-filter.component'; // a plugin
import { UserAttendanceStore } from 'src/app/modules/user-attendance/services/user-attendance.store';

// register FullCalendar plugins
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [ViewUserAttendanceComponent, AttendanceDateFilterComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    MaterialDesignModule
  ],
  exports:[
    ViewUserAttendanceComponent,
    AttendanceDateFilterComponent
  ],
  providers:[
    UserAttendanceStore
  ]
})
export class UserAttendanceModule { }
