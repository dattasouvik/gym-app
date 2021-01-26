import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { UserRegistration } from 'src/app/modules/user-registration/model/user-registration.model';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private messages: MessagesService,
    private router:Router
  ) { }

  register(data:UserRegistration) {
    let params = new HttpParams();
    params = params.set('_format', `json`);
    const register$ = this.httpService.post(
      `gym-user-registration`,data, {params}
    ).pipe(
      catchError(error => {
        if(error.error.errorMessage){
          const errMsg = this.readError(error.error.errorMessage);
          this.messages.showErrors(...errMsg);
        }else{
          this.messages.showErrors("Something went wrong");
        }
        return throwError(error);
      })
    );
    this.loading.showLoaderUntilCompleted(register$)
    .subscribe(success => {
      this.messages.showOnSuccess(success.statusMessage)
      this.router.navigate(["/login"]);
    })
  }

  /* 
  * Flatten Errors if error of type object
  */
  private readError(error: {[key:string]:string} | string){
    if(typeof(error) === 'object'){
      return Object.values(error);
    }
    return error;
  }
}
