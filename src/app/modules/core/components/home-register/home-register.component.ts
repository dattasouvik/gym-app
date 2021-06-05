import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'core-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.scss']
})
export class HomeRegisterComponent implements OnInit {

  links = [
    {
      title: 'Register',
      icon: 'add',
      path: 'register'
    },
    {
      title: 'Login',
      icon: 'login',
      path: 'login'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(path: string){
    if (path){
      this.router.navigate([path]);
    }
  }

}
