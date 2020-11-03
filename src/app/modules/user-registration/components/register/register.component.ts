import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  constructor(private regfrm: FormBuilder, private registerService: HttpService, private messages: MessagesService,private Router:Router) {
  };

  ngOnInit(): void {
    this.regForm = this.regfrm.group({
      // $key: new FormControl(null),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      // utype: new FormControl(''),
      gender: new FormControl('Others'),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl(''),
      // confirm_password: new FormControl(''),

      // udob: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.regForm.value);
    this.registerService.post(`gym-user-registration?_format=json`, this.regForm.value).subscribe(arg => {
      console.log(arg)
      if (arg.errorMessage !='na') {
        this.messages.showErrors("Something went wrong");
      }
      else {
        this.messages.showErrors("Successfully Registered.Please login");
        this.Router.navigate(["/login"])
      }

    })

    // this.service.function
    //   .subscribe(arg => this.property = arg);


  }

}
