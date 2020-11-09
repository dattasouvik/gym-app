import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from '../../shared/services/loading.service';
import { MessagesService } from '../../shared/services/messages.service';
import { Trainees } from '../model/trainees.model';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  private subject = new BehaviorSubject<Trainees[]>([]);

  public readonly profile$: Observable<Trainees[]> = this.subject.asObservable();

  constructor(private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService) { }

  getTrainees(page: number = 0) {
    const loadProfile$ = this.httpService.get(`my-trainee?_format=json&page=${page}`)
      .pipe(
        catchError(err => {
          const message = "Unable to load data.";
          this.messages.showErrors(message);
          console.log(message, err);
          return throwError(err);
        }),
        tap(profileData => {
          this.subject.next(profileData);
        }),
        shareReplay()
      );

    this.loading.showLoaderUntilCompleted(loadProfile$)
      .subscribe();
  }

  getTrainees1(){
    return this.httpService.get("my-trainee?_format=json"); 
  }
}
