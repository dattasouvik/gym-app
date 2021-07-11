import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, map, mapTo, merge, repeat, share, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loggedin-user-home',
  templateUrl: './loggedin-user-home.component.html',
  styleUrls: ['./loggedin-user-home.component.scss']
})
export class LoggedinUserHomeComponent implements OnInit {

  ngOnInit() {}

}
