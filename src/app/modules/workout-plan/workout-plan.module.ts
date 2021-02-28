import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkoutPlanComponent } from
'./components/create-workout-plan/create-workout-plan.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialDesignModule } from
'src/app/modules/material-design/material-design.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { addonsExtension } from 'src/app/modules/workout-plan/components/layout/addons.extension';
import { FormlyFieldStepperComponent } from './components/layout/formly-field-stepper/formly-field-stepper.component';
import { FormlyRepeatSectionComponent } from './components/layout/formly-repeat-section/formly-repeat-section.component';
import { FormlyWrapperAddonsComponent } from './components/layout/formly-wrapper-addons/formly-wrapper-addons.component';
import { ViewWorkoutPlanComponent } from './components/view-workout-plan/view-workout-plan.component';
import { WorkoutPlanViewStepperComponent } from './components/layout/workout-plan-view-stepper/workout-plan-view-stepper.component';

@NgModule({
  declarations: [
    CreateWorkoutPlanComponent,
    FormlyFieldStepperComponent,
    WorkoutPlanViewStepperComponent,
    FormlyRepeatSectionComponent,
    FormlyWrapperAddonsComponent,
    ViewWorkoutPlanComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    FormlyMaterialModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'stepper', component: FormlyFieldStepperComponent, wrappers: [] },
        { name: 'stepperView', component: WorkoutPlanViewStepperComponent, wrappers: [] },
        { name: 'repeat', component: FormlyRepeatSectionComponent },
      ],
      wrappers: [
        { name: 'addons', component: FormlyWrapperAddonsComponent },
      ],
      extensions: [
        { name: 'addons', extension: { onPopulate: addonsExtension } },
      ],
    })
  ],
  exports:[
    CreateWorkoutPlanComponent,
    ViewWorkoutPlanComponent
  ]
})
export class WorkoutPlanModule { }
