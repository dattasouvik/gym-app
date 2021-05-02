import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessTestRoutingModule } from './fitness-test-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { FormlyModule } from '@ngx-formly/core';
import { FitnessTestFormComponent } from 'src/app/modules/fitness-test/components/fitness-test-form/fitness-test-form.component';
import { FitnessTestReportsComponent } from 'src/app/modules/fitness-test/components/fitness-test-reports/fitness-test-reports.component';
import { FormlyGroupComponent } from 'src/app/modules/fitness-test/components/layout/formly-group/formly-group.component';
import { FormlyFieldTabsComponent } from './components/layout/formly-field-tabs/formly-field-tabs.component';
import { FitnessTestReportsAdminComponent } from './components/fitness-test-reports-admin/fitness-test-reports-admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FitnessTestDetailsComponent } from './components/fitness-test-details/fitness-test-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FitnessTestReportsComponent,
    FitnessTestFormComponent,
    FormlyGroupComponent,
    FormlyFieldTabsComponent,
    FitnessTestReportsAdminComponent,
    FitnessTestDetailsComponent
  ],
  imports: [
    CommonModule,
    FitnessTestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    FormlyMaterialModule,
    FlexLayoutModule,
    SharedModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'group', component: FormlyGroupComponent },
        { name: 'tabs', component: FormlyFieldTabsComponent },
      ],
    })
  ],
  exports:[
    FitnessTestReportsComponent
  ]
})
export class FitnessTestModule { }
