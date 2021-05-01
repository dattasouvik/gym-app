import { Component, OnInit } from '@angular/core';
import { NavLinks } from 'src/app/models/nav-links.model';
import { TRAINEES_ACTION_LINKS } from '../../configs/trainees-links-config';
@Component({
  selector: 'app-trainee-summary',
  templateUrl: './trainee-summary.component.html',
  styleUrls: ['./trainee-summary.component.scss']
})
export class TraineeSummaryComponent implements OnInit {
  id: number;
  links: NavLinks[] = TRAINEES_ACTION_LINKS;

  constructor() { }


  ngOnInit(): void {}
}
