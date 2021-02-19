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

@NgModule({
  declarations: [
    CreateWorkoutPlanComponent,
    FormlyFieldStepperComponent,
    FormlyRepeatSectionComponent,
    FormlyWrapperAddonsComponent,
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
    CreateWorkoutPlanComponent
  ]
})
export class WorkoutPlanModule { }
