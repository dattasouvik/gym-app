import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserAttendanceStore }
from 'src/app/modules/user-attendance/services/user-attendance.store';


@Component({
  selector: 'app-trainee-summary',
  templateUrl: './trainee-summary.component.html',
  styleUrls: ['./trainee-summary.component.scss']
})
export class TraineeSummaryComponent implements OnInit,OnDestroy {
  id: number;
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    public userAttendanceStore:UserAttendanceStore
    ) { }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = + params.id;
      this.userAttendanceStore.loadUserAttendance(this.id);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
