import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TrainerResponse } from 'src/app/modules/trainers/model/trainer-response.model';

@Component({
  selector: 'view-my-trainers',
  templateUrl: './view-my-trainers.component.html',
  styleUrls: ['./view-my-trainers.component.scss']
})
export class ViewMyTrainersComponent implements OnInit {

  @Input() trainers: TrainerResponse;
  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter();

  hideContact=[];

  constructor() { }

  ngOnInit(): void {
  }

  onChangedPage(pageData: PageEvent) {
    this.hideContact = [];
    this.pageChange.emit(pageData);
  }

}
