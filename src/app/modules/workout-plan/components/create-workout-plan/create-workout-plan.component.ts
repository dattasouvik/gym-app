import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Input } from '@angular/core';
import { WorkoutPlanService } from 'src/app/modules/workout-plan/services/workout-plan.service';
import { WorkoutPlan, WorkoutPlanFormMode } from 'src/app/modules/workout-plan/models/workout-plan.model';
import { WorkoutPlanFieldGroup, WorkoutPlanResponse } from 'src/app/modules/workout-plan/models/workout-plan-response.model';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'wp-create-workout-plan',
  templateUrl: './create-workout-plan.component.html',
  styleUrls: ['./create-workout-plan.component.scss']
})
export class CreateWorkoutPlanComponent implements OnInit {

  @Input()
  userId: number;

  workoutForm: FormGroup;
  createWorkoutPlanModel: WorkoutPlan;
  workoutFields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};

  constructor(
    private workoutPlanService: WorkoutPlanService
  ) { }

  ngOnInit(): void {
    this.buildWorkoutPlan();
  }

  private buildWorkoutPlan(){
    this.workoutForm = new FormGroup({});
    this.createWorkoutPlanModel = new WorkoutPlan(WorkoutPlanFormMode.MODIFY);
    this.workoutFields = this.createWorkoutPlanModel.formFields();

    this.workoutPlanService.fetchWorkoutPlan(this.userId)
    .subscribe(response => {
      const { workout_plan} = response;
      this.createWorkoutPlanModel = workout_plan;
    });
  }


  submit(response: WorkoutPlan) {
    let workout_plan = { ...response};
    /* consent field is only for UI validation */
    delete workout_plan.consent;
    return this.workoutPlanService.saveWorkoutPlan(this.userId, workout_plan);
  }

}
