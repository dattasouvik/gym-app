import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class FoodChartService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private apiHandlerService: ApiHandlerService
  ) { }

  viewFoodChart(){
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const foodCharts$ = this.httpService.get('food-chart', {params})
    .pipe(
      catchError(error => this.apiHandlerService.onApiError(error))
    );
    return this.loading.showLoaderUntilCompleted(foodCharts$);
  }

  loadFoodChartForm(userId: number) {
    let params = new HttpParams();
    params = params.set('_format', `json`);

    const foodChartForm$ = this.httpService
    .get(`food-chart-form/${userId}`, {params})
    .pipe(
      catchError(error => this.apiHandlerService.onApiError(error)),
      map(el => el.form)
    );
    return this.loading.showLoaderUntilCompleted(foodChartForm$);
  }

  saveFoodChart(userId:number, data: {[key: string]: any }) {
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const prescribedForm = {
      "trainee": userId,
      "food_chart": data
    };
    const update$ = this.httpService
    .post('update-food-chart', prescribedForm, {params})
    .pipe(
      catchError(error => this.apiHandlerService.onApiError(error)),
    );
    this.loading.showLoaderUntilCompleted(update$)
    .subscribe(success =>
      this.apiHandlerService.onApiSuccessMessage(success)
    );
  }

}
