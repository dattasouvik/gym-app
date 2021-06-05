import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { AuthService } from 'src/app/services/auth.service';
import 'src/assets/login-animation.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit,OnDestroy {

  hide = true;
  private isAlive = true;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private apiHandlerService: ApiHandlerService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    (window as any).initialize();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  onSubmit() {
    const login$ = this.authservice.login(
      {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
    )
    .pipe(takeWhile(() => this.isAlive))
    .subscribe( success => {
          this.router.navigate(['/']);
    }, error => this.apiHandlerService.onApiError(error));
  }

}
