import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map } from 'rxjs/operators';
import { FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { HealthCardService } from
'src/app/modules/health-card/services/health-card.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-health-card',
  templateUrl: './add-health-card.component.html',
  styleUrls: ['./add-health-card.component.scss']
})
export class AddHealthCardComponent implements OnInit {


  traineeId:number;
  fields: FieldConfig[] = [];

  constructor(
    private route: ActivatedRoute,
    private measurement : HealthCardService
    ) { }

  ngOnInit(): void {
    const form$ = this.route.queryParams
    .pipe(
      concatMap(params => {
        this.traineeId = +params.id;
        return this.measurement.getHealthMeasurements(this.traineeId);
      })
    )
    form$.pipe(
      map((value) => {
        const mapping =  Object.values(value).map(el => {
          return el
        });
        return mapping;
      })
    )
    .subscribe(response => {
      this.fields = response as FieldConfig[];
    })
  }

  submit(formValue: {[key:string]: any}) {
    const formatted_data = this.formatDateInputs(formValue);
    this.measurement.postHealthMeasurements(this.traineeId, formatted_data);
  }

  formatDateInputs(value: {[key:string]: any}){
    let output = {};
    Object.entries(value).forEach(
      ([key, value]) => {
        if( value instanceof Date ){
          value = moment(value).format('YYYY-MM-DD');
        }
        output[key] = value;
      }
    );
    return output;
  }

}
