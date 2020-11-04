import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { UserProfile } from 'src/app/modules/user-profile/model/user-profile.model';
import { HttpService } from 'src/app/services/http.service';


@Injectable()

export class UserProfileStore{

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
        tap(profileData => {
          this.subject.next(profileData);
        })
    );

    this.loading.showLoaderUntilCompleted(loadProfile$)
        .subscribe();
  }

  viewUserProfile(): Observable<UserProfile[]> {
    this.loadUserProfile();
    return this.profile$;
  }

  saveUserProfile(changes: Partial<UserProfile>): Observable<any> {

    const profile = this.subject.getValue();

    const newProfile: any = {
      ...profile[0],
      ...changes
    };

    /* Merge old data with the updated one */
    const updatedUserProfile: UserProfile[] = [];
    updatedUserProfile[0] = newProfile;

    this.subject.next(updatedUserProfile);

    return this.httpService.post(`edit-profile?_format=json`, changes)
      .pipe(
          catchError(err => {
              const message = "Unable to update data";
              console.log(message, err);
              this.messages.showErrors(message);
              return throwError(err);
          }),
          shareReplay()
      );
    }
}
