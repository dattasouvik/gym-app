import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DefaultImageTypes } from 'src/app/modules/default-image/directives/default-image-model.ts';
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

  public altProfileImage: DefaultImageTypes = DefaultImageTypes.PROFILE;

  hideContact = [];

  constructor() { }

  ngOnInit(): void {}

  onChangedPage(pageData: PageEvent) {
    this.hideContact = [];
    this.pageChange.emit(pageData);
  }

  triggerRating(trainer, currentPage){
    this.displayRating.emit({trainer, currentPage});
  }

}
