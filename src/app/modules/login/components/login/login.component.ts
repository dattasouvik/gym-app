import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { AuthService } from 'src/app/services/auth.service';
import 'src/assets/login-animation.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {

  hide = true;

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

  onSubmit() {
    const login$ = this.authservice.login(
      {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
    )
    .subscribe( success => {
          this.router.navigate(['/profile']);
    },error => this.apiHandlerService.onApiError(error));
  }

}
