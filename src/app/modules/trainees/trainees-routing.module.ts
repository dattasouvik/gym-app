import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from 'src/app/modules/trainees/components/base/base.component';
import { HealthChartComponent }
from 'src/app/modules/trainees/components/health-chart/health-chart.component';
import { TraineeSummaryComponent } from 'src/app/modules/trainees/components/trainee-summary/trainee-summary.component';
import { WorkoutRoutineComponent } from 'src/app/modules/trainees/components/workout-routine/workout-routine.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { PrescribeComponent } from './components/prescribe/prescribe.component';
import { ViewMyTraineesComponent } from './components/view-my-trainees/view-my-trainees.component';

// const routes: Routes = [
//   { path: '',
//     component: BaseComponent,
//     children: [
//       {
//         path: 'details',
//         component: ViewMyTraineesComponent,
//       },
//       {
//         path: 'details/:id',
//         component: TraineeSummaryComponent
//       },
//       {
//         path: '',
//         redirectTo: 'details',
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: "",
    component: ViewMyTraineesComponent
  },
  {
    path: ":id",
    component: TraineeSummaryComponent,
    children: [
      {
        path: 'attendance',
        component: AttendanceComponent
      },
      {
        path: 'prescribe',
        component: PrescribeComponent
      },
      {
        path: 'measuremets',
        component: HealthChartComponent
      },
      {
        path: 'routine',
        component: WorkoutRoutineComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineesRoutingModule {

}
