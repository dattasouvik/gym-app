import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pager } from 'src/app/models/pager.model';
import { FitnessTestService } from 'src/app/modules/fitness-test/services/fitness-test.service';
import { Subscription } from 'rxjs';
import { TraineeFitnessReportDetailsResponse, TraineeFitnessReports, TraineeFitnessReportsResponse } from 'src/app/modules/fitness-test/models/fitness-test-response.model';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FitnessTestDetailsComponent } from 'src/app/modules/fitness-test/components/fitness-test-details/fitness-test-details.component';
@Component({
  selector: 'ft-fitness-test-reports',
  templateUrl: './fitness-test-reports.component.html',
  styleUrls: ['./fitness-test-reports.component.scss']
})
export class FitnessTestReportsComponent implements OnInit {

  reports: TraineeFitnessReports[];
  pager:Pager;
  pageNumber = 0;
  private subscription: Subscription;

  constructor(
    private fitnessTestService: FitnessTestService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.viewReports(this.pageNumber);
  }

  isReportReady(status){
    return +status > 0 ? true: false;
  }

  loadDetails(nid: number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";

    this.fitnessTestService.viewFitnessReportDetails(nid)
    .pipe(
      map((el:TraineeFitnessReportDetailsResponse) => el.rows)
    )
    .subscribe(response => {
      const details = Object.assign({}, response);
      dialogConfig.data = details[0];
      const dialogRef = this.dialog
      .open(
        FitnessTestDetailsComponent,
        dialogConfig
        );
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.viewReports(pageData.pageIndex);
  }

  private viewReports(page:number = 0){
    this.fitnessTestService.viewTraineeFitnessReports(page)
    .subscribe((response:TraineeFitnessReportsResponse) => {
        const {rows , pager } = response;
        this.reports = rows;
        this.pager = pager;
      });
  }
}
