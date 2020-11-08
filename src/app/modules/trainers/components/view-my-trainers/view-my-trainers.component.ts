import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Trainer } from 'src/app/modules/trainers/model/trainer.model';

@Component({
  selector: 'view-my-trainers',
  templateUrl: './view-my-trainers.component.html',
  styleUrls: ['./view-my-trainers.component.scss']
})
export class ViewMyTrainersComponent implements OnInit {

  @Input() trainers: Trainer[];
  /* Mat-table setings */
  displayedColumns: string[] = ['first_name','last_name','email','phone'];
  /* Paginator setings */
  totalUsers = 0;
  usersPerPage = 1;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  constructor() { }

  ngOnInit(): void {
  }

  onChangedPage(pageData: PageEvent) {
    console.log(pageData);
  }

}
