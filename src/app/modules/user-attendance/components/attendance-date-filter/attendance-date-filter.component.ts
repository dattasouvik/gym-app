import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserAttendanceStore } from 'src/app/modules/user-attendance/services/user-attendance.store';
import * as moment from 'moment';

@Component({
  selector: 'user-attendance-date-filter',
  templateUrl: './attendance-date-filter.component.html',
  styleUrls: ['./attendance-date-filter.component.scss']
})
export class AttendanceDateFilterComponent implements OnInit {

  constructor(private userAttendanceStore: UserAttendanceStore) { }

  ngOnInit(): void {

  }

  filterByDate(event: MatDatepickerInputEvent<Date>){
    if(event.value && moment.isDate(event.value) ){
      this.userAttendanceStore.setDateFilter(event.value);
    }
  }

}
