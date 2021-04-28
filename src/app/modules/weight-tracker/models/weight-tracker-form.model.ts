import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeightTrackerFormFieldGroup } from './weight-tracker-response.model';

export enum WeightTrackerFormMode {
  EDIT = 'edit',
  ADD = 'add',
}

export interface WeightTrackerFormState {
  mode: WeightTrackerFormMode;
  uid: number;
  nid?: number;
}

export class WeightTrackerForm {
  mode: WeightTrackerFormMode;
  form: WeightTrackerFormFieldGroup;

  constructor(mode: WeightTrackerFormMode) {
    this.mode = mode;
  }

  /*
  * Renders Formly fields based on mode
  */
  formFields() {
    switch (this.mode) {
      case WeightTrackerFormMode.ADD:
        return [{
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-lg-3',
              key: 'field_weight_date',
              type: 'datepicker',
              templateOptions: {
                label: 'Date',
                placeholder: 'Placeholder',
                required: true,
                disabled: true
              },
            },
            {
              className: 'col-lg-3',
              type: 'input',
              key: 'field_before_weight',
              templateOptions: {
                label: 'Before Weight',
                type: 'number',
                min: 1,
                required: true,
              },
            },
            {
              className: 'col-lg-3',
              type: 'input',
              key: 'field_after_weight',
              templateOptions: {
                label: 'After Weight',
                type: 'number',
                min: 1
              },
            },
          ]
        }] as FormlyFieldConfig[];
      case WeightTrackerFormMode.EDIT:
        return [{
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-lg-3',
              key: 'field_weight_date',
              type: 'datepicker',
              templateOptions: {
                label: 'Date',
                placeholder: 'Placeholder',
                required: true,
                disabled: true
              },
            },
            {
              className: 'col-lg-3',
              type: 'input',
              key: 'field_before_weight',
              templateOptions: {
                label: 'Before Weight',
                type: 'number',
                min: 1,
                required: true,
              },
            },
            {
              className: 'col-lg-3',
              type: 'input',
              key: 'field_after_weight',
              templateOptions: {
                label: 'After Weight',
                type: 'number',
                min: 1,
              },
            },
          ]
        }] as FormlyFieldConfig[];
    }
  }

}
