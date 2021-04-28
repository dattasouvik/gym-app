import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weight-monitor',
  templateUrl: './weight-monitor.component.html',
  styleUrls: ['./weight-monitor.component.scss']
})
export class WeightMonitorComponent implements OnInit {
  @ViewChild('weightTracker', { read: ViewContainerRef })
  private weightTrackerReportviewContainerRef: ViewContainerRef;

  traineeId: number;

  constructor(
    private route: ActivatedRoute,
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.traineeId = +params.id;
      this.loadReportComponent(this.traineeId);
    });
  }

  /*
  * Renders Lazy Loading Components in ng-template
  */
  async loadReportComponent(uid: number) {
    this.vcref.clear();
    const { WeightTrackerReportsComponent } = await
      import('../../../weight-tracker/components/weight-tracker-reports/weight-tracker-reports.component');
    const weightTrackerReportComp = this.weightTrackerReportviewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(WeightTrackerReportsComponent)
    );
    weightTrackerReportComp.instance.userId = uid;
    weightTrackerReportComp.instance.isTrainer = true;
  }

}
