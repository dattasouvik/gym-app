import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeReportsRoutingModule }
from './trainee-reports-routing.module';
import { TraineeReportsDashboardComponent }
from './components/trainee-reports-dashboard/trainee-reports-dashboard.component';
import { MaterialDesignModule }
from 'src/app/modules/material-design/material-design.module';
import { TrHeatlhChartComponent }
from './components/tr-heatlh-chart/tr-heatlh-chart.component';
import { TrFoodChartComponent }
from './components/tr-food-chart/tr-food-chart.component';
import { UserFoodChartModule }
from 'src/app/modules/user-food-chart/user-food-chart.module';
import { HealthCardModule } from 'src/app/modules/health-card/health-card.module';
import { TrWorkoutPlanComponent } from './components/tr-workout-plan/tr-workout-plan.component';
import { WorkoutPlanModule } from 'src/app/modules/workout-plan/workout-plan.module';


@NgModule({
  declarations: [
    TraineeReportsDashboardComponent,
    TrHeatlhChartComponent,
    TrFoodChartComponent,
    TrWorkoutPlanComponent
  ],
  imports: [
    CommonModule,
    TraineeReportsRoutingModule,
    MaterialDesignModule,
    UserFoodChartModule,
    HealthCardModule,
    WorkoutPlanModule
  ]
})
export class TraineeReportsModule { }
