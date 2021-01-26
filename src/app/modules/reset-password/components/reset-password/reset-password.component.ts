import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPassword } from 'src/app/modules/reset-password/models/reset-password.model';
import { ResetPasswordService } from 'src/app/modules/reset-password/services/reset-password.service';
import { SharedPasswordValidators } from 'src/app/modules/shared/validators/shared-password-validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  defaultMode = 'phone';
  numberPattern = '^[0-9]+$';
  availableModes:{[key:string]:string}[] = [
    {
      value: 'email',
      display: 'Email'
    },
    {
      value: 'phone',
      display: 'Phone'
    }
  ]
  constructor(
    private fb: FormBuilder,
    private resetPassword: ResetPasswordService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.modeValidators();
  }


  private buildForm():void{
    this.form =  this.fb.group({
      mode: [this.defaultMode],
      email: ['', Validators.email],
      phone: ['', Validators.compose(
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(this.numberPattern)
        ]
      )],
      code: ['', Validators.compose(
        [
          Validators.required,
          Validators.maxLength(30)
        ]
      )],
      password: [ null , Validators.compose([
        Validators.required,
        SharedPasswordValidators.patternValidator(/\d/, { hasNumber: true }),
        SharedPasswordValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        SharedPasswordValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        SharedPasswordValidators.patternValidator(/[^\w\*]/,
        {
          hasSpecialCharacters: true
        }),
         Validators.minLength(8),
         Validators.maxLength(30)
        ])
      ],
      confirmPassword: [null, Validators.compose([Validators.required])]
    },
    {
      validator: SharedPasswordValidators.ComparePassword("password", "confirmPassword")
    });
  }

  private get _email() {
    return this.form.get('email');
  }

  private get _phone() {
    return this.form.get('phone');
  }

  private get _value(){
    return this.form.value;
  }

  private modeValidators(){
    this.form.get('mode').valueChanges
    .subscribe(selected => {
      if(selected === 'phone'){
        this._phone.setValidators(
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
        this._phone.clearValidators();
        this._phone.reset();
      }
      this._email.updateValueAndValidity();
      this._phone.updateValueAndValidity();
    })
  }

  showField(value: string):boolean {
    return this.form.get('mode').value === value;
  }

  onSubmit(){
    const { mode, email, phone,code,password } = this._value;
    const value = mode === 'phone' ? phone : email;
    const data: ResetPassword = {
      resetType : mode,
      pass: password,
      value,
      code
    };
    this.resetPassword.reset(data);
  }
}
