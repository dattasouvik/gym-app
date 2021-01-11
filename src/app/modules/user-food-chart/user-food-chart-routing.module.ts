import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFoodChartComponent } 
from 'src/app/modules/user-food-chart/components/view-food-chart/view-food-chart.component';


const routes: Routes = [
  { 
    path: '', 
    component: ViewFoodChartComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFoodChartRoutingModule { }
