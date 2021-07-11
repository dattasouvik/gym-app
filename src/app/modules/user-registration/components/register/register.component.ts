import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegistration } from 'src/app/modules/user-registration/model/user-registration.model';
import { Roles, GenderType } from 'src/app/models/user.model';
import { UserRegisterService } from 'src/app/modules/user-registration/services/user-register.service';
import { SharedPasswordValidators } from 'src/app/modules/shared/validators/shared-password-validators';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';

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
export class RegisterComponent implements OnInit, CanComponentDeactivate  {

  registrationForm: FormGroup;
  roles: Role[] = [
    {value: Roles.MEMBER, viewValue: 'Member'},
    {value: Roles.TRAINER, viewValue: 'Trainer'}
  ];
  private submitted = false;
  showDetails: boolean;
  constructor(
    private fb: FormBuilder,
    private userRegistration: UserRegisterService
    ) {}

  canDeactivate(): boolean {
    /* Reusable method to check for unsaved Data */
    // fix to deactivate trigger on submit
    if (this.registrationForm.valid && this.submitted){
      return true;
    }
    if (this.registrationForm.dirty) {
      return confirm('Your changes are not saved yet. Do you like to leave ?');
    }
    return true;
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
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
        SharedPasswordValidators.patternValidator(/\d/, { hasNumber: true }),
        // 3. check whether the entered password has upper case letter
        SharedPasswordValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // 4. check whether the entered password has a lower-case letter
        SharedPasswordValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // 5. any other special character rather the mentioned  have to throw erro
        SharedPasswordValidators.patternValidator(/[^a-zA-Z0-9]/,
        {
          hasSpecialCharacters: true
        }),
         // 6. Has a minimum length of 8 characters
         Validators.minLength(8),
         // 7. Has a minimum length of 8 characters
         Validators.maxLength(30)
        ])
      ],
      confirmPassword: [null, Validators.compose([Validators.required])]
    },
    {
      // check whether our password and confirm password match
      validator: SharedPasswordValidators.ComparePassword('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;
    this.userRegistration.register(this.registrationForm.value as UserRegistration);
  }
}
