import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ButtonComponent } from 'src/app/modules/dynamicform/components/button/button.component';
import { CheckboxComponent } from 'src/app/modules/dynamicform/components/checkbox/checkbox.component';
import { DateComponent } from 'src/app/modules/dynamicform/components/date/date.component';
import { InputComponent } from 'src/app/modules/dynamicform/components/input/input.component';
import { MultiCheckboxComponent } from 'src/app/modules/dynamicform/components/multi-checkbox/multi-checkbox.component';
import { RadiobuttonComponent } from 'src/app/modules/dynamicform/components/radiobutton/radiobutton.component';
import { SelectComponent } from 'src/app/modules/dynamicform/components/select/select.component';
import { FieldConfig,DynamicFormInputs } from 'src/app/modules/dynamicform/field.interface';

const componentMapper = new Map<string, any>([
  [DynamicFormInputs.INPUT, InputComponent],
  [DynamicFormInputs.RADIO, RadiobuttonComponent],
  [DynamicFormInputs.SELECT, SelectComponent],
  [DynamicFormInputs.DATE, DateComponent],
  [DynamicFormInputs.CHECKBOX, CheckboxComponent],
  [DynamicFormInputs.MULTI_CHECKBOX, MultiCheckboxComponent],
  [DynamicFormInputs.BUTTON, ButtonComponent],
]);


@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }
  ngOnInit(): void {
    const component = componentMapper.get(this.field.type)
    const factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
