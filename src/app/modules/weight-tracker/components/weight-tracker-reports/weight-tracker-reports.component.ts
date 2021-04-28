import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pager } from 'src/app/models/pager.model';
import { WeightTrackerFormMode, WeightTrackerFormState } from '../../models/weight-tracker-form.model';
import { ListWeightTrackers, ListWeightTrackersResponse } from '../../models/weight-tracker-response.model';
import { WeightTrackerService } from '../../services/weight-tracker.service';


@Component({
  selector: 'app-weight-tracker-reports',
  templateUrl: './weight-tracker-reports.component.html',
  styleUrls: ['./weight-tracker-reports.component.scss']
})

export class WeightTrackerReportsComponent implements OnInit {

  @Input()
  userId: number;

  @Input()
  isTrainer = false;

  columns: string[];
  dataSource: ListWeightTrackers[];
  pager: Pager;
  pageNumber = 0;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private weightTrackerService: WeightTrackerService
  ) { }

  ngOnInit(): void {
    this.columns = this.renderColumns(this.isTrainer);
    this.loadweightTrackersList(this.userId, this.pageNumber);
  }

  /*
  * Handle columns based on user role (Trainer | Member)
  */
 renderColumns(isTrainer: boolean): string[] {
   if (!!isTrainer){
     return [
      'field_weight_date', 'field_before_weight', 'field_after_weight', 'field_action'
    ];
   }
   return [
      'field_weight_date', 'field_before_weight', 'field_after_weight'
    ];
 }



  onAdd(uid: number) {
    const routeInfo: WeightTrackerFormState = {
      uid,
      mode: WeightTrackerFormMode.ADD
    };
    this.router.navigateByUrl('/weight-tracker/form',{
      state: routeInfo,
      skipLocationChange: true
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.loadweightTrackersList(this.userId, pageData.pageIndex);
  }


  private loadweightTrackersList(userId: number, page: number) {
    this.subscription = this.weightTrackerService
    .viewWeightTrackersList(userId, page)
    .subscribe( (response: ListWeightTrackersResponse) => {
        const {rows , pager } = response;
        this.dataSource = rows;
        this.pager = pager;
    });

  }
}
