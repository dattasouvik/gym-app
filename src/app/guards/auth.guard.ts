import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';

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
    const message = `Please login to continue further`;
    if (this.authService.isAuthenticated()) {
      // If they do, return true and allow the user to load app
      return true;
    }
    // If not, they redirect them to the login page
    this.messages.showErrors(message);
    this.router.navigate(['/login']);
    return false;
  }
}