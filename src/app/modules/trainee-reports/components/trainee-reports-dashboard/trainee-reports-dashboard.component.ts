import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainee-reports-dashboard',
  templateUrl: './trainee-reports-dashboard.component.html',
  styleUrls: ['./trainee-reports-dashboard.component.scss']
})
export class TraineeReportsDashboardComponent implements OnInit {

  links = [
    {
      title: 'Health Report',
      url: 'health-report'
    },
    {
      title: 'Food Chart',
      url: 'food-chart'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
