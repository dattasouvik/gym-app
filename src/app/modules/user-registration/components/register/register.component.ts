import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { UserRegistration }
from 'src/app/modules/user-registration/model/user-registration.model';
import { UserRegistrationValidators }
from 'src/app/modules/user-registration/validators/user-registration-validators';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Roles, GenderType } from 'src/app/models/user.model';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  roles: Role[] = [
    {value: Roles.MEMBER, viewValue: 'Member'},
    {value: Roles.TRAINER, viewValue: 'Trainer'}
  ];

  showDetails: boolean;
  constructor(
    private regfrm: FormBuilder,
    private registerService: HttpService,
    private messages: MessagesService,
    private loading: LoadingService,
    private router:Router
    ) {};

  ngOnInit(): void {
    this.regForm = this.regfrm.group({
      first_name: [ null, Validators.required],
      last_name: [null , Validators.required],
      role: [this.roles[0].value, Validators.required],
      about_me: [ '' ],
      email: [ null, [Validators.required, Validators.email]],
      gender: [GenderType.MALE],
      address: [ null , Validators.required],
      phone: [ null , [
        Validators.required, Validators.pattern('[6-9]\\d{9}')
        ]
      ],
      password: [ null , Validators.compose([
        // 1. Password Field is Required
        Validators.required,
        // 2. check whether the entered password has a number
        UserRegistrationValidators.patternValidator(/\d/, { hasNumber: true }),
        // 3. check whether the entered password has upper case letter
        UserRegistrationValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // 4. check whether the entered password has a lower-case letter
        UserRegistrationValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // 5. any other special character rather the mentioned  have to throw erro
        UserRegistrationValidators.patternValidator(/[^\w\*]/,
        {
          hasSpecialCharacters: true
        }),
         // 6. Has a minimum length of 8 characters
         Validators.minLength(8)
        ])
      ],
      confirmPassword: [null, Validators.compose([Validators.required])]
    },
    {
      // check whether our password and confirm password match
      validator: UserRegistrationValidators.passwordMatchValidator
    });
  }

  onSubmit() {
    const userRegistrationData:UserRegistration = {
      first_name: this.regForm.value.first_name,
      last_name: this.regForm.value.last_name,
      role: this.regForm.value.role,
      email: this.regForm.value.email,
      gender: this.regForm.value.gender,
      address: this.regForm.value.address,
      phone: this.regForm.value.phone,
      password: this.regForm.value.password,
      about_me:this.regForm.value.about_me
    };

    let params = new HttpParams();
    params = params.append('_format', `json`);
    const submit$ = this.registerService.post(
      `gym-user-registration`, userRegistrationData, {params}
    )
    .pipe(
      catchError(err => {
        this.notify("Registration failed.Please try again later.", true);
        return throwError(err);
      })
    );
    this.loading.showLoaderUntilCompleted(submit$)
      .subscribe(arg => {
      console.log(arg)
      if (arg.errorMessage !='na') {
        this.notify("Registration failed.Please try again later.", true);
      }
      else {
        this.notify("Successfully registered.Please login");
        this.router.navigate(["/login"]);
      }
    });
  }

  private notify(message:string, error = false):void {
    if(error){
      this.messages.showErrors(message);
    }else{
      this.messages.showOnSuccess(message);
    }
  }

}
