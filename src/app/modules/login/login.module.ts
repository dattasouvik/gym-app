import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CoreModule,
    LoginRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
