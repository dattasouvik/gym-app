import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResetPassword } from 'src/app/modules/reset-password/models/reset-password.model';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService,
    private router:Router
  ) { }

  reset(data: ResetPassword) {
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const reset$ = this.httpService.post(
      `user-change-password`,data, {params}
    ).pipe(
      catchError(error => {
          error.error.errorMessage ? this.messages.showErrors(error.error.errorMessage) : this.messages.showErrors("Something went wrong");
          return throwError(error);
      })
    );
    this.loading.showLoaderUntilCompleted(reset$)
    .subscribe(success => {
      this.messages.showOnSuccess(success.statusMessage)
      this.router.navigate(["/login"]);
    })
  }
}
