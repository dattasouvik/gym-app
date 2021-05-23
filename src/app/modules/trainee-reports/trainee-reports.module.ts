import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeReportsRoutingModule } from './trainee-reports-routing.module';
import { TraineeReportsDashboardComponent } from './components/trainee-reports-dashboard/trainee-reports-dashboard.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { TrHeatlhChartComponent } from './components/tr-heatlh-chart/tr-heatlh-chart.component';
import { TrFoodChartComponent } from './components/tr-food-chart/tr-food-chart.component';
import { UserFoodChartModule } from 'src/app/modules/user-food-chart/user-food-chart.module';
import { HealthCardModule } from 'src/app/modules/health-card/health-card.module';
import { TrWorkoutPlanComponent } from './components/tr-workout-plan/tr-workout-plan.component';
import { WorkoutPlanModule } from 'src/app/modules/workout-plan/workout-plan.module';
import { TrFitnessTestComponent } from './components/tr-fitness-test/tr-fitness-test.component';
import { TrWeightMonitorComponent } from './components/tr-weight-monitor/tr-weight-monitor.component';


@NgModule({
  declarations: [
    TraineeReportsDashboardComponent,
    TrHeatlhChartComponent,
    TrFoodChartComponent,
    TrWorkoutPlanComponent,
    TrFitnessTestComponent,
    TrWeightMonitorComponent
  ],
  imports: [
    CommonModule,
    TraineeReportsRoutingModule,
    SharedModule,
    MaterialDesignModule,
    UserFoodChartModule,
    HealthCardModule,
    WorkoutPlanModule
  ]
})
export class TraineeReportsModule { }
