import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiCheckboxComponent } from './components/multi-checkbox/multi-checkbox.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    DynamicFormComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    MultiCheckboxComponent,
    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicformModule { }
