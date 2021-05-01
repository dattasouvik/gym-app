import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tr-weight-monitor',
  templateUrl: './tr-weight-monitor.component.html',
  styleUrls: ['./tr-weight-monitor.component.scss']
})
export class TrWeightMonitorComponent implements OnInit {
  @ViewChild('weightTracker', { read: ViewContainerRef })
  private weightTrackerReportviewContainerRef: ViewContainerRef;

  constructor(
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.loadReportComponent();
  }

  /*
  * Renders Lazy Loading Components in ng-template
  */
  async loadReportComponent() {
    this.vcref.clear();
    const { WeightTrackerReportsComponent } = await
      import('../../../weight-tracker/components/weight-tracker-reports/weight-tracker-reports.component');
    const weightTrackerReportComp = this.weightTrackerReportviewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(WeightTrackerReportsComponent)
    );
  }

}
