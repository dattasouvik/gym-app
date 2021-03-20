import { Subscription } from 'rxjs';
import { ViewChild, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Pager } from 'src/app/models/pager.model';
import { TraineeResponse } from 'src/app/modules/trainees/model/trainee-response.model';
import { Trainee } from '../../model/trainee.model';
import { TraineesService } from '../../services/trainees.service';
import { APP_CONFIG, AppConfig } from 'src/app/modules/app-config/app-config.module';

@Component({
  selector: 'app-view-my-trainees',
  templateUrl: './view-my-trainees.component.html',
  styleUrls: ['./view-my-trainees.component.scss']
})
export class ViewMyTraineesComponent implements OnInit,OnDestroy {
  traineeData: Trainee[];
  pager:Pager;
  pageNumber = 0;
  private subscription: Subscription;

  links = [
    {
      title: 'Attendance',
      url: 'attendance',
      icon: 'create'
    },
    {
      title: 'Prescribe',
      url: 'prescribe',
      icon: 'food_bank'
    },
    {
      title: 'Measurements',
      url: 'measuremets',
      icon: 'straighten'
    },
    {
      title: 'Workout Routine',
      url: 'routine',
      icon: 'accessibility'
    },
    {
      title: 'Fitness Reports',
      url: 'fitness',
      icon: 'accessibility'
    }
  ];

  constructor(
    private _getTrainees: TraineesService,
    @Inject(APP_CONFIG) public config: AppConfig
  ) { }

  ngOnInit(): void {
    this.loadTrainees(this.pageNumber);
  }

  onChangedPage(pageData: PageEvent) {
    this.loadTrainees(pageData.pageIndex);
  }

  private  loadTrainees(page: number){
    this.subscription = this._getTrainees.getTrainees(page)
      .subscribe((response:TraineeResponse) => {
        const {rows , pager } = response;
        this.traineeData = rows;
        this.pager = pager;
        console.log(rows)
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


