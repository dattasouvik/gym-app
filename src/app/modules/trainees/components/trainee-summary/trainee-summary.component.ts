import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-trainee-summary',
  templateUrl: './trainee-summary.component.html',
  styleUrls: ['./trainee-summary.component.scss']
})
export class TraineeSummaryComponent implements OnInit {
  id: number;
  subscription: Subscription

  links = [
    {
      title: 'Attendance',
      url: 'attendance'
    },
    {
      title: 'Prescibe',
      url: 'prescribe'
    },
    {
      title: 'Measurements',
      url: 'measuremets'
    },
    {
      title: 'Workout Routine',
      url: 'routine'
    },
    {
      title: 'Fitness Test',
      url: 'fitness'
    },
    {
      title: 'Weight Tracker',
      url: 'weight-monitor'
    },
  ];

  constructor() { }


  ngOnInit(): void {}
}
