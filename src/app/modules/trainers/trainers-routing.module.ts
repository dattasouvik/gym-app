import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainersComponent } from
'src/app/modules/trainers/components/trainers/trainers.component';

const routes: Routes = [{ path: '', component: TrainersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersRoutingModule { }
