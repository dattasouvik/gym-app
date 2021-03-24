import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrFitnessTestComponent } from 'src/app/modules/trainee-reports/components/tr-fitness-test/tr-fitness-test.component';
import { TrFoodChartComponent } from 'src/app/modules/trainee-reports/components/tr-food-chart/tr-food-chart.component';
import { TrHeatlhChartComponent } from 'src/app/modules/trainee-reports/components/tr-heatlh-chart/tr-heatlh-chart.component';
import { TrWorkoutPlanComponent } from 'src/app/modules/trainee-reports/components/tr-workout-plan/tr-workout-plan.component';
import { TraineeReportsDashboardComponent }
from 'src/app/modules/trainee-reports/components/trainee-reports-dashboard/trainee-reports-dashboard.component';


const routes: Routes = [
  { path: 'reports',
    component: TraineeReportsDashboardComponent,
    children:[
      {
        path: 'health-report',
        component: TrHeatlhChartComponent
      },
      {
        path: 'food-chart',
        component: TrFoodChartComponent
      },
      {
        path: 'workout-routine',
        component: TrWorkoutPlanComponent
      },
      {
        path: 'fitness-test',
        component: TrFitnessTestComponent
      },
      {
        path: '',
        component: TrFoodChartComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'reports',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineeReportsRoutingModule { }
