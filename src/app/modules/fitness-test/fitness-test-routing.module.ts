import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessTestFormComponent } from 
'src/app/modules/fitness-test/components/fitness-test-form/fitness-test-form.component';

const routes: Routes = [
  {
    path: 'form', component: FitnessTestFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessTestRoutingModule { }
