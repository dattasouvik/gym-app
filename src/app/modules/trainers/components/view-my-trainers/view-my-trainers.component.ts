import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { APP_CONFIG, AppConfig } from 'src/app/modules/app-config/app-config.module';
import { UserRatingEvent } from 'src/app/modules/trainers/model/rating-event.model';
import { TrainerResponse } from 'src/app/modules/trainers/model/trainer-response.model';

@Component({
  selector: 'view-my-trainers',
  templateUrl: './view-my-trainers.component.html',
  styleUrls: ['./view-my-trainers.component.scss']
})
export class ViewMyTrainersComponent implements OnInit {

  @Input() trainers: TrainerResponse;
  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter();
  @Output() displayRating: EventEmitter<UserRatingEvent> = new EventEmitter();

  hideContact=[];

  constructor(@Inject(APP_CONFIG) public config: AppConfig) { }

  ngOnInit(): void {}

  onChangedPage(pageData: PageEvent) {
    this.hideContact = [];
    this.pageChange.emit(pageData);
  }

  triggerRating(trainer, currentPage){
    this.displayRating.emit({trainer, currentPage});
  }

}
