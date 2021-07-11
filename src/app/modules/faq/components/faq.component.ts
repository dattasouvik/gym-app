import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {
  // Ref: https://www.freakyjolly.com/angular-material-expansion-panel-accordion-in-angular-project-using-material/

  search$ = new Subject<string>();


  panelOpenState = false;
  accordionList: any = [];

  data = [
      {
        id: 'panel-1',
        title: 'Panel One',
        description: 'Description One',
        isDisabled: false,
        isExpanded: false
      }, {
        id: 'panel-2',
        title: 'Panel Two (Disabled)',
        description: 'Description Two',
        isDisabled: false,
        isExpanded: false
      }, {
        id: 'panel-3',
        title: 'Panel Three',
        description: 'Description Three',
        isDisabled: false,
        isExpanded: false
      },
    ];

  faq$ = new BehaviorSubject<any[]>(this.data);
  private isAlive = true;
  step = 0;

  @ViewChild('accordion') accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
    combineLatest([this.search$, this.faq$])
      .pipe(takeWhile(() => this.isAlive = true)).subscribe(data => {
        const search = data[0];
        const videos = data[1];
        if (!search) {
          this.accordionList = videos;
        } else {
          this.accordionList = videos.filter((video) => video.title.toLowerCase()
            .indexOf(search.toLowerCase()) !== -1);
        }
      });
  }

  beforePanelClosed(panel) {
    panel.isExpanded = false;
    console.log('Panel going to close!');
  }
  beforePanelOpened(panel, index) {
    this.setStep(index);
    panel.isExpanded = true;
    console.log('Panel going to  open!');
  }

  afterPanelClosed($event) {
    console.log('Panel closed!');
  }
  afterPanelOpened($event) {
    console.log('Panel opened!');
  }


  closeAllPanels() {
    this.accordion.closeAll();
  }
  openAllPanels() {
    this.accordion.openAll();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    console.log("Clicked", this.step);
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  filterAccordionList(event){
    console.log("Searched", event);
  }


  ngOnDestroy() {
    this.isAlive = false;
  }

}
