import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private messages: MessagesService
  ) { }

  canActivate() {
    return this.authService.authStatus$.pipe(
      take(1),
      map( response => {
        // If they do, return true and allow the user to load app
        const isAuth = !!response;
        if(isAuth && !this.authService.isTokenExpired()){
          return true;
        }
        // If not, they redirect them to the login page
        const message = `Please login to continue further`;
        this.messages.showErrors(message);
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
