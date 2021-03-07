import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFoodChartComponent } from
'src/app/modules/user-food-chart/components/view-food-chart/view-food-chart.component';
import { PrescribeFoodChartComponent } from './components/prescribe-food-chart/prescribe-food-chart.component';
import { DynamicformModule } from 'src/app/modules/dynamicform/dynamicform.module';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';

@NgModule({
  declarations: [
    ViewFoodChartComponent,
    PrescribeFoodChartComponent
  ],
  imports: [
    CommonModule,
    DynamicformModule
  ],
  exports: [
    ViewFoodChartComponent,
    PrescribeFoodChartComponent
  ]
})
export class UserFoodChartModule { }
