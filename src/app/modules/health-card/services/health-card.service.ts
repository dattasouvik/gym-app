import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { HttpService } from 'src/app/services/http.service';
import { ApiHandlerService } from 'src/app/services/api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HealthCardService {
  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private apiHandlerService: ApiHandlerService
  ) { }

  buildMeasurementsForm(id: number) {
    const form$ = this.httpService.get(`figure-correction-chart-form/${id}?_format=json`);
    return this.loading.showLoaderUntilCompleted(form$)
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error)),
        map(el => el.form)
      );
  }

  addMeasurements(id: number, data: { [key: string]: any }) {
    let params = new HttpParams();
    params = params.append('_format', `json`);
    const measurements = {
      "trainee": id,
      "health_chart": data
    }
    const update$ = this.httpService
      .post('update-health-chart', measurements, { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(update$);
  }

  viewHealthChartDetails(id: number, page: number = 0) {
    let params = new HttpParams();
    params = params.set('page', `${page}`);
    params = params.set('_format', `json`);
    const details$ = this.httpService.get(`health-chart-details/${id}`, { params })
    return this.loading.showLoaderUntilCompleted(details$)
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
  }

}
