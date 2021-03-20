import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-tabs',
  templateUrl: './formly-field-tabs.component.html',
  styleUrls: ['./formly-field-tabs.component.scss']
})
export class FormlyFieldTabsComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {}

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }
    return field.fieldGroup.every(f => this.isValid(f));
  }

}
