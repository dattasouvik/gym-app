import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineesRoutingModule } from './trainees-routing.module';
import { ViewMyTraineesComponent } from './components/view-my-trainees/view-my-trainees.component';
// import { MaterialImportsModule } from 'src/app/material-imports/material-imports.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { TraineesService } from './services/trainees.service';
import { TraineeSummaryComponent } from './components/trainee-summary/trainee-summary.component';
import { BaseComponent } from './components/base/base.component';
import { UserAttendanceModule } from 'src/app/modules/user-attendance/user-attendance.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ViewMyTraineesComponent, TraineeSummaryComponent, BaseComponent],
  imports: [
    CommonModule,
    TraineesRoutingModule,
    FlexLayoutModule,
    MaterialDesignModule,
    UserAttendanceModule
  ],
  providers: [TraineesService]
})
export class TraineesModule { }
