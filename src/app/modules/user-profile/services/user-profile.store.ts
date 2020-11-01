import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { UserProfile } from 'src/app/modules/user-profile/model/user-profile.model';
import { HttpService } from 'src/app/services/http.service';


@Injectable({
  providedIn: 'root'
})

export class UserProfileStore {

  private subject = new BehaviorSubject<UserProfile[]>([]);

  profile$ : Observable<UserProfile[]> = this.subject.asObservable();

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService) {

    this.loadUserProfile();
  }

  loadUserProfile(){
    const loadProfile$ = this.httpService.get(`user-data?_format=json`)
    .pipe(
        catchError(err => {
            const message = "Unable to load data.";
            this.messages.showErrors(message);
            console.log(message, err);
            return throwError(err);
        }),
        tap(profileData => this.subject.next(profileData))
    );

    this.loading.showLoaderUntilCompleted(loadProfile$)
        .subscribe();
  }

  viewUserProfile(): Observable<UserProfile[]> {
    return this.profile$;
  }

}
