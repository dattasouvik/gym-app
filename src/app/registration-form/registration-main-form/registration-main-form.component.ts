import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, EmailValidator, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-main-form',
  templateUrl: './registration-main-form.component.html',
  styleUrls: ['./registration-main-form.component.scss']
})
export class RegistrationMainFormComponent implements OnInit {
  regForm: FormGroup;
  constructor(private regfrm: FormBuilder) {
    this.regForm = this.regfrm.group({
      $key : new FormControl(null),
      fname: new FormControl(''),
      lname: new FormControl(''),
      uemail: new FormControl(''),
      utype: new FormControl(''),
      ugender: new FormControl(1),
      uaddress: new FormControl(''),
      uphone: new FormControl(''),
      udob: new FormControl(''),
    });
  }

  ngOnInit() {
  }

}
