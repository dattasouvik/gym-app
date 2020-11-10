import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Trainer } from 'src/app/modules/trainers/model/trainer.model';
import { TrainerResponse, TrainersStore } from 'src/app/modules/trainers/services/trainers.store';

@Component({
  selector: 'view-my-trainers',
  templateUrl: './view-my-trainers.component.html',
  styleUrls: ['./view-my-trainers.component.scss']
})
export class ViewMyTrainersComponent implements OnInit {

  @Input() trainers: TrainerResponse;
  hideContact=[];

  /* Mat-table setings */
  displayedColumns: string[] = ['first_name','last_name','email','phone'];
  /* Paginator setings */
  // totalUsers = 0;
  // usersPerPage = 1;
  // currentPage = 1;
  // pageSizeOptions = [1, 2, 5, 10];
  constructor(private trainersStore:TrainersStore) { }

  ngOnInit(): void {
  }

  onChangedPage(pageData: PageEvent) {
    this.trainersStore.loadMyTrainers(pageData.pageIndex);
  }

}
