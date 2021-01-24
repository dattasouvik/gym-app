import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health-chart',
  templateUrl: './health-chart.component.html',
  styleUrls: ['./health-chart.component.scss']
})
export class HealthChartComponent implements OnInit {

  traineeId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.traineeId = +params.id)
  }

}
