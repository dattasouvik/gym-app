import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';

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
    if (this.authService.isAuthenticated()) {
      //if authenticated redirect user to profile page if navigated to login
      const message = `You are not allowed to visit this page`;
      this.messages.showErrors(message);
      this.router.navigate(['/profile']);
      return false;
    }
    return true;
  }
}