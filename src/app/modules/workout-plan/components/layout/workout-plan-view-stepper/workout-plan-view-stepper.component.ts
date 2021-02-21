import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'workout-plan-view-stepper',
  templateUrl: './workout-plan-view-stepper.component.html',
  styleUrls: ['./workout-plan-view-stepper.component.scss']
})
export class WorkoutPlanViewStepperComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
