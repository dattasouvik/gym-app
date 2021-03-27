import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private DEFAULT_ERROR_MSG =  `Something went wrong.`;
  private DEFAULT_SUCCESS_MSG =  `Data is successfully updated.`;

  constructor(
    private messages: MessagesService
  ) { }

  onApiError(error, message = this.DEFAULT_ERROR_MSG ):Observable<any> {
    if(error.error && error.error.errorMessage){
      this.messages.showErrors(error.error.errorMessage);
    }
    else if(error.error && error.error.message){
      this.messages.showErrors(error.error.message);
    }
    else {
      this.messages.showErrors(message);
    }
    return throwError(error);
  }

  onApiSuccessMessage(success: {statusMessage: string },  message = this.DEFAULT_SUCCESS_MSG) {
    if(success.statusMessage){
      this.messages.showOnSuccess(success.statusMessage);
    } else {
      this.messages.showOnSuccess(message);
    }
  }
}
