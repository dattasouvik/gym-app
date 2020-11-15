import { Component, OnInit, ViewChild, Input, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { UserAttendanceResponse } from 'src/app/modules/user-attendance/model/user-attendance-response.model';
import { UserAttendanceStore } from 'src/app/modules/user-attendance/services/user-attendance.store';

@Component({
  selector: 'view-user-attendance',
  templateUrl: './view-user-attendance.component.html',
  styleUrls: ['./view-user-attendance.component.scss']
})
export class ViewUserAttendanceComponent implements OnInit,AfterViewInit,OnDestroy,AfterViewChecked {
  attended = [];
  calendarOptions: CalendarOptions;
  dateSelected:Date;
  @Input() userId:number;
  @Input() attendance: UserAttendanceResponse[];

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  constructor(private userAttendanceStore: UserAttendanceStore) { }


  ngOnInit(): void {
    //TBA
    // this.userAttendanceStore.filterDate$.subscribe(date => this.selectDate(date));

    this.calendarOptions = {
      initialView: 'dayGridMonth',
      // customButtons: {
      //   myCustomButton: {
      //     text: '+Custom', click: function() {
      //       console.log("working");
      //     }
      //   }
      // },
      // headerToolbar: {
      //   left: 'myCustomButton',
      //   center: 'title',
      //   right: 'prev,next today'
      // },

      // editable: true,
      // handleWindowResize: true,
      selectable: true,
      handleWindowResize: true,
      // dateClick: this.handleDateClick.bind(this), // bind is important!
      events: this.attended,
      eventColor: 'accent',
      eventBackgroundColor: 'primary'
    };
  }

  ngAfterViewInit(): void {
    // this.bindEvents();
  }

  ngAfterViewChecked(): void {
    this.attended = this.attendance;
    this.calendarOptions.events = this.attended;
  }

  // bindEvents() {
  //   let prevButton = this.calendarComponent.el.nativeElement.getElementsByClassName("fc-prev-button");
  //   let nextButton = this.calendarComponent.el.nativeElement.getElementsByClassName("fc-next-button");

  //   console.log(nextButton);

  //   nextButton[0].addEventListener('click', ()=>{
  //     console.log("nextClick")
  //   });
  //   prevButton[0].addEventListener('click', ()=>{
  //       console.log("prevClick")
  //   });
  // }

  // unBindEvents() {
  //   let prevButton = this.calendarComponent.el.nativeElement.getElementsByClassName("fc-prev-button");
  //   let nextButton = this.calendarComponent.el.nativeElement.getElementsByClassName("fc-next-button");
  //   nextButton[0].removeEventListener('click', ()=>{
  //       console.log("nextClick")
  //   });
  //   prevButton[0].removeEventListener('click', ()=>{
  //       console.log("prevClick")
  //   });
  // }

  ngOnDestroy(): void {
    // this.unBindEvents();
  }

  selectDate( date: Date){
      let calendarApi = this.calendarComponent.getApi();
      calendarApi.gotoDate(date); // call a method on the Calendar object
  }

  goPrev() {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.prev(); // call a method on the Calendar object
  }
}

//ref: https://stackblitz.com/edit/github-qqwdyk
// https://stackoverflow.com/questions/43256869/how-to-make-fullcalendar-responsive
// https://pupli.net/2019/06/add-class-to-body-and-intercept-dom-using-renderer2-in-angular/
//https://www.joshuacolvin.net/