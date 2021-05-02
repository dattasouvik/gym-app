import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from '../../shared/services/loading.service';
import { ListWeightTrackersResponse, WeightTrackerFormFieldGroup,
WeightTrackerFormResponse } from '../models/weight-tracker-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeightTrackerService {

  private defaultweightTrackerForm = {
    form: {
      field_weight_date: new Date(),
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

  loadEditForm(userId: number, nodeId: number) {
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const fields$ = this.httpService.get<WeightTrackerFormResponse>
      (`weight-chart-details/${userId}/${nodeId}`, { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error)),
        map((response) => {
          const clonedResponse = JSON.parse(JSON.stringify(response));
          const {field_weight_date} = clonedResponse.form;
          const formattedfieldWeightDate = new Date(+field_weight_date * 1000);
          clonedResponse.form.field_weight_date = formattedfieldWeightDate;
          return clonedResponse;
        })
      );
    return this.loading.showLoaderUntilCompleted(fields$);
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

  /*
  * API ressponse for Trainee view
  */
  weightTrackersListTrainerView(userId: number, page: number = 0) {
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

  /*
  * API ressponse for Trainee view
  */
  weightTrackersListTraineeView(page: number = 0) {
    let params = new HttpParams();
    params = params.set('page', `${page}`);
    params = params.set('_format', `json`);
    const report$ = this.httpService.get<ListWeightTrackersResponse>
      (`weight-chart-trainee-view`, { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(report$);
  }

}
