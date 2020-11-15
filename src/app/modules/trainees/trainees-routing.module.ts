import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from 'src/app/modules/trainees/components/base/base.component';
import { TraineeSummaryComponent } from 'src/app/modules/trainees/components/trainee-summary/trainee-summary.component';
import { ViewMyTraineesComponent } from './components/view-my-trainees/view-my-trainees.component';

const routes: Routes = [
  { path: '',
    component: BaseComponent,
    children: [
      {
        path: 'details',
        component: ViewMyTraineesComponent,
      },
      {
        path: 'details/:id',
        component: TraineeSummaryComponent
      },
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineesRoutingModule {

}
