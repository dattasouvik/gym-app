import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { HealthChartDetails } from 'src/app/modules/health-card/models/health-chart-details.model';
import { HealthChartResponse } from 'src/app/modules/health-card/models/health-chart-response.model';
import { Pager } from 'src/app/models/pager.model';


/* https://dev.to/jwp/angular-material-table-in-20-minutes-15f4 */
/* https://robferguson.org/blog/2019/12/13/angular-material-table/ */
/* https://ultimatecourses.com/blog/the-missing-guide-to-angular-material */

@Component({
  selector: 'health-measuremets',
  templateUrl: './health-measuremets.component.html',
  styleUrls: ['./health-measuremets.component.scss']
})
export class HealthMeasuremetsComponent implements OnInit {

  private _measurementDataSource: MatTableDataSource<HealthChartDetails> =
  new MatTableDataSource<HealthChartDetails>();

  pager: Pager;

  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter();

  @Input() set data(data: HealthChartResponse) {
    if(!(data === null || data === undefined)) {
      // set data on data source to input accounts
      this._measurementDataSource.data = data.rows;
      this.pager = data.pager;
    }
  }

  get measurementDataSource(): MatTableDataSource<HealthChartDetails> {
    return this._measurementDataSource;
  }

  displayedColumns: string[];


  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = [
      'Date', 'Arms', 'Chest','Shoulders','Waist',
      'Tummy','Thigh','Calf','Hip','Weight'
      ];
  }
  onChangedPage(pageData: PageEvent) {
    this.pageChange.emit(pageData);
  }
}
