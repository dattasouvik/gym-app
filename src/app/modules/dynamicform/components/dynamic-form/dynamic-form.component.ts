import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormInputs, FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { minimumCheckboxCheckedValidator }
 from 'src/app/modules/dynamicform/validators/dynamicform.validators';
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  
  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      switch(field.type) {
        case DynamicFormInputs.BUTTON:
          return;
        case DynamicFormInputs.MULTI_CHECKBOX:
          const { type , minChecked } = field.collections;
          let minCheckBoxReqd = 1;
          if( type === field.type && minChecked){
            minCheckBoxReqd = minChecked;
          }
          group.addControl(
            field.name,
            this.buildOptionsFormGroup(field.options , minCheckBoxReqd),
          )
          break;
        default:
          const control = this.fb.control(
            field.value,
            this.bindValidations(field.validations || [])
          );
          group.addControl(field.name, control);
      }
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  buildOptionsFormGroup(options: any, minCheckBox = 1): FormGroup {
    let group = this.fb.group({});
    group.setValidators(minimumCheckboxCheckedValidator(minCheckBox))
    options.forEach(option => {
      let isSelected = option.selected || false;
      group.addControl(option.name, this.fb.control(isSelected));
    })
    return group;
  }
}
