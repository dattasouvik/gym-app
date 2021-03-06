import { HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { AddAttendance } from 'src/app/modules/user-attendance/model/add-attendance.model';
import { UserAttendanceResponse } from 'src/app/modules/user-attendance/model/user-attendance-response.model';
import { HttpService } from 'src/app/services/http.service';


@Injectable()

export class UserAttendanceStore {

  private subject = new Subject<Date>();
  private userAttendanceSubject = new BehaviorSubject<UserAttendanceResponse[]>([]);

  public readonly filterDate$: Observable<Date> = this.subject.asObservable();
  public readonly userAttendanceInfo$: Observable<UserAttendanceResponse[]> = this.userAttendanceSubject.asObservable();

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService
    ) {}

    public setDateFilter(date:Date){
      //fix to prevent invalid/null date
      if(date){
        this.subject.next(date);
      }
    }

    public loadUserAttendance(userId: number){
      let params = new HttpParams();
      params = params.append('_format', `json`);
      params = params.append('trainee', `${userId}`);
      const userAttendance$ = this.httpService.get(`user-attendance`, {params})
      .pipe(
        catchError(err => {
            const message = "Unable to load attendance Information.";
            this.messages.showErrors(message);
            return throwError(err);
        }),
        tap(attendance => {
          this.userAttendanceSubject.next(attendance);
        }),
        shareReplay()
      );

      this.loading.showLoaderUntilCompleted(userAttendance$)
        .subscribe();
    }

    public addUserAttendance(changes:AddAttendance): Observable<any>{

      const attendance = this.userAttendanceSubject.getValue();
      const newAttendance  = attendance.slice();
      newAttendance
      .push({
        title: 'Attended',
        date: changes.attendance
      });
 
      this.userAttendanceSubject.next(newAttendance);

      let params = new HttpParams();
      params = params.append('_format', `json`);
      return this.httpService.post(`user-attendance`, changes, {params})
      .pipe(
        catchError(err => {
            //Restore old data if update failed
            this.userAttendanceSubject.next(attendance);
            const message = "Unable to update Attendance";
            this.messages.showErrors(message);
            return throwError(err);
        }),
        shareReplay()
      );
    }
}
