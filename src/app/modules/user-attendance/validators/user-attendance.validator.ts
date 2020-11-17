import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, map, switchMap, take, tap, first, catchError } from 'rxjs/operators';
import { UserAttendanceStore } from 'src/app/modules/user-attendance/services/user-attendance.store';
import * as moment from 'moment';

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value === null || value.length === 0;
}

@Injectable()

export class UserAttendanceValidator {

  constructor(
    private userAttendanceStore:UserAttendanceStore
  ) {}

  isAttendanceValid(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
        if (isEmptyInputValue(control.value)) {
          return of(null);
        }else{
          return control.valueChanges.pipe(
            debounceTime(500),
            take(1),
            switchMap(_ =>
              this.userAttendanceStore.userAttendanceInfo$
                .pipe(
                  map( res => {
                    let forbidden = true;
                    const attended = res.findIndex(
                      attendance => {
                      return  moment(attendance.date).format("YYYY-MM-DD") === moment(control.value).format("YYYY-MM-DD");
                      });
                    if(attended < 0){
                      forbidden = false;
                    }
                    return forbidden ? { userAttended: { value: control.value } } : null;
                  }),
                  catchError(() => of(null))
                )
            )
          ).pipe(take(1));
        }
    };
  }
}


//https://engineering.datorama.com/implementing-async-validators-in-angular-reactive-forms-fdf67c3d0e12
