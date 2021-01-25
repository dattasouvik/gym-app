import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, exhaustMap, map, shareReplay, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from '../../shared/services/loading.service';
import { MessagesService } from '../../shared/services/messages.service';
import { HttpParams } from '@angular/common/http';
import { TraineeResponse } from 'src/app/modules/trainees/model/trainee-response.model';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService) { }

    getTrainees(page: number = 0){
      let params = new HttpParams();
      params = params.set('page', `${page}`);
      params = params.set('_format', `json`);
      const trainees$ = this.httpService.get<TraineeResponse>("my-trainee",  {params})
      .pipe(
        catchError(err => {
          const message = "Unable to load data.";
          this.messages.showErrors(message);
          return throwError(err);
        })
      );
      return this.loading.showLoaderUntilCompleted(trainees$);
    }

  getPrescibeForm(id:number){
    return this.httpService
    .get(`food-chart-form/${id}?_format=json`)
    .pipe(
      catchError(err => {
        const message = "Unable to load data.";
        this.messages.showErrors(message);
        return throwError(err);
      }),
      map(el => el.form)
    );
  }

  postPrescibeForm(id:number, data: {[key: string]: any }) {
    let params = new HttpParams();
    params = params.append('_format', `json`);
    const prscribeFormData = {
      "trainee": id,
      "food_chart": data
    }
    const update$ = this.httpService
    .post('update-food-chart', prscribeFormData, {params})
    .pipe(
      exhaustMap( async (_) => this.getPrescibeForm(id)),
      catchError(err => {
        this.notify("Data submission failed.", true);
        return throwError(err);
      })
    );
    this.loading.showLoaderUntilCompleted(update$)
    .subscribe(success =>
      this.notify("Data has been updated.")
    );
  }

  private notify(message:string, error = false):void {
    if(error){
      this.messages.showErrors(message);
    }else{
      this.messages.showOnSuccess(message);
    }
  }

}
