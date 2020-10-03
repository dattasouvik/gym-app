import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationMainFormComponent } from './registration-main-form/registration-main-form.component';
import { RegistrationFormRoutingModule } from './registration-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialImportsModule } from '../material-imports/material-imports.module';


@NgModule({
  declarations: [RegistrationMainFormComponent],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule,
    ReactiveFormsModule,
    MaterialImportsModule
  ]
})
export class RegistrationFormModule {
  constructor() {
    console.log('in registration module');
  }
}
