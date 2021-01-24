import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class HealthCardService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService
    ) { }

  getHealthMeasurements(id: number){
    const form$ = this.httpService.get(`figure-correction-chart-form/${id}?_format=json`);
    return this.loading.showLoaderUntilCompleted(form$)
    .pipe(
      catchError(err => {
        this.notify('"Unable to load data.',true)
        return throwError(err);
      }),
      map(el => el.form)
    );
  }

  postHealthMeasurements(id:number, data: {[key: string]: any }) {
    let params = new HttpParams();
    params = params.append('_format', `json`);
    const measurements = {
      "trainee": id,
      "health_chart": data
    }
    const update$ = this.httpService
    .post('update-health-chart', measurements, {params})
    .pipe(
      catchError(err => {
        this.notify("Data submission failed.", true);
        return throwError(err);
      })
    );
    this.loading.showLoaderUntilCompleted(update$)
    .subscribe(success =>
      this.notify("Data has been submitted.")
    );
  }

  viewHealthChartDetails(id: number, page:number = 0) {
    let params = new HttpParams();
    params = params.set('page', `${page}`);
    params = params.set('_format', `json`);
    const details$ = this.httpService.get(`health-chart-details/${id}`, {params})
    return this.loading.showLoaderUntilCompleted(details$)
    .pipe(
      catchError(err => {
        this.notify('"Unable to load data.',true)
        return throwError(err);
      })
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
