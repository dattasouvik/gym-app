import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FitnessTestFormMode } from 'src/app/modules/fitness-test/models/fitness-test-form.model';
import { FitnessTestFormFieldGroup, FitnessTestFormResponse, MonitorFitnessTestReportResponse,TraineeFitnessReportDetailsResponse,TraineeFitnessReportsResponse } from 'src/app/modules/fitness-test/models/fitness-test-response.model';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class FitnessTestService {

  private defaultFitnessForm = {
    form: {
      cardio: [
        {
          'field_rhr1': null,
          'field_rhr2': null,
          'field_rhr3': null,
        }
      ],
      field_crunches: [
        {
          "value": null
        }
      ],
      field_push_ups: [
        {
          "value": null
        }
      ],
      field_chest_press_fitness_test: [
        {
          "value": null
        }
      ],
      field_core_balancer: [
        {
          "value": null
        }
      ],
      field_sit_and_rest: [
        {
          "value": null
        }
      ],
    }
  };

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private apiHandlerService: ApiHandlerService,
    private router: Router
  ) { }


  loadDefaultFitnessTestForm():any {

    const form$ = of({
     ...this.defaultFitnessForm
    });
    return this.loading.showLoaderUntilCompleted(form$);
  }

  loadEditFitnessTestForm(userId: number, nodeId: number) {
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const fields$ = this.httpService.get<FitnessTestFormResponse>
      (`assessment-trainer-form/${userId}/${nodeId}`, { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(fields$);
  }

  saveFitnessTestForm(
    payload: FitnessTestFormResponse,
    args: {
      node: FitnessTestFormMode,
      trainee: number,
      nid?: number
    },
    redirectTo?: string
  ) {
    let filteredPayload = { ...payload };
    /* consent field is only for UI validation */
    delete filteredPayload['consent'];

    let params = new HttpParams();
    params = params.set('_format', `json`);
    const fitnessFormData = {
      ...args,
      "form": filteredPayload
    };

    const update$ = this.httpService
      .post('assessment-trainer-form-save', fitnessFormData, { params })
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

  monitorFitnessReports(userId: number, page: number = 0) {
    let params = new HttpParams();
    params = params.set('trainee', `${userId}`);
    params = params.set('page', `${page}`);
    params = params.set('_format', `json`);
    const report$ = this.httpService.get<MonitorFitnessTestReportResponse>
      ("monitor-fitness-test", { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(report$);
  }

  viewTraineeFitnessReports(page: number = 0){
    let params = new HttpParams();
    params = params.set('page', `${page}`);
    params = params.set('_format', `json`);
    const report$ = this.httpService.get<TraineeFitnessReportsResponse>
      ("fitness-reports-for-trainee", { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(report$);
  }

  viewFitnessReportDetails(nid: number){
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const details$ = this.httpService.get<TraineeFitnessReportDetailsResponse>
      (`view-fitness-test/${nid}`, { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(details$);
  }

}
