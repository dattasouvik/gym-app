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
import { DynamicformModule } from '../dynamicform/dynamicform.module';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { PrescribeComponent } from './components/prescribe/prescribe.component';
import { HealthChartComponent } from './components/health-chart/health-chart.component';
import { HealthCardModule } from 'src/app/modules/health-card/health-card.module';
import { WorkoutPlanModule } from 'src/app/modules/workout-plan/workout-plan.module';
import { WorkoutRoutineComponent } from './components/workout-routine/workout-routine.component';
import { UserFoodChartModule } from 'src/app/modules/user-food-chart/user-food-chart.module';
import { FitnessReportsComponent } from './components/fitness-reports/fitness-reports.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { WeightMonitorComponent } from './components/weight-monitor/weight-monitor.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewMyTraineesComponent,
    TraineeSummaryComponent,
    BaseComponent,
    AttendanceComponent,
    PrescribeComponent,
    HealthChartComponent,
    WorkoutRoutineComponent,
    FitnessReportsComponent,
    WeightMonitorComponent
  ],
  imports: [
    CommonModule,
    TraineesRoutingModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialDesignModule,
    UserAttendanceModule,
    DynamicformModule,
    HealthCardModule,
    WorkoutPlanModule,
    UserFoodChartModule
  ],
  providers: [TraineesService]
})
export class TraineesModule { }
