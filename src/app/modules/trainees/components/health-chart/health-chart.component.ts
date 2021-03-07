import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { FieldConfig } from 'src/app/modules/dynamicform/field.interface';
import { AddHealthCardComponent } from
'src/app/modules/health-card/components/add-health-card/add-health-card.component';
import { HealthCardService } from 'src/app/modules/health-card/services/health-card.service';

@Component({
  selector: 'app-health-chart',
  templateUrl: './health-chart.component.html',
  styleUrls: ['./health-chart.component.scss'],
})
export class HealthChartComponent implements OnInit {

  traineeId: number;
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private measurement : HealthCardService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.traineeId = +params.id;
    })
  }

  addHealthMeasurements(userId: number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    const form$ = this.measurement.buildMeasurementsForm(userId)
    .pipe(
      map(value => {
        const mapping =  Object.values(value).map(el => {
          return el
        });
        return mapping;
      })
    )
    .subscribe(response => {
      const fields = response as FieldConfig[];
      dialogConfig.data = { userId , fields };
      const dialogRef = this.dialog.open(AddHealthCardComponent, dialogConfig);
    });
  }

}
