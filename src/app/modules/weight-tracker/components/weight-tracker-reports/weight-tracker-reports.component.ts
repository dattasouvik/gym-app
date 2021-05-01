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
  userId: number | null = null;

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
    this.loadweightTrackersList(this.isTrainer, this.pageNumber);
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
    const data: WeightTrackerFormState = {
      uid,
      mode: WeightTrackerFormMode.ADD
    };
    this.router.navigateByUrl('/weight-tracker/form',{
      state: data,
      skipLocationChange: true
    });
  }

  onEdit(uid: number, nid: number) {
    const data: WeightTrackerFormState = {
      uid,
      mode: WeightTrackerFormMode.EDIT,
      nid
    };
    console.log(data);
    this.router.navigateByUrl('/weight-tracker/form',{
      state: data,
      skipLocationChange: true
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.loadweightTrackersList(this.isTrainer, pageData.pageIndex);
  }


  private loadweightTrackersList( isTrainer: boolean, page: number) {
    if (!!isTrainer){
      this.subscription = this.weightTrackerService
      .weightTrackersListTrainerView(this.userId, page)
      .subscribe( (response: ListWeightTrackersResponse) => {
          const {rows , pager } = response;
          this.dataSource = rows;
          this.pager = pager;
      });
    } else{
      this.subscription = this.weightTrackerService
      .weightTrackersListTraineeView(page)
      .subscribe( (response: ListWeightTrackersResponse) => {
          const {rows , pager } = response;
          this.dataSource = rows;
          this.pager = pager;
      });
    }
  }
}
