import { HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { TrainerResponse } from 'src/app/modules/trainers/model/trainer-response.model';
import { HttpService } from 'src/app/services/http.service';


@Injectable()

export class TrainersStore {

  private subject = new BehaviorSubject<TrainerResponse>(null);

  public readonly trainers$ : Observable<TrainerResponse> = this.subject.asObservable();

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService
    ) {}

  loadMyTrainers(page:number = 0){
    let params = new HttpParams();
    params = params.append('_format', `json`);
    params = params.append('page', `${page}`);
    const loadTrainers$ = this.httpService.get(`my-trainer`, {params})
    .pipe(
        catchError(err => {
            const message = "Unable to load Trainers.";
            this.messages.showErrors(message);
            return throwError(err);
        }),
        tap(trainers => {
          this.subject.next(trainers);
        }),
        shareReplay()
    );

    this.loading.showLoaderUntilCompleted(loadTrainers$)
        .subscribe();
  }
}
