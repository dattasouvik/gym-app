import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'core-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input()
  activity: Activity;

  @Input()
  className = '';

  constructor() { }

  ngOnInit(): void {
  }

}
