import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { WorkoutPlanFieldGroup, WorkoutPlanResponse } from 'src/app/modules/workout-plan/models/workout-plan-response.model';
import { WorkoutPlan, WorkoutPlanFormMode } from 'src/app/modules/workout-plan/models/workout-plan.model';
import { WorkoutPlanService } from 'src/app/modules/workout-plan/services/workout-plan.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'wp-view-workout-plan',
  templateUrl: './view-workout-plan.component.html',
  styleUrls: ['./view-workout-plan.component.scss']
})
export class ViewWorkoutPlanComponent implements OnInit {

  @Input()
  userId: number;
  loadForm = false;

  workoutForm: FormGroup;
  createWorkoutPlanModel: WorkoutPlan;
  workoutFields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  constructor(
    private workoutPlanService : WorkoutPlanService
  ) { }

  ngOnInit(): void {
    this.buildWorkoutPlan();
  }

  private buildWorkoutPlan(){
    this.workoutForm = new FormGroup({});
    this.createWorkoutPlanModel = new WorkoutPlan(WorkoutPlanFormMode.VIEW);
    this.workoutFields = this.createWorkoutPlanModel.formFields();

    this.workoutPlanService.fetchWorkoutPlan(this.userId)
    .subscribe( response => {
      const {load, workout_plan} = response;
      this.loadForm = !!load;
      this.createWorkoutPlanModel = workout_plan;
    });
  }

}
