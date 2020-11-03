import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialDesignModule
  ]
})
export class UserRegistrationModule { }
