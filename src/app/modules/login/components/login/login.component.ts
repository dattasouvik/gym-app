import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  details: any;

  constructor(
    private fb: FormBuilder, 
    private authservice: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authservice.Login(
      { username:this.loginForm.value.username,
        password:this.loginForm.value.password
      }
    ).subscribe(success => {
      this.router.navigate(['/profile']);
    });;
  }

}
