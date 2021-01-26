import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent }
from 'src/app/modules/reset-password/components/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    MatPasswordStrengthModule
  ]
})
export class ResetPasswordModule { }
