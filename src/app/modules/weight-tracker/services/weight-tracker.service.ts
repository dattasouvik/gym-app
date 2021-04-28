import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from '../../shared/services/loading.service';
import { WeightTrackerFormMode } from '../models/weight-tracker-form.model';
import { ListWeightTrackersResponse, WeightTrackerFormFieldGroup, WeightTrackerFormResponse } from '../models/weight-tracker-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeightTrackerService {

  private defaultweightTrackerForm = {
    form: {
      field_date: new Date(),
      field_before_weight: null,
      field_after_weight: null
    }
  };

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private apiHandlerService: ApiHandlerService,
    private router: Router
  ) { }

  loadDefaultForm(): any {
    const form$ = of({
      ...this.defaultweightTrackerForm
    });
    return this.loading.showLoaderUntilCompleted(form$);
  }

  saveWeightTrackerForm(
    payload: WeightTrackerFormFieldGroup,
    args: {
      trainee: number
    },
    redirectTo?: string
  ) {
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const weightTrackerFormData = {
      ...payload,
      ...args
    };
    const update$ = this.httpService
      .post('update-weight-chart', weightTrackerFormData, { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    this.loading.showLoaderUntilCompleted(update$)
      .subscribe(success => {
        this.apiHandlerService.onApiSuccessMessage(success);
        if (redirectTo) {
          this.router.navigateByUrl(`${redirectTo}`, { skipLocationChange: true });
        }
      });
  }

  viewWeightTrackersList(userId: number, page: number = 0 ){
    let params = new HttpParams();
    params = params.set('page', `${page}`);
    params = params.set('_format', `json`);
    const report$ = this.httpService.get<ListWeightTrackersResponse>
      (`weight-chart-trainer-view/${userId}`, { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(report$);
  }


}
