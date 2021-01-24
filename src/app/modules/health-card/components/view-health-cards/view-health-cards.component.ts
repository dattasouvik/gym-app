import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HealthChartResponse } from 'src/app/modules/health-card/models/health-chart-response.model';
import { HealthCardService } from 'src/app/modules/health-card/services/health-card.service';

@Component({
  selector: 'hc-view-health-cards',
  templateUrl: './view-health-cards.component.html',
  styleUrls: ['./view-health-cards.component.scss']
})
export class ViewHealthCardsComponent implements OnInit {

  @Input()
  userId :number;

  details:HealthChartResponse;

  constructor(private measurement: HealthCardService) { }

  ngOnInit(): void {
    this.getHealthChart();
  }

  onPageChange(pageData : PageEvent) {
    this.getHealthChart(pageData.pageIndex);
  }

  private getHealthChart(page:number = 0 ):void {
    this.measurement.viewHealthChartDetails(this.userId, page)
    .subscribe(response => {
      this.details = response;
    })
  }

}
