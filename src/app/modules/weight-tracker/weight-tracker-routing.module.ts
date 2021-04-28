import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeightTrackerFormComponent } from './components/weight-tracker-form/weight-tracker-form.component';

const routes: Routes = [
  { path: 'form', component: WeightTrackerFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeightTrackerRoutingModule { }
