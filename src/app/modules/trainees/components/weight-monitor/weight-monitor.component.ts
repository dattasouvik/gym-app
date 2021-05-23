import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostDirective } from 'src/app/modules/shared/directives/host.directive';
import { WeightTrackerService } from 'src/app/modules/weight-tracker/services/weight-tracker.service';

@Component({
  selector: 'app-weight-monitor',
  templateUrl: './weight-monitor.component.html',
  styleUrls: ['./weight-monitor.component.scss']
})
export class WeightMonitorComponent implements OnInit,OnDestroy {

  @ViewChild(HostDirective, { static: true })
  private reportsHost: HostDirective;

  private subscription: Subscription;
  private traineeId: number;

  constructor(
    private route: ActivatedRoute,
    private weightTrackerService: WeightTrackerService
  ) { }


  ngOnInit(): void {
    const viewContainerRef = this.reportsHost.viewContainerRef;
    this.subscription = this.route.params.subscribe(params => {
      this.traineeId = +params.id;
      this.weightTrackerService.loadWTReports(viewContainerRef, {
        isTrainer: true,
        uid: this.traineeId
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
