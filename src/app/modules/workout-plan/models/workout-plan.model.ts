import { FormlyFieldConfig } from '@ngx-formly/core';
import { WorkoutPlanFieldGroup } from 'src/app/modules/workout-plan/models/workout-plan-response.model';

export enum  WorkoutPlanFormMode {
  VIEW = 'view',
  MODIFY = 'modify'
}

export class WorkoutPlan {
  consent ?: boolean;
  mode: WorkoutPlanFormMode;
  workout_plan: WorkoutPlanFieldGroup;

  constructor(mode: WorkoutPlanFormMode ) {
    this.mode = mode;
  }

  /*
  * Renders Formly fields based on mode
  */
  formFields() {
    switch(this.mode){
      case 'view':
        return <FormlyFieldConfig[]>[
          {
            type: 'stepperView',
            fieldGroupClassName: 'row-custom',
            fieldGroup: [
              {
                key: 'cardio',
                type: 'repeat',
                templateOptions: {
                  label: 'Cardio'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-6 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-6',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityDuration',
                      className: 'col-sm-6',
                      templateOptions: {
                        type: 'number',
                        label: 'Minutes',
                        readonly: true,
                        addonRight: {
                          icon: 'query_builder',
                        },
                      },
                    },
                  ],
                },
              },
              {
                key: 'chest',
                type: 'repeat',
                templateOptions: {
                  label: 'Chest'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'back',
                type: 'repeat',
                templateOptions: {
                  label: 'Back'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'triceps',
                type: 'repeat',
                templateOptions: {
                  label: 'Triceps'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'fore_arms',
                type: 'repeat',
                templateOptions: {
                  label: 'Fore-Arms/Calf'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'abs',
                type: 'repeat',
                templateOptions: {
                  label: 'Abs'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'side',
                type: 'repeat',
                templateOptions: {
                  label: 'Side'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'thigh',
                type: 'repeat',
                templateOptions: {
                  label: 'Thigh'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'biceps',
                type: 'repeat',
                templateOptions: {
                  label: 'Biceps'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
              {
                key: 'shoulder',
                type: 'repeat',
                templateOptions: {
                  label: 'Shoulder'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        readonly: true,
                      },
                    },
                  ],
                },
              },
            ],
          }
        ];
      case 'modify':
        return <FormlyFieldConfig[]>[
          {
            type: 'stepper',
            fieldGroupClassName: 'row-custom',
            fieldGroup: [
              {
                key: 'cardio',
                type: 'repeat',
                templateOptions: {
                  label: 'Cardio'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-6 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-6',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityDuration',
                      className: 'col-sm-6',
                      templateOptions: {
                        type: 'number',
                        label: 'Minutes',
                        min: 1,
                        addonRight: {
                          icon: 'query_builder',
                        },
                      },
                    },
                  ],
                },
              },
              {
                key: 'chest',
                type: 'repeat',
                templateOptions: {
                  label: 'Chest'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'back',
                type: 'repeat',
                templateOptions: {
                  label: 'Back'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'triceps',
                type: 'repeat',
                templateOptions: {
                  label: 'Triceps'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'fore_arms',
                type: 'repeat',
                templateOptions: {
                  label: 'Fore-Arms/Calf'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'abs',
                type: 'repeat',
                templateOptions: {
                  label: 'Abs'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'side',
                type: 'repeat',
                templateOptions: {
                  label: 'Side'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'thigh',
                type: 'repeat',
                templateOptions: {
                  label: 'Thigh'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'biceps',
                type: 'repeat',
                templateOptions: {
                  label: 'Biceps'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
              },
              {
                key: 'shoulder',
                type: 'repeat',
                templateOptions: {
                  label: 'Shoulder'
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-sm-4 d-none',
                      type: 'input',
                      key: 'FieldIdentifier',
                      templateOptions: {
                        label: 'Field',
                        required: true,
                        readonly: true,
                      },
                      hide: true,
                    },
                    {
                      className: 'col-sm-4',
                      type: 'input',
                      key: 'ActivityIdentifier',
                      templateOptions: {
                        label: 'Activity',
                        required: true,
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivitySets',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Sets',
                        min: 1,
                      },
                    },
                    {
                      type: 'input',
                      key: 'ActivityReps',
                      className: 'col-sm-4',
                      templateOptions: {
                        type: 'number',
                        label: 'Reps',
                        min: 1,
                      },
                    },
                  ],
                },
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
                      description: 'Workout plan is provided as per my knowlege & understanding.',
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
          }
        ];
    }
  }
}
