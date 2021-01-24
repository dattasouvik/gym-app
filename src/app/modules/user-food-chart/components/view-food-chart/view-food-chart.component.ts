import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewFoodChart } from 'src/app/modules/user-food-chart/models/view-food-chart.model';
import { FoodChartService } from 'src/app/modules/user-food-chart/services/food-chart.service';


@Component({
  selector: 'ufc-view-food-chart',
  templateUrl: './view-food-chart.component.html',
  styleUrls: ['./view-food-chart.component.scss']
})
export class ViewFoodChartComponent implements OnInit,OnDestroy  {

  foodChart:ViewFoodChart = null;
  private subscription:Subscription;

  constructor(
    public foodChartService: FoodChartService
  ) { }

  ngOnInit(): void {
    this.subscription = this.foodChartService.viewFoodChart()
    .pipe(
      map(data =>  data['food_chart'])
    )
    .subscribe(response => {
      this.foodChart = response;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
