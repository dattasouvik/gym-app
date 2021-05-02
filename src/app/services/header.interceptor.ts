import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
     if (!(req.body instanceof FormData)){
      req = req.clone({
        setHeaders:{
          'Content-Type': 'application/json',
        }
      });
     }
     return next.handle(req);
  }
}
