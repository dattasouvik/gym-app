import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AddUserAttendanceComponent } from 'src/app/modules/user-attendance/components/add-user-attendance/add-user-attendance.component';
import { UserAttendanceStore } from 'src/app/modules/user-attendance/services/user-attendance.store';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  id: number;
  subscription: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    public userAttendanceStore: UserAttendanceStore,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = + params.id;
      this.userAttendanceStore.loadUserAttendance(this.id);
    });
  }

  addAttendance() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = this.id;
    const dialogRef = this.dialog.open(AddUserAttendanceComponent, dialogConfig);
    dialogRef.afterClosed()
      .pipe(
        filter(val => !!val)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
