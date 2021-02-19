import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-stepper',
  templateUrl: './formly-field-stepper.component.html',
  styleUrls: ['./formly-field-stepper.component.scss']
})
export class FormlyFieldStepperComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }
 
    return field.fieldGroup.every(f => this.isValid(f));
  }

}
