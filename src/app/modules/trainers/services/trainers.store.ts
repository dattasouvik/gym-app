import { HttpParams } from '@angular/common/http';
import { Injectable, OnInit} from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { Trainer } from 'src/app/modules/trainers/model/trainer.model';
import { HttpService } from 'src/app/services/http.service';

export interface TrainerResponse{
  rows:Trainer[];
  pager: Object;
}


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
            const message = "Unable to load data.";
            this.messages.showErrors(message);
            console.log(message, err);
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
