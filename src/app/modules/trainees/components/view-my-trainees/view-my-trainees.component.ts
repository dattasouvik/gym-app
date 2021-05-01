import { Subscription } from 'rxjs';
import { ViewChild, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Pager } from 'src/app/models/pager.model';
import { TraineeResponse } from 'src/app/modules/trainees/model/trainee-response.model';
import { Trainee } from '../../model/trainee.model';
import { TraineesService } from '../../services/trainees.service';
import { APP_CONFIG, AppConfig } from 'src/app/modules/app-config/app-config.module';
import { TRAINEES_ACTION_LINKS } from '../../configs/trainees-links-config';
import { NavLinks } from 'src/app/models/nav-links.model';

@Component({
  selector: 'app-view-my-trainees',
  templateUrl: './view-my-trainees.component.html',
  styleUrls: ['./view-my-trainees.component.scss']
})
export class ViewMyTraineesComponent implements OnInit,OnDestroy {
  traineeData: Trainee[];
  pager: Pager;
  pageNumber = 0;
  private subscription: Subscription;

  links: NavLinks[] = TRAINEES_ACTION_LINKS;

  constructor(
    private traineesService: TraineesService,
    @Inject(APP_CONFIG) public config: AppConfig
  ) { }

  ngOnInit(): void {
    this.loadTrainees(this.pageNumber);
  }

  onChangedPage(pageData: PageEvent) {
    this.loadTrainees(pageData.pageIndex);
  }

  private  loadTrainees(page: number){
    this.subscription = this.traineesService.getTrainees(page)
      .subscribe((response: TraineeResponse) => {
        const {rows , pager } = response;
        this.traineeData = rows;
        this.pager = pager;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


