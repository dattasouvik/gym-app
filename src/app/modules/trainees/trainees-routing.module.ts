import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMyTraineesComponent } from './components/view-my-trainees/view-my-trainees.component';

const routes: Routes = [{ path: '', component: ViewMyTraineesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineesRoutingModule { 

}
