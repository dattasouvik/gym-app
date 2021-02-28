import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { WorkoutPlanResponse } from 'src/app/modules/workout-plan/models/workout-plan-response.model';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlanService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private apiHandlerService: ApiHandlerService
  ) { }

  fetchWorkoutPlan(userId: number) {
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const workoutPlan$ = this.httpService.get<WorkoutPlanResponse>(`workout-plan/${userId}`, {params})
    .pipe(
      catchError(error => this.apiHandlerService.onApiError(error))
    );
    return this.loading.showLoaderUntilCompleted(workoutPlan$);
  }

  saveWorkoutPlan(userId: number, response : WorkoutPlanResponse){
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const workout_routine = {
      "uid": userId,
      "workout_plan" : response.workout_plan
    };
    const update$ = this.httpService
    .post('workout-plan-save', workout_routine, {params})
    .pipe(
			catchError(error => this.apiHandlerService.onApiError(error))
    );
    this.loading.showLoaderUntilCompleted(update$)
    .subscribe(success =>
      this.apiHandlerService.onApiSuccessMessage(success)
    );
  }

}
