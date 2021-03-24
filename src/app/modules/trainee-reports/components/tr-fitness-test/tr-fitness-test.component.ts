import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tr-fitness-test',
  templateUrl: './tr-fitness-test.component.html',
  styleUrls: ['./tr-fitness-test.component.scss']
})
export class TrFitnessTestComponent implements OnInit {

  @ViewChild('fitnessReport', { read: ViewContainerRef })
  private fitnessReportviewContainerRef: ViewContainerRef;

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
    async loadReportComponent(){
      this.vcref.clear();
      const { FitnessTestReportsComponent } = await
      import('../../../fitness-test/components/fitness-test-reports/fitness-test-reports.component');
      let fitnessReportComp = this.fitnessReportviewContainerRef.createComponent(
        this.cfr.resolveComponentFactory(FitnessTestReportsComponent)
      );
    }

}
