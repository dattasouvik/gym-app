import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatPasswordStrengthModule,
    MaterialDesignModule
  ]
})
export class UserRegistrationModule { }
