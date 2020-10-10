import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-days',
  templateUrl: './schedule-days.component.html',
  styleUrls: ['./schedule-days.component.scss']
})
export class ScheduleDaysComponent implements OnInit {

  days: any;
  hours: number[] = [];
  mins: number[] = [];
  ampm: string[];
  constructor() {

    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday'];
    for (let i = 1; i <= 12; i++) {
      this.hours.push(i);
    }
    for (let i = 0; i <= 59; i++) {
      this.mins.push(i);
    }
    this.ampm = ['am', 'pm'];
    console.log(this.hours);
   }

  ngOnInit() {
  }
  saveSchedule(scheduleFrm) {
    console.log(scheduleFrm.controls);
  }
}
