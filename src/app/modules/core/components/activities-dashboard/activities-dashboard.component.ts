import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { CoreService } from './../../services/core.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'core-activities-dashboard',
  templateUrl: './activities-dashboard.component.html',
  styleUrls: ['./activities-dashboard.component.scss']
})
export class ActivitiesDashboardComponent implements OnInit {
  @Input()
  title = 'Build Your Body Transform Your Life';

  activities: Activity[];

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.activities = this.coreService.getAllActivities();
  }

}
