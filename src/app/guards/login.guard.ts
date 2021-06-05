import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
  CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private messages: MessagesService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {

    return this.checkIfAuthenticated();
  }

  private checkIfAuthenticated() {
    return this.authService.isLoggedIn$
      .pipe(
        take(1),
        map(loggedIn => {
          if (loggedIn) {
            this.messages.showErrors("Access forbidden");
            this.router.navigateByUrl('/');
          }
          return true;
        })
      );
  }
}
