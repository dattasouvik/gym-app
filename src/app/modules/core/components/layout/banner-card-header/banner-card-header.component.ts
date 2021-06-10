import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'core-banner-card-header',
  templateUrl: './banner-card-header.component.html',
  styleUrls: ['./banner-card-header.component.scss']
})
export class BannerCardHeaderComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  className = '';

  constructor() { }

  ngOnInit(): void {
  }

}
