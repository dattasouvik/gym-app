import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from 'src/app/modules/forgot-password/services/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  defaultMode = 'mobile';
  numberPattern = '^[0-9]+$';

  constructor(
    private fb: FormBuilder,
    private forgotPassword: ForgotPasswordService
  ) { }


  ngOnInit(): void {
    this.buildForm();
    this.modeValidators();
  }

  private buildForm():void{
    this.form =  this.fb.group({
      mode: [this.defaultMode],
      email: ['', Validators.email],
      mobile: ['', Validators.compose(
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(this.numberPattern)
        ]
      )],
    });
  }

  private get _email() {
    return this.form.get('email');
  }

  private get _mobile() {
    return this.form.get('mobile');
  }

  private get _value(){
    return this.form.value;
  }

  private modeValidators(){
    this.form.get('mode').valueChanges
    .subscribe(selected => {
      if(selected === 'mobile'){
        this._mobile.setValidators(
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(this.numberPattern)
          ]
        );
        this._email.clearValidators();
        this._email.reset();
      } else{
        this._email.setValidators([Validators.required,Validators.email]);
        this._mobile.clearValidators();
        this._mobile.reset();
      }
      this._email.updateValueAndValidity();
      this._mobile.updateValueAndValidity();
    })
  }



  showField(value: string):boolean {
    return this.form.get('mode').value === value;
  }

  onSubmit(){
    const { mode, email, mobile } = this._value;
    const output = mode === 'mobile' ? mobile : email;
    this.forgotPassword.forgotPasswordRequest(output);
  }
}
