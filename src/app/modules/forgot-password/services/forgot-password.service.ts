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
export class ForgotPasswordService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService
    ) { }

    forgotPasswordRequest(value: string| number){
      let params = new HttpParams();
      params = params.set('_format', `json`);
      const data = {
        "value": value,
        "forgotType": "phone/email"
      }
      const request$ = this.httpService.post(`user-forgot-password`,data ,{params})
      .pipe(
        catchError(error => {
            error.error ? this.messages.showErrors(error.error.errorMessage) : 
            this.messages.showErrors("Something went wrong.");
            return throwError(error);
        })
      );
      this.loading.showLoaderUntilCompleted(request$)
      .subscribe(success =>
        console.log("Success",success)
      );
    }
}
