import { FormlyFieldConfig } from "@ngx-formly/core";
import { FitnessTestFormFieldGroup } from "src/app/modules/fitness-test/models/fitness-test-response.model";

export enum FitnessTestFormMode {
  EDIT = 'edit',
  ADD = 'add',
};

export interface FitnessTestFormState {
  mode: FitnessTestFormMode;
  uid: number;
  nid?: number;
};

export class FitnessTestForm {
  mode: FitnessTestFormMode;
  form :FitnessTestFormFieldGroup;

  constructor(mode: FitnessTestFormMode) {
    this.mode = mode;
  }

  /*
  * Renders Formly fields based on mode
  */
  formFields() {
    switch (this.mode) {
      case FitnessTestFormMode.ADD:
      case FitnessTestFormMode.EDIT:
        return <FormlyFieldConfig[]>[
          {
            type: 'tabs',
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                templateOptions: { label: 'Cardio' },
                fieldGroup: [
                  {
                    key: 'cardio',
                    type: 'group',
                    templateOptions: {
                      addText: 'Add new entry',
                      label: 'Cardiovacular Endurance',
                      maxItems: 12
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          className: 'col-sm-4',
                          type: 'input',
                          key: 'field_rhr1',
                          templateOptions: {
                            label: 'RHR',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                        {
                          type: 'input',
                          key: 'field_rhr2',
                          className: 'col-sm-3',
                          templateOptions: {
                            label: '10 min',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                        {
                          type: 'input',
                          key: 'field_rhr3',
                          className: 'col-sm-4',
                          templateOptions: {
                            label: 'RHR',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                ],
              },
              {
                templateOptions: { label: 'Muscular Endurance' },
                fieldGroup: [
                  {
                    key: 'field_crunches',
                    type: 'group',
                    templateOptions: {
                      addText: 'Add new entry',
                      label: 'Crunches',
                      maxItems: 5
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          className: 'col-sm-6',
                          type: 'input',
                          key: 'value',
                          templateOptions: {
                            label: 'Crunches (1 min)',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                  {
                    key: 'field_push_ups',
                    type: 'group',
                    templateOptions: {
                      addText: 'Add new entry',
                      label: 'PushUp',
                      maxItems: 5
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          className: 'col-sm-6',
                          type: 'input',
                          key: 'value',
                          templateOptions: {
                            label: 'Pushup',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                ],
              },
              {
                templateOptions: { label: 'Muscular Strength' },
                fieldGroup: [
                  {
                    key: 'field_chest_press_fitness_test',
                    type: 'group',
                    templateOptions: {
                      addText: 'Add new entry',
                      label:  'Chest Press',
                      maxItems: 5
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          className: 'col-sm-6',
                          type: 'input',
                          key: 'value',
                          templateOptions: {
                            label: 'Chest Press (1 Rep. max)',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                  {
                    key: 'field_core_balancer',
                    type: 'group',
                    templateOptions: {
                      addText: 'Add new entry',
                      label:  'Core Balance',
                      maxItems: 5
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          className: 'col-sm-6',
                          type: 'input',
                          key: 'value',
                          templateOptions: {
                            label: 'Core Balance',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                  {
                    key: 'field_sit_and_rest',
                    type: 'group',
                    templateOptions: {
                      addText: 'Add new entry',
                      label:  'Sit & Crunches',
                      maxItems: 5
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          className: 'col-sm-6',
                          type: 'input',
                          key: 'value',
                          templateOptions: {
                            label: 'Sit & Rest',
                            type: 'number',
                            min: 1,
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                ],
              },
              {
                templateOptions: { label: 'Confirm' },
                fieldGroupClassName: 'row',
                fieldGroup: [
                  {
                    key: 'consent',
                    type: 'checkbox',
                    className: 'col-sm-12 mb-3',
                    templateOptions: {
                      label: 'Accept terms',
                      description: 'Analysis is provided as per my knowlege & understanding.',
                      pattern: 'true',
                      required: true,
                    },
                    validation: {
                      messages: {
                        pattern: 'Please accept the terms',
                      },
                    },
                  },
                ],
              },
            ],
          },
        ];
    }
  }
}
