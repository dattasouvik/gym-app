import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaveAttendenceComponent } from '../save-attendence/save-attendence.component';


@Component({
  selector: 'app-attendence-list',
  templateUrl: './attendence-list.component.html',
  styleUrls: ['./attendence-list.component.scss']
})
export class AttendenceListComponent implements OnInit {
  attended: any;
  currattend: any;
  calendarOptions: CalendarOptions;
  constructor(private dialog: MatDialog) {
  this.attended =  [
    { title: 'Attended', date: '2020-07-02' },
    { title: 'Attended', date: '2020-07-05' }
  ];
  this.calendarOptions = {
    initialView: 'dayGridMonth',
    eventDurationEditable: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.attended,
    eventColor: '#378006',
    eventBackgroundColor: 'primary',
    headerToolbar: {
      right: 'prev,next today',
      center: 'title',
    }

  };
  }


  ngOnInit() {

    }

    handleDateClick(arg) {
    console.log(arg);
    const arrresult = this.attended.filter(x => x.date === arg.dateStr);
    if (arrresult.length === 0) {
    // alert('date click! ' + arg.dateStr)
    this.currattend = arg.dateStr;
    this.dialog.open(SaveAttendenceComponent, {
    disableClose: true,
    width: '300px',
    panelClass: 'custom-dialog-container',
    data: {addPosition: arg.dateStr}
  });
    }
  }

}
