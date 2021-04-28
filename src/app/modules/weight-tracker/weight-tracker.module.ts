import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeightTrackerRoutingModule } from './weight-tracker-routing.module';
import { WeightTrackerFormComponent } from './components/weight-tracker-form/weight-tracker-form.component';
import { WeightTrackerReportsComponent } from './components/weight-tracker-reports/weight-tracker-reports.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { FormlyModule } from '@ngx-formly/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

@NgModule({
  declarations: [WeightTrackerFormComponent, WeightTrackerReportsComponent],
  imports: [
    CommonModule,
    WeightTrackerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    FormlyMaterialModule,
    FlexLayoutModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ]
    }),
    FormlyMatDatepickerModule
  ]
})
export class WeightTrackerModule { }
