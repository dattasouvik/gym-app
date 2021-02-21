import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'wp-view-workout-plan',
  templateUrl: './view-workout-plan.component.html',
  styleUrls: ['./view-workout-plan.component.scss']
})
export class ViewWorkoutPlanComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  constructor() { }
  ngOnInit(): void {
    this.fetch((data) => this.model = data);
  }

   fields: FormlyFieldConfig[] = [
    {
      type: 'workoutPlanView',
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
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
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
                  disabled: true,
                },
              },
              {
                type: 'input',
                key: 'ActivityReps',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'number',
                  label: 'Reps:',
                  disabled: true,
                },
              },
            ],
          },
        },
        {
          templateOptions: { label: 'Feedback' },
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'feedback',
              type: 'textarea',
              className: 'col-sm-12',
              templateOptions: {
                label: 'Feedback',
                rows: 5,
                disabled: true,
              },
            },
          ],
        },
      ],
    }];

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
        },
        {
          ActivityIdentifier: 'Butter fly',
          ActivitySets: 2,
          ActivityReps: 5,
        },
      ],
      feedback: "Enjoy"
    });
  }
}
