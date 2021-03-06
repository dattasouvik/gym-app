import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { debounceTime, exhaustMap } from 'rxjs/operators';
import { UserAttendanceStore } from 'src/app/modules/user-attendance/services/user-attendance.store';
import { UserAttendanceValidator } from 'src/app/modules/user-attendance/validators/user-attendance.validator';


@Component({
  selector: 'app-add-user-attendance',
  templateUrl: './add-user-attendance.component.html',
  styleUrls: ['./add-user-attendance.component.scss']
})
export class AddUserAttendanceComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  form: FormGroup;
  traineeId: number;
  form$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUserAttendanceComponent>,
    private userAttendanceStore:UserAttendanceStore,
    private userAttendanceValidator:UserAttendanceValidator,
    @Inject(MAT_DIALOG_DATA) userId:number
  ) {
    this.traineeId = userId;
   }

  ngOnInit(): void {
    const currentYear = moment().year();
    this.minDate = moment([currentYear -1, 0, 1]).toDate();
    this.maxDate = moment([currentYear + 1, 11, 31]).toDate();

    this.form = this.fb.group({
      title: [{ value: 'Attended', disabled: true }, Validators.required],
      date:  [ '', Validators.compose([ Validators.required ]),
          this.userAttendanceValidator.isAttendanceValid(),
          {updateOn: 'blur'}
      ],
    });

    this.form$ = this.form.statusChanges;
    this.form$.subscribe( r => {
      if( r === 'PENDING') {
        setTimeout(() => {
          this.form.updateValueAndValidity(); // this function will trigger statusChange one more time.
        }, 1000);
      }
    });
  }

  save(){
    const attendanceData = {
      trainee: this.traineeId,
      type: 'add',
      attendance: moment(this.form.value.date).format("YYYY-MM-DD")
    };
    this.userAttendanceStore.addUserAttendance(attendanceData).subscribe();
    this.dialogRef.close(attendanceData);
  }

  close() {
    this.dialogRef.close();
  }

}
