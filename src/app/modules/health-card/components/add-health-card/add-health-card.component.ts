import { Component, Inject, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { HealthCardService } from
'src/app/modules/health-card/services/health-card.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';

interface DialogData {
  userId:number;
  fields:FieldConfig[]
}

@Component({
  selector: 'app-add-health-card',
  templateUrl: './add-health-card.component.html',
  styleUrls: ['./add-health-card.component.scss'],
})
export class AddHealthCardComponent implements OnInit {

  traineeId:number;
  fields: FieldConfig[];

  constructor(
    private router:Router,
    private measurement : HealthCardService,
    private dialogRef: MatDialogRef<AddHealthCardComponent>,
    @Inject(MAT_DIALOG_DATA) data:DialogData,
    private apiHandlerService: ApiHandlerService
    ) {
      this.traineeId = + data.userId;
      this.fields = data.fields;
    }

  ngOnInit(): void {}

  submit(formValue: {[key:string]: any}) {
    const formatted_data = this.formatDateInputs(formValue);
    this.measurement.addMeasurements(this.traineeId, formatted_data)
    .subscribe(success => {
      this.apiHandlerService.onApiSuccessMessage(success)
      this.close();
      this.router.navigateByUrl('/trainees');
    });
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

  close() {
    this.dialogRef.close();
  }
}
