import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/modules/dynamicform/components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { mapDynamicForm } from 'src/app/modules/trainees/utils/form-utility';

@Component({
  selector: 'app-prescribe',
  templateUrl: './prescribe.component.html',
  styleUrls: ['./prescribe.component.scss']
})
export class PrescribeComponent implements OnInit {

  regConfig: FieldConfig[] = [

    {
      type: "multicheckbox",
      label: "Multiple options",
      name: "skills",
      value: true,
      options: [
        { name: "1", selected: true, value: "Orange" },
        { name: "2", selected: true, value: "Mango" },
        { name: "20", selected: true, value: "Mang1o" },
        { name: "25", selected: true, value: "Mangso" },
      ],
      validations: [
        {
          name: "requireCheckboxToBeChecked",
          message: "Minimum 2 check is required",
          validator: "Custom"
        }
      ],
      collections: {
        type: "multicheckbox",
        minChecked: 2
      }
    },
    {
      type: "multicheckbox",
      label: "Multiple Carrer",
      name: "food",
      value: true,
      options: [
        { name: "1", selected: true, value: "Orange" },
        { name: "2", selected: true, value: "Mango" },
      ],
      validations: [
        {
          name: "requireCheckboxToBeChecked",
          message: "Minimum 1 check is required",
          validator: "Custom"
        }
      ],
      collections: {
        type: "multicheckbox",
        minChecked: 1
      }
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor() { }

  ngOnInit(): void {
  }

  submit(value: any) {
    let output = mapDynamicForm(value);
    console.log(output)
  }

}
