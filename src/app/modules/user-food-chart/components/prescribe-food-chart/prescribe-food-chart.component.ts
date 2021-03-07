import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { FoodChartService } from 'src/app/modules/user-food-chart/services/food-chart.service';
import { mapDynamicForm } from 'src/app/modules/user-food-chart/utils/form-utility';

@Component({
  selector: 'ufc-prescribe-food-chart',
  templateUrl: './prescribe-food-chart.component.html',
  styleUrls: ['./prescribe-food-chart.component.scss']
})
export class PrescribeFoodChartComponent implements OnInit {

  @Input()
  userId :number;

  formFields: FieldConfig[] = [];

  constructor(
    private foodChartService: FoodChartService
  ) { }

  ngOnInit(): void {
    this.buildFoodChart(this.userId);
  }

  private buildFoodChart(userId) {
    const form$ = this.foodChartService.loadFoodChartForm(userId)
    .pipe(
      map(response => {
        const mapping =  Object.values(response).map(el => {
          return el
        });
        return mapping;
      })
    )
    .subscribe( fields  =>
      this.formFields = fields as FieldConfig[]
    );
  }

  submit(prescribedChart: {[key:string]: any}) {
    const submittedData = mapDynamicForm(prescribedChart);
    this.foodChartService.saveFoodChart(this.userId, submittedData)
  }

}
