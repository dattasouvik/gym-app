import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pager } from 'src/app/models/pager.model';
import { MonitorFitnessTestReport, MonitorFitnessTestReportResponse } from 'src/app/modules/fitness-test/models/fitness-test-response.model';
import { FitnessTestService } from 'src/app/modules/fitness-test/services/fitness-test.service';
import { FitnessTestFormMode, FitnessTestFormState } from
'src/app/modules/fitness-test/models/fitness-test-form.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-fitness-test-reports-admin',
  templateUrl: './fitness-test-reports-admin.component.html',
  styleUrls: ['./fitness-test-reports-admin.component.scss']
})
export class FitnessTestReportsAdminComponent implements OnInit {

  @Input()
  userId :number;

  reports: MonitorFitnessTestReport[];
  pager:Pager;
  pageNumber = 0;
  private subscription: Subscription;

  constructor(
    private fitnessTestService: FitnessTestService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadFitnessReports(this.userId, this.pageNumber);
  }

  onAdd(uid: number) {
    const routeInfo:FitnessTestFormState = {
      uid,
      mode:FitnessTestFormMode.ADD
    };
    this.router.navigateByUrl('/fitness-test/form',{
      state: routeInfo,
      skipLocationChange: true
    });
  }

  onEdit(uid: number, nid: number) {
    const routeInfo:FitnessTestFormState = {
      uid,
      mode:FitnessTestFormMode.EDIT,
      nid
    };
    this.router.navigateByUrl('/fitness-test/form',{
      state: routeInfo,
      skipLocationChange: true
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.loadFitnessReports(this.userId, pageData.pageIndex);
  }

  private  loadFitnessReports(userId: number, page: number){
    this.subscription = this.fitnessTestService.monitorFitnessReports(userId,page)
      .subscribe((response:MonitorFitnessTestReportResponse) => {
        const {rows , pager } = response;
        this.reports = rows;
        this.pager = pager;
      });
  }

}
