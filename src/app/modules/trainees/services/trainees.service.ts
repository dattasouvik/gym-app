import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, exhaustMap, map, shareReplay, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from '../../shared/services/loading.service';
import { MessagesService } from '../../shared/services/messages.service';
import { Trainees } from '../model/trainees.model';
import { HttpParams } from '@angular/common/http';

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
