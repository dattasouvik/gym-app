import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  details: any;

  constructor(private fb: FormBuilder, private httpservice: HttpService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    // console.log(this.loginForm.value);
    this.httpservice.getLogin("http://www.drupalone.org/user-login?_format=json", this.loginForm.value)
      .subscribe(arg => {
        this.details = arg;
        console.log(arg)
        if (this.details.userId) {
          //generate token
          this.httpservice.getToken("http://www.drupalone.org/oauth/token",this.loginForm.value)
            .subscribe(val => console.log(val));

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
