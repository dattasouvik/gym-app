import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    // console.log(this.loginForm.value);
    this.authservice.getLogin("http://www.drupalone.org/user-login?_format=json", this.loginForm.value)
      .subscribe(arg => {
        this.details = arg;
        console.log(arg)
        if (this.details.userId) {
          //generate token
          this.authservice.getToken("http://www.drupalone.org/oauth/token", this.loginForm.value)
            .subscribe(val => {
              console.log(val);
              localStorage.setItem('access_token', val.access_token);
              localStorage.setItem('refresh_token', val.refresh_token);
            });

          this.router.navigate(['/']);
        }
        else {
          console.log(2);
        }


      },
        err => alert("error")
      );

  }

}
