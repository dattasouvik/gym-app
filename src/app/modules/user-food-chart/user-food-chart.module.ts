import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFoodChartRoutingModule } from './user-food-chart-routing.module';
import { ViewFoodChartComponent } from
'src/app/modules/user-food-chart/components/view-food-chart/view-food-chart.component';

@NgModule({
  declarations: [
    ViewFoodChartComponent
  ],
  imports: [
    CommonModule,
    UserFoodChartRoutingModule
  ],
  exports: [
    ViewFoodChartComponent
  ]
})
export class UserFoodChartModule { }
