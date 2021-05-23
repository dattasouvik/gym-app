import { Component, OnInit, ViewChild } from '@angular/core';
import { WeightTrackerService } from './../../../weight-tracker/services/weight-tracker.service';
import { HostDirective } from 'src/app/modules/shared/directives/host.directive';

@Component({
  selector: 'app-tr-weight-monitor',
  templateUrl: './tr-weight-monitor.component.html',
  styleUrls: ['./tr-weight-monitor.component.scss']
})
export class TrWeightMonitorComponent implements OnInit {

  @ViewChild(HostDirective, { static: true })
  private reportsHost: HostDirective;

  constructor(
    private weightTrackerService: WeightTrackerService
  ) { }

  ngOnInit(): void {
    const viewContainerRef = this.reportsHost.viewContainerRef;
    this.weightTrackerService.loadWTReports(viewContainerRef);
  }

}
