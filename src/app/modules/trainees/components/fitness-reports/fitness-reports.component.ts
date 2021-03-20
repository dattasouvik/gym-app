import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fitness-reports',
  templateUrl: './fitness-reports.component.html',
  styleUrls: ['./fitness-reports.component.scss']
})
export class FitnessReportsComponent implements OnInit {
  @ViewChild('fitnessReport', { read: ViewContainerRef })
  private fitnessReportviewContainerRef: ViewContainerRef;

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
    })
  }

  /*
  * Renders Lazy Loading Components in ng-template
  */
  async loadReportComponent(uid: number){
    this.vcref.clear();
    const { FitnessTestReportsAdminComponent } = await
    import('../../../fitness-test/components/fitness-test-reports-admin/fitness-test-reports-admin.component');
    let fitnessReportComp = this.fitnessReportviewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(FitnessTestReportsAdminComponent)
    );
    fitnessReportComp.instance.userId = uid;
  }

}
