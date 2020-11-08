import { Component, OnInit } from '@angular/core';
import { TrainersStore } from 'src/app/modules/trainers/services/trainers.store';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  constructor(
    public trainersStore:TrainersStore
  ) { }

  ngOnInit(): void {
    this.trainersStore.loadMyTrainers();
  }

}
