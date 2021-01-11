import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class FoodChartService {

  constructor(
    private httpService: HttpService,
    private messages: MessagesService,
    private loading: LoadingService
  ) { }

  viewFoodChart(){
    let params = new HttpParams();
    params = params.append('_format', `json`);
    const foodCharts$ = this.httpService.get('food-chart', {params})
    .pipe(
        catchError(err => {
          this.messages.showErrors("Unable to show food chart.");
          return throwError(err);
      })
    );
    return this.loading.showLoaderUntilCompleted(foodCharts$);
  }
}
