import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHealthCardComponent } from 'src/app/modules/health-card/components/add-health-card/add-health-card.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddHealthCardComponent
  },
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCardRoutingModule { }
