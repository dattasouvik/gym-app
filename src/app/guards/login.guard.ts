import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private messages: MessagesService
  ) { }

  canActivate() {
    return this.authService.authStatus$.pipe(
      take(1),
      map( response => {
        //if authenticated redirect user to profile page if navigated to login
        const isAuth = !!response;
        if(isAuth && !this.authService.isTokenExpired()){
          const message = `You are not allowed to visit this page`;
          this.messages.showErrors(message);
          //TBM redirect to dashboard
          this.router.navigate(['/profile']);
          return false;
        }
        return true;
      })
    );
  }
}
