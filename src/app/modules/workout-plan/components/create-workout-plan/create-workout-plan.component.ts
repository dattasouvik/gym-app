import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  selector: 'wp-create-workout-plan',
  templateUrl: './create-workout-plan.component.html',
  styleUrls: ['./create-workout-plan.component.scss']
})
export class CreateWorkoutPlanComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  constructor() { }
  ngOnInit(): void {  
    this.fetch((data) => this.model = data);
  }

   fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      fieldGroupClassName: 'row-custom',
      fieldGroup: [
        {
          key: 'cardiac',
          type: 'repeat',
          templateOptions: {
            label: 'Cardio'
          },
          fieldArray: {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-sm-6',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  min: 1,
                },
              },
            ],
          },
        },
        {
          key: 'calf',
          type: 'repeat',
          templateOptions: {
            label: 'Fore-Arms/Calf'
          },
          fieldArray: {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
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
                className: 'col-sm-4',
                type: 'input',
                key: 'ActivityIdentifier',
                templateOptions: {
                  label: 'Activity',
                  required: true,
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivitySets',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Sets:',
                  min: 1,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  min: 1,
                },
              },
            ],
          },
        },
        {
          templateOptions: { label: 'Done' },
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
            {
              key: 'feedback',
              type: 'textarea',
              className: 'col-sm-12',
              templateOptions: {
                label: 'Feedback',
                rows: 5,
              },
            },
          ],
        },
      ],
    }];
  submit() {
    console.log(this.model)
    // alert(JSON.stringify(this.model));
  }
  fetch(cb) {
    cb({
      cardiac: [
        {
          ActivityIdentifier: 'Tread Mill',
          ActivityDuration: 50

        }
      ],
      chest: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: '',
          ActivityReps: '',
        },
        {
          ActivityIdentifier: 'Chest press',
          ActivitySets: '',
          ActivityReps: '',
        },
        {
          ActivityIdentifier: 'Incline press',
          ActivitySets: '',
          ActivityReps: 3,
        },
      ],
      back: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      triceps: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      calf: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      abs: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      side: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      thigh: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      biceps: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      shoulder: [
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        }
      ],
      consent: true,
      feedback: "Enjoy"
    });
  }
}
