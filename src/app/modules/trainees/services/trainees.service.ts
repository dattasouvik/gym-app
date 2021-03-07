import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from '../../shared/services/loading.service';
import { HttpParams } from '@angular/common/http';
import { TraineeResponse } from 'src/app/modules/trainees/model/trainee-response.model';
import { ApiHandlerService } from 'src/app/services/api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private apiHandlerService: ApiHandlerService
    ) { }

    getTrainees(page: number = 0){
      let params = new HttpParams();
      params = params.set('page', `${page}`);
      params = params.set('_format', `json`);
      const trainees$ = this.httpService.get<TraineeResponse>("my-trainee",  {params})
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
      return this.loading.showLoaderUntilCompleted(trainees$);
    }

}
